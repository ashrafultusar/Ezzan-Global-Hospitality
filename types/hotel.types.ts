// TypeScript interfaces for Hotel and Room data

export interface IHotel {
    _id: string;
    name: string;
    description: string;
    location: string;
    image: string;
    stars: number;
    tags: string[];
    createdAt: string;
    updatedAt: string;
}

export interface IRoom {
    _id: string;
    title: string;
    hotelId: string | IHotel;
    description: string;
    price: number;
    area: number;
    capacity: number;
    amenities: string[];
    bedType: string;
    images: string[];
    createdAt: string;
    updatedAt: string;
}
