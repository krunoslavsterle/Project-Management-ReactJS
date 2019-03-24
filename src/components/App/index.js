import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LandingPage from "../../pages/landing";
import SignUp from "../SignUp";
import SignIn from "../SignIn";
import * as ROUTES from "../../constants/routes";

const App = () => (
  <Router>
    <div className="App">
      <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
      <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
    </div>
  </Router>
);

export default App;
