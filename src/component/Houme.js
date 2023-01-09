import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Houme() {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            style={{ width: "400px", margin: "20px 50px" }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            style={{ width: "400px", margin: "20px 50px" }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Done"
            style={{ margin: "20px 50px" }}
          />
        </Form.Group>
        <Button variant="primary" type="submit" style={{ margin: "20px 50px" }}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Houme;
