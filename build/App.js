import React from "./_snowpack/pkg/react.js";
import {Col, Container, Form, Row, Button} from "./_snowpack/pkg/react-bootstrap.js";
import Months from "./Months.js";
import AddForm from "./AddForm.js";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      entries: [],
      categories: []
    };
    this.load();
  }
  load() {
    const queryString = new URLSearchParams(window.location.search);
    const userID = queryString.get("userID");
    fetch(`/getUserData?id=${userID}`, {method: "get", "no-cors": true}).then((res) => res.json()).then((json) => {
      this.setState({
        username: json["username"],
        entries: json["entries"],
        categories: json["categories"]
      });
    });
  }
  render() {
    const {username, entries, categories} = this.state;
    if (username == "") {
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, "Loading..."));
    } else {
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Container, {
        className: "mt-5 md-3"
      }, /* @__PURE__ */ React.createElement(Row, {
        className: "justify-content-md-center text-center"
      }, /* @__PURE__ */ React.createElement(Col, null, /* @__PURE__ */ React.createElement("h1", null, "Welcome to GTWFin, ", username)), /* @__PURE__ */ React.createElement(Col, null)), /* @__PURE__ */ React.createElement(Row, {
        className: "justify-content-md-center text-center"
      }, /* @__PURE__ */ React.createElement(Col, null, /* @__PURE__ */ React.createElement(Months, {
        entries
      })))), /* @__PURE__ */ React.createElement(Form, {
        id: "logout-btn",
        className: "top-right",
        action: "/logout?_method=DELETE",
        method: "POST"
      }, /* @__PURE__ */ React.createElement(Button, {
        variant: "primary",
        type: "submit"
      }, "Logout")), /* @__PURE__ */ React.createElement(AddForm, {
        categories
      }));
    }
  }
}
export default App;
