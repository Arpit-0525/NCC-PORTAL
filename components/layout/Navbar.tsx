"use client";

import { Search } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const { user, setRole } = useAuth();
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-10">

      {/* Left Section */}
      <div className="flex items-center gap-4">
        <div className="flex gap-2 mr-2">
  <button
    onClick={() => setRole("admin")}
    className={`text-xs px-2 py-1 rounded ${
      user.role === "admin"
        ? "bg-blue-600 text-white"
        : "bg-gray-200 text-gray-700"
    }`}
  >
    Admin
  </button>

  <button
    onClick={() => setRole("cadet")}
    className={`text-xs px-2 py-1 rounded ${
      user.role === "cadet"
        ? "bg-blue-600 text-white"
        : "bg-gray-200 text-gray-700"
    }`}
  >
    Cadet
  </button>
</div>

        {/* Page Title (optional dynamic later) */}
        <h2 className="text-sm font-semibold text-gray-800">
          NCC Management System
        </h2>

      </div>

      {/* Center - Search */}
      <div className="hidden md:flex items-center relative w-80">

        <Search className="absolute left-3 w-4 h-4 text-gray-400" />

        <input
          type="text"
          placeholder="Search cadets, activities..."
          className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />

      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">

        {/* Notification placeholder */}
        <button className="relative p-2 rounded-lg hover:bg-gray-100 transition">
          <span className="w-2 h-2 bg-red-500 rounded-full absolute top-1 right-1"></span>
          <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-lg transition">

          {/* Avatar */}
          <div className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded-full text-sm font-medium">
            A
          </div>

          {/* User Info */}
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-gray-800">
              Admin
            </p>
            <p className="text-xs text-gray-500">
              Administrator
            </p>
          </div>

        </div>

      </div>
    </header>
  );
}