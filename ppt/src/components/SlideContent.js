import React from "react";

export default function SlideContent({ children }) {
  return (
    <div className="w-full max-w-3xl mx-auto overflow-y-auto max-h-[70vh] pr-4">
      {children}
    </div>
  );
}
