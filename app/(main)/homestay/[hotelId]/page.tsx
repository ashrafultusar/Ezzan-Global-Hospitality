import { notFound } from "next/navigation";
import { getHotelById } from "@/lib/data/hotel";
import { getRoomsByHotelId } from "@/lib/data/room";
import HotelRoomsClient from "@/components/main/homeStay/hotelRoomsPage/HotelRoomsPage";

export default async function HotelDetailPage({ params }: { params: Promise<{ hotelId: string }> }) {
  const { hotelId } = await params;

  const hotelResult = await getHotelById(hotelId);
  if (!hotelResult.success || !hotelResult.hotel) return notFound();

  const roomsResult = await getRoomsByHotelId(hotelId);

  return (
    <div>
      <HotelRoomsClient
        hotel={hotelResult.hotel}
        rooms={roomsResult.rooms || []}
        hotelId={hotelId}
      />
    </div>
  );
}
