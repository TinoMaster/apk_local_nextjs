import { modelLink } from "@/models/typescript/interfaces/Left Menu/links.model";
import { Link_ } from "../Link_";

export const SectionPages = ({ links = [] }: { links: modelLink[] }) => {
  return (
    <div className="flex flex-col p-2">
      <h6 className="flex flex-col items-center text-white p-1 text-sm rounded font-medium bg-yellow-400 shadow-lg shadow-yellow-400/50">
        Pages
      </h6>
      <ul className="flex flex-col my-2 justify-center items-center">
        {links.map((el) => (
          <Link_ key={el.title} Elem={el} />
        ))}
      </ul>
    </div>
  );
};
