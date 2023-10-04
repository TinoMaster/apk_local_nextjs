import React from "react";
import { Form_Add_Card } from "./Form_Add_Card";

export const Section_Card_To_Day = () => {
  return (
    <div className="flex flex-col relative">
      <button className="flex items-center justify-center p-2 m-2 bg-white/5 rounded-lg shadow-md hover:cursor-pointer hover:text-violet-600 transition-all">
        👍 Añadir tarjeta al cuadre
      </button>
      <Form_Add_Card />
    </div>
  );
};
