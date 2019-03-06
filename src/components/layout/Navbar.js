import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";
import { Menu } from "@material-ui/icons";
import { AppBar, Typography, Toolbar, IconButton } from "@material-ui/core";
import "./Navbar.css";

const Navbar = props => {
  const { auth, profile } = props;
  const links = auth.uid ? (
    <SignedOutLinks profile={profile} />
  ) : (
    <SignedInLinks />
  );
  console.log(auth);
  return (
    <div className="Root">
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit">
            <Menu />
          </IconButton>
          <Typography
            variant="h5"
            component={Link}
            to="/"
            color="inherit"
            className="Grow"
          >
            Project
          </Typography>
          {links}
        </Toolbar>
      </AppBar>
    </div>

    // <nav className="nav-wrapper grey darken-3">
    //   <div className="container">
    //     <Link to="/">Project</Link>
    //     {links}
    //   </div>
    // </nav>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(Navbar);
