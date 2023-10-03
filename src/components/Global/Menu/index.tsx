import React from "react";

export const Menu = () => {
  return (
    <div className="flex overflow-hidden sticky h-16 top-0 justify-between z-40 items-center shadow-sm shadow-violet-500/75 bg-primary">
      <div className="flex items-center p-3">
        <div className="mx-2 md:hidden border-white overflow-hidden hover:cursor-pointer hover:border-indigo-400">
          👍
        </div>

        <div className="w-10 mx-2 hidden md:block rounded-full border-2 border-cyan-400 overflow-hidden">
          👍
        </div>

        <div className="flex items-baseline">
          <h2 className="text-gray-50 invisible md:visible font-normal text-sm md:text-base">
            Sueño Virtual
          </h2>
          <span className="text-gray-50 font-extralight invisible md:visible text-xs mx-2">
            1.0.0
          </span>
        </div>
      </div>

      <div className="flex justify-end">
        <div className="flex items-center w-9 mx-4 rounded-full border-2 border-yellow-200 shadow-md bg-white overflow-hidden transition-all hover:cursor-pointer md:hover:scale-105 md:hover:bg-violet-50">
          👍
        </div>

        <div className="w-9 h-9 mr-4 relative rounded-full py-1 border-2 bg-teal-500 border-teal-500 shadow-md overflow-hidden">
          {/* <img className="w-full h-full" src={user.image} alt="Trabajador" /> */}
          <p className="w-full text-center text-white ">prueba</p>
        </div>
      </div>
    </div>
  );
};
