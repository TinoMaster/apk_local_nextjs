import React from "react";
import { Available } from "./Available";
import { SaleSummary } from "./SaleSummary";

export const SectionHojas = () => {
  return (
    <div className="w-full grow">
      <div className="flex flex-wrap">
        <Available />
        <SaleSummary />
      </div>
    </div>
  );
};
