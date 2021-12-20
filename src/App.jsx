
import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import Months from "./Months";
import AddForm from "./AddForm";

class App extends React.Component {
  constructor( props ) {
    super(props)
    this.state = {
      username: "",
      entries: []
    }
    this.load()
  }

  load() {
    const queryString = new URLSearchParams(window.location.search);
    const userID = queryString.get('userID');
    
    fetch(`/getUserData?id=${userID}`, {method:'get', 'no-cors':true})
      .then(res => res.json())
      .then(json => {
        this.setState({
          username: json['username'],
          entries: json['entries']
        })
      }) 
  }

  render() {
    const { username, entries } = this.state;
    return (
      <>
        <Container className="mt-5 md-3">
          <Row className="justify-content-md-center text-center">
            <Col><h1>Welcome to GTWFin, {username}</h1></Col>
            <Col>
              <Form action="/logout?_method=DELETE" method="POST">
                <Button variant="primary" type="submit">
                  Logout
                </Button>
              </Form>
            </Col>
          </Row>
          <Row className="justify-content-md-center text-center">
            <Col><Months entries={entries} /></Col>
          </Row>
        </Container>
        <AddForm />
      </>
    );
  }
}

export default App;
