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
      var total=0;
      for (let index = 0; index < data.data.length; index++) {
        total+=data.data[index].rating;
      }
      // setFoodFeedback(total/n)
      setFoodFeedback((total/n).toFixed(2))
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
    var total1=0;
      for (let index = 0; index < data.data.length; index++) {
        total1+=data.data[index].rating;
      }
    setAirFeedback((total1/n).toFixed(2))
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
  var total2=0;
      for (let index = 0; index < data.data.length; index++) {
        total2+=data.data[index].rating;
      }
  setBagFeedback((total2/n).toFixed(2))
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
  var total3=0;
      for (let index = 0; index < data.data.length; index++) {
        total3+=data.data[index].rating;
      }
  setLoungeFeedback((total3/n).toFixed(2))
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
  var total4=0;
      for (let index = 0; index < data.data.length; index++) {
        total4+=data.data[index].rating;
      }
  setWashFeedback((total4/n).toFixed(2))
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
  var total5=0;
      for (let index = 0; index < data.data.length; index++) {
        total5+=data.data[index].rating;
      }
  setCheckFeedback((total5/n).toFixed(2))
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
  var total6=0;
      for (let index = 0; index < data.data.length; index++) {
        total6+=data.data[index].rating;
      }
  setHelpFeedback((total6/n).toFixed(2))
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
  var total7=0;
      for (let index = 0; index < data.data.length; index++) {
        total7+=data.data[index].rating;
      }
  setStoreFeedback((total7/n).toFixed(2))
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
            ? "url('Images/airport-2.jpeg')"
            : "url('Images/airport-1.jpg')"
      }}
    >
      {loggedInDetails.userType!=="user"?
      <div
       className="feedback-report-div">
      <h3 style={{color:"red"}}>Feedback of All Our Services</h3>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center", marginTop:"10px",marginLeft:"10px",width:"500px"}}>{loggedInDetails.userType !== "user"? foodfeedback &&  bagfeedback  && airfeedback && loungfeedback?
      <>
      
      <p style={{color:"brown",width:"140px",fontSize:"20px",fontWeight:'bold',marginRight:'15px'}}>FoodCourt:{foodfeedback}</p>
      <p style={{color:"brown",width:"140px",fontSize:"20px",fontWeight:'bold',marginRight:'10px'}}>Airline:{airfeedback}</p>
      <p style={{color:"brown",width:"140px",fontSize:"20px",fontWeight:'bold',marginRight:'10px'}}>Baggage:{bagfeedback}</p>
      <p style={{color:"brown",width:"140px",fontSize:"20px",fontWeight:'bold'}}>Lounge:{loungfeedback}</p>
      </>
      : <p></p>: <p></p>  }
      </div>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center", marginTop:"10px",marginLeft:"10px",width:"500px"}}>{loggedInDetails.userType !== "user"? washfeedback &&  checkfeedback && storefeedback && helpfeedback?
      <>
      <p style={{color:"brown",width:"140px",fontSize:"18px",fontWeight:'bold'}}>WashRoom:{washfeedback}</p>
      <p style={{color:"brown",width:"120px",fontSize:"18px",fontWeight:'bold', marginLeft:"10px"}}>CheckIn:{checkfeedback}</p>
      <p style={{color:"brown",width:"200px",fontSize:"18px",fontWeight:'bold',marginLeft:'10px'}}>HelpDesk:{helpfeedback}</p>
      <p style={{color:"brown",width:"140px",fontSize:"18px",fontWeight:'bold'}}>Store:{storefeedback}</p>
      {/* <p style={{color:"white",width:"120px",fontSize:"20px"}}>Baggage:{bagfeedback}</p>
      <p style={{color:"white",width:"120px",fontSize:"20px"}}>Lounge:{loungfeedback}</p> */}
      </>
      : <p></p>: <p></p>  }
      </div>
      </div>
      :
      <></>
    }
      <div>{loggedInDetails.userType === "user"  && <FlightDetailsPage /> }</div>
      
    </div>
  );
}

export default HomePage;
