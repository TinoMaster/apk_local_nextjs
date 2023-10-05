import React from "react";
import { GiNotebook } from "react-icons/gi";

export const Button_Notes = () => {
  return (
    <div className="flex items-center justify-center w-9 h-9 bg-yellow-500 shadow-md rounded-full overflow-hidden hover:cursor-pointer">
      <GiNotebook className="text-xl text-white"/>
    </div>
  );
};
