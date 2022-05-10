import React from "./_snowpack/pkg/react.js";
import {Table, Button} from "./_snowpack/pkg/react-bootstrap.js";
import {removeEntry, openAddForm} from "./public/scripts/editData.js";
class MonthTab extends React.Component {
  render() {
    const {month, data} = this.props;
    let total = 0;
    return /* @__PURE__ */ React.createElement(Table, {
      bordered: true,
      size: "md"
    }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", {
      class: "table-primary align-middle",
      height: "40px"
    }, /* @__PURE__ */ React.createElement("th", null, "Date"), /* @__PURE__ */ React.createElement("th", null, "From"), /* @__PURE__ */ React.createElement("th", null, "Amount"), /* @__PURE__ */ React.createElement("th", null, "Category"), /* @__PURE__ */ React.createElement("th", {
      width: "50"
    }, /* @__PURE__ */ React.createElement(Button, {
      type: "button",
      onClick: () => openAddForm(month)
    }, /* @__PURE__ */ React.createElement("span", {
      class: "fas fa-plus-circle fa-lg",
      "aria-hidden": "true"
    }))))), /* @__PURE__ */ React.createElement("tbody", null, data.map((entry) => {
      console.log(entry);
      total += parseInt(entry.amount);
      let rowColor = "success";
      if (entry.amount < 0) {
        rowColor = "danger";
      }
      return /* @__PURE__ */ React.createElement("tr", {
        className: `align-middle ${rowColor}`,
        height: "40"
      }, /* @__PURE__ */ React.createElement("td", null, entry.date), /* @__PURE__ */ React.createElement("td", null, entry.from), /* @__PURE__ */ React.createElement("td", null, entry.amount, "$"), /* @__PURE__ */ React.createElement("td", null, entry.category), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement(Button, {
        type: "button",
        onClick: () => removeEntry(entry, month),
        variant: "danger"
      }, /* @__PURE__ */ React.createElement("span", {
        class: "fas fa-times-circle fa-lg add-entry",
        "aria-hidden": "true"
      }))));
    }), /* @__PURE__ */ React.createElement("tr", {
      className: `align-middle last-row ${total < 0 ? "danger" : "success"}`,
      height: "40"
    }, /* @__PURE__ */ React.createElement("td", null, "Total"), /* @__PURE__ */ React.createElement("td", null, total, "$"), /* @__PURE__ */ React.createElement("td", null), /* @__PURE__ */ React.createElement("td", null), /* @__PURE__ */ React.createElement("td", null))));
  }
}
export default MonthTab;
