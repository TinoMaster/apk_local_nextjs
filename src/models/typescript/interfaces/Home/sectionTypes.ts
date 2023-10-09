import { ReactNode } from "react";
import { Colors } from "../colorsTypes";

export interface SectionProps {
  children: ReactNode;
  title: string;
  large: 1 | 2 | 3;
  color?: Colors;
}

export interface SectionStyle extends Pick<SectionProps, "large" | "color"> {}
