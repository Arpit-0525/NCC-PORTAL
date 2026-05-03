"use client";

import { cadets } from "@/data/cadets";
import { maskAadhaar, maskBank } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

export default function CadetsPage() {
  const router = useRouter();
  const { user } = useAuth();
  const isAdmin = user.role === "admin";

  const [query, setQuery] = useState("");

  const filteredCadets = cadets.filter((c) =>
    c.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">

      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Cadets
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage and view cadet records
          </p>
        </div>

        {isAdmin && (
          <button className="btn btn-primary">
            + Add Cadet
          </button>
        )}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between gap-4">
        <input
          type="text"
          placeholder="Search cadets..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-72 border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="text-sm text-gray-600">
          Total: {filteredCadets.length}
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">

        <table className="min-w-full text-sm">

          {/* Header */}
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs tracking-wide">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Parent</th>
              <th className="p-3 text-left">Phone</th>
              <th className="p-3 text-left">Blood</th>
              <th className="p-3 text-left">Aadhaar</th>
              <th className="p-3 text-left">Bank</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {filteredCadets.map((cadet) => (
              <tr
                key={cadet.id}
                onClick={() => router.push(`/cadets/${cadet.id}`)}
                className="border-t hover:bg-gray-50 cursor-pointer transition"
              >
                <td className="p-3 font-medium text-gray-900">
                  {cadet.name}
                </td>

                <td className="p-3 text-gray-600">
                  {cadet.parentName}
                </td>

                <td className="p-3 text-gray-600">
                  {cadet.phone}
                </td>

                <td className="p-3">
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                    {cadet.bloodGroup}
                  </span>
                </td>

                <td className="p-3 text-gray-500 font-mono">
                  {maskAadhaar(cadet.aadhaar)}
                </td>

                <td className="p-3 text-gray-500 font-mono">
                  {maskBank(cadet.bankAccount)}
                </td>
              </tr>
            ))}
          </tbody>

        </table>

        {/* Empty State */}
        {filteredCadets.length === 0 && (
          <div className="p-6 text-center text-gray-500 text-sm">
            No cadets found
          </div>
        )}
      </div>

    </div>
  );
}