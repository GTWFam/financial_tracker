import React from "react";
import { Tabs, Tab, Fade } from "react-bootstrap";
import MonthTab from "./MonthTab";

class Months extends React.Component {
  render() {
    const { entries } = this.props;
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
      "December",
    ];
    let currentMonth = allMonths[new Date().getMonth()];
    return (
      <Tabs
        transition={Fade}
        defaultActiveKey={currentMonth}
        id="months"
        className="mb-3 justify-content-md-center text-center"
      >
        {allMonths.map((month, index) => {
          let monthEntries = entries[index];
          return (
            <Tab eventKey={month} title={month}>
              <MonthTab month={month} data={monthEntries} />
            </Tab>
          );
        })}
      </Tabs>
    );
  }
}
export default Months;
