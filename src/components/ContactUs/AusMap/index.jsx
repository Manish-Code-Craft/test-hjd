"use client";

export default function AusMap() {
  return (
    <div className="w-full h-75 md:h-100  overflow-hidden">
      <iframe
        src="https://www.google.com/maps?q=Suite+110+50+St+Georges+Terrace+Perth+Australia&output=embed"
        className="w-full h-full grayscale contrast-125 brightness-90"
        style={{ border: 0 }}
        loading="lazy"
      />
    </div>
  );
}