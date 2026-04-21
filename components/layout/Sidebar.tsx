"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Cadets", path: "/cadets" },
  { name: "Activities", path: "/activities" },
  { name: "Study", path: "/study" },
  { name: "Events", path: "/events" },
  { name: "Gallery", path: "/gallery" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-5">
      <h1 className="text-2xl font-bold mb-8">NCC Portal</h1>

      <nav className="flex flex-col gap-3">
        {links.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={`p-2 rounded ${
              pathname === link.path
                ? "bg-gray-700"
                : "hover:bg-gray-800"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}