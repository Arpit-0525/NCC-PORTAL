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
    <div className="p-6 space-y-6">

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
              className="card cursor-pointer hover:shadow-md transition-all duration-200"
            >

              <div className="flex justify-between items-start">

                {/* Left */}
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    {activity.title}
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    {activity.type} • {activity.date}
                  </p>
                </div>

                {/* Status Badge */}
                <span className="badge badge-success">
                  Active
                </span>
              </div>

              {/* Attendance Section */}
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
          <div className="card text-center text-gray-500 text-sm">
            No activities found
          </div>
        )}

      </div>

    </div>
  );
}