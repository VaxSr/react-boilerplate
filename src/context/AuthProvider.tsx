import { type PropsWithChildren, useState } from "react";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [token, setToken] = useState<string | null>(null);

  const login = (userToken: string) => {
    localStorage.setItem("token", userToken);
    setToken(userToken);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  const getToken = () => {
    return localStorage.getItem("token");
  };

  const isAuthenticated = !!token;

  return (
    <AuthContext value={{ isAuthenticated, login, logout, getToken }}>
      {children}
    </AuthContext>
  );
};

export default AuthProvider;
