import { api } from "@/services/api";
import { Hero } from "./_components/hero/hero";
import { VehicleDetails } from "@/lib/types/vehicleDetails";
import { Footer } from "./_components/footer/footer";
import { Main } from "./_components/main/main";
import { getInitialUser } from "@/lib/authServer";

async function getVehicles(){
  try {
    const response = await api.get("/vehicles");

    return response.data;
  }catch(err) {
    console.log(err)
  }
}

export default async function Home(){

  const vehicles: VehicleDetails[] = await getVehicles();
    const user = await getInitialUser();
  
    console.log("this is the name user" + user?.name)

  return (
    <>
      <Hero />
      <div className="max-w-7xl mx-auto">
        <Main vehicles={vehicles} />
      </div>
      <Footer />
    </>
  );
}
