
import { VehicleDetails } from "@/lib/types/vehicleDetails";
import { formatLocation } from "@/utils/format/formatLocation";
import { formatCurrency } from "@/utils/format/formatPrice";
import Image from "next/image";
import Link from "next/link";

interface VehiclesProps {
  data: VehicleDetails;
}

export function ListVehicles({ data }: VehiclesProps){

  return (
    <div 
      className="shadow-md w-full p-3 rounded-md sm:max-w-80 hover:scale-105 duration-300 cursor-pointer bg-gray-50"
    >
      <Link href={`/private/vehicles/vehicle_info/${data?.id}`}>
        <Image
          src={data.imageUrls[0]}
          alt="logo"
          width={400}
          height={400}
          className="rounded-md shadow-md w-full"
        />
        <h2 className="pt-1 pb-2 font-bold text-[#202020]">{data.name}</h2>
        <p className="font-medium mt-1">{formatCurrency(Number(data.price))}</p>
        <div className="flex mt-1 items-center justify-between border-b-1 border-slate-200">
          <p>{formatLocation(data.transmission)}</p>
          <p>Ver detalhes</p>
        </div>
        <button className="bg-blue-900 w-full px-1 rounded-md text-[#ddd] h-8 font-bold mt-2">
          Ver mais detalhes
        </button>
      </Link>

    </div>
  )
}