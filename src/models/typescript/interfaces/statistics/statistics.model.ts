import { IconType } from "react-icons";
export interface Statistics {
  title: string;
  value: number | string | boolean;
}

export interface PropsHomePage extends Statistics {
  icon: IconType;
  data?: Date;
  principal?: boolean;
  color?: "primary" | "secondary" | "Third";
}
