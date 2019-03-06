import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signUp, close } from "../../store/actions/authActions";
import Modal from "../layout/Modal";
// import chatServer from "@pusher/chatkit-server";
import { tokenUrl, instanceLocator } from "../../config/chatkitConfig";
const chatServer = require("@pusher/chatkit-server");

let chatkit = null;

class Signup extends Component {
  componentDidMount = () => {
    chatkit = new chatServer.default({
      instanceLocator,
      key:
        "e0cc16b3-f6c2-40ba-9982-a21d19f26acb:nFXv43RkFPk+zOljT3hFdSYylJf8OZ1HlaKPCWWGGB0="
    });
  };

  state = {
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.signUp(this.state);
    chatkit
      .createUser({
        id: this.state.firstname,
        name: this.state.firstname
      })
      .then(() => {
        console.log("User created successfully");
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    const { auth, authError, errorModal } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="firstname">Firstname</label>
            <input type="text" id="firstname" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastname">Lastname</label>
            <input type="text" id="lastname" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
          </div>

          {/* <div className="red-text center">
            {authError ? <p>{authError}</p> : null}
          </div> */}
          <Modal open={errorModal} close={this.props.close}>
            {authError ? authError : null}
          </Modal>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
    errorModal: state.auth.errorModal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser)),
    close: () => dispatch(close())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
