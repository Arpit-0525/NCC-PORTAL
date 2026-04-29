"use client";

import { useAuth } from "@/context/AuthContext";

const events = [
  {
    id: "1",
    title: "Republic Day Parade",
    date: "2025-01-26",
    type: "National Event",
  },
  {
    id: "2",
    title: "Annual Training Camp",
    date: "2025-02-10",
    type: "Camp",
  },
];

export default function EventsPage() {
  const { user } = useAuth();
  const isAdmin = user.role === "admin";

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">

      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Events
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Upcoming schedules and important dates
          </p>
        </div>

        {isAdmin && (
          <button className="btn btn-primary">
            + Add Event
          </button>
        )}
      </div>

      {/* Event Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-lg font-semibold text-gray-900">
              {event.title}
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              {event.type}
            </p>

            <div className="mt-4 flex justify-between items-center">
              <span className="text-sm text-gray-600">
                {event.date}
              </span>

              <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
                Upcoming
              </span>
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}