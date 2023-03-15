import React from "react";
import "../stylesheets/TitleLetterDisplayCSS.css";

const TitleLetterDisplay = (props) => {
  return (
    <div className="title-letter-display">
      <p>{props.letter}</p>
    </div>
  );
};

export default TitleLetterDisplay;
