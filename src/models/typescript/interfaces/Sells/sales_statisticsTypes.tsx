import { Colors } from "../colorsTypes";

export type BestSell = {
  data: Date;
  total: number;
};

export interface Salarys {
  worker: string;
  total: number;
}

export interface Props_Sells_Statistics {
  total: number;
  owner: number;
  salary: number;
  best_sell: BestSell;
  best_turn: string;
  range: string;
  color: Colors;
  salary_by_worker: Salarys[];
}

export interface Props_Resume
  extends Omit<Props_Sells_Statistics, "range" | "salary_by_worker"> {}

export interface Props_Salary
  extends Pick<Props_Sells_Statistics, "salary_by_worker" | "color"> {}
