import React from "react";
import "../stylesheets/FeedbackDataDisplayCard.css";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

const FeedbackDataDisplayCard = (props) => {
  const maxRating = 5;
  const averageRating = props.averageRating.toFixed(1);
  const personsRated = props.personsRated;
  const maxPersons = averageRating * personsRated;
  const title = props.title.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase();})//props.title.toUpperCase();
  return (
    <div className="feedback-data-display">
      <div className="feedback-data-display-div">
        <h1 className="text-secondary">{title}</h1>
        <div className="feedback-data-display-progress-bar-inside-div">
          <CircularProgressbarWithChildren
            value={averageRating}
            text={`${averageRating}`}
            maxValue={maxRating}
            styles={buildStyles({
              textColor: "blue",
              pathColor: "orange",
              strokeLinecap: "butt",
              trailColor: "red",
            })}
          >
            {/* <div style={{ width: "84%" }}>
              console.log({maxPersons})
              <CircularProgressbar
                value={personsRated}
                maxValue={maxPersons}
                styles={buildStyles({
                  trailColor: "green",
                })}
              />
            </div> */}
          </CircularProgressbarWithChildren>
        </div>
      </div>
    </div>
  );
};

export default FeedbackDataDisplayCard;
