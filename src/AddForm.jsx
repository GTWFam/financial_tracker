import React from "react";
import {
  Container,
  Form,
  Row,
  Button,
  Col,
  Tabs,
  Tab,
  Fade,
} from "react-bootstrap";
import { openAddForm } from "./public/scripts/editData";

class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }
  render() {
    let { date } = this.state;
    const { categories } = this.props;
    return (
      <Container className="whole-page closed" id="addEntryOverlay">
        <Row className="justify-content-md-center align-items-md-center h-100">
          <Col sm={4}>
            <Tabs
              transition={Fade}
              defaultActiveKey="transaction"
              id="addition"
              className="mb-3 justify-content-md-center text-center"
            >
              <Tab eventKey="transaction" title="Transaction">
                <Form autoComplete="off" action="/addEntry" method="POST">
                  <Form.Group className="hidden" controlId="id">
                    <Form.Label>User ID</Form.Label>
                    <Form.Control readOnly name="id"></Form.Control>
                  </Form.Group>
                  <Form.Group className="hidden" controlId="month">
                    <Form.Label>Which month</Form.Label>
                    <Form.Control readOnly name="month"></Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>When</Form.Label>
                    <Form.Control
                      required
                      type="date"
                      name="date"
                      placeholder="Date of Transaction"
                      value={date}
                      onChange={(e) =>
                        this.setState({
                          date: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                  <Form.Group controlId="from">
                    <Form.Label>From where</Form.Label>
                    <Form.Control required name="from"></Form.Control>
                  </Form.Group>
                  <Row>
                    <Col xs={8}>
                      <Form.Group controlId="amount">
                        <Form.Label>How much</Form.Label>
                        <Form.Control
                          required
                          type="number"
                          name="amount"
                          min={0}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col xs={2}>
                      <Form.Group controlId="expense">
                        <Form.Label>Expense?</Form.Label>
                        <label className="switch">
                          <input name="expense" type="checkbox"></input>
                          <span className="slider round"></span>
                        </label>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group controlId="category">
                    <Form.Label>Which category</Form.Label>
                    <Form.Select name="category">
                      {categories.map((category) => {
                        return <option value={category}>{category}</option>;
                      })}
                    </Form.Select>
                  </Form.Group>
                  <Row className="justify-content-md-start mt-3">
                    <Col sm={5}>
                      <Button variant="primary" type="submit">
                        Add Transaction
                      </Button>
                    </Col>
                    <Col sm={5}>
                      <Button
                        variant="link"
                        href="#"
                        onClick={() => {
                          openAddForm("January");
                          return false;
                        }}
                      >
                        Close Form
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Tab>
              <Tab eventKey="category" title="Category">
                <Form autoComplete="off" action="/addCategory" method="POST">
                  <Form.Group className="hidden" controlId="id">
                    <Form.Label>User ID</Form.Label>
                    <Form.Control readOnly name="id"></Form.Control>
                  </Form.Group>
                  <Form.Group controlId="addCategory">
                    <Form.Label>Category Name</Form.Label>
                    <Form.Control name="addCategory"></Form.Control>
                  </Form.Group>
                  <Row className="justify-content-md-start mt-3">
                    <Col sm={5}>
                      <Button variant="primary" type="submit">
                        Add Category
                      </Button>
                    </Col>
                    <Col sm={5}>
                      <Button
                        variant="link"
                        href="#"
                        onClick={() => {
                          openAddForm("January");
                          return false;
                        }}
                      >
                        Close Form
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default AddForm;
