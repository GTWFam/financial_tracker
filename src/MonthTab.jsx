import React from "react";
import { Table, Button } from "react-bootstrap";
import { removeEntry, openAddForm } from "./public/editData"

class MonthTab extends React.Component {
    render() {
        const { month, data } = this.props;
        return (
            <Table bordered size="md">
                <thead>
                    <tr class="table-primary align-middle" height="40px">
                        <th>From</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th width="50">
                            <Button type="button" onClick={() => openAddForm(month)}>
                                <span class="fas fa-plus-circle fa-lg" aria-hiddne="true"></span>
                            </Button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    { 
                        data.map(entry => {
                            let rowColor = 'success'
                            if (entry.amount < 0) {
                                rowColor = 'danger'
                            }
                            return (
                                <tr className={`align-middle ${rowColor}`} height="40">
                                    <td>{entry.from}</td>
                                    <td>{entry.amount}$</td>
                                    <td>{entry.category}</td>
                                    <td>
                                        <Button 
                                            type="button" 
                                            onClick={() => removeEntry(entry)}
                                            variant="danger"
                                        >
                                            <span class="fas fa-times-circle fa-lg add-entry" aria-hiddne="true"></span>
                                        </Button>
                                    </td>
                                </tr>
                            )
                        }) 
                    }
                </tbody>
            </Table>
        )
    }
}
export default MonthTab;