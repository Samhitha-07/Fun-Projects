import React from "react";

export function Button({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-white bg-red-500 rounded hover:bg-red-700 ${className}`}
    >
      {children}
    </button>
  );
}
