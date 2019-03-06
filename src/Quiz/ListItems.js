import React from "react";
import { RadioGroup, FormControlLabel, Radio } from "@material-ui/core";

const ListItems = props => {
  const onClickAnswer = () => {
    props.answerCallback(props.index);
  };
  // return <li onClick={onClickAnswer}>{props.answerItem}</li>
  return (
    <RadioGroup onChange={onClickAnswer}>
      <FormControlLabel
        control={<Radio />}
        value={props.answerItem}
        label={props.answerItem}
      />
    </RadioGroup>
  );
};

export default ListItems;
