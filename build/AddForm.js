import React from "./_snowpack/pkg/react.js";
import {Container, Form, Row, Button, Col} from "./_snowpack/pkg/react-bootstrap.js";
import {openAddForm} from "./public/editData.js";
class AddForm extends React.Component {
  render() {
    return /* @__PURE__ */ React.createElement(Container, {
      className: "whole-page closed",
      id: "addEntryOverlay"
    }, /* @__PURE__ */ React.createElement(Row, {
      className: "justify-content-md-center align-items-md-center h-100"
    }, /* @__PURE__ */ React.createElement(Col, {
      sm: 4
    }, /* @__PURE__ */ React.createElement(Form, {
      autoComplete: "off",
      action: "/addEntry",
      method: "POST"
    }, /* @__PURE__ */ React.createElement(Form.Group, {
      controlId: "id"
    }, /* @__PURE__ */ React.createElement(Form.Label, null, "User ID"), /* @__PURE__ */ React.createElement(Form.Control, {
      readOnly: true,
      name: "id"
    })), /* @__PURE__ */ React.createElement(Form.Group, {
      controlId: "month"
    }, /* @__PURE__ */ React.createElement(Form.Label, null, "Which month"), /* @__PURE__ */ React.createElement(Form.Control, {
      readOnly: true,
      name: "month"
    })), /* @__PURE__ */ React.createElement(Form.Group, {
      controlId: "from"
    }, /* @__PURE__ */ React.createElement(Form.Label, null, "From where"), /* @__PURE__ */ React.createElement(Form.Control, {
      name: "from"
    })), /* @__PURE__ */ React.createElement(Form.Group, {
      controlId: "amount"
    }, /* @__PURE__ */ React.createElement(Form.Label, null, "How much"), /* @__PURE__ */ React.createElement(Form.Control, {
      name: "amount"
    })), /* @__PURE__ */ React.createElement(Form.Group, {
      controlId: "category"
    }, /* @__PURE__ */ React.createElement(Form.Label, null, "What category"), /* @__PURE__ */ React.createElement(Form.Control, {
      name: "category"
    })), /* @__PURE__ */ React.createElement(Row, {
      className: "justify-content-md-start mt-3"
    }, /* @__PURE__ */ React.createElement(Col, {
      sm: 5
    }, /* @__PURE__ */ React.createElement(Button, {
      variant: "primary",
      type: "submit"
    }, "Add Transaction")), /* @__PURE__ */ React.createElement(Col, {
      sm: 5
    }, /* @__PURE__ */ React.createElement(Button, {
      variant: "link",
      href: "#",
      onClick: () => {
        openAddForm("January");
        return false;
      }
    }, "Close Form")))))));
  }
}
export default AddForm;
