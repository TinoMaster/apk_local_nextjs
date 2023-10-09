import { Props_Resume } from "@/models/typescript/interfaces/Sells/sales_statisticsTypes";
import React from "react";
import { FaDollarSign } from "react-icons/fa6";

export const Resume = (props: Props_Resume) => {
  return (
    <div className="px-1">
      <div
        className={`flex justify-between py-2 ${
          props.color === "primary" ? "text-primary" : ""
        } ${props.color === "secondary" ? "text-secondary" : ""}`}
      >
        <h6 className="md:text-lg">Total</h6>
        <p className="flex items-center">
          <FaDollarSign /> {props.total}
        </p>
      </div>

      <div className="flex justify-between py-2 ">
        <h6 className="md:text-base">Casa</h6>
        <p className="flex items-center">
          <FaDollarSign />
          {props.owner}
        </p>
      </div>

      <div className="flex justify-between py-2 ">
        <h6 className="md:text-base">Salario</h6>
        <p className="flex items-center">
          <FaDollarSign />
          {props.salary}$
        </p>
      </div>

      <div className="flex justify-between py-2 ">
        <h6 className="md:text-base">Mejor Venta</h6>
        <p className="flex items-center">
          <span>{props.best_sell.data.getTime()}</span>
          <FaDollarSign />
          {props.best_sell.total}
        </p>
      </div>

      <div className="flex justify-between py-2 ">
        <h6 className="md:text-base">Mejor Turno</h6>
        <p className="flex items-center">
          <span>{props.best_turn}</span>
        </p>
      </div>
    </div>
  );
};
