import { Bed } from "lucide-react";
import FormLayout from "@/components/admin/shared/FormLayout";
import RoomForm from "@/components/admin/rooms/RoomForm";
import { getHotels } from "@/lib/data/hotel";

export default async function AddRoomPage() {
    const { hotels } = await getHotels();

    return (
        <FormLayout
            title="Add New Room"
            description="Create a new room listing"
            backUrl="/izzan-staff-portal/rooms"
            icon={<Bed size={28} />}
        >
            <RoomForm mode="create" hotels={hotels || []} />
        </FormLayout>
    );
}
