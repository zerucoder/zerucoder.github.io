import React from "react";
import moment from "moment";
import { ListItem, ListItemText, Typography, List } from "@material-ui/core";

const Notification = props => {
  const { notifications } = props;
  return (
    <div className="notification section">
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <Typography variant="headline">Notifications</Typography>
          <List>
            {notifications &&
              notifications.map(item => {
                return (
                  <ListItem key={item.id}>
                    <ListItemText>
                      <Typography color="secondary">{item.user}</Typography>
                      <Typography>{item.content}</Typography>
                      <Typography variant="caption">
                        {moment(item.time.toDate()).fromNow()}
                      </Typography>
                    </ListItemText>
                  </ListItem>
                );
              })}
          </List>
        </div>
      </div>
    </div>
  );
};

export default Notification;
