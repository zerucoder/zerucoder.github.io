import React from "react";
import ListItems from "./ListItems";

const AnswerList = props => {
  return (
    <ul>
      {props.answers.map((answer, index) => {
        return (
          <ListItems
            answerItem={answer}
            answerCallback={props.answerCallback}
            index={index}
          />
        );
      })}
    </ul>
  );
};

export default AnswerList;
