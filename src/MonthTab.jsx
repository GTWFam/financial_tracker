import React from "react";
import { Table, Button } from "react-bootstrap";
import { removeEntry, openAddForm } from "./public/scripts/editData";
import { contrastFont } from "./public/scripts/scripts";
import img from "./public/img/dollar-bill.png";
import img2 from "./public/img/dollar-bill-red.png";

class MonthTab extends React.Component {
  render() {
    const { month, data, categories } = this.props;
    let total = data.shift()["balance"];
    return (
      <>
        <h2>Balance: {total}</h2>
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
                <tr className={`align-middle`} height="40">
                  <td>{entry.date}</td>
                  <td>{entry.from}</td>
                  <td className={rowColor}>
                    <span>$ {entry.amount}</span>
                  </td>
                  <td>
                    <p style={{ position: "relative", margin: "0px" }}>
                      {entry.category}
                      <span
                        style={{
                          "background-color": categories[entry.category],
                          width: 25,
                          height: 25,
                          display: "block",
                          position: "absolute",
                          right: 10,
                          top: 0,
                        }}
                      ></span>
                    </p>
                  </td>
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
          </tbody>
        </Table>
      </>
    );
  }
}
export default MonthTab;
