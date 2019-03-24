import React from "react";

import classes from "./style.module.css";
import firebase from "../../firebase/firebase";

const LayoutHeader = () => (
  <div className={classes.Header}>
    <span className={classes.Title}>Project Management</span>
  </div>
);

export default LayoutHeader;
