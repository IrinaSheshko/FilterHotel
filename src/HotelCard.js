import { useState } from "react";

function HotelCard({ hotel, removeHotel }) {
  const { id, hotelName, description, image, source } = hotel;
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="card fade-in">
      <h2>{id} - {hotelName}</h2>
      <img src={image} alt={hotelName} />

      <p>
        {expanded ? description : description.substring(0, 200) + "..."}
        <button onClick={() => setExpanded(!expanded)}>
          {expanded ? " Show less" : " Show more"}
        </button>
      </p>

      <p>{source}</p>

      <button className="btn remove-btn" onClick={() => removeHotel(id)}>
        Remove
      </button>
    </div>
  );
}

export default HotelCard;