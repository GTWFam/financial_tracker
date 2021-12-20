import React from "react";
import { Tabs, Tab, Fade } from "react-bootstrap";
import MonthTab from "./MonthTab";

class Months extends React.Component {
    render() {
        const { entries } = this.props
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
        ]
        return (
            <Tabs transition={Fade} defaultActiveKey="October" id="months" className="mb-3 justify-content-md-center text-center">
                {
                    allMonths.map(month => {
                        let monthEntries = entries.filter(entry => entry.month == month)
                        return (
                            <Tab eventKey={month} title={month}>
                                <MonthTab month={month} data={monthEntries} />
                            </Tab>
                        )
                    })
                }
            </Tabs>
        )
    }
}
export default Months;
