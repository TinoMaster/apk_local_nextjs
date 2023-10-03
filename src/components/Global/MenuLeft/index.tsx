function MenuLeft() {
  return (
    <div className="flex flex-col w-[400px] h-full bg-primary">
      <h1 className="flex h-16 justify-center items-center text-xl font-normal text-violet-500">
        👍 Menu 👍
      </h1>

      {/* Test Ayer, Fondo y add Tarjeta*/}
      <div className="flex flex-col relative shadow shadow-violet-500/20 p-3 bg-slate-200 text-sm">
        <h3 className="self-center text-lg font-serif">Cuadre anterior:</h3>
        <div className="flex justify-between">
          <p className="">Fondo:</p>
          <p className="">👍</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="">Hojas ayer:</p>
          <p className="text-xs">👍</p>
          <p className="">👍</p>
        </div>
        <div className="flex justify-between">
          <p className="">Test color:</p>
          <p className="">👍</p>
        </div>
        <div className="flex justify-between">
          <p className="">Test b/n:</p>
          <p className="">👍</p>
        </div>

        <div className="flex items-center justify-center p-2 m-2 bg-white/5 rounded-lg shadow-md hover:cursor-pointer hover:text-violet-600 transition-all">
          👍
          <p className="pl-2">Añadir tarjeta al cuadre</p>
        </div>

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

        <div className="flex justify-between w-10/12 m-auto items-center relative bg-primary/30 px-2 py-1 rounded-md mb-2">
          <p>👍</p>
          👍
        </div>
      </div>
    </div>
  );
}

export default MenuLeft;
