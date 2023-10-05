import { Salarys } from "@/models/typescript/interfaces/Sells/sells_statistics";
import React from "react";
import { FaDollarSign } from "react-icons/fa6";

export const Item_Salary = (item: Salarys) => {
  return (
    <div className="flex flex-col items-center pt-3 w-1/3">
      <div className="flex justify-center items-center w-10 h-10 rounded-full border-2 overflow-hidden"></div>
      <h3 className="">{item.worker}</h3>
      <p className="flex items-center">
        <FaDollarSign /> {item.total}
      </p>
    </div>
  );
};
