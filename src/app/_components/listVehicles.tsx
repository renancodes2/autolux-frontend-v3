
import { VehicleListing } from "@/lib/types/VehicleListing.type";
import { formatLocation } from "@/utils/format/formatLocation";
import { formatCurrency } from "@/utils/format/formatPrice";
import Image from "next/image";

interface VehiclesProps {
  data: VehicleListing;
}

export function ListVehicles({ data }: VehiclesProps){

  return (
    <div className="shadow-md p-3 rounded-md max-w-80 hover:scale-105 duration-300 cursor-pointer bg-gray-50">
      <Image
        src={data.imageUrls[0]}
        alt="logo"
        className="w-full max-h-[197px] object-cover"
      />
      <h2 className="pt-1 pb-2 font-medium">{data.name}</h2>
      <p className="font-medium mt-1">{formatCurrency(Number(data.price))}</p>
      <div className="flex mt-1 items-center justify-between border-b-1 border-slate-200">
        <p>{formatLocation(data.transmission)}</p>
        <p>Ver detalhes</p>
      </div>
      <p className="mt-1"> {formatLocation(data.city)} - {formatLocation(data.state)} - {formatLocation(data.country)}</p>

    </div>
  )
}