import React, { useEffect, useState,useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FormsData from "../../data/FormData";
import { Context } from "../../App";
import "./FeedbackForm.css";
import { Rating } from "react-simple-star-rating";
import { useHttpClient } from "../../hooks/useHttpClient";
import Swal from "sweetalert2";
import Loader from './../../common/components/Loader';

const FeedbackForm = () => {
  const { loggedInDetails } = useContext(Context);
  const { isLoading,sendRequest } = useHttpClient();
  const { feedbackType, question } = useParams();
  const navigate = useNavigate();
  const data = FormsData[feedbackType][question];
  const [feedbackData, setFeedbackData] = useState({});
  const [rating, setRating] = useState(0);
  const [dropdownData, setDropdownData] = useState([]);
  useEffect(() => {
    const fetchDropdownData = async () => {
      const type = await sendRequest(`/api/${feedbackType}s/`);
      setDropdownData(type.data);
    };
    if (data.ratingType === "dropdown") fetchDropdownData();
  }, [feedbackType]);

  useEffect(() => {
    setRating(0);
  }, [question]);

  const ratingChanged = (newRating) => {
    setFeedbackData({ ...feedbackData, [data.ref]: newRating });
    setRating(newRating);
  };
  const textValueChangedHandler = (e) => {
    // console.log(e.target.value);
    setRating(e.target.value);
    setFeedbackData({ ...feedbackData, [data.ref]: e.target.value });
    // console.log(feedbackData);
  };
  const onClickHandler = async () => {
    if (data.ratingType === "stars" && !rating) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please select a rating",
      });
      return null;
    }
    if (data.ratingType === "dropdown" && !feedbackData.name) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Please select a ${feedbackType}`,
      });
      return null;
    }
    if (data.next) {
      navigate(`/feedback/${feedbackType}/${data.next}`);
    } else {
      // console.log(feedbackData);
      try {
        // console.log(loggedInDetails);
        await sendRequest(
          `/api/${feedbackType}/`,
          "POST",
          JSON.stringify({feedbackBy:loggedInDetails.userId,...feedbackData}),
          {
            Accept: "application/json",
            "Content-Type": "application/json",
          }
        );
        //alert("Feedback submitted successfully!! Thank you for your Feedback");
        Swal.fire("Thank you for your Feedback", "", "success");
        navigate("/feedback");
      } catch (err) {}
    }
  };

  return (
    <div
      className="feedbackdiv"
      style={{
        backgroundImage: `url('/Images/FeedbackPage/${feedbackType}.jpg')`,
      }}
    >
      {isLoading && <Loader/>}
      <div className="Qdiv">
        <div className="Qdiv-header">
          <h1>{feedbackType.toUpperCase()}</h1>
        </div>
        <div className="rating-div">
          <p>{data.q.toUpperCase()}</p>
          {data.ratingType === "stars" && (
            <Rating
              onClick={ratingChanged}
              initialValue={rating}
              transition
              allowFraction
            />
          )}
          {data.ratingType === "text" && (
            <textarea onChange={(e) => textValueChangedHandler(e)} />
          )}
          {data.ratingType === "dropdown" && (
            <select onChange={(e) => textValueChangedHandler(e)}>
              <option className="dropdown-option"> Choose {feedbackType} </option>
              {dropdownData &&
                dropdownData.map((type, idx) => (
                  <option className="dropdown-option" key={idx}>{type.name}</option>
                ))}
            </select>
          
          )}
          
        </div>
        <input
          type="button"
          value={data.next ? "Next" : "Submit"}
          onClick={onClickHandler}
        ></input>
      </div>
    </div>
  );
};

export default FeedbackForm;
