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
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }
  render() {
    let {date} = this.state;
    const {categories} = this.props;
    console.log(categories);
    console.log(Object.keys(categories));
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
      required: true,
      type: "date",
      name: "date",
      placeholder: "Date of Transaction",
      value: date,
      onChange: (e) => this.setState({
        date: e.target.value
      })
    })), /* @__PURE__ */ React.createElement(Form.Group, {
      controlId: "from"
    }, /* @__PURE__ */ React.createElement(Form.Label, null, "From where"), /* @__PURE__ */ React.createElement(Form.Control, {
      required: true,
      name: "from"
    })), /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Col, {
      xs: 8
    }, /* @__PURE__ */ React.createElement(Form.Group, {
      controlId: "amount"
    }, /* @__PURE__ */ React.createElement(Form.Label, null, "How much"), /* @__PURE__ */ React.createElement(Form.Control, {
      required: true,
      type: "number",
      name: "amount",
      min: 0
    }))), /* @__PURE__ */ React.createElement(Col, {
      xs: 2
    }, /* @__PURE__ */ React.createElement(Form.Group, {
      controlId: "expense"
    }, /* @__PURE__ */ React.createElement(Form.Label, null, "Expense?"), /* @__PURE__ */ React.createElement("label", {
      className: "switch"
    }, /* @__PURE__ */ React.createElement("input", {
      name: "expense",
      type: "checkbox"
    }), /* @__PURE__ */ React.createElement("span", {
      className: "slider round"
    }))))), /* @__PURE__ */ React.createElement(Form.Group, {
      controlId: "category"
    }, /* @__PURE__ */ React.createElement(Form.Label, null, "Which category"), /* @__PURE__ */ React.createElement(Form.Select, {
      name: "category"
    }, Object.keys(categories).map((category) => {
      console.log(category);
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
    })), /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Col, {
      sm: 8
    }, /* @__PURE__ */ React.createElement(Form.Group, {
      controlId: "addCategory"
    }, /* @__PURE__ */ React.createElement(Form.Label, null, "Category Name"), /* @__PURE__ */ React.createElement(Form.Control, {
      name: "addCategory"
    }))), /* @__PURE__ */ React.createElement(Col, {
      sm: 4
    }, /* @__PURE__ */ React.createElement(Form.Group, {
      controlId: "categoryColor"
    }, /* @__PURE__ */ React.createElement(Form.Label, null, "Category Color"), /* @__PURE__ */ React.createElement("input", {
      type: "color",
      name: "categoryColor",
      id: "categoryColor"
    })))), /* @__PURE__ */ React.createElement(Row, {
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
