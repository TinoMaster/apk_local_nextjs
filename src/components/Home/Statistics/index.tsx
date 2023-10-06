import React from "react";
import { Item } from "./Item";
import { FaAccessibleIcon, FaDollyFlatbed } from "react-icons/fa";
import { PropsHomePage } from "@/models/typescript/interfaces/statistics/statistics.model";
import { Fa42Group, Fa500Px } from "react-icons/fa6";

const items_Ej: PropsHomePage[] = [
  {
    title: "General",
    value: 1000,
    icon: FaDollyFlatbed,
    principal: true,
    color: "primary",
  },
  {
    title: "Dueño",
    value: 1000,
    icon: Fa42Group,
    principal: true,
    color: "secondary",
  },
  {
    title: "Ingresos",
    value: "Jorge",
    icon: Fa500Px,
  },
  {
    title: "Ingresos",
    value: 1000,
    icon: FaAccessibleIcon,
  },
];

export const Statistics = () => {
  return (
    <div className="flex flex-col h-full">
      <h4 className="m-1 text-md font-medium">Estadisticas generales</h4>
      <div className="flex flex-col gap-2 p-3 justify-center items-center">
        {items_Ej.map((item) => (
          <Item
            key={item.title}
            title={item.title}
            value={item.value}
            icon={item.icon}
            principal={item.principal}
            color={item.color}
          />
        ))}
      </div>
    </div>
  );
};
