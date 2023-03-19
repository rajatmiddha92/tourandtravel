import React from "react";
import "../styles/CardTypeOne.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarIcon from "@mui/icons-material/Star";

function CardTypeOne(props) {
  const customStyling = {
    background: `url("${props.url}")`,
    backgroundSize: "100% 68%",
    backgroundRepeat: "no-repeat",
    backgroundColor: "white",
    width: "100%",
    height: "100%",
  };

  return (
    <div id="card">
      <button id="card-btn" style={customStyling}>
        <div id="cardBody">
          <div id="loc-star">
            <h2 id="place">
              <LocationOnIcon id="loc" />
              {props.place}
            </h2>
            <p id="star">
              <StarIcon id="star-icon" />
              {props.rating}
            </p>
          </div>
          <p id="address">{props.address}</p>
          <div id="book">
            <button type="button" id="book-btn">
              Book Now
            </button>
          </div>
        </div>
      </button>
    </div>
  );
}

export default CardTypeOne;
