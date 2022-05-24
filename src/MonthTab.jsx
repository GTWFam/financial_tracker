import React from "react";
import { Table, Button } from "react-bootstrap";
import { removeEntry, openAddForm } from "./public/scripts/editData";
import { contrastFont } from "./public/scripts/scripts";
import img from "./public/img/dollar-bill.png";
import img2 from "./public/img/dollar-bill-red.png";

class MonthTab extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { month, data, categories } = this.props;
    return (
      <>
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
            {data.slice(1).map((entry) => {
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
                      <span
                        style={{
                          "background-color": categories[entry.category],
                          padding: "7px 0px",
                          "min-width": "45%",
                          display: "inline-block",
                          color: contrastFont(categories[entry.category]),
                        }}
                      >
                        {entry.category}
                      </span>
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
