

export function Hero(){
  return (
    <section 
      className="w-full h-[400px] md:h-[600px] flex items-center bg-gray-100 flex-col bg-cover bg-center relative"
      style={{ backgroundImage: "url('/logo2.jpg')" }}
    > 

    <div className="absolute inset-0 bg-black opacity-40"></div>

      <h2 className="mt-10 md:mt-20 text-5xl z-10 text-white font-bold">Auto Lux</h2>
      <h2 className="text-4xl font-bold mt-5 mb-20 text-white z-10">Qualidade e confiança sobre rodas</h2>
      <div className="shadow-md max-w-5xl w-full max-h-60 h-full rounded-md">
        <h2 className="text-center text-lg font-bold mt-4">Emcontre seu carros</h2>
        <div className="flex h-full">

          <div className="flex w-full h-full gap-2 px-4 mt-10">
            <select name="" id="" className="w-[50%] outline-none border-1 border-slate-400 h-10"> 
              <option value="">Modelo</option>
              <option value="">Carro 1</option>
            </select>
            <select name="" id="" className="w-[50%] h-10 outline-0 border-1 border-slate-400">
              <option value="">Carro 2</option>
            </select>
            </div>
            </div>
          </div>
        <div>
      </div>
    </section>
  )
}