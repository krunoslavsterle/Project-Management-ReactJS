import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import { authService, storageKey } from "../../firebase";
import LandingPage from "../../pages/landing";
import SignUp from "../SignUp";
import SignIn from "../SignIn";
import * as ROUTES from "../../constants/routes";

class App extends Component {
  state = {
    user: null
  };

  componentDidMount() {
    this.listener = authService.onAuthUserListener(
      authUser => {
        this.setState({ user: authUser });
        localStorage.setItem(storageKey, authUser);
      },
      () => localStorage.removeItem(storageKey)
    );
  }

  componentWillUnmount() {
    this.listener();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
          <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
          <MatchWhenAuthenticated
            exact
            path={ROUTES.LANDING}
            component={LandingPage}
          />
        </div>
      </Router>
    );
  }
}

const MatchWhenAuthenticated = ({ component: Component, ...props }) => (
  <Route
    {...props}
    render={renderProps =>
      authService.isAuthenticated() ? (
        <Component {...renderProps} />
      ) : (
        <Redirect to={{ pathname: ROUTES.SIGN_IN }} />
      )
    }
  />
);

export default App;
