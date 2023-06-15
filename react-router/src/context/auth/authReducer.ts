export interface User {
  id: number;
  name: string;
}

type Action = { type: "LOGIN"; payload: User } | { type: "LOGOUT" };

export interface State {
  status: "auth" | "non-auth";
  user: User | undefined;
}

export const initialState: State = {
  status: "non-auth",
  user: undefined,
};

export const authReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "LOGIN": {
      return { ...state, status: "auth", user: action.payload };
    }

    case "LOGOUT": {
      return { ...state, status: "non-auth", user: undefined };
    }

    default: {
      return state;
    }
  }
};
