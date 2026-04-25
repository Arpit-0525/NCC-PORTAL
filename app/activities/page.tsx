"use client";

import { activities } from "@/data/activities";
import { cadets } from "@/data/cadets";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function ActivitiesPage() {
  const router = useRouter();
  const { user } = useAuth();
  const isAdmin = user.role === "admin";

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">

      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Activities
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Track parades, camps, and events
          </p>
        </div>

        {isAdmin && (
          <button className="btn btn-primary">
            + Create Activity
          </button>
        )}
      </div>

      {/* Activity List */}
      <div className="space-y-4">

        {activities.map((activity) => {
          const attendance = activity.cadetIds.length;
          const total = cadets.length;
          const percentage =
            total === 0 ? 0 : Math.round((attendance / total) * 100);

          return (
            <div
              key={activity.id}
              onClick={() => router.push(`/activities/${activity.id}`)}
              className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition cursor-pointer"
            >

              {/* Top Section */}
              <div className="flex justify-between items-start">

                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    {activity.title}
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    {activity.type} • {activity.date}
                  </p>
                </div>

                <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                  Active
                </span>
              </div>

              {/* Attendance */}
              <div className="mt-4">

                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">
                    Attendance
                  </span>
                  <span className="font-medium text-gray-800">
                    {attendance}/{total} ({percentage}%)
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-500 transition-all"
                    style={{ width: `${percentage}%` }}
                  />
                </div>

              </div>

            </div>
          );
        })}

        {/* Empty State */}
        {activities.length === 0 && (
          <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center text-gray-500 text-sm">
            No activities found
          </div>
        )}

      </div>

    </div>
  );
}