import { Bed } from "lucide-react";
import FormLayout from "@/components/admin/shared/FormLayout";
import RoomForm from "@/components/admin/rooms/RoomForm";
import { getRoomById } from "@/lib/data/room";
import { getHotels } from "@/lib/data/hotel";
import { notFound } from "next/navigation";

interface EditRoomPageProps {
    params: Promise<{ id: string }>;
}

export default async function EditRoomPage({ params }: EditRoomPageProps) {
    const { id } = await params;
    const [roomResult, hotelsResult] = await Promise.all([
        getRoomById(id),
        getHotels()
    ]);

    if (!roomResult.success || !roomResult.room) {
        notFound();
    }

    return (
        <FormLayout
            title="Edit Room"
            description="Update room details"
            backUrl="/izzan-staff-portal/rooms"
            icon={<Bed size={28} />}
        >
            <RoomForm mode="edit" initialData={roomResult.room} hotels={hotelsResult.hotels || []} />
        </FormLayout>
    );
}
