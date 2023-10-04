import { modelLink } from "@/interfaces/Left Menu/links.model";
import React from "react";
import { Link_ } from "../Link_";

export const SectionEntries = ({ links }: { links: modelLink[] }) => {
  return (
    <div className="flex flex-col p-2">
      <h6 className="flex flex-col items-center text-white p-1 text-sm rounded font-medium bg-green-400 shadow-lg shadow-yellow-400/50">
        Entradas
      </h6>
      <ul className="flex flex-col justify-center">
        {links.map((el) => (
          <Link_ key={el.title} Elem={el} />
        ))}
      </ul>
    </div>
  );
};
