import { useEffect } from "react";
import { axiosInstance } from "../utils/axios-instance";
import { useAuthContext } from "../context/auth/AuthContext";

const Dashboard = () => {
  const { user, setUser } = useAuthContext();
  useEffect(() => {
    (async () => {
      if (!user) {
        try {
          const resp = await axiosInstance.get(`/users/me/`);
          setUser(resp.data);
        } catch (e) {
          console.error(e);
        }
      }
    })();
  }, [user]);

  return (
    <div>
      <h2>Dashboard</h2>
      {JSON.stringify(user)}
    </div>
  );
};

export default Dashboard;
