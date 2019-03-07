import React from "react";
import "./Chat.css";
import { Typography, Paper } from "@material-ui/core";

const Message = props => {
  return (
    <Paper className="chat-message">
      <Typography
        variant="caption"
        color="secondary"
        gutterBottom
        align="right"
      >
        ~{props.username}
      </Typography>
      <Typography variant="subtitle1">{props.text}</Typography>
    </Paper>

    // <div className="message">
    //   <div className="message-username">{props.username}</div>
    //   <div className="message-text">
    //     <Chip label={props.text} color="primary" />
    //   </div>
    // </div>
  );
};

export default Message;
