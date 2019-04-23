import React, { Component } from "react";

import classes from "./style.module.css";
import Modal from "react-bootstrap/Modal";
import Project from "./Project";

class Projects extends Component {
  state = {
    show: false
  };

  onCloseHandler = () => this.setState({ show: false });
  onShowHandler = () => this.setState({ show: true });

  render() {
    return (
      <div className={classes.Projects}>
        <Project />
        <Project />
        <Project />
        <Project />
        <button type="button" onClick={this.onShowHandler}>
          Add New
        </button>

        <Modal show={this.state.show} onHide={this.onCloseHandler}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <button type="button" onClick={this.onCloseHandler}>
              Close
            </button>
            <button type="button" onClick={this.onCloseHandler}>
              Save
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Projects;
