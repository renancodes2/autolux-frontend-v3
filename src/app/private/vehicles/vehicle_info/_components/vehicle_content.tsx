import { VehicleDetails } from "@/lib/types/vehicleDetails"
import Image from "next/image";

interface VehicleContentProps {
  data: VehicleDetails;
}

export function VehicleContent({ data }: VehicleContentProps){
  console.log(data?.imageUrls[0])
  return (
    <div className="flex items-center justify-center">
      <section className="flex flex-col md:flex-row mt-15 gap-5">
        <div className="relative w-[600px] h-96">
            <Image
              src={data.imageUrls[0]}
              alt="logo"
              layout="fill"
              objectFit="cover"
              className="rounded-md shadow-md w-full"
            />
        </div>
        <div>
          <h2>Ford Ranger</h2>
        </div>
      </section>
    </div>
  )
}