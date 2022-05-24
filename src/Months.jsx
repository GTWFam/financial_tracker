import React from "react";
import { Dropdown, DropdownButton, Row, Col } from "react-bootstrap";
import MonthTab from "./MonthTab";

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
        "December",
      ],
      index: new Date().getMonth(),
    };
    this.handleMonthChange = this.handleMonthChange.bind(this);
  }

  handleMonthChange = (e) => {
    this.setState((state) => {
      let i = state.allMonths.indexOf(e.target.textContent);
      return {
        index: i,
      };
    });
  };

  render() {
    const { entries, categories } = this.props;
    const { allMonths, index } = this.state;
    let selectedMonth = allMonths[index];
    let total = entries[index][0];
    if (total !== undefined) {
      total = total["balance"];
    } else {
      total = 0;
    }
    return (
      <>
        <Row className="mb-3">
          <Col className="ps-0 d-flex align-items-center" md="auto">
            <h2 className="m-0">Balance: $ {total}</h2>
          </Col>
          <Col>
            <DropdownButton
              variant="outline-dark"
              title={selectedMonth}
              id="month_selector"
              size="lg"
            >
              {allMonths.map((month) => {
                if (month === selectedMonth) {
                  return (
                    <Dropdown.Item
                      as="button"
                      onClick={this.handleMonthChange}
                      active
                    >
                      {month}
                    </Dropdown.Item>
                  );
                } else {
                  return (
                    <Dropdown.Item as="button" onClick={this.handleMonthChange}>
                      {month}
                    </Dropdown.Item>
                  );
                }
              })}
            </DropdownButton>
          </Col>
        </Row>
        <Row className="justify-content-md-center text-center">
          <MonthTab
            month={selectedMonth}
            data={entries[index]}
            categories={categories}
          />
        </Row>
      </>
    );
  }
}
export default Months;
