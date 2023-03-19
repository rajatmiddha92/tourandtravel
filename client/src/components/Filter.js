import React, { useEffect } from "react";
import "../styles/Filter.css";
import CardTypeOne from "./CardTypeOne";
import data from "../data.js";
import CircleIcon from "@mui/icons-material/Circle";


function Filter() {
  const [bannerURL, setBannerURL] = React.useState([]);
  const [selectedLoc, setLoc] = React.useState("Maldives");
  const customStyling = {
    color: "#0081B4",
  };
  useEffect(() => {
    fetch("https://tourandtravel.onrender.com/data")
      .then((Response) => Response.json())
      .then((data) => {
        setBannerURL(data);
      });
  }, []);

  function handleClick(event) {
    console.log(event.target.value);
    setLoc(event.target.value);
  }
  return (
    <div id="filter-div">
      <h2>Best Packages For You</h2>
      <p>
        This is a unique experience on ship, sea and land, exploring different
        corals islands of Lakshadweep
      </p>
      <div id="fbtn-div">
        <button
          id="first-btn"
          className="filter-btn"
          type="button"
          onClick={handleClick}
          value="Maldives"
          autoFocus
          style={{ outline: "none" }}
        >
          Maldives
        </button>
        <button
          className="filter-btn"
          type="button"
          onClick={handleClick}
          value="Samudram"
        >
          Samudram
        </button>
        <button
          className="filter-btn"
          type="button"
          onClick={handleClick}
          value="Cordelia"
        >
          Cordelia
        </button>
        <button
          className="filter-btn"
          type="button"
          onClick={handleClick}
          value="Agatti"
        >
          Agatti
        </button>
        <button
          id="last-btn"
          className="filter-btn"
          type="button"
          onClick={handleClick}
          value="More"
        >
          More
        </button>
      </div>
      <div className="test">
        {bannerURL.map((item) => {
          if (selectedLoc === "More" || selectedLoc === "All") {
            return (
              <CardTypeOne
                key={item.id}
                id={item.id}
                url={item.url}
                place={item.place}
                price={item.price}
                rating={item.rating}
                address={item.address}
              />
            );
          }
          return (
            item.location === selectedLoc && (
              <CardTypeOne
                key={item.id}
                id={item.id}
                url={item.url}
                place={item.place}
                price={item.price}
                rating={item.rating}
                address={item.address}
              />
            )
          );
        })}
      </div>
      <div
        id="slide"
        style={
          selectedLoc === "More" || selectedLoc === "All"
            ? { display: "none" }
            : { display: "" }
        }
      >
        <button
          onClick={handleClick}
          type="button"
          className="circle-btn"
          value="Maldives"
        >
          <CircleIcon
            style={
              selectedLoc === "Maldives" ? customStyling : { color: "white" }
            }
            className="circle-icon"
          />
        </button>
        <button
          onClick={handleClick}
          type="button"
          className="circle-btn"
          value="Samudram"
        >
          <CircleIcon
            style={
              selectedLoc === "Samudram" ? customStyling : { color: "white" }
            }
            className="circle-icon"
          />
        </button>
        <button
          onClick={handleClick}
          type="button"
          className="circle-btn"
          value="Cordelia"
        >
          <CircleIcon
            style={
              selectedLoc === "Cordelia" ? customStyling : { color: "white" }
            }
            className="circle-icon"
          />
        </button>
        <button
          onClick={handleClick}
          type="button"
          className="circle-btn"
          value="Agatti"
        >
          <CircleIcon
            style={
              selectedLoc === "Agatti" ? customStyling : { color: "white" }
            }
            className="circle-icon"
          />
        </button>
      </div>
      <button
        id="dscvr"
        style={
          selectedLoc === "More" || selectedLoc === "All"
            ? { display: "none" }
            : { display: "" }
        }
        type="button"
        onClick={() => {
          setLoc("All");
        }}
      >
        Discover More
      </button>
    </div>
  );
}

export default Filter;
