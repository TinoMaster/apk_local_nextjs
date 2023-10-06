import React from "react";
import { Available } from "./Available";
import { SaleSummary } from "./SaleSummary";

export const SectionHojas = () => {
  return (
    <div className="w-full h-full flex flex-col gap-1 p-2">
      <Available amount={500} />
      <SaleSummary />
    </div>
  );
};
