import React from "react";
import { FaSortAmountUp } from "react-icons/fa";

export const Available = () => {
  return (
    <div className="flex w-full justify-between border-b">
      <h4 className="flex items-center gap-1"><FaSortAmountUp /> Disponibles</h4>
      <span className="font-bold">5</span>
    </div>
  );
};
