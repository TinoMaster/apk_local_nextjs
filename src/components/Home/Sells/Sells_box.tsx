import { Props_Sells_Statistics } from "@/models/typescript/interfaces/Sells/sells_statistics";
import { Resume } from "./Resume";
import { Salary } from "./Salary";
import { BsCalendar3 } from "react-icons/bs";

export const Sells_box = (props: Props_Sells_Statistics) => {
  return (
    <div className="w-full lg:w-1/2 rounded-lg p-2">
      <div className="flex flex-col shadow-md shadow-black-400/50">
        <h3
          className={`flex items-center gap-2 p-2 text-white bg-gradient-to-tr rounded-t-md ${
            props.color === "primary"
              ? "from-primary via-primary/70 to-primary"
              : ""
          } ${
            props.color === "secondary"
              ? "from-secondary via-secondary/70 to-secondary"
              : ""
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
          <Salary
            salary_by_worker={props.salary_by_worker}
            color={props.color}
          />
        </div>
      </div>
    </div>
  );
};
