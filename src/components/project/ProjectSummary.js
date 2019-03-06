import React from "react";
import moment from "moment";
import { Paper, Typography } from "@material-ui/core";
import "./Project.css";

const ProjectSummary = ({ project }) => {
  return (
    <Paper square className="project-card">
      <Typography variant="h4" gutterBottom>
        {project.title}
      </Typography>
      <Typography variant="subheading" gutterBottom>
        posted by {project.authorFirstName} {project.authorLastName}
      </Typography>
      <Typography variant="caption" gutterBottom>
        {moment(project.createdAt.toDate()).calendar()}
      </Typography>
    </Paper>
    // <div className="card z-depth-0 project-summary">
    //   <div className="card-content grey-text text-darken-3">
    //     <span className="card-title">{project.title}</span>
    //     <p>
    //       posted by {project.authorFirstName} {project.authorLastName}
    //     </p>
    //     <p className="grey-text">
    //       {moment(project.createdAt.toDate()).calendar()}
    //     </p>
    //   </div>
    // </div>
  );
};
export default ProjectSummary;
