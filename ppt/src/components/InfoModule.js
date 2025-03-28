import React from "react";

const InfoModule = ({ title, children, className = "", size = "md" }) => {
  const textSizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-xl",
    xl: "text-2xl",
  };

  const textSizeClass = textSizeClasses[size] || textSizeClasses.md;

  return (
    <div
      className={`bg-gray-50/50 p-6 rounded-lg shadow-sm backdrop-blur-sm ${className}`}
    >
      {title && (
        <h2 className="slide-subtitle mb-4" style={{ fontSize: "30px" }}>
          {title}
        </h2>
      )}
      <div className={textSizeClass}>{children}</div>
    </div>
  );
};

export default InfoModule;
