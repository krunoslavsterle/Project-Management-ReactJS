import React from "react";
import { Link } from "react-router-dom";

import classes from "./style.module.css";
import * as ROUTES from "../../../constants/routes";

const Project = () => (
  <div className={classes.Project}>
    <Link to={ROUTES.PROJECT_OVERVIEW}>
      <div className={classes.Title}>Title</div>
    </Link>
    <div className={classes.Users}>
      <img src="https://picsum.photos/100?random" />
      <img src="https://picsum.photos/100?random" />
      <img src="https://picsum.photos/100?random" />
      <img src="https://picsum.photos/100?random" />
    </div>
    <div className={classes.Status}>
      <div className={classes.StatusItem}>
        <h3>21</h3>
        <h5>Tasks</h5>
      </div>
      <div className={classes.StatusItem}>
        <h3>4</h3>
        <h5>Completed</h5>
      </div>
      <div className={[classes.StatusItem, classes.Late].join(" ")}>
        <h3>2</h3>
        <h5>Late</h5>
      </div>
    </div>
  </div>
);

export default Project;
