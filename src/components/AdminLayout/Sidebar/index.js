import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "./style.module.css";
import * as ROUTES from "../../../constants/routes";

const Sidebar = () => (
  <aside className={classes.Sidebar}>
    <NavLink to={ROUTES.DASHBOARD} exact activeClassName={classes.LinkActive}>
      <FontAwesomeIcon icon="home" />
      <span className={classes.LinkName}>Home</span>
    </NavLink>
    <NavLink to={ROUTES.PROJECTS} exact activeClassName={classes.LinkActive}>
      <FontAwesomeIcon icon="project-diagram" />
      <span className={classes.LinkName}>Projects</span>
    </NavLink>
    <NavLink to={ROUTES.USERS} exact activeClassName={classes.LinkActive}>
      <FontAwesomeIcon icon="users-cog" />

      <span className={classes.LinkName}>Users</span>
    </NavLink>
  </aside>
);

export default Sidebar;
