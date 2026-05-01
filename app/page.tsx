"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-4 border-b border-gray-200">
        <h1 className="text-lg font-semibold text-gray-900">
          NCC Portal
        </h1>

        <button
          onClick={() => router.push("/dashboard")}
          className="btn btn-primary"
        >
          Go to Dashboard
        </button>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20">

        <h2 className="text-4xl font-bold text-gray-900 max-w-2xl leading-tight">
          Manage Your NCC Company Efficiently
        </h2>

        <p className="text-gray-500 mt-4 max-w-xl">
          Track cadets, attendance, study materials, events, and more —
          all in one centralized system.
        </p>

        <div className="mt-6 flex gap-4">
          <button
            onClick={() => router.push("/dashboard")}
            className="btn btn-primary"
          >
            Get Started
          </button>

          <button
            onClick={() => router.push("/cadets")}
            className="btn btn-secondary"
          >
            Explore Cadets
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="px-8 pb-16 grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
          <h3 className="text-lg font-semibold text-gray-900">
            Cadet Management
          </h3>
          <p className="text-sm text-gray-500 mt-2">
            Store and manage cadet data securely with role-based access.
          </p>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
          <h3 className="text-lg font-semibold text-gray-900">
            Attendance Tracking
          </h3>
          <p className="text-sm text-gray-500 mt-2">
            Track participation and maintain accurate attendance records.
          </p>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
          <h3 className="text-lg font-semibold text-gray-900">
            Study Materials
          </h3>
          <p className="text-sm text-gray-500 mt-2">
            Upload and access training resources easily.
          </p>
        </div>

      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-400 py-6 border-t">
        © 2026 NCC Portal — Built for 2A/5 COY
      </footer>

    </div>
  );
}