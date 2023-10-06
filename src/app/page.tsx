import { Resume } from "@/components/Home/Resume";
import { Sells } from "@/components/Home/Sells";
import { Statistics } from "@/components/Home/Statistics";

export default function Home() {
  return (
    <section className="flex justify-start w-full h-full p-4">
      <div className="w-1/4 p-2">
        <Statistics />
      </div>
      <div className="flex flex-col w-3/4 p-2">
        <Sells />
        <Resume />
      </div>
    </section>
  );
}
