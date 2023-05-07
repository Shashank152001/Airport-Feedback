import React, { useContext,useState,useEffect } from "react";
import "./HomePage.css";
import { Context } from "../../App";
import FlightDetailsPage from "../FlightDetailsPage/FlightDetailsPage";

function HomePage() {
  const { loggedInDetails } = useContext(Context);
  const[foodfeedback,setFoodFeedback]=useState(null);
  const[airfeedback,setAirFeedback]=useState(null);
  const[bagfeedback,setBagFeedback]=useState(null)
  const[loungfeedback,setLoungeFeedback]=useState(null)
  const[washfeedback,setWashFeedback]=useState(null)
  const[checkfeedback,setCheckFeedback]=useState(null)
  const[helpfeedback,setHelpFeedback]=useState(null)
  const[storefeedback,setStoreFeedback]=useState(null)
  const[airlinefeedback,setAirlineFeedback]=useState(null);

  useEffect(()=>{
      fetch('/api/food/').then((res)=>{ return res.json()}).then((data)=>{console.log(data.data)
        let n =data.data.length;
        console.log(n);
        setFoodFeedback(data.data[n-1].rating)
        console.log(foodfeedback);
        // data.data.map(data=>{
        //   console.log(data.rating/data.length)
        // })
        ;})
  },[])
  useEffect(()=>{
    fetch('/api/airRoute/').then((res)=>{ return res.json()}).then((data)=>{console.log(data.data)
      let n =data.data.length;
      console.log(n);
      setAirFeedback(data.data[n-1].rating)
      console.log(airfeedback);
      // data.data.map(data=>{
      //   console.log(data.rating/data.length)
      // })
      ;})
},[])
useEffect(()=>{
  fetch('/api/bag/').then((res)=>{ return res.json()}).then((data)=>{console.log(data.data)
    let n =data.data.length;
    console.log(n);
    setBagFeedback(data.data[n-1].rating)
    console.log(bagfeedback);
    // data.data.map(data=>{
    //   console.log(data.rating/data.length)
    // })
    ;})
},[])
useEffect(()=>{
  fetch('/api/loun/').then((res)=>{ return res.json()}).then((data)=>{console.log(data.data)
    let n =data.data.length;
    console.log(n);
    setLoungeFeedback(data.data[n-1].rating)
    console.log(loungfeedback);
    // data.data.map(data=>{
    //   console.log(data.rating/data.length)
    // })
    ;})
},[])
useEffect(()=>{
  fetch('/api/wash/').then((res)=>{ return res.json()}).then((data)=>{console.log(data.data)
    let n =data.data.length;
    console.log(n);
    setWashFeedback(data.data[n-1].rating)
    console.log(washfeedback);
    // data.data.map(data=>{
    //   console.log(data.rating/data.length)
    // })
    ;})
},[])
useEffect(()=>{
  fetch('/api/check/').then((res)=>{ return res.json()}).then((data)=>{console.log(data.data)
    let n =data.data.length;
    console.log(n);
    setCheckFeedback(data.data[n-1].rating)
    console.log(checkfeedback);
    // data.data.map(data=>{
    //   console.log(data.rating/data.length)
    // })
    ;})
},[])
useEffect(()=>{
  fetch('/api/help/').then((res)=>{ return res.json()}).then((data)=>{console.log(data.data)
    let n =data.data.length;
    console.log(n);
    setHelpFeedback(data.data[n-1].rating)
    console.log(helpfeedback);
    // data.data.map(data=>{
    //   console.log(data.rating/data.length)
    // })
    ;})
},[])
useEffect(()=>{
  fetch('/api/storess/').then((res)=>{ return res.json()}).then((data)=>{console.log(data.data)
    let n =data.data.length;
    console.log(n);
    setStoreFeedback(data.data[n-1].rating)
    console.log(storefeedback);
    // data.data.map(data=>{
    //   console.log(data.rating/data.length)
    // })
    ;})
},[])
  return (
    <div
      className="homepage-main-div"
      style={{
        backgroundImage:
          loggedInDetails.userType === "user"
            ? "url('Images/airport-2.jpg')"
            : "url('Images/airport-4.jpg')"
      }}
    >{loggedInDetails.userType==="user"?
      <div
       className="feedback-report-div">
      <h3 style={{color:"red"}}>Feedback of All Our Services</h3>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center", marginTop:"10px",marginLeft:"10px",width:"500px"}}>{loggedInDetails.userType === "user"? foodfeedback &&  bagfeedback  && airfeedback && loungfeedback?
      <>
      
      <p style={{color:"brown",width:"140px",fontSize:"20px",fontWeight:'bold',marginRight:'15px'}}>FoodCourt:{foodfeedback}</p>
      <p style={{color:"brown",width:"140px",fontSize:"20px",fontWeight:'bold'}}>Airline:{airfeedback}</p>
      <p style={{color:"brown",width:"140px",fontSize:"20px",fontWeight:'bold'}}>Baggage:{bagfeedback}</p>
      <p style={{color:"brown",width:"140px",fontSize:"20px",fontWeight:'bold'}}>Lounge:{loungfeedback}</p>
      </>
      : <p></p>: <p></p>  }
      </div>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center", marginTop:"10px",marginLeft:"10px",width:"500px"}}>{loggedInDetails.userType === "user"? washfeedback &&  checkfeedback && storefeedback && helpfeedback?
      <>
      <p style={{color:"brown",width:"140px",fontSize:"20px",fontWeight:'bold'}}>WashRoom:{washfeedback}</p>
      <p style={{color:"brown",width:"140px",fontSize:"20px",fontWeight:'bold', marginLeft:"10px"}}>CheckIn:{checkfeedback}</p>
      <p style={{color:"brown",width:"140px",fontSize:"20px",fontWeight:'bold',marginRight:'10px'}}>Help Desk:{helpfeedback}</p>
      <p style={{color:"brown",width:"140px",fontSize:"20px",fontWeight:'bold'}}>Store:{storefeedback}</p>
      {/* <p style={{color:"white",width:"120px",fontSize:"20px"}}>Baggage:{bagfeedback}</p>
      <p style={{color:"white",width:"120px",fontSize:"20px"}}>Lounge:{loungfeedback}</p> */}
      </>
      : <p></p>: <p></p>  }
      </div>
      </div>
      :
      <></>
    }
      <div>{loggedInDetails.userType === "user" && <FlightDetailsPage />  }</div>
      
    </div>
  );
}

export default HomePage;
