"use client";

import { useParams } from "next/navigation";
import { cadets } from "@/data/cadets";
import { useAuth } from "@/context/AuthContext";
import PerformanceChart from "@/components/cadets/PerformanceChart";

export default function CadetProfile() {
  const params = useParams();
  const id = params.id as string;

  const { user } = useAuth();
  const isAdmin = user?.role === "admin";

  const cadet = cadets.find((c) => c.id === id);

  if (!cadet) {
    return (
      <div className="p-6 text-gray-600">
        Cadet not found
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">
          {cadet.name}
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Cadet Profile
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Personal Info */}
        <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Personal Information
          </h2>

          <div className="space-y-2 text-sm">
            <p><span className="text-gray-500">Name:</span> {cadet.name}</p>
            <p><span className="text-gray-500">Parent:</span> {cadet.parentName}</p>
            <p><span className="text-gray-500">Blood Group:</span> {cadet.bloodGroup}</p>
            <p><span className="text-gray-500">Rank:</span> {cadet.rank || "Cadet"}</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Contact Details
          </h2>

          <div className="space-y-2 text-sm">
            <p><span className="text-gray-500">Phone:</span> {cadet.phone}</p>
            <p><span className="text-gray-500">Parent Phone:</span> {cadet.parentPhone}</p>
          </div>
        </div>

        {/* Sensitive Info (Admin Only) */}
        {isAdmin && (
          <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm md:col-span-2">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Sensitive Information
            </h2>

            <div className="space-y-2 text-sm font-mono">
              <p><span className="text-gray-500">Aadhaar:</span> {cadet.aadhaar}</p>
              <p><span className="text-gray-500">Bank Account:</span> {cadet.bankAccount}</p>
            </div>
          </div>
        )}

        {/* PERFORMANCE */}
        <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm md:col-span-2">
          <PerformanceChart data={cadet.performance || []} />
        </div>
        {/* OVERALL PERFORMANCE */}
        <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm md:col-span-2">

          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Overall Evaluation
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <div className="bg-blue-50 rounded-xl p-4">
              <p className="text-sm text-gray-500">
                Overall Score
              </p>

              <h3 className="text-3xl font-bold text-blue-700 mt-2">
                {cadet.overallScore}
              </h3>
            </div>

            <div className="bg-green-50 rounded-xl p-4">
              <p className="text-sm text-gray-500">
                Grade
              </p>

              <h3 className="text-3xl font-bold text-green-700 mt-2">
                {cadet.grade}
              </h3>
            </div>

            <div className="bg-purple-50 rounded-xl p-4">
              <p className="text-sm text-gray-500">
                Social Points
              </p>

              <h3 className="text-3xl font-bold text-purple-700 mt-2">
                {cadet.socialPoints}
              </h3>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}