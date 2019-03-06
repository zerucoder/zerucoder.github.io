import React, { Component } from "react";
import { Fab, Input, TextField } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { pink } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: pink
  }
});

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
        <MuiThemeProvider theme={theme}>
          <TextField
            defaultValue={this.state.roomName}
            label="Add Room"
            variant="outlined"
            required
          />
          <Fab size="small" color="secondary" aria-label="Add" type="submit">
            <Add />
          </Fab>
        </MuiThemeProvider>

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
