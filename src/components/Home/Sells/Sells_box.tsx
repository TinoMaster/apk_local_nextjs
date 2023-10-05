import { Props_Sells_Statistics } from "@/models/typescript/interfaces/Sells/sells_statistics";
import { Resume } from "./Resume";
import { Salary } from "./Salary";
import { BsCalendar3 } from "react-icons/bs";

export const Sells_box = (props: Props_Sells_Statistics) => {
  return (
    <div className="flex flex-col shadow-lg shadow-black-400/50 w-1/2 rounded-lg">
      <h3
        className={`flex items-center gap-2 p-2 border-b ${
          props.color === "primary" ? "border-primary text-primary" : ""
        } ${
          props.color === "secondary" ? "border-secondary text-secondary" : ""
        }  text-2xl`}
      >
        <BsCalendar3 /> {props.range}
      </h3>
      <div className="flex flex-col p-2 h-full">
        <Resume
          total={props.total}
          owner={props.owner}
          best_sell={props.best_sell}
          best_turn={props.best_turn}
          color={props.color}
          salary={props.salary}
        />
        <Salary salary_by_worker={props.salary_by_worker} color={props.color} />
      </div>
    </div>
  );
};
