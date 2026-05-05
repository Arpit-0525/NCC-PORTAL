"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function PerformanceChart({ data }: { data: any[] }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Performance Analytics
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Line type="monotone" dataKey="drill" stroke="#2563eb" />
          <Line type="monotone" dataKey="physical" stroke="#16a34a" />
          <Line type="monotone" dataKey="theory" stroke="#dc2626" />
          <Line type="monotone" dataKey="social" stroke="#9333ea" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}