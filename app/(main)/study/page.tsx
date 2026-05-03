"use client";

import PreviewModal from "@/components/study/PreviewModal";
import UploadModal from "@/components/study/UploadModal";
import { studyMaterials } from "@/data/study";
import { StudyMaterial } from "@/types/study";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function StudyPage() {
  const { user } = useAuth(); 
  const isAdmin = user.role === "admin";
  const [selected, setSelected] = useState<StudyMaterial | null>(null);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", "B Certificate", "C Certificate", "Camps"];

  const filtered = studyMaterials.filter((item) => {
    const matchesQuery = item.title
      .toLowerCase()
      .includes(query.toLowerCase());

    const matchesCategory =
      category === "All" || item.category === category;

    return matchesQuery && matchesCategory;
  });

  return (
    <div className="p-6 space-y-6">

      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Study Materials
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Access training resources and notes
          </p>
        </div>

        {isAdmin && (
          <button onClick={() => setOpen(true)} className="btn btn-primary">
            + Upload Material
          </button>
        )}
      </div>

      {/* Controls */}
      <div className="flex flex-wrap gap-3 items-center justify-between">

        {/* Search */}
        <input
          type="text"
          placeholder="Search materials..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-72 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Category Filters */}
        <div className="flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-3 py-1 rounded-full text-sm ${
                category === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

        {filtered.map((item) => (
          <div
            key={item.id}
            className="card hover:shadow-md transition-all cursor-pointer"
          >
            {/* File Type Badge */}
            <div className="flex justify-between items-center mb-3">
              <span className="badge badge-success">
                {item.type}
              </span>

              <span className="text-xs text-gray-400">
                {item.uploadedAt}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-sm font-semibold text-gray-300">
              {item.title}
            </h2>

            {/* Category */}
            <p className="text-xs text-gray-500 mt-1">
              {item.category}
            </p>

            {/* Action */}
            <button onClick={() => {
                setSelected(item);
                setPreviewOpen(true);
            }} className="mt-4 text-sm text-blue-600 font-medium hover:underline">
                View Material →
            </button>
            
          </div>
        ))}

      </div>

      {/* Empty State */}
      {filtered.length === 0 && (
        <div className="card text-center text-gray-500 text-sm">
          No materials found
        </div>
      )}
      <UploadModal isOpen={open} onClose={() => setOpen(false)} />
      <PreviewModal isOpen={previewOpen}onClose={() => setPreviewOpen(false)} item={selected}/>


    </div>
    
  );
}