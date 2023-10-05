import Image from "next/image";
import React from "react";
import { images } from "@/utils/images";

export const Logo = () => {
  return (
    <div className="flex justify-center items-center w-10 h-10 rounded-full border-2 border-cyan-400 overflow-hidden">
      <Image src={images.logo} alt="logo" className="object-cover scale-150"/>
    </div>
  );
};
