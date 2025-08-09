import * as React from "react";

export function Input({ className, ...props }) {
  return (
    <input
      className={`w-full px-3 py-2 border rounded outline-none focus:ring focus:border-blue-300 ${className}`}
      {...props}
    />
  );
}