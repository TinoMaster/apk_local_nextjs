import { PropsHomePage } from "@/models/typescript/interfaces/statistics/statisticsTypes";
import React from "react";
import { FaDollarSign } from "react-icons/fa6";

export const Item = (Props: PropsHomePage) => {
  return (
    <div className=" flex w-full justify-between items-center shadow p-2 rounded-md ">
      <h4
        className={`md:text-lg ${Props.principal ? "" : ""} ${
          Props.color === "primary" ? "text-primary" : ""
        } ${
          Props.color === "secondary" ? "text-secondary" : ""
        } font-serif flex items-center gap-1`}
      >
        <Props.icon />
        {Props.title}
      </h4>
      <p
        className={`flex items-center text-base ${
          Props.principal ? "font-bold" : ""
        } ${Props.color === "primary" ? "text-primary" : ""} ${
          Props.color === "secondary" ? "text-secondary" : ""
        }`}
      >
        {typeof Props.value === "number" ? <FaDollarSign /> : null}{" "}
        <span>{Props.value}</span>
      </p>
    </div>
  );
};
