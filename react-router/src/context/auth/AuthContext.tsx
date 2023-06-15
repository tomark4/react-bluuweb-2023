import { createContext, useContext, useEffect, useReducer } from "react";
import { User, authReducer, initialState } from "./authReducer";

const fakeLogin = (): Promise<User> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "joseph",
      });
    }, 3000);
  });
};

interface AuthContextI {
  status: "auth" | "non-auth";
  user: User | undefined;
  login: (email: string, password: string) => void;
  logout: () => void;
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

  const login = async (email: string, password: string) => {
    console.log(email, password);
    const user = await fakeLogin();
    dispatch({ type: "LOGIN", payload: user });
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuthContext = () => useContext(AuthContext);
