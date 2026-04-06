import HotelCard from "./HotelCard";

function HotelList({ hotels, removeHotel }) {
  return (
    <div>
      {hotels.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} removeHotel={removeHotel} />
      ))}
    </div>
  );
}

export default HotelList;