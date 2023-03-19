import React from "react";
import "../styles/ClientCard.css";
import StarIcon from "@mui/icons-material/Star";

function ClientCard(props) {
  // const customStyling={
  //     background: `url("${props.url}")`,
  //     backgroundSize: "100% 68%",
  //     backgroundRepeat: "no-repeat",
  //     backgroundColor: "transparent",
  //     width:"100%",
  //     height:"100%"
  // }

  return (
    <div id="client-card">
      <button id="client-btn">
        <div>
          <img
            id="client-img"
            src={props.personUrl}
            height="100"
            width="100"
          ></img>
          <h2 id="name">{props.name}</h2>
          <h3 id="place">{props.place}</h3>
        </div>
        <div id="cb-client">
          <p>{props.address}</p>
          <div id="star-ratings">
            <p id="star">
              <StarIcon id="star-rating" />
            </p>
            <p id="star">
              <StarIcon id="star-rating" />
            </p>
            <p id="star">
              <StarIcon id="star-rating" />
            </p>
            <p id="star">
              <StarIcon id="star-rating" />
            </p>
            <p id="star">
              <StarIcon id="star-rating" />
            </p>
          </div>
        </div>
      </button>
    </div>
  );
}

export default ClientCard;
