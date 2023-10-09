import { SectionStyle } from "@/models/typescript/interfaces/Home/sectionTypes";
import classNames from "classnames";

export const section_classnames = ({ large, color }: SectionStyle) => {
  const globalStyle = classNames("lg:h-1/2", "p-2", "text-lg", "lg:text-sm", {
    "w-full": large === 1,
    "w-full lg:w-2/3": large === 2,
    "w-full lg:w-1/3": large === 3,
  });

  const boxStyle = classNames(
    "flex",
    "flex-col",
    "w-full",
    "h-full",
    "shadow-md",
    "gap-2",
    "rounded-md"
  );

  const titleStyle = classNames(
    "text-center",
    "py-2",
    "rounded-t-md",
    "bg-gradient-to-tr",
    {
      "from-primary/80 via-primary/60 to-primary/80 text-white":
        color === "primary",
      "from-secondary/80 via-secondary/60 to-secondary/80 text-white":
        color === "secondary",
      "from-third/90 via-third/70 to-third/90 text-white": color === "third",
    }
  );

  return { globalStyle, titleStyle, boxStyle };
};
