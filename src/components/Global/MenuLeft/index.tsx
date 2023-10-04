import { pagesLinks } from "@/data/Left Menu/pagesLinks.data";
import { SectionPages } from "./Section-Pages";
import { SectionEntries } from "./Section-Entries";
import { entriesLinks } from "@/data/Left Menu/entriesLinks.data";

function MenuLeft() {
  return (
    <div className="flex flex-col w-[300px] h-full bg-primary">
      <div className="flex h-16 text-white border-r border-slate-400 justify-center items-center text-xl font-normal">
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
