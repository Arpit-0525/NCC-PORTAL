"use client";

import { createContext, useContext, useState } from "react";
import { User } from "@/types/auth";

type AuthContextType = {
  user: User;
  setRole: (role: "admin" | "cadet") => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>({
    name: "Admin",
    role: "admin",
  });

  function setRole(role: "admin" | "cadet") {
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