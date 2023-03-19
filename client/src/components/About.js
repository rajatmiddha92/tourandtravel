import React, { useEffect } from "react";
import CardTypeTwo from "./CardTypeTwo";
import "../styles/About.css";
import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import data from "../data";

function About() {
  const [Packages, setPackages] = React.useState("");
  const [bannerURL, setBannerURL] = React.useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/data")
      .then((Response) => Response.json())
      .then((data) => {
        setBannerURL(data);
      });
  }, []);


  return (
    <div id="About">
      <div id="islands-container">
        <div id="islands-header">
          <div id="islands">
            <h1>Islands</h1>
            <TextField
              id="search-bar"
              label="Find your adventure"
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div>
            <img
              id="island-img"
              src="https://www.pngkey.com/png/full/1008-10086479_tour-boat-png-ferry-boat-png.png"
              height="300"
              width="400"
            ></img>
          </div>
        </div>
      </div>
      <div id="pckgs">
        <h2>Best Packages For You</h2>
        <p>
          This is a unique experience on ship, sea and land, exploring different
          corals islands of Lakshadweep
        </p>
        <div className="test">
          {bannerURL.map((item, index) => {
            if (Packages === "All") {
              return (
                <CardTypeTwo
                  key={item.id}
                  url={item.url}
                  place={item.place}
                  address={item.address}
                  rating={item.rating}
                />
              );
            }
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
        <button
          id="dscvr"
          style={
            Packages === "All"
              ? { display: "none" }
              : { display: "", marginTop: "4em" }
          }
          type="button"
          onClick={() => {
            setPackages("All");
          }}
        >
          Discover More
        </button>
      </div>
      <div id="dscvr-bnr">
        <div id="dbnr-txt">
          <h2>
            Discover Beautiful Places <br />
            with Gol
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Pellentesque sapien arcu, luctus sit amet enim ac, rutrum finibus
            risus.
            <br /> Nullam pellentesque massa vel lacus posuere fringilla.
          </p>
          <ul>
            <li>﹥ Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>﹥ Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>﹥ Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>
          <button id="contact-us-abt" type="button">
            Contact Us
          </button>
        </div>
        <div>
          <img
            id="d-img"
            src="https://cdn.britannica.com/32/1632-050-940FB0E6/Beach-resort-Bangaram-Island-India-Lakshadweep.jpg"
            width="500"
            height="400"
          ></img>
        </div>
      </div>
      <div id="mail-listB">
        <h2>Get Every Tour & Packages Update</h2>
        <div id="ip-email">
          <input
            id="email-form"
            placeholder="Enter your email"
            type="email"
          ></input>{" "}
          <button id="submit" type="submit">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
