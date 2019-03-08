import React, { Component } from "react";
import { Fab, Input, TextField } from "@material-ui/core";
import { Add } from "@material-ui/icons";

import { pink } from "@material-ui/core/colors";

class NewRoomForm extends Component {
  state = {
    roomName: ""
  };

  handleChange = e => {
    this.setState({
      roomName: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createRoom(this.state.roomName);
    this.setState({ roomName: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          defaultValue={this.state.roomName}
          label="Add Room"
          variant="outlined"
          required
        />
        <Fab size="small" color="secondary" aria-label="Add" type="submit">
          <Add />
        </Fab>

        {/* <button
          id="create-room-btn"
          className="btn-small waves-effect waves-light indigo darken-3"
          type="submit"
        >
          Add
          <i className="material-icons right">add</i>
        </button> */}

        {/* <button id="create-room-btn" type="submit">
              +
            </button> */}
      </form>
    );
  }
}

export default NewRoomForm;
