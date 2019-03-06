import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <div>
      <Button component={Link} to="/signin" color="inherit" size="large">
        Sign In
      </Button>
      <Button component={Link} to="/signup" color="inherit" size="large">
        Sign Up
      </Button>
    </div>
  );
};

export default SignedInLinks;
