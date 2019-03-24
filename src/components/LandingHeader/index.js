import React from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "../../constants/routes";
import classes from "./style.module.css";
import { authService } from "../../firebase";

const LayoutHeader = () => {
  const isAuthenticated = authService.isAuthenticated();
  var rightContent = <Link to={{ pathname: ROUTES.DASHBOARD }}>Dashboard</Link>;
  if (!isAuthenticated) {
    rightContent = [
      <Link to={{ pathname: ROUTES.SIGN_IN }}>Sign In</Link>,
      <Link to={{ pathname: ROUTES.SIGN_UP }}>Sign Up</Link>
    ];
  }

  return (
    <div className={classes.Header}>
      <span className={classes.Title}>Project Management</span>
      <div className={classes.Right}>{rightContent}</div>
    </div>
  );
};

export default LayoutHeader;
