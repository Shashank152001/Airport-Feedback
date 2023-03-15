import React, { useContext } from "react";
import "./FeedbackPage.css";
import { useNavigate } from "react-router-dom";
import { Context } from "../../App";

function FeedbackPage() {
  const navigate = useNavigate();
  const { loggedInDetails, user  } = useContext(Context);

  return (
    <div className="feedback-page-main-div">
      <div style={{ flex: 1 }} className="feedback-page-container-div">
        <a
          href={
            loggedInDetails.userType === "user" || user.type === "user"
              ? "/feedback/foodcourt/1"
              : "/adminFeedback/foodcourt"
          }
          onClick={(e)=>{
            e.preventDefault(); 
            navigate((loggedInDetails.userType === "user" || user.type === "user") ? "/feedback/foodcourt/1": "/adminFeedback/foodcourt")
          }}
          style={{ flex: 1 }}
        >
          <div
            className="feedback-page-elements-div"
            style={{
              backgroundImage: "url('Images/FeedbackPage/foodcourt.jpg')",
            }}
          >
            <div className="elements-title">Food Court</div>
          </div>
        </a>

        <a
          href={
            loggedInDetails.userType === "user" || user.type === "user"
              ? "/feedback/foodcourt/1"
              : "/adminFeedback/foodcourt"
          }
          onClick={(e)=>{
            e.preventDefault(); 
            navigate((loggedInDetails.userType === "user" || user.type === "user") ? "/feedback/baggage/1": "/adminFeedback/baggage")
          }}
          style={{ flex: 1 }}
        >
          <div
            className="feedback-page-elements-div"
            style={{
              backgroundImage: "url('Images/FeedbackPage/baggage.jpg')",
            }}
          >
            <div className="elements-title">Baggage</div>
          </div>
        </a>

        <a
          href={
            loggedInDetails.userType === "user" || user.type === "user"
              ? "/feedback/checkin/1"
              : "/adminFeedback/checkin"
          }
          onClick={(e)=>{
            e.preventDefault(); 
            navigate((loggedInDetails.userType === "user" || user.type === "user") ? "/feedback/checkin/1": "/adminFeedback/checkin")
          }}
          style={{ flex: 1 }}
        >
          <div
            className="feedback-page-elements-div"
            style={{
              backgroundImage: "url('Images/FeedbackPage/checkin.jpg')",
            }}
          >
            <div className="elements-title">Check In</div>
          </div>
        </a>

        <a
          href={
            loggedInDetails.userType === "user" || user.type === "user"
              ? "/feedback/helpdesk/1"
              : "/adminFeedback/helpdesk"
          }
          onClick={(e)=>{
            e.preventDefault(); 
            navigate((loggedInDetails.userType === "user" || user.type === "user") ? "/feedback/helpdesk/1": "/adminFeedback/helpdesk")
          }}
          style={{ flex: 1 }}
        >
          <div
            className="feedback-page-elements-div"
            style={{
              backgroundImage: "url('Images/FeedbackPage/helpdesk.jpg')",
            }}
          >
            <div className="elements-title">Help Desk</div>
          </div>
        </a>
      </div>

      <div style={{ flex: 1 }} className="feedback-page-container-div">
        <a
          href={
            loggedInDetails.userType === "user" || user.type === "user"
              ? "/feedback/airline/1"
              : "/adminFeedback/airline"
          }
          onClick={(e)=>{
            e.preventDefault(); 
            navigate((loggedInDetails.userType === "user" || user.type === "user") ? "/feedback/airline/1": "/adminFeedback/airline")
          }}
          style={{ flex: 1 }}
        >
          <div
            className="feedback-page-elements-div"
            style={{
              backgroundImage: "url('Images/FeedbackPage/airline.jpg')",
            }}
          >
            <div className="elements-title">Airlines</div>
          </div>
        </a>

        <a
          href={
            loggedInDetails.userType === "user" || user.type === "user"
              ? "/feedback/lounge/1"
              : "/adminFeedback/lounge"
          }
          onClick={(e)=>{
            e.preventDefault(); 
            navigate((loggedInDetails.userType === "user" || user.type === "user") ? "/feedback/lounge/1": "/adminFeedback/lounge")
          }}
          style={{ flex: 1 }}
        >
          <div
            className="feedback-page-elements-div"
            style={{
              backgroundImage: "url('Images/FeedbackPage/lounge.jpg')",
            }}
          >
            <div className="elements-title">Lounge</div>
          </div>
        </a>

        <a
          href={
            loggedInDetails.userType === "user" || user.type === "user"
              ? "/feedback/store/1"
              : "/adminFeedback/store"
          }
          onClick={(e)=>{
            e.preventDefault(); 
            navigate((loggedInDetails.userType === "user" || user.type === "user") ? "/feedback/store/1": "/adminFeedback/store")
          }}
          style={{ flex: 1 }}
        >
          <div
            className="feedback-page-elements-div"
            style={{
              backgroundImage: "url('Images/FeedbackPage/store.jpg')",
            }}
          >
            <div className="elements-title">Stores</div>
          </div>
        </a>

        <a
          href={
            loggedInDetails.userType === "user" || user.type === "user"
              ? "/feedback/washroom/1"
              : "/adminFeedback/washroom"
          }
          onClick={(e)=>{
            e.preventDefault(); 
            navigate((loggedInDetails.userType === "user" || user.type === "user") ? "/feedback/washroom/1" : "/adminFeedback/washroom")
          }}
          style={{ flex: 1 }}
        >
          <div
            className="feedback-page-elements-div"
            style={{
              backgroundImage: "url('Images/FeedbackPage/washroom.jpg')",
            }}
          >
            <div className="elements-title">Washroom</div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default FeedbackPage;
