import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

export class Alert extends Component {
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Task Alert</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          OOPs! task will not be added unless giving all information needed
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default Alert;
