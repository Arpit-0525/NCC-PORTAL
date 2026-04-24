"use client";

import { useState } from "react";
import Modal from "@/components/ui/Modal";

export default function UploadModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("B Certificate");
  const [type, setType] = useState("PDF");

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    const selected = e.dataTransfer.files[0];
    if (selected) setFile(selected);
  }

  function handleUpload() {
    console.log({ file, title, category, type });
    onClose();
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Upload Study Material">

      {/* Drag Area */}
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center mb-4"
      >
        {file ? (
          <p className="text-sm text-gray-700">{file.name}</p>
        ) : (
          <p className="text-sm text-gray-500">
            Drag & drop file here or click to upload
          </p>
        )}

        <input
          type="file"
          className="hidden"
          id="fileUpload"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />

        <label
          htmlFor="fileUpload"
          className="block mt-3 text-blue-600 text-sm cursor-pointer"
        >
          Browse File
        </label>
      </div>

      {/* Title */}
      <input
        type="text"
        placeholder="Material Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm mb-3"
      />

      {/* Category */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm mb-3"
      >
        <option>B Certificate</option>
        <option>C Certificate</option>
        <option>Camps</option>
      </select>

      {/* Type */}
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm mb-4"
      >
        <option>PDF</option>
        <option>PPT</option>
      </select>

      {/* Actions */}
      <div className="flex justify-end gap-3">
        <button onClick={onClose} className="btn btn-secondary">
          Cancel
        </button>

        <button
          onClick={handleUpload}
          className="btn btn-primary"
        >
          Upload
        </button>
      </div>
    </Modal>
  );
}