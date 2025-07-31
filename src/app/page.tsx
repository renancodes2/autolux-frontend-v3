import { api } from "@/services/api";
import { Hero } from "./_components/hero";
import { VehicleListing } from "@/lib/types/VehicleListing.type";
import { ListVehicles } from "./_components/listVehicles";

async function getVehicles(){
  try {
    const response = await api.get("/vehicles");

    return response.data;
  }catch(err) {
    console.log(err)
  }
}

export default async function Home(){

  const vehicles: VehicleListing[] = await getVehicles();


  return (
    <>
      <Hero />
      <h2 className="text-2xl text-center mt-4 font-bold">Veja Alguns que estão disponivel na loja</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 max-w-7xl gap-2 mx-auto mt-10">
        {vehicles && vehicles.map((item) => (
          <ListVehicles key={item.id} data={item}/>
        ))}
      </div>
    </>
  );
}
