import DashboardLayout from "@/components/layout/DashboardLayout";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-6 text-gray-900">
        Dashboard
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1 */}
        <div className="bg-white p-5 rounded-xl shadow-md border hover:shadow-lg hover:-translate-y-1 transition duration-200">          <h2 className="text-gray-700 font-medium">
            Total Cadets
          </h2>
          <p className="text-3xl font-bold mt-2 text-gray-900">
            120
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-5 rounded-xl shadow-md border hover:shadow-lg hover:-translate-y-1 transition duration-200">
          <h2 className="text-gray-700 font-medium">
            Upcoming Events
          </h2>
          <p className="text-3xl font-bold mt-2 text-gray-900">
            5
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-5 rounded-xl shadow-md border hover:shadow-lg hover:-translate-y-1 transition duration-200">
          <h2 className="text-gray-700 font-medium">
            Attendance %
          </h2>
          <p className="text-3xl font-bold mt-2 text-gray-900">
            87%
          </p>
        </div>

      </div>

      {/* Recent Activity */}
      <div className="mt-8 bg-white p-5 rounded-xl shadow-md border">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">
          Recent Activity
        </h2>

        <ul className="space-y-3 text-gray-700">
          <li className="border-b pb-2 hover:text-black transition">
            Parade conducted - 45 cadets present
          </li>
          <li className="border-b pb-2 hover:text-black transition">
            New cadet registration added
          </li>
          <li className="border-b pb-2 hover:text-black transition">
            Study material uploaded for B Certificate
          </li>
        </ul>
      </div>

    </DashboardLayout>
  );
}