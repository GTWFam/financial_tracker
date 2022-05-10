import React from "./_snowpack/pkg/react.js";
import {
  Container,
  Form,
  Row,
  Button,
  Col,
  Tabs,
  Tab,
  Fade
} from "./_snowpack/pkg/react-bootstrap.js";
import {openAddForm} from "./public/scripts/editData.js";
class AddForm extends React.Component {
  render() {
    const {categories} = this.props;
    return /* @__PURE__ */ React.createElement(Container, {
      className: "whole-page closed",
      id: "addEntryOverlay"
    }, /* @__PURE__ */ React.createElement(Row, {
      className: "justify-content-md-center align-items-md-center h-100"
    }, /* @__PURE__ */ React.createElement(Col, {
      sm: 4
    }, /* @__PURE__ */ React.createElement(Tabs, {
      transition: Fade,
      defaultActiveKey: "transaction",
      id: "addition",
      className: "mb-3 justify-content-md-center text-center"
    }, /* @__PURE__ */ React.createElement(Tab, {
      eventKey: "transaction",
      title: "Transaction"
    }, /* @__PURE__ */ React.createElement(Form, {
      autoComplete: "off",
      action: "/addEntry",
      method: "POST"
    }, /* @__PURE__ */ React.createElement(Form.Group, {
      className: "hidden",
      controlId: "id"
    }, /* @__PURE__ */ React.createElement(Form.Label, null, "User ID"), /* @__PURE__ */ React.createElement(Form.Control, {
      readOnly: true,
      name: "id"
    })), /* @__PURE__ */ React.createElement(Form.Group, {
      className: "hidden",
      controlId: "month"
    }, /* @__PURE__ */ React.createElement(Form.Label, null, "Which month"), /* @__PURE__ */ React.createElement(Form.Control, {
      readOnly: true,
      name: "month"
    })), /* @__PURE__ */ React.createElement(Form.Group, null, /* @__PURE__ */ React.createElement(Form.Label, null, "When"), /* @__PURE__ */ React.createElement(Form.Control, {
      type: "date",
      name: "date",
      placeholder: "Date of Transaction",
      value: new Date()
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
    }, /* @__PURE__ */ React.createElement(Form.Label, null, "Which category"), /* @__PURE__ */ React.createElement(Form.Select, {
      name: "category"
    }, categories.map((category) => {
      return /* @__PURE__ */ React.createElement("option", {
        value: category
      }, category);
    }))), /* @__PURE__ */ React.createElement(Row, {
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
    }, "Close Form"))))), /* @__PURE__ */ React.createElement(Tab, {
      eventKey: "category",
      title: "Category"
    }, /* @__PURE__ */ React.createElement(Form, {
      autoComplete: "off",
      action: "/addCategory",
      method: "POST"
    }, /* @__PURE__ */ React.createElement(Form.Group, {
      className: "hidden",
      controlId: "id"
    }, /* @__PURE__ */ React.createElement(Form.Label, null, "User ID"), /* @__PURE__ */ React.createElement(Form.Control, {
      readOnly: true,
      name: "id"
    })), /* @__PURE__ */ React.createElement(Form.Group, {
      controlId: "addCategory"
    }, /* @__PURE__ */ React.createElement(Form.Label, null, "Category Name"), /* @__PURE__ */ React.createElement(Form.Control, {
      name: "addCategory"
    })), /* @__PURE__ */ React.createElement(Row, {
      className: "justify-content-md-start mt-3"
    }, /* @__PURE__ */ React.createElement(Col, {
      sm: 5
    }, /* @__PURE__ */ React.createElement(Button, {
      variant: "primary",
      type: "submit"
    }, "Add Category")), /* @__PURE__ */ React.createElement(Col, {
      sm: 5
    }, /* @__PURE__ */ React.createElement(Button, {
      variant: "link",
      href: "#",
      onClick: () => {
        openAddForm("January");
        return false;
      }
    }, "Close Form")))))))));
  }
}
export default AddForm;
