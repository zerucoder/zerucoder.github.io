import React, { Component } from "react";
import Notification from "./Notification";
import ProjectList from "../project/ProjectList";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import { Grid, Paper } from "@material-ui/core";

import "./Dashboard.css";

class Dashboard extends Component {
  render() {
    const { projects, auth, notifications } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <Grid container spacing={16}>
        <Grid item xs={8}>
          <ProjectList projects={projects} />
        </Grid>
        <Grid item xs={4}>
          <Paper className="dashboard" square>
            <Notification notifications={notifications} />
          </Paper>
        </Grid>
      </Grid>

      // <div className="dashboard container">
      //   <div className="row">
      //     <div className="col s12 m6">
      //       <ProjectList projects={projects} />
      //     </div>
      //     <div className="col s12 m5 offset-m1">
      //       <Notification notifications={notifications} />
      //     </div>
      //   </div>
      // </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "projects", orderBy: ["createdAt", "desc"] },
    { collection: "notifications", limit: 8, orderBy: ["time", "desc"] }
  ])
)(Dashboard);
