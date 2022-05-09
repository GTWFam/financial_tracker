import React from "./_snowpack/pkg/react.js";
import {Tabs, Tab, Fade} from "./_snowpack/pkg/react-bootstrap.js";
import MonthTab from "./MonthTab.js";
class Months extends React.Component {
  render() {
    const {entries} = this.props;
    console.log(entries);
    let allMonths = [
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
    ];
    let currentMonth = allMonths[new Date().getMonth()];
    return /* @__PURE__ */ React.createElement(Tabs, {
      transition: Fade,
      defaultActiveKey: currentMonth,
      id: "months",
      className: "mb-3 justify-content-md-center text-center"
    }, allMonths.map((month, index) => {
      let monthEntries = entries[index];
      return /* @__PURE__ */ React.createElement(Tab, {
        eventKey: month,
        title: month
      }, /* @__PURE__ */ React.createElement(MonthTab, {
        month,
        data: monthEntries
      }));
    }));
  }
}
export default Months;
