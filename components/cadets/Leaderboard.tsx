"use client";

import { cadets } from "@/data/cadets";

export default function Leaderboard() {
  const sortedCadets = [...cadets].sort(
    (a, b) => b.overallScore - a.overallScore
  );

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">

      <div className="flex justify-between items-center mb-5">
        <h2 className="text-lg font-semibold text-gray-900">
          Cadet Leaderboard
        </h2>

        <span className="text-sm text-gray-500">
          Overall Rankings
        </span>
      </div>

      <div className="space-y-4">

        {sortedCadets.map((cadet, index) => (
          <div
            key={cadet.id}
            className="flex items-center justify-between border rounded-xl p-4 hover:bg-gray-50 transition"
          >

            {/* LEFT */}
            <div className="flex items-center gap-4">

              {/* Rank */}
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                #{index + 1}
              </div>

              {/* Info */}
              <div>
                <p className="font-medium text-gray-900">
                  {cadet.name}
                </p>

                <p className="text-sm text-gray-500">
                  Grade {cadet.grade}
                </p>
              </div>

            </div>

            {/* RIGHT */}
            <div className="text-right">

              <p className="text-lg font-bold text-green-600">
                {cadet.overallScore}
              </p>

              <p className="text-xs text-gray-500">
                Overall Score
              </p>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}