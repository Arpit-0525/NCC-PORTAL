"use client";

import { useRouter } from "next/navigation";
import { cadets } from "@/data/cadets";
import { maskAadhaar, maskBank } from "@/lib/utils";

export default function CadetsPage() {
    const router = useRouter();
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Cadets</h1>

      <div className="overflow-x-auto bg-white rounded-2xl shadow">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Parent</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Blood</th>
              <th className="p-3">Aadhaar</th>
              <th className="p-3">Bank</th>
            </tr>
          </thead>

          <tbody>
            {cadets.map((cadet) => (
              <tr
                key={cadet.id}
                onClick={() => router.push(`/cadets/${cadet.id}`)}
                className="border-t hover:bg-gray-50 cursor-pointer"
              >
                <td className="p-3 font-medium">{cadet.name}</td>
                <td className="p-3">{cadet.parentName}</td>
                <td className="p-3">{cadet.phone}</td>
                <td className="p-3">{cadet.bloodGroup}</td>
                <td className="p-3">{maskAadhaar(cadet.aadhaar)}</td>
                <td className="p-3">{maskBank(cadet.bankAccount)}</td>
              </tr>
              
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}