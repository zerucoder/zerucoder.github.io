import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signUp, close } from "../../store/actions/authActions";
import Modal from "../layout/Modal";

class Signup extends Component {
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
