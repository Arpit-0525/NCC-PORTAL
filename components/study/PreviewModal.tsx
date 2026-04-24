"use client";

import Modal from "@/components/ui/Modal";
import { StudyMaterial } from "@/types/study";

export default function PreviewModal({
  isOpen,
  onClose,
  item,
}: {
  isOpen: boolean;
  onClose: () => void;
  item: StudyMaterial | null;
}) {
  if (!item) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Preview Material">

      {/* Content */}
      <div className="space-y-4">

        {/* Metadata */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            {item.title}
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            {item.category} • {item.uploadedAt}
          </p>
        </div>

        {/* Preview Area */}
        <div className="w-full h-[400px] border rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center">

          {item.type === "PDF" ? (
            <iframe
              src={item.url}
              className="w-full h-full"
            />
          ) : (
            <div className="text-center text-gray-500 text-sm">
              PPT preview not supported in browser  
              <br />
              Please download to view
            </div>
          )}

        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3">
          <a
            href={item.url}
            download
            className="btn btn-primary"
          >
            Download
          </a>
        </div>

      </div>

    </Modal>
  );
}