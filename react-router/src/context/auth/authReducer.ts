export interface User {
  id: number;
  name: string;
}

type Action =
  | { type: "LOGIN"; payload: { access: string; refresh: string } }
  | { type: "SET_USER"; payload: any }
  | { type: "LOGOUT" };

export interface State {
  status: "auth" | "non-auth";
  user: User | undefined;
  accessToken?: string;
  refreshToken?: string;
}

export const initialState: State = {
  status: "non-auth",
  user: undefined,
};

export const authReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "LOGIN": {
      return {
        ...state,
        status: "auth",
        accessToken: action.payload.access,
        refreshToken: action.payload.refresh,
      };
    }

    case "LOGOUT": {
      return initialState;
    }

    case "SET_USER": {
      return { ...state, user: action.payload };
    }

    default: {
      return state;
    }
  }
};
