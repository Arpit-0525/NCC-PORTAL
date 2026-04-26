"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Cadets", href: "/cadets" },
  { name: "Activities", href: "/activities" },
  { name: "Study", href: "/study" },
  { name: "Events", href: "/events" },
  { name: "Gallery", href: "/gallery" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col">

      {/* Logo / Title */}
      <div className="px-6 py-5 border-b border-gray-200">
        <h1 className="text-lg font-semibold text-gray-900 tracking-tight">
          NCC Portal
        </h1>
        <p className="text-xs text-gray-500 mt-1">
          2A/5 COY Management
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1">

        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all
                ${
                  isActive
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }
              `}
            >
              {/* Future icon slot */}
              <span className="w-2 h-2 rounded-full bg-current opacity-60"></span>

              {item.name}
            </Link>
          );
        })}

      </nav>

      {/* Footer */}
      <div className="px-4 py-4 border-t border-gray-200 text-xs text-gray-400">
        © NCC Portal
      </div>
    </aside>
  );
}
