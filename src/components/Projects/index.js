import React, { Component } from "react";

import classes from "./style.module.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
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
        <Button variant="primary" onClick={this.onShowHandler}>
          Add New
        </Button>

        <Modal show={this.state.show} onHide={this.onCloseHandler}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Project</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form-group">
              <label htmlFor="project-title">Title</label>
              <input
                type="text"
                className="form-control"
                id="project-title"
                aria-describedby="projectTitle"
                placeholder="Enter project title"
              />
            </div>
            <div className="form-group">
              <label htmlFor="project-description">Description</label>
              <input
                type="text"
                className="form-control"
                id="project-description"
                aria-describedby="projectDescription"
                placeholder="Enter project description"
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.onCloseHandler}>
              Close
            </Button>
            <Button variant="primary" onClick={this.onCloseHandler}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Projects;
