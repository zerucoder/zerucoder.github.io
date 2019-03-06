import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn, close } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";
import Modal from "../layout/Modal";

class Signin extends Component {
  state = {
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
    this.props.signIn(this.state);
  };
  render() {
    const { authError, auth, errorModal } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text darken-3">Log In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
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
    authError: state.auth.authError,
    auth: state.firebase.auth,
    errorModal: state.auth.errorModal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds)),
    close: () => dispatch(close())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signin);
