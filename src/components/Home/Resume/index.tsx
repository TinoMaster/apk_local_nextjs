import React from "react";
import { Section } from "./Section";
import { SectionHojas } from "./Section Hojas";

export const Resume = () => {
  return (
    <div className="flex flex-col w-full grow m-auto">
      <h4 className="font-medium text-center p-2">Resumen</h4>
      <div className="flex flex-wrap w-full h-full rounded-md">
        <Section title="Impresiones" large={3} color="third">
          <SectionHojas />
        </Section>
      </div>
    </div>
  );
};
