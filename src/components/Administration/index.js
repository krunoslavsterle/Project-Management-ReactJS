import React from "react";

import classes from "./style.module.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Administration = () => (
  <div className={classes.Administration}>
    <Sidebar />
    <Header />
  </div>
);

export default Administration;
