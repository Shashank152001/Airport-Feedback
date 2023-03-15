import "./FlightDetailsPage.css";
import React, { useEffect, useState, useContext } from "react";
import { Context } from "../../App";
import axios from "axios";
import FlightIcon from "@mui/icons-material/Flight";

const FlightDetailsPage = () => {
  const { loggedInDetails } = useContext(Context);
  const [flightData, setFlightData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: "GET",
          url: `https://aerodatabox.p.rapidapi.com/flights/number/${loggedInDetails.flightNumber}`,
          params: { withAircraftImage: "false", withLocation: "false" },
          headers: {
            "X-RapidAPI-Key":
              "c3d85fb701mshbf4b2c7ff5b7fa2p1027f1jsn118f335c9587",
            "X-RapidAPI-Host": "aerodatabox.p.rapidapi.com",
          },
        };
        const data = await axios.request(options);
        //console.log(data.data[0]);
        if (data.data[0]) {
          var dept = new Date(
            data.data[0].departure.scheduledTimeUtc
          ).toLocaleString();
          var arr = new Date(
            data.data[0].arrival.scheduledTimeUtc
          ).toLocaleString();
          const requiredData = {
            arrivalAirportName: data.data[0].arrival.airport.name + " Airport",
            departureAirportName:
              data.data[0].departure.airport.name + " Airport",
            airlineName: data.data[0].airline.name,
            departureTime: dept,
            arrivalTime: arr,
            flightNumber: data.data[0].number,
            flightStatus: data.data[0].status,
            aircraftModel: data.data[0].aircraft.model,
          };
          setFlightData(requiredData);
        }
      } catch (err) {
        console.log(err);
      }
    };
    if (loggedInDetails.userType === "user") {
      fetchData();
    }
  }, [loggedInDetails]);

  return (
    <div className="flight-details-main-div">
      <div className="flight-details-container">
        <div className="flight-details-element">
          <h3>Airline Name</h3>
          <p>{flightData.airlineName}</p>
        </div>
        <div className="flight-details-element">
          <h3>Aircraft Model</h3>
          <p>{flightData.aircraftModel}</p>
        </div>
        <div className="flight-details-element">
          <h3>Flight Number</h3>
          <p>{flightData.flightNumber}</p>
        </div>
      </div>

      <div
        className="flight-details-container"
        style={{ flexDirection: "row", justifyContent: "center", gap: "30px" }}
      >
        <div className="flight-important-div">
          <div className="flight-important">
            <h1>{flightData.departureAirportName} </h1>
            <FlightIcon className="flight-arrow" />
            <h1>{flightData.arrivalAirportName}</h1>
          </div>
        </div>
      </div>

      <div className="flight-details-container">
        <div className="flight-details-element">
          <h3>Departure</h3>
          <p>{flightData.departureTime}</p>
        </div>
        <div className="flight-details-element">
          <h3>Arrival</h3>
          <p>{flightData.arrivalTime}</p>
        </div>
      </div>
    </div>
  );
};

export default FlightDetailsPage;
