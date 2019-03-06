import React from "react";
import { Chip } from "@material-ui/core";

const Message = props => {
  return (
    <div className="message">
      <div className="message-username">{props.username}</div>
      <div className="message-text">
        <Chip label={props.text} color="primary" />
      </div>
    </div>
  );
};

export default Message;
