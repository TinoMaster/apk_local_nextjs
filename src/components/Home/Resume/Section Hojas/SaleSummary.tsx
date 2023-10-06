import React from "react";
import { Item_amount } from "./Item_amount";

export const SaleSummary = () => {
  return (
    <div className="w-full grow bg-primary/10 gap-2 rounded-md flex flex-col">
      <h3 className="text-center font-bold text-sm py-1">Cantidad de impresiones</h3>
      <div className="flex justify-around">
        <Item_amount title="Este Mes" amount={185}/>
        <Item_amount title="Este Año" amount={18555}/>
        <Item_amount title="Total" amount={874512}/>
      </div>
    </div>
  );
};
