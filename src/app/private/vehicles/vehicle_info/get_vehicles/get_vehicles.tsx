import { api } from "@/services/api";


export async function getVehicleDetails(id: string) {

  if(!id) return;

  try {
    const response = await api.get(`/vehicles/${id}`);

    return response.data;
  }catch(err) {
    console.log(err)
    return null;
  }
}
