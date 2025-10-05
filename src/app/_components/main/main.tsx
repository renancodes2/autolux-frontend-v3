import { VehicleDetails } from "@/lib/types/vehicleDetails";
import { ListVehicles } from "./listVehicles";
import { WhyBuyHere } from "./whyBuyHere";
import { FiShield } from "react-icons/fi";
import { FaHandshake, FaKey } from "react-icons/fa";
import { Reviews } from "./reviews";

interface MainProps {
  vehicles: VehicleDetails[];
}

export function Main({ vehicles }: MainProps) {
  return (
    <>
      <section>
        <h2 className="text-2xl text-center mt-4 font-bold">
          Veja Alguns que estão disponíveis na loja
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl gap-4 mx-auto mt-10">
          {vehicles && vehicles.map((item) => (
            <ListVehicles key={item.id} data={item} />
          ))}
        </div>
      </section>


      <section className="max-w-7xl mx-auto my-10 bg-[#f4f7f9]">
        <h2 className="text-center text-3xl">Qual é a vantagem de comprar um carro zero?</h2>

           
        <div className="max-w-5xl mx-auto mt-10">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between bg-[#f1f1f1] p-2">
            <WhyBuyHere
              title="Garantia Total" 
              description="Até 5 anos de garantia de fábrica para total tranquilidade" 
              icon={<FiShield size={50} color="#1447e6" />} 
            />
            <WhyBuyHere 
              title="Financiamento fácil"
              description="Taxas reduzidas de aprovação de créditos em até 24 horas"
              icon={<FaHandshake size={50} color="#1447e6" />} 
            />
            <WhyBuyHere 
              title="Test driv Grátis" 
              description="Sinta o carro antes de comprar agende seu teste drive sem custo" 
              icon={<FaKey size={50} color="#1447e6" />} 
            />
          </div>
        </div>
      </section>

      <section className="my-10">
        <Reviews />
      </section>

      <section className="location-section mt-5 max-w-7xl mx-auto" id="contato">
        <h2 className="text-center text-xl font-semibold mb-4">
          Visite Nossa Concessionária
        </h2>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15354.75704153913!2d-47.925577600000005!3d-15.7954546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3978a3d1b827%3A0x6d3e85d9c22d71d3!2sBras%C3%ADlia%2C%20DF!5e0!3m2!1spt-BR!2sbr!4v1633095646199!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </>
  );
}
