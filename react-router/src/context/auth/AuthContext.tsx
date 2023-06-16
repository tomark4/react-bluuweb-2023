import { createContext, useContext, useEffect, useReducer } from "react";
import { User, authReducer, initialState } from "./authReducer";
import { axiosInstance } from "../../utils/axios-instance";

interface AuthContextI {
  status: "auth" | "non-auth";
  user: User | undefined;
  login: (email: string, password: string) => void;
  logout: () => void;
  setUser: (payload: any) => void;
  accessToken?: string;
  refreshToken?: string;
}

export const AuthContext = createContext({} as AuthContextI);

const AuthProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(
    authReducer,
    "@state" in localStorage
      ? JSON.parse(localStorage.getItem("@state") || "{}")
      : initialState
  );

  useEffect(() => {
    localStorage.setItem("@state", JSON.stringify(state));
  }, [state]);

  const login = async (username: string, password: string) => {
    const resp = await axiosInstance.post(`/token/`, { username, password });
    await dispatch({ type: "LOGIN", payload: resp.data });
  };

  const setUser = async (payload: any) => {
    dispatch({ type: "SET_USER", payload });
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuthContext = () => useContext(AuthContext);
