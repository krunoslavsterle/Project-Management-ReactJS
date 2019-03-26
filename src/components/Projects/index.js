import React from "react";

import classes from "./style.module.css";
import Project from "./Project";

const Projects = () => (
  <div className={classes.Projects}>
    <Project />
    <Project />
    <Project />
    <Project />
  </div>
);

export default Projects;
