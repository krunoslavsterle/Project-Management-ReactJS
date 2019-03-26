import React from "react";

import classes from "./style.module.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Administration = props => (
  <div className={classes.Administration}>
    <Header />
    <div className={classes.Container}>
      <Sidebar />
      <main className={classes.MainPage}>{props.children}</main>
    </div>
  </div>
);

export default Administration;
