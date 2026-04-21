"use client";

import { useState } from "react";

export default function Navbar() {
  const [role, setRole] = useState<"admin" | "cadet">("admin");

  return (
    <div className="w-full bg-white shadow p-4 flex justify-between items-center">
      <h2 className="text-xl font-semibold">NCC Dashboard</h2>

      <div>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value as any)}
          className="border px-3 py-1 rounded"
        >
          <option value="admin">Admin</option>
          <option value="cadet">Cadet</option>
        </select>
      </div>
    </div>
  );
}