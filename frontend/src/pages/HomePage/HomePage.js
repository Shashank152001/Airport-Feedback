import React, { useContext } from "react";
import "./HomePage.css";
import { Context } from "../../App";
import FlightDetailsPage from "../FlightDetailsPage/FlightDetailsPage";

function HomePage() {
  const { loggedInDetails } = useContext(Context);
  return (
    <div
      className="homepage-main-div"
      style={{
        backgroundImage:
          loggedInDetails.userType === "user"
            ? "url('Images/airport-2.jpg')"
            : "url('Images/airport-4.jpg')"
      }}
    >
      <div>{loggedInDetails.userType === "user"  }</div>
    </div>
  );
}

export default HomePage;
