import { Props_Salary } from "@/models/typescript/interfaces/Sells/sells_statistics";
import React from "react";
import { Item_Salary } from "./Item_Salary";

export const Salary = (props: Props_Salary) => {
  return (
    <div>
      <h5
        className={`font-serif text-center rounded-md text-white ${
          props.color === "primary" ? "bg-primary" : ""
        } ${props.color === "secondary" ? "bg-secondary" : ""}`}
      >
        Salarios
      </h5>

      {/* box Salarios */}
      <div className="flex justify-between h-full mb-2">
        {props.salary_by_worker.map((el) => (
          <Item_Salary key={el.worker} worker={el.worker} total={el.total} />
        ))}
      </div>
    </div>
  );
};
