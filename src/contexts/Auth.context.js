import React, { useState, useContext, useEffect, memo } from "react";
import Router, { useRouter } from "next/router";

import api from "services/axios";

const AuthContext = React.createContext({});

function AuthProvider({ children }) {
  console.log("authprovider chay");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("useEffect chay");
    async function loadUserFromCookies() {
      const user = localStorage.getItem("userInfo");
      if (user) setUser(JSON.parse(user));
      //Use can check user by request to server with autocookie send in request

      setLoading(false);
    }
    loadUserFromCookies();
    return () => console.log("re-mount auth contexnt");
  }, []);

  const login = async (email, password) => {
    try {
      const {
        data: { user },
      } = await api.post("api/auth/login", { email, password });
      if (user) {
        localStorage.setItem("userInfo", JSON.stringify(user));
        await setUser(user);
        await Router.push("/admin");
      }
    } catch (err) {
      return console.error(err.response);
    }
  };

  const logout = async () => {
    localStorage.removeItem("userInfo");
    await api.post("auth/logout");
    setUser(null);
    await Router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  useContext(AuthContext);
}

function ProtectRoute({ children }) {
  const { isAuthenticated } = useContext(AuthContext);  
  if (!isAuthenticated) {
    if (typeof window !== "undefined") Router.push("/login");
    return <h1>Loading</h1>;
  }
  return children;
}

export { AuthContext, AuthProvider, useAuth, ProtectRoute };
