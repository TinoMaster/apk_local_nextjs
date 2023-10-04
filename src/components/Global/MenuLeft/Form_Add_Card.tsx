import React from "react";

export const Form_Add_Card = () => {
  return (
    <div className="flex flex-wrap bg-white/5 p-2 shadow-md rounded-lg">
      <label className="font-serif w-1/4 text-center py-2" htmlFor="">
        Id:
      </label>
      <input
        name="id"
        className="w-3/4 bg-transparent shadow-inner shadow-black/20 rounded-lg p-2 focus:outline-none"
        type="text"
      />
      <label className="font-serif w-1/4 text-center py-2" htmlFor="">
        Valor:
      </label>
      <input
        name="value"
        className="w-3/4 bg-transparent shadow-inner shadow-black/20 rounded-lg p-2 focus:outline-none"
        type="number"
      />
      <div className="flex w-full justify-center pt-2">
        <button className="py-1 px-2 mx-1 bg-white/5 rounded-lg shadow-md hover:bg-red-400 transition-colors">
          Cancelar
        </button>
        <button className="py-1 px-2 mx-1 bg-white/5 rounded-lg shadow-md hover:bg-green-400 transition-colors">
          Añadir
        </button>
      </div>
    </div>
  );
};
