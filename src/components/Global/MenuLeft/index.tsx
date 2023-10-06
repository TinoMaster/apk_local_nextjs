import { pagesLinks } from "@/data/Left Menu/pagesLinks.data";
import { SectionPages } from "./Section-Pages";
import { SectionEntries } from "./Section-Entries";
import { entriesLinks } from "@/data/Left Menu/entriesLinks.data";

function MenuLeft() {
  return (
    <div className="flex flex-col w-[300px] h-full shadow-md gap-2">
      <div className="flex h-16 text-white border-r border-primary-400 justify-center items-center text-lg rounded-b-md bg-primary">
        <h2>Menu</h2>
      </div>
      <div className="grow bg-white/80 gap-5">
        <SectionPages links={pagesLinks} />
        <SectionEntries links={entriesLinks} />
      </div>
    </div>
  );
}

export default MenuLeft;
