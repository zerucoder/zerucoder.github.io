import React, { Component } from "react";
import Chatkit from "@pusher/chatkit";
import { tokenUrl, instanceLocator } from "../../config/chatkitConfig";
import MessageList from "./MessageList";
import SendMessageForm from "./SendMessageForm";
import RoomList from "./RoomList";
import NewRoomForm from "./NewRoomForm";
import { Grid, Paper } from "@material-ui/core";

import "./Chat.css";

import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class ChatRoot extends Component {
  componentDidMount = () => {};

  state = {
    roomId: null,
    messages: [],
    joinableRooms: [],
    joinedRooms: []
  };

  getRooms = () => {
    this.currentUser
      .getJoinableRooms()
      .then(joinableRooms => {
        this.setState({
          joinableRooms,
          joinedRooms: this.currentUser.rooms
        });
      })
      .catch(err => console.log("error on joinableRooms: ", err));
  };

  subscribeToRoom = roomId => {
    this.setState({ messages: [] });
    this.currentUser
      .subscribeToRoom({
        roomId: roomId,
        hooks: {
          onNewMessage: message => {
            this.setState({
              messages: [...this.state.messages, message]
            });
          }
        }
      })
      .then(room => {
        this.setState({
          roomId: room.id
        });
        this.getRooms();
      })
      .catch(err => console.log("error on subscribing to room: ", err));
  };

  sendMessage = text => {
    this.currentUser.sendMessage({
      text,
      roomId: this.state.roomId
    });
  };

  createRoom = name => {
    this.currentUser
      .createRoom({
        name
      })
      .then(room => {
        this.subscribeToRoom(room.id);
      })
      .catch(err => console.log("error with createRoom: ", err));
  };

  render() {
    const { profile, auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    const chatManager = new Chatkit.ChatManager({
      instanceLocator,
      userId: "" + profile.firstname,
      tokenProvider: new Chatkit.TokenProvider({
        url: tokenUrl
      })
    });

    chatManager
      .connect()
      .then(currentUser => {
        this.currentUser = currentUser;
        this.getRooms();
        console.log(this.currentUser);
      })
      .catch(err => console.log("error on connecting", err));

    return (
      <div className="chatbox">
        <Grid container direction="row">
          <Grid item xs={9}>
            <Paper square className="box scroll2">
              <MessageList
                roomId={this.state.roomId}
                messages={this.state.messages}
              />
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper square className="box scroll2">
              <RoomList
                subscribeToRoom={this.subscribeToRoom}
                rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]}
                roomId={this.state.roomId}
              />
            </Paper>
          </Grid>
          <Grid item xs={9}>
            <Paper square className="bottom-box">
              <SendMessageForm
                disabled={!this.state.roomId}
                sendMessage={this.sendMessage}
              />
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper square className="bottom-box">
              <NewRoomForm createRoom={this.createRoom} />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.firebase.profile,
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(ChatRoot);
