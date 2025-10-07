
import { getVehicleDetails } from '../get_vehicles/get_vehicles';
import { VehicleDetails } from '@/lib/types/vehicleDetails';
import { VehicleContent } from '../_components/vehicle_content';

export default async function VehicleInfo({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  
  const vehicle: VehicleDetails = await getVehicleDetails(id);


  return <VehicleContent data={vehicle} />
}
