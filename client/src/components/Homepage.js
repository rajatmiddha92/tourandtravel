import React, { useEffect } from "react";
import "../styles/Homepage.css";
import Filter from "./Filter";
import CardTypeTwo from "./CardTypeTwo";
import ClientCard from "./ClientCard";
import ExploreIcon from "@mui/icons-material/Explore";
import SendIcon from "@mui/icons-material/Send";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import AddIcon from "@mui/icons-material/Add";
import CircleIcon from "@mui/icons-material/Circle";
import data from "../data";

function Homepage() {
  const [selectedLoc, setLoc] = React.useState("All");
  const [currentIndex, setCurrentIndex] = React.useState("2");
  const [bannerURL, setBannerURL] = React.useState([]);
  const customStyling = {
    color: "#0081B4",
  };
  function handleChange(event) {
    console.log(event.target.value);
    setLoc(event.target.value);
  }
  function handleClick(event) {
    console.log(event.target.value);
    setCurrentIndex(event.target.value);
  }

  useEffect(() => {
    fetch("http://127.0.0.1:5000/data")
      .then((Response) => Response.json())
      .then((data) => {
        setBannerURL(data);
      });
  }, []);

  return (
    <div id="homepage">
      <a href="https://www.golakshadweep.com/#/">
        <button id="link-btn" type="button">
          <span id="visit">
            Visit <ExploreIcon id="explore-icon" />
          </span>
        </button>
      </a>
      <div id="hp-content">
        <h1 id="hp-txt">
          The Exotic
          <br />
          <span id="ld">Lakshdweep</span>
          <br />
          Islands
        </h1>
        <button id="guy-btn" type="button">
          <AirplanemodeActiveIcon id="plane-icon" />
          <span id="jakarta">Jakarta-Bali</span>{" "}
        </button>
        <img
          id="guy"
          src={bannerURL[4]}
          height="300"
          width="320"
          alt="homepage-img"
        ></img>
      </div>
      <a href="#packages">
        <button id="dscvr" type="button">
          Discover Now
        </button>
      </a>
      <div className="FilterDiv">
        <h3>Where are you flying?</h3>
        <div className="FiltersNav">
          <fieldset className="filterItems">
            <legend className="filterLabel">From - To</legend>
            <select onChange={handleChange} value={selectedLoc} id="loc">
              {bannerURL.map((item,index) => {
                return <option key={index} value={item.location}>{item.location}</option>;
              })}
            </select>
          </fieldset>

          <fieldset className="filterItems">
            <legend className="filterLabel">Trip</legend>
            <select onChange={handleChange} value={selectedLoc} id="loc">
              <option value="1">Return</option>
              <option value="2">One Way</option>
            </select>
          </fieldset>

          <fieldset className="filterItems">
            <legend className="filterLabel">Depart - Return</legend>
            <input className="when" type="date"></input>
            <br />
            <input className="when" type="date"></input>
          </fieldset>

          <fieldset className="filterItems">
            <legend className="filterLabel" htmlFor="when">
              Passenger - Class
            </legend>
            <select onChange={handleChange} value={selectedLoc} id="loc">
              <option value="1">1 Passenger, Economy</option>
              <option value="2">4 Passengers, First Class</option>
            </select>
          </fieldset>
        </div>
        <div id="promo">
          <button id="add" className="promo-btns" type="submit">
            <AddIcon id="add-icon" />
            Add Promo Code
          </button>
          <button id="show-flights" className="promo-btns" type="submit">
            <SendIcon id="paper-plane" />
            Show Flights
          </button>
        </div>
      </div>
      <section id="first">
        <Filter />
      </section>
      <section id="second">
        <h2>Island Stays</h2>
        <p>
          One can choose from a variety of beautiful coral islands which offers
          different staying experiences from thatched huts to luxurious modern
          properties. Every island offers a wider range of water sports and
          beach activities for you to enjoy.
        </p>
        <div className="test">
          {bannerURL.map((item, index) => {
            return (
              index <= 5 && (
                <CardTypeTwo
                  key={item.id}
                  url={item.url}
                  place={item.place}
                  address={item.address}
                  rating={item.rating}
                />
              )
            );
          })}
        </div>
      </section>
      <div id="cf-container">
        <div id="cf">
          <div id="cf-text">
            <h2>
              Get Ready to Explore The World <br /> With Us.
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. <br />
              These cases are perfectly simple and easy.{" "}
            </p>
          </div>
          <div id="continents"></div>
          <button id="contact-us" type="button">
            Contact Us
          </button>
        </div>
      </div>
      <section id="third">
        <h2>
          What Our Clients Say <br />
          About Us
        </h2>
        <div className="test">
          {bannerURL.map((item, index) => {
            return (
              index <= parseInt(currentIndex) &&
              index > parseInt(currentIndex) - 3 && (
                <ClientCard
                  key={item.id}
                  personUrl={item.personUrl}
                  name={item.name}
                  place={item.place}
                  address={item.address}
                />
              )
            );
          })}
        </div>
        <div id="slide">
          <button
            type="button"
            onClick={handleClick}
            className="circle-btn"
            value="2"
          >
            <CircleIcon
              style={currentIndex === "2" ? customStyling : { color: "white" }}
              className="circle-icon"
            />
          </button>
          <button
            type="button"
            onClick={handleClick}
            className="circle-btn"
            value="5"
          >
            <CircleIcon
              style={currentIndex === "5" ? customStyling : { color: "white" }}
              className="circle-icon"
            />
          </button>
          <button
            type="button"
            onClick={handleClick}
            className="circle-btn"
            value="8"
          >
            <CircleIcon
              style={currentIndex === "8" ? customStyling : { color: "white" }}
              className="circle-icon"
            />
          </button>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
