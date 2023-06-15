import { createContext, useReducer } from "react";

type Action = { type: "LOGIN"; payload: any };

interface State {
  status: "auth" | "non-auth";
  user: any;
}

const initialState: State = {
  status: "non-auth",
  user: undefined,
};

export const authReducer = (state: State, action: Action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export const AuthContext = createContext({} as any);

const AuthProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  return (
    <AuthContext.Provider value={{ ...state }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
