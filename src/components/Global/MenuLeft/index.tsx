import { Section_Card_To_Day } from "./Section_Card_To_Day";
import SectionEntradas from "./SectionEntradas";
import { Statistics_Previous_Day } from "./Statistics_Previous_Day";

function MenuLeft() {
  return (
    <div className="flex flex-col w-[400px] h-full bg-primary">
      <div className="flex h-16 justify-center items-center text-xl font-normal">
        <h2>Menu</h2>
      </div>
      <div className="grow bg-white/80 gap-5">
        <SectionEntradas />
        <Statistics_Previous_Day />
        <Section_Card_To_Day />
      </div>
    </div>
  );
}

export default MenuLeft;
