"use client";

import { useState } from "react";
import { activities } from "@/data/activities";
import { cadets } from "@/data/cadets";
import { useAuth } from "@/context/AuthContext";

export default function ActivityDetail({ params }: { params: { id: string } }) {
  const { user } = useAuth();
  const isAdmin = user.role === "admin";

  const activity = activities.find((a) => a.id === params.id);

  if (!activity) return <div className="p-6">Activity not found</div>;

  const [present, setPresent] = useState<string[]>(activity.cadetIds);

  const total = cadets.length;
  const presentCount = present.length;
  const percentage =
    total === 0 ? 0 : Math.round((presentCount / total) * 100);

  function toggleAttendance(id: string) {
    if (!isAdmin) return;

    if (present.includes(id)) {
      setPresent(present.filter((c) => c !== id));
    } else {
      setPresent([...present, id]);
    }
  }

  function markAll() {
    if (!isAdmin) return;
    setPresent(cadets.map((c) => c.id));
  }

  function clearAll() {
    if (!isAdmin) return;
    setPresent([]);
  }

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">
          {activity.title}
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          {activity.type} • {activity.date}
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">

        <div className="bg-white border border-gray-200 rounded-2xl p-4 text-center shadow-sm">
          <p className="text-sm text-gray-500">Total</p>
          <h2 className="text-2xl font-semibold text-gray-900 mt-1">
            {total}
          </h2>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-4 text-center shadow-sm">
          <p className="text-sm text-gray-500">Present</p>
          <h2 className="text-2xl font-semibold text-green-600 mt-1">
            {presentCount}
          </h2>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-4 text-center shadow-sm">
          <p className="text-sm text-gray-500">Percentage</p>
          <h2 className="text-2xl font-semibold text-blue-600 mt-1">
            {percentage}%
          </h2>
        </div>

      </div>

      {/* Controls */}
      {isAdmin && (
        <div className="flex flex-wrap gap-3">
          <button onClick={markAll} className="btn btn-primary">
            Mark All Present
          </button>

          <button onClick={clearAll} className="btn btn-secondary">
            Clear All
          </button>

          <button className="btn btn-primary">
            Save Attendance
          </button>
        </div>
      )}

      {/* Progress */}
      <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-600">Attendance Progress</span>
          <span className="text-gray-800 font-medium">
            {percentage}%
          </span>
        </div>

        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-green-500 transition-all"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      {/* Cadet Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

        {cadets.map((cadet) => {
          const isPresent = present.includes(cadet.id);

          return (
            <div
              key={cadet.id}
              onClick={() => toggleAttendance(cadet.id)}
              className={`bg-white border rounded-2xl p-4 shadow-sm transition ${
                isPresent
                  ? "border-green-500 bg-green-50"
                  : "border-gray-200 hover:shadow-md"
              } ${!isAdmin ? "cursor-not-allowed opacity-80" : "cursor-pointer"}`}
            >
              <p className="font-medium text-gray-900">
                {cadet.name}
              </p>

              <p className="text-xs text-gray-500 mt-1">
                {cadet.rank || "Cadet"}
              </p>

              <div className="mt-3">
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    isPresent
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {isPresent ? "Present" : "Absent"}
                </span>
              </div>
            </div>
          );
        })}

      </div>

    </div>
  );
}