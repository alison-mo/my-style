import React, { useState } from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";

function AddToCloset({ handleAddClothes }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const clothType = ["top", "bottom", "dress", "jacket", "shoes", "accessory"];
  return (
    <>
      <Button className="addCloth-button" onClick={handleShow}>
        Add to My Closet
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Clothes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Row>
              <Form.Group as={Col} md="3" controlId="formGridEmail">
                <Form.Label>Type</Form.Label>
                <Form.Control as="select" onChange={handleAddClothes}>
                  {clothType.map(type => (
                    <option value={type}>{type}</option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} md="9" controlId="formGridPassword">
                <Form.Label>Link</Form.Label>
                <Form.Control type="text" placeholder="image link" />
              </Form.Group>
            </Form.Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleClose}>
            Close
          </Button>
          <Button className="addCloth-button" onClick={handleAddClothes}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddToCloset;
