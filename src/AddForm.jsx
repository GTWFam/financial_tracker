import React from "react";
import { Container, Form, Row, Button, Col } from "react-bootstrap";
import { openAddForm } from "./public/editData";

class AddForm extends React.Component {
    render() {
        return (
            <Container className="whole-page closed" id="addEntryOverlay">
                <Row className="justify-content-md-center align-items-md-center h-100">
                    <Col sm={4}>
                        <Form autoComplete="off" action="/addEntry" method="POST">
                            <Form.Group controlId="id">
                                <Form.Label>User ID</Form.Label>
                                <Form.Control readOnly name="id"></Form.Control>
                            </Form.Group>
                            <Form.Group controlId="month">
                                <Form.Label>Which month</Form.Label>
                                <Form.Control readOnly name="month"></Form.Control>
                            </Form.Group>
                            <Form.Group controlId="from">
                                <Form.Label>From where</Form.Label>
                                <Form.Control name="from"></Form.Control>
                            </Form.Group>
                            <Form.Group controlId="amount">
                                <Form.Label>How much</Form.Label>
                                <Form.Control name="amount"></Form.Control>
                            </Form.Group>
                            <Form.Group controlId="category">
                                <Form.Label>What category</Form.Label>
                                <Form.Control name="category"></Form.Control>
                            </Form.Group>
                            <Row className="justify-content-md-start mt-3">
                                <Col sm={5}>
                                    <Button variant="primary" type="submit">
                                        Add Transaction
                                    </Button>
                                </Col>
                                <Col sm={5}>
                                    <Button variant="link" href="#" onClick={() => {
                                            openAddForm('January'); return false
                                        }}>
                                        Close Form
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default AddForm;