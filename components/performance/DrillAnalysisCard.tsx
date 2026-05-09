"use client";

export default function DrillAnalysisCard() {
  return (
    <div className="bg-white border rounded-2xl p-5 shadow-sm">

      <div className="flex justify-between items-center mb-5">
        <h2 className="text-lg font-semibold text-gray-900">
          AI Drill Analysis
        </h2>

        <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
          AI Powered
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        <div className="bg-blue-50 rounded-xl p-4">
          <p className="text-sm text-gray-500">
            Posture
          </p>

          <h3 className="text-2xl font-bold text-blue-700 mt-2">
            85%
          </h3>
        </div>

        <div className="bg-green-50 rounded-xl p-4">
          <p className="text-sm text-gray-500">
            Timing
          </p>

          <h3 className="text-2xl font-bold text-green-700 mt-2">
            78%
          </h3>
        </div>

        <div className="bg-yellow-50 rounded-xl p-4">
          <p className="text-sm text-gray-500">
            Precision
          </p>

          <h3 className="text-2xl font-bold text-yellow-700 mt-2">
            81%
          </h3>
        </div>

        <div className="bg-purple-50 rounded-xl p-4">
          <p className="text-sm text-gray-500">
            Overall
          </p>

          <h3 className="text-2xl font-bold text-purple-700 mt-2">
            82%
          </h3>
        </div>

      </div>

    </div>
  );
}