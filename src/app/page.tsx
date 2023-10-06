import { Resume } from "@/components/Home/Resume";
import { Sells } from "@/components/Home/Sells";
import { Statistics } from "@/components/Home/Statistics";

export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row justify-start w-full h-full lg:p-4 overflow-auto">
      <div className="w-full lg:w-1/4 p-2">
        <Statistics />
      </div>
      <div className="flex flex-col w-full lg:w-3/4 p-2">
        <Sells />
        <Resume />
      </div>
    </section>
  );
}
