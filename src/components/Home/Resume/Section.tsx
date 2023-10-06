import React, { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  title: string;
  large: 1 | 2 | 3;
}

export const Section = ({ children, title, large }: SectionProps) => {
  return (
    <div
      className={`${large === 1 ? "w-full" : ""} ${
        large === 2 ? "w-1/2" : ""
      } ${large === 3 ? "w-1/3" : ""} h-1/2 p-2`}
    >
      <div className="flex flex-col w-full h-full shadow-md p-2 gap-2 rounded-md bg-white">
        <h3 className="text-center text-secondary rounded-md">{title}</h3>
        {children}
      </div>
    </div>
  );
};
