import { useState } from "react";
import { data } from "./data";
import HotelList from "./HotelList";
import "./App.css";

function App() {
  const [hotels, setHotels] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");

  const removeHotel = (id) => {
    setHotels((prev) => prev.filter((item) => item.id !== id));
  };

  // Фильтрация отелей по поиску
  const filteredHotels = hotels.filter((item) =>
    item.hotelName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="container">
        <h1>NYC TOP {hotels.length} HOTELS</h1>
        <input
          type="text"
          placeholder="Search hotels..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <HotelList hotels={filteredHotels} removeHotel={removeHotel} />

      <div className="container">
        <button className="btn clear-btn" onClick={() => setHotels([])}>
          Clear All
        </button>
      </div>
    </div>
  );
}

export default App;


