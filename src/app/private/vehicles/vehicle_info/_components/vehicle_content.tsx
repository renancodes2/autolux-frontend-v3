import { VehicleDetails } from "@/lib/types/vehicleDetails"

interface VehicleContentProps {
  data: VehicleDetails;
}

export function VehicleContent({ data }: VehicleContentProps){
  return (
    <div>
      <h2>{data?.name}</h2>
    </div>
  )
}