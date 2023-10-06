import React from "react";
import { FaSortAmountUp } from "react-icons/fa";

export const Available = ({ amount }: { amount: number }) => {
  return (
    <div className="flex w-full justify-between items-center border-b">
      <h4 className="flex items-center gap-1">
        <FaSortAmountUp />
        Hojas Disponibles
      </h4>
      <span className={`${amount < 500 ? "text-red-400" : "text-secondary"} font-bold text-sm`}>{amount}</span>
    </div>
  );
};
