import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./style.module.css";
import * as ROUTES from "../../../constants/routes";

const Sidebar = () => (
  <aside className={classes.Sidebar}>
    <NavLink to={ROUTES.DASHBOARD} exact activeClassName={classes.LinkActive}>
      Home
    </NavLink>
    <NavLink to={ROUTES.PROJECTS} exact activeClassName={classes.LinkActive}>
      Projects
    </NavLink>
    <NavLink to={ROUTES.USERS} exact activeClassName={classes.LinkActive}>
      Users
    </NavLink>
  </aside>
);

export default Sidebar;
