$(document).ready(() => {
  let monthTableId = [
    "jan-table",
    "feb-table",
    "mar-table",
    "apr-table",
    "may-table",
    "jun-table",
    "jul-table",
    "aug-table",
    "sep-table",
    "oct-table",
    "nov-table",
    "dec-table",
  ];
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

  const queryString = new URLSearchParams(window.location.search);
  const userID = queryString.get("userID");

  $.get(`/getUserData?id=${userID}`, (res) => {
    let username = res.username;
    let entries = res.entries;

    $("#user-name").text(username);
    entries.forEach((entry, index) => {
      let tableId = monthTableId[index];
      entry.forEach((month) => {
        let rowClass = getRowColor(month.amount);
        let deleteBtn =
          `<button type="button" class="btn btn-default remove-entry" onclick="removeEntry('` +
          allMonths[index] +
          `', '` +
          month.from +
          `', ` +
          month.amount +
          `, '` +
          month.category +
          `')">` +
          `<span class="fas fa-times-circle fa-lg add-entry" aria-hidden="true"></span>` +
          `</button>`;
        let newRow =
          `<tr class="${rowClass} align-middle" height="40px">` +
          `<td>${month.from}</td>` +
          `<td>${month.amount}$</td>` +
          `<td>${month.category}</td>` +
          `<td>${deleteBtn}</td>` +
          `</tr>`;
        $("#" + tableId + " tbody").append(newRow);
      });
    });
  });
});

function getRowColor(amount) {
  if (amount > 0) {
    return "table-success";
  } else if (amount < 0) {
    return "table-danger";
  } else {
    return "table-light";
  }
}
