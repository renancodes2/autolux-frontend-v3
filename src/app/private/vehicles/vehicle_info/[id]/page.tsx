
import { use } from 'react';
import { getVehicleDetails } from '../get_vehicles/get_vehicles';
import { VehicleDetails } from '@/lib/types/vehicleDetails';
import { VehicleContent } from '../_components/vehicle_content';

export default function VehicleInfo({ params }: { params: { id: string } }) {
  const { id } = params;
  
  const vehicle: VehicleDetails =  use(getVehicleDetails(id));


  return <VehicleContent data={vehicle} />
}
