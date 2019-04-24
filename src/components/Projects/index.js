import React from "react";

import Project from "./Project";
import NewProject from "./NewProject";
import classes from "./style.module.css";

const Projects = () => (
  <div className={classes.Projects}>
    <Project />
    <Project />
    <Project />
    <Project />
    <NewProject />
  </div>
);

export default Projects;
