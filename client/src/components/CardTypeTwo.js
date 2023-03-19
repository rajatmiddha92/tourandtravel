import React from "react";
import "../styles/CardTypeTwo.css";
import StarIcon from "@mui/icons-material/Star";

function CardTypeTwo(props) {
  const customStyling = {
    background: `url("${props.url}")`,
    backgroundSize: "100% 68%",
    backgroundRepeat: "no-repeat",
    backgroundColor: "transparent",
    width: "100%",
    height: "100%",
  };

  return (
    <div id="card-two">
      <button id="card-btn" style={customStyling}>
        <div id="cb-two">
          <h2 id="place">{props.place}</h2>
          <p id="address">{props.address}</p>
          <div id="star-exp">
            <p id="star">
              <StarIcon id="star-icon" />
              {props.rating} (1.5k review)
            </p>
            <button type="button" id="exp-btn">
              Explore More
            </button>
          </div>
        </div>
      </button>
    </div>
  );
}

export default CardTypeTwo;
