"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Role = "admin" | "cadet";

type User = {
  name: string;
  role: Role;
};

type AuthContextType = {
  user: User;
  setRole: (role: Role) => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>({
    name: "Admin",
    role: "admin",
  });

  // 🔁 Load role from localStorage on first render
  useEffect(() => {
    const storedRole = localStorage.getItem("role") as Role | null;

    if (storedRole) {
      setUser((prev) => ({
        ...prev,
        role: storedRole,
      }));
    }
  }, []);

  // 💾 Save role to localStorage whenever it changes
  function setRole(role: Role) {
    localStorage.setItem("role", role);

    setUser((prev) => ({
      ...prev,
      role,
    }));
  }

  return (
    <AuthContext.Provider value={{ user, setRole }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}