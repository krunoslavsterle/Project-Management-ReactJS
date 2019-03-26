import React from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "../../constants/routes";
import classes from "./style.module.css";
import { authService } from "../../firebase";

const LayoutHeader = () => {
  const isAuthenticated = authService.isAuthenticated();
  var rightContent = [
    <Link key={ROUTES.DASHBOARD} to={{ pathname: ROUTES.DASHBOARD }}>
      Dashboard
    </Link>,
    <a key="SIGNOUT" href="#" onClick={authService.doSignOut}>
      Sign out
    </a>
  ];

  if (!isAuthenticated) {
    rightContent = [
      <Link key={ROUTES.SIGN_IN} to={{ pathname: ROUTES.SIGN_IN }}>
        Sign In
      </Link>,
      <Link key={ROUTES.SIGN_UP} to={{ pathname: ROUTES.SIGN_UP }}>
        Sign Up
      </Link>
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
