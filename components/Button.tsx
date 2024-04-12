import React from "react";

export default function Button({ children }: any) {
  return (
    <div className="text-white font-bold text-[14px] uppercase tracking-[-2%] px-4 py-3 button w-fit rounded">
      {children}
    </div>
  );
}
