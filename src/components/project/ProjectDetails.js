import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import moment from "moment";
import { Paper, Typography } from "@material-ui/core";
import "./Project.css";

const ProjectDetails = props => {
  const id = props.match.params.id;
  const { project, auth } = props;

  if (!auth.uid) return <Redirect to="/signin" />;
  console.log(props);
  if (project) {
    return (
      <Paper className="project-details">
        <Typography variant="display3" gutterBottom>
          {project.title}{" "}
        </Typography>
        <Typography variant="headline" gutterBottom>
          {project.content}
        </Typography>
        <Typography variant={"body1"}>
          Posted by {project.authorFirstName} {project.authorLastName}
        </Typography>
        <Typography variant="caption">
          {moment(project.createdAt.toDate()).calendar()}
        </Typography>
      </Paper>
    );
  } else {
    return (
      <div className="container center">
        <p>project Loading...</p>
      </div>
    );
  }
};

const mapStoreToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStoreToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
