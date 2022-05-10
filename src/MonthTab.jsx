import React from "react";
import { Table, Button } from "react-bootstrap";
import { removeEntry, openAddForm } from "./public/scripts/editData";

class MonthTab extends React.Component {
  render() {
    const { month, data } = this.props;
    let total = 0;
    return (
      <Table bordered size="md">
        <thead>
          <tr class="table-primary align-middle" height="40px">
            <th>Date</th>
            <th>From</th>
            <th>Amount</th>
            <th>Category</th>
            <th width="50">
              <Button type="button" onClick={() => openAddForm(month)}>
                <span
                  class="fas fa-plus-circle fa-lg"
                  aria-hidden="true"
                ></span>
              </Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry) => {
            console.log(entry);
            total += parseInt(entry.amount);
            let rowColor = "success";
            if (entry.amount < 0) {
              rowColor = "danger";
            }
            return (
              <tr className={`align-middle ${rowColor}`} height="40">
                <td>{entry.date}</td>
                <td>{entry.from}</td>
                <td>{entry.amount}$</td>
                <td>{entry.category}</td>
                <td>
                  <Button
                    type="button"
                    onClick={() => removeEntry(entry, month)}
                    variant="danger"
                  >
                    <span
                      class="fas fa-times-circle fa-lg add-entry"
                      aria-hidden="true"
                    ></span>
                  </Button>
                </td>
              </tr>
            );
          })}
          <tr
            className={`align-middle last-row ${
              total < 0 ? "danger" : "success"
            }`}
            height="40"
          >
            <td>Total</td>
            <td>{total}$</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
export default MonthTab;
