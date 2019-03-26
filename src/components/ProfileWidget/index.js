import React from "react";

import classes from "./style.module.css";

const ProfileWidget = () => (
  <div className={classes.ProfileWidget}>
    <div className={classes.Image}>
      <img src="https://picsum.photos/100?random" />
    </div>
    <div className={classes.UserName}>Denise Watson</div>
    <div className={classes.UserRole}>Web Developer</div>
    <div className={classes.Status}>
      <div className={classes.StatusItem}>
        <span>25</span>
        <span>Projects</span>
      </div>
      <div className={classes.StatusItem}>
        <span>175</span>
        <span>Tasks</span>
      </div>
    </div>
  </div>
);

export default ProfileWidget;
