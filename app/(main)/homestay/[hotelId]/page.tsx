import HotelRoomsPage from "@/components/main/homeStay/hotelRoomsPage/HotelRoomsPage";
import { connectDB } from "@/db/dbConfig";
import Hotel from "@/models/Hotel";
import Room from "@/models/Room";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ hotelId: string }>;
}) {
  const { hotelId } = await params;
  await connectDB();

  const hotel = await Hotel.findById(hotelId);
  if (!hotel) return notFound();

  const rooms = await Room.find({ hotelId: hotelId });

  return (
    <div>
      <HotelRoomsPage
        hotel={JSON.parse(JSON.stringify(hotel))}
        rooms={JSON.parse(JSON.stringify(rooms))}
      />
    </div>
  );
}
