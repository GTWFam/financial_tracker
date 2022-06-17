import { gtag } from "./GA";

export async function removeEntry(entry, month) {
  let date = entry.date;
  let from = entry.from;
  let amount = entry.amount;
  let category = entry.category;
  const queryString = new URLSearchParams(window.location.search);
  const userID = queryString.get("userID");
  gtag("event", "Remove Entry");
  await $.post(
    `/removeEntry?id=${userID}&month=${month}&date=${date}&from=${from}&amount=${amount}&category=${category}`,
    (res) => {
      console.log(res);
    }
  );
  return location.reload();
}

export async function addEntry() {
  gtag("event", "Add Transaction");
  document.getElementById("entryAdd").submit();
}

export function openAddForm(month) {
  const queryString = new URLSearchParams(window.location.search);
  const userID = queryString.get("userID");

  $("input#month").val(month);
  $("input#id").val(userID);
  if ($("#addEntryOverlay").hasClass("closed")) {
    $("#addEntryOverlay").removeClass("closed").addClass("opened");
  } else {
    $("#addEntryOverlay").removeClass("opened").addClass("closed");
  }
}
