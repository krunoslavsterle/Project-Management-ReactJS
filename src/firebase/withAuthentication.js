import React from "react";

import { authService, storageKey } from "./authService";

//import { withFirebase } from "../Firebase";
//import { AuthUserContext } from "../Session";

const AuthUserContext = React.createContext(null);

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    state = {
      authUser: JSON.parse(localStorage.getItem(storageKey))
    };

    render() {
      return (
        <AuthUserContext.Provider value={this.state.authUser}>
          <Component {...this.props} />
        </AuthUserContext.Provider>
      );
    }
  }

  return withFirebase(WithAuthentication);
};

export default withAuthentication;
