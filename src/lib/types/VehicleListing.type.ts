
export interface VehicleListing {
    id: string;
    name: string;
    model: string;
    description: string;
    price: number;
    year: number;
    km: number;
    color: string | null;
    engine: string | null;
    transmission: string;
    country: string;
    state: string;
    city: string;
    licensePlate: string | null;
    imageUrls: string[];
    available: boolean;
    createdAt: string;
    updatedAt: string;
    sellerId: string;
    categoryId: string;
    brandId: string;
}
