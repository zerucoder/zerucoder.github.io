import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
import { Button, IconButton } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons/";

const SignedOutLinks = props => {
  return (
    <div>
      <Button component={Link} to="/quiznew" color="inherit" size="large">
        Test
      </Button>
      <Button component={Link} to="/createproject" color="inherit" size="large">
        New Project
      </Button>
      <Button onClick={props.signOut} color="inherit" size="large">
        Logout
      </Button>
      {/* <Fab component={Link} to="/" color="secondary" size="small">
        {props.profile.initials}
      </Fab> */}
      <IconButton color="inherit">
        <AccountCircle />
      </IconButton>
      Hello, {props.profile.firstname}
      {props.profile.lastname}
    </div>
    // <ul className="right">
    //   <li>
    //     <NavLink to="/createproject">New Project</NavLink>
    //   </li>
    //   <li>
    //     <a onClick={props.signOut}>Logout</a>
    //   </li>
    //   <li>
    //     <NavLink to="/" className="btn btn-floating pink lighten-1">
    //       {props.profile.initials}
    //     </NavLink>
    //   </li>
    // </ul>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignedOutLinks);
