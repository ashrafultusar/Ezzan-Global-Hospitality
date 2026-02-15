import { Plus, Bed, Edit, MapPin, Ruler, Users, Building } from "lucide-react";
import { getRooms } from "@/lib/data/room";
import Link from "next/link";
import Image from "next/image";
import DeleteRoomButton from "@/components/admin/rooms/DeleteRoomButton";

const RoomsPage = async () => {
    const { rooms } = await getRooms();

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div>
                    <h1 className="text-xl sm:text-2xl font-bold text-gray-800 flex items-center gap-2">
                        <Bed className="text-blue-600 shrink-0" size={24} />
                        <span className="truncate">Rooms List</span>
                    </h1>
                    <p className="text-gray-500 text-xs sm:text-sm mt-1">
                        Manage hotel rooms and details
                    </p>
                </div>

                <Link
                    href="/izzan-staff-portal/add-room"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all cursor-pointer border bg-blue-600 border-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-100 "
                >
                    <Plus size={18} /> Add Room
                </Link>
            </div>

            <hr className="mb-8 border-gray-200" />

            {/* Main Content */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {rooms?.map((room: any) => (
                    <div
                        key={room._id}
                        className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all group overflow-hidden flex flex-col"
                    >
                        {/* Room Image Section */}
                        <div className="h-48 w-full relative bg-gray-100 overflow-hidden">
                            {room.images && room.images.length > 0 ? (
                                <Image
                                    src={room.images[0]}
                                    alt={room.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-300">
                                    <Bed size={48} />
                                </div>
                            )}

                            {/* Overlay Actions */}
                            <div className="absolute top-3 right-3 flex gap-2">
                                <Link
                                    href={`/izzan-staff-portal/edit-room/${room._id}`}
                                    className="p-2 bg-white/90 backdrop-blur-sm text-gray-600 hover:text-blue-600 rounded-lg shadow-sm transition"
                                >
                                    <Edit size={16} />
                                </Link>
                                <DeleteRoomButton id={room._id} />
                            </div>

                            {/* Price Badge */}
                            <div className="absolute bottom-3 left-3">
                                <span className="px-3 py-1 bg-black/70 backdrop-blur-md text-white text-xs font-bold rounded-lg shadow-lg">
                                    ${room.price} <span className="text-[10px] font-normal opacity-80">/ night</span>
                                </span>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-5 flex flex-col flex-grow">
                            <div className="mb-3">
                                <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-wider mb-1">
                                    <Building size={12} />
                                    {room.hotelId?.name || "Unknown Hotel"}
                                </div>
                                <h3 className="font-bold text-gray-800 text-lg leading-tight line-clamp-1 mb-2">
                                    {room.title}
                                </h3>

                                {/* Specs Grid */}
                                <div className="grid grid-cols-2 gap-2 mb-3">
                                    <div className="flex items-center gap-1.5 text-gray-500 text-xs bg-gray-50 px-2 py-1.5 rounded-md">
                                        <Ruler size={14} />
                                        <span>{room.area} sq ft</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-gray-500 text-xs bg-gray-50 px-2 py-1.5 rounded-md">
                                        <Users size={14} />
                                        <span>{room.capacity} Guests</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-gray-500 text-xs bg-gray-50 px-2 py-1.5 rounded-md col-span-2">
                                        <Bed size={14} />
                                        <span>{room.bedType}</span>
                                    </div>
                                </div>
                            </div>

                            {room.description && (
                                <p className="text-gray-500 text-sm line-clamp-2 mb-4 italic">
                                    {room.description}
                                </p>
                            )}
                        </div>
                    </div>
                ))}

                {/* Empty State */}
                {rooms.length === 0 && (
                    <div className="col-span-full py-20 text-center bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                        <Bed className="mx-auto text-gray-300 mb-3" size={48} />
                        <p className="text-gray-400 font-medium px-4">
                            No rooms found. Start by adding a room!
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RoomsPage;
