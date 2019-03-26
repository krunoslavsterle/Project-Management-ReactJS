import React from "react";

import classes from "./style.module.css";

const Header = () => (
  <nav className={classes.Header}>
    <ul className={classes.MainNav}>
      <li>
        <a href="#">Home</a>
      </li>
    </ul>
  </nav>
);

export default Header;
