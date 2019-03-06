import React from "react";

const Score = props => {
  return (
    <p>
      Score: {props.score} out of {props.totalQuestions}
    </p>
  );
};

export default Score;
