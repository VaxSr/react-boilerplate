import { createContext } from "react";

type AuthContextT = {
  isAuthenticated: boolean;
  login: (userToken: string) => void;
  logout: () => void;
  getToken: () => string | null;
};

const AuthContext = createContext<AuthContextT>({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
  getToken: () => null,
});

export default AuthContext;
