import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import Months from "./Months";
import AddForm from "./AddForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      entries: [],
      categories: [],
    };
  }

  componentDidMount() {
    const queryString = new URLSearchParams(window.location.search);
    const userID = queryString.get("userID");

    fetch(`/getUserData?id=${userID}`, { method: "get", "no-cors": true })
      .then((res) => res.json())
      .then((json) => {
        console.log("This is entries:");
        console.log(json);
        this.setState({
          username: json["username"],
          entries: json["entries"],
          categories: json["categories"],
        });
      });
  }

  render() {
    const { username, entries, categories } = this.state;
    if (username === "") {
      return (
        <>
          <div
            className="whole-page"
            style={{
              "text-align": "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1>Loading...</h1>
          </div>
        </>
      );
    } else {
      return (
        <>
          <Container className="mt-5 mb-3">
            <Row>
              <Col className="ps-0">
                <h1>Welcome to GTWFin, {username}</h1>
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <Col>
                <Months entries={entries} categories={categories} />
              </Col>
            </Row>
          </Container>
          <Form
            id="logout-btn"
            className="top-right"
            action="/logout?_method=DELETE"
            method="POST"
          >
            <Button variant="primary" type="submit">
              Logout
            </Button>
          </Form>
          <AddForm categories={categories} />
        </>
      );
    }
  }
}

export default App;
