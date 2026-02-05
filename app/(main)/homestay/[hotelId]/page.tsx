import HotelRoomsPage from '@/components/main/homeStay/hotelRoomsPage/HotelRoomsPage'

export default function page({ params }: { params: Promise<{ hotelId: string }> }) {
  return (
    <div>
        <HotelRoomsPage params={params}/>
    </div>
  )
}
