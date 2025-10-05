"use client"

import { FiStar } from "react-icons/fi"

export function Reviews(){
  return (
    <div>
      <h2 className="text-3xl text-center">O Que Dizem Nossos Clientes</h2>
      <div className="flex items-center justify-center mt-10">
        <FiStar size={35} color="#f8d12a"/>
        <span className="text-2xl text-blue-800 font-bold pr-2">4.8</span>
        <span className="text-gray-600">/ 5.0 (Baseado em 450 avaliações)</span>
      </div>

      <div className="mt-10 flex flex-col items-center justify-center md:flex-row  gap-4">
        <div className="max-w-md  bg-[#fff] p-3 rounded-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FiStar size={17} color="#f8d12a"/>
              <FiStar size={17} color="#f8d12a"/>
              <FiStar size={17} color="#f8d12a"/>
              <FiStar size={17} color="#f8d12a"/>
              <FiStar size={17} color="#f8d12a"/>
            </div>

            <p className="italic">
              Modelo Esportivo S90
            </p>
          </div>

          <p className="mt-4 text-gray-600">
            Serviço impecável! O processo de financiamento foi rápido e o carro é sensacional. Recomendo a AutoPremium!
          </p>

          <p className="font-bold text-blue-800 pt-3"> - Renan.</p>

        </div>
        <div className="max-w-md  bg-[#fff] p-3 rounded-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FiStar size={17} color="#f8d12a"/>
              <FiStar size={17} color="#f8d12a"/>
              <FiStar size={17} color="#f8d12a"/>
              <FiStar size={17} color="#f8d12a"/>
              <FiStar size={17} color="#f8d12a"/>
            </div>

            <p className="italic">
              Modelo Esportivo S90
            </p>
          </div>

          <p className="mt-4 text-gray-600">
            Serviço impecável! O processo de financiamento foi rápido e o carro é sensacional. Recomendo a AutoPremium!
          </p>

          <p className="font-bold text-blue-800 pt-3"> - Renan.</p>

        </div>
      </div>
    </div>
  )
}