"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-8">

        {/* Header */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Dashboard
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Overview of NCC Company (2A/5 COY)
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card */}
          <div className="card hover:shadow-md transition-all duration-200">
            <div className="flex justify-between items-start">
              <p className="text-sm text-gray-500 font-medium">
                Total Cadets
              </p>
              <span className="badge badge-success">+5%</span>
            </div>

            <h2 className="text-3xl font-semibold text-gray-900 mt-3">
              120
            </h2>
          </div>

          {/* Card */}
          <div className="card hover:shadow-md transition-all duration-200">
            <div className="flex justify-between items-start">
              <p className="text-sm text-gray-500 font-medium">
                Upcoming Events
              </p>
              <span className="badge badge-success">Active</span>
            </div>

            <h2 className="text-3xl font-semibold text-gray-900 mt-3">
              5
            </h2>
          </div>

          {/* Card */}
          <div className="card hover:shadow-md transition-all duration-200">
            <div className="flex justify-between items-start">
              <p className="text-sm text-gray-500 font-medium">
                Attendance
              </p>
              <span className="badge badge-success">Good</span>
            </div>

            <h2 className="text-3xl font-semibold text-gray-900 mt-3">
              87%
            </h2>
          </div>

        </div>

        {/* Recent Activity */}
        <div className="card">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Recent Activity
            </h2>

            <button className="btn btn-secondary text-xs">
              View All
            </button>
          </div>

          <div className="space-y-3">

            <div className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-50 transition">
              <div>
                <p className="text-sm font-medium text-gray-800">
                  Parade conducted
                </p>
                <p className="text-xs text-gray-500">
                  45 cadets present
                </p>
              </div>
              <span className="text-xs text-gray-400">2h ago</span>
            </div>

            <div className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-50 transition">
              <div>
                <p className="text-sm font-medium text-gray-800">
                  New cadet registered
                </p>
                <p className="text-xs text-gray-500">
                  Added by admin
                </p>
              </div>
              <span className="text-xs text-gray-400">5h ago</span>
            </div>

            <div className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-50 transition">
              <div>
                <p className="text-sm font-medium text-gray-800">
                  Study material uploaded
                </p>
                <p className="text-xs text-gray-500">
                  B Certificate module
                </p>
              </div>
              <span className="text-xs text-gray-400">1d ago</span>
            </div>

          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}