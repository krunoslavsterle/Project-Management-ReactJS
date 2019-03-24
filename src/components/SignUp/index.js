import React, { Component } from "react";

import { withRouter, Link } from "react-router-dom";

import * as ROUTES from "../../constants/routes";
import classes from "./style.module.css";
import { withAuthService } from "../../firebase";

const INITIAL_STATE = {
  username: "",
  email: "",
  company: "",
  passwordOne: "",
  passwordTwo: "",
  error: ""
};

class SignUp extends Component {
  state = { ...INITIAL_STATE };

  onSubmitHandler = event => {
    const { username, email, passwordOne, isAdmin } = this.state;

    this.props.authService
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        console.log("created!");
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onInputChangedHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, company, passwordOne, passwordTwo, error } = this.state;
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      company === "";

    return (
      <div className={classes.SignUp}>
        <div className={classes.Wrap}>
          <form className={classes.Form} onSubmit={this.onSubmitHandler}>
            <span className={classes.Title}>Sign Up</span>

            <div className={classes.InputWrapper}>
              <input
                name="email"
                value={email}
                onChange={this.onInputChangedHandler}
                className={classes.Input}
                type="text"
                placeholder="Email"
              />
            </div>

            <div className={classes.InputWrapper}>
              <input
                name="company"
                value={company}
                onChange={this.onInputChangedHandler}
                className={classes.Input}
                type="text"
                placeholder="Company Name"
              />
            </div>

            <div className={classes.InputWrapper}>
              <input
                name="passwordOne"
                value={passwordOne}
                onChange={this.onInputChangedHandler}
                className={classes.Input}
                type="text"
                placeholder="Password"
              />
            </div>

            <div className={classes.InputWrapper}>
              <input
                name="passwordTwo"
                value={passwordTwo}
                onChange={this.onInputChangedHandler}
                className={classes.Input}
                type="text"
                placeholder="Confirm Password"
              />
            </div>

            <button
              className={classes.ConfirmButton}
              type="submit"
              disabled={isInvalid}
            >
              SIGN UP
            </button>

            <div className={classes.AdditionalAction}>
              Already have an account? <Link to={ROUTES.SIGN_IN}>Sign in</Link>
            </div>

            {error && <p>{error.message}</p>}
          </form>
        </div>
      </div>
    );
  }
}

export default withAuthService(SignUp);
