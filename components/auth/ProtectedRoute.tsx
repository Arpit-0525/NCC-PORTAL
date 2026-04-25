"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({
  children,
  allowedRole,
}: {
  children: React.ReactNode;
  allowedRole: "admin" | "cadet";
}) {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user.role !== allowedRole) {
      router.replace("/dashboard"); // redirect if not allowed
    }
  }, [user.role, allowedRole, router]);

  // Prevent flicker
  if (user.role !== allowedRole) return null;

  return <>{children}</>;
}