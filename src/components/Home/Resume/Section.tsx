import { SectionProps } from "@/models/typescript/interfaces/Home/sectionTypes";
import { section_classnames } from "@/styles/classnames/Home/Section.class";

export const Section = ({ children, title, large, color }: SectionProps) => {
  const { globalStyle, titleStyle, boxStyle } = section_classnames({
    large,
    color,
  });

  return (
    <div className={globalStyle}>
      <div className={boxStyle}>
        <h3 className={titleStyle}>{title}</h3>
        {children}
      </div>
    </div>
  );
};
