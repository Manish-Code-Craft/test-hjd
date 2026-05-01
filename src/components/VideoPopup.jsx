"use client";

import { X } from "lucide-react";

export default function VideoPopup({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black px-4">
      {/* MODAL */}
      <div className="relative bg-white p-8 md:p-12.5 max-w-225 w-full">
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-[#10C8F0]"
        >
          <X className="w-5 h-5" />
        </button>

        {/* VIDEO CONTAINER */}
        <div className="w-full aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/ELjT0L9_-GY?autoplay=1&rel=0"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
