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
    if (present.includes(id)) {
      setPresent(present.filter((c) => c !== id));
    } else {
      setPresent([...present, id]);
    }
  }

  function markAll() {
    setPresent(cadets.map((c) => c.id));
  }

  function clearAll() {
    setPresent([]);
  }

  return (
    <div className="p-6 space-y-6">

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

        <div className="card text-center">
          <p className="text-sm text-gray-500">Total</p>
          <h2 className="text-2xl font-semibold text-gray-900 mt-1">
            {total}
          </h2>
        </div>

        <div className="card text-center">
          <p className="text-sm text-gray-500">Present</p>
          <h2 className="text-2xl font-semibold text-green-600 mt-1">
            {presentCount}
          </h2>
        </div>

        <div className="card text-center">
          <p className="text-sm text-gray-500">Percentage</p>
          <h2 className="text-2xl font-semibold text-blue-600 mt-1">
            {percentage}%
          </h2>
        </div>

      </div>

      {/* Controls */}
      <div className="flex flex-wrap gap-3">

        {isAdmin && (
          <>
            <button onClick={markAll} className="btn btn-primary">
              Mark All Present
            </button>
            <button onClick={clearAll} className="btn btn-secondary">
              Clear All
            </button>
            <button className="btn btn-primary">
              Save Attendance
            </button>
          </>
        )}

      </div>

      {/* Progress Bar */}
      <div className="card">
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
              onClick={() => isAdmin && toggleAttendance(cadet.id)}
              className={`card cursor-pointer transition-all ${isPresent
                ? "border-green-500 bg-green-50"
                : "hover:shadow-md"
                }`}
            >
              <p className="font-medium text-gray-900">
                {cadet.name}
              </p>

              <p className="text-xs text-gray-500 mt-1">
                {cadet.rank || "Cadet"}
              </p>

              <div className="mt-3">
                <span
                  className={`badge ${isPresent ? "badge-success" : "badge-danger"
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