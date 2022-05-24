import React from "./_snowpack/pkg/react.js";
import {Dropdown, DropdownButton, Row, Col} from "./_snowpack/pkg/react-bootstrap.js";
import MonthTab from "./MonthTab.js";
class Months extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allMonths: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      index: new Date().getMonth()
    };
    this.handleMonthChange = this.handleMonthChange.bind(this);
  }
  handleMonthChange = (e) => {
    this.setState((state) => {
      let i = state.allMonths.indexOf(e.target.textContent);
      return {
        index: i
      };
    });
  };
  render() {
    const {entries, categories} = this.props;
    const {allMonths, index} = this.state;
    let selectedMonth = allMonths[index];
    let total = entries[index][0];
    if (total !== void 0) {
      total = total["balance"];
    } else {
      total = 0;
    }
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Row, {
      className: "mb-3"
    }, /* @__PURE__ */ React.createElement(Col, {
      className: "ps-0 d-flex align-items-center",
      md: "auto"
    }, /* @__PURE__ */ React.createElement("h2", {
      className: "m-0"
    }, "Balance: $ ", total)), /* @__PURE__ */ React.createElement(Col, null, /* @__PURE__ */ React.createElement(DropdownButton, {
      variant: "outline-dark",
      title: selectedMonth,
      id: "month_selector",
      size: "lg"
    }, allMonths.map((month) => {
      if (month === selectedMonth) {
        return /* @__PURE__ */ React.createElement(Dropdown.Item, {
          as: "button",
          onClick: this.handleMonthChange,
          active: true
        }, month);
      } else {
        return /* @__PURE__ */ React.createElement(Dropdown.Item, {
          as: "button",
          onClick: this.handleMonthChange
        }, month);
      }
    })))), /* @__PURE__ */ React.createElement(Row, {
      className: "justify-content-md-center text-center"
    }, /* @__PURE__ */ React.createElement(MonthTab, {
      month: selectedMonth,
      data: entries[index],
      categories
    })));
  }
}
export default Months;
