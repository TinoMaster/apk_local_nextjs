import React from "react";
import { Sells_box } from "./Sells_box";
import { Props_Sells_Statistics } from "@/models/typescript/interfaces/Sells/sales_statisticsTypes";

const ej_Sells_statistics: Props_Sells_Statistics[] = [
  {
    range: "Este Mes",
    total: 50000,
    owner: 30000,
    salary: 20000,
    best_turn: "Javier y Nysaer",
    best_sell: {
      data: new Date(),
      total: 8500,
    },
    color: "primary",
    salary_by_worker: [
      {
        worker: "Jorge",
        total: 5000,
      },
      {
        worker: "Nysaer",
        total: 5000,
      },
      {
        worker: "Bryam",
        total: 5000,
      },
    ],
  },
  {
    range: "Este Año",
    total: 80500,
    owner: 30500,
    salary: 50500,
    best_turn: "Javier y Nysaer",
    best_sell: {
      data: new Date(),
      total: 8500,
    },
    color: "secondary",
    salary_by_worker: [
      {
        worker: "Jorge",
        total: 5000,
      },
      {
        worker: "Nysaer",
        total: 5000,
      },
      {
        worker: "Bryam",
        total: 5000,
      },
    ],
  },
];

export const Sells = () => {
  return (
    <div className="flex flex-col w-full lg:flex-row justify-between">
      {ej_Sells_statistics.map((sell) => (
        <Sells_box
          key={sell.range}
          total={sell.total}
          owner={sell.owner}
          salary={sell.salary}
          best_sell={sell.best_sell}
          best_turn={sell.best_turn}
          range={sell.range}
          color={sell.color}
          salary_by_worker={sell.salary_by_worker}
        />
      ))}
    </div>
  );
};
