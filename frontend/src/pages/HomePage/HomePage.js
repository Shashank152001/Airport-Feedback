import React, { useContext,useState,useEffect } from "react";
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
      {/* {loggedInDetails.userType==="user"?
    <div
     className="feedback-report-div">
    <h3 style={{color:"red"}}>Welcome {loggedInDetails.userName}</h3>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center", marginTop:"10px",width:"500px"}}>{loggedInDetails.userType === "user"?
    <>
      <p style={{fontSize:'20px'}}> 
      <strong>{loggedInDetails.userName}, </strong>
      <br />
      Welcome to the India International Airport this is the application where you can give your valueable feedback for our varoius facilities which we provide to our passengers, you can give your opinion about anything to everything like <strong> Food Court Service, Airline Service , Help Desk service </strong> and many more.
      <br/>
      Your valuable feedback and suggestions will help us to improve our services and can provide best services to fellow passengers.
      </p>
     
    </>
    : <p></p>  }
    </div>
   
    </div>
    :
    <></>
  } */}
      <div>{loggedInDetails.userType === "user"  && <FlightDetailsPage /> }</div>
      
    </div>
  );
}

export default HomePage;
