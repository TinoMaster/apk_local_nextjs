import { modelLink } from "@/models/typescript/interfaces/Left Menu/linksTypes";
import { Link_ } from "../Link_";

export const SectionPages = ({ links = [] }: { links: modelLink[] }) => {
  return (
    <div className="flex flex-col p-2 gap-2">
      <h6 className="flex flex-col items-center text-white p-2 text-sm rounded font-medium bg-third shadow-lg shadow-third/50">
        Pages
      </h6>
      <ul className="flex flex-col justify-center items-center">
        {links.map((el) => (
          <Link_ key={el.title} Elem={el} />
        ))}
      </ul>
    </div>
  );
};
