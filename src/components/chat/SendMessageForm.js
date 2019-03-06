import React, { Component } from "react";

class SendMessageForm extends Component {
  state = {
    message: ""
  };

  handleChange = e => {
    this.setState({
      message: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.sendMessage(this.state.message);
    this.setState({
      message: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-field">
          <i className="material-icons prefix indigo-text text-darken-3">
            chat
          </i>
          <input
            id="send-message"
            disabled={this.props.disabled}
            onChange={this.handleChange}
            value={this.state.message}
            type="text"
          />
          <label htmlFor="send-message">Type your message and hit ENTER</label>
        </div>

        {/* <input
          disabled={this.props.disabled}
          onChange={this.handleChange}
          value={this.state.message}
          placeholder="Type your message and hit ENTER"
          type="text"
        /> */}
      </form>
    );
  }
}

export default SendMessageForm;
