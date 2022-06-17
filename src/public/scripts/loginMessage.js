$(document).ready(() => {
  $.get("/loginMessage", (res) => {
    if (res !== "Success!") {
      $("#login-error").addClass("active");
      $("#login-error").append(
        `<span style="color:#d8000c; margin-right: 2%;">
                <i class="fas fa-exclamation"></i>
            </span>
            ${res}
            <span style="color:#d8000c; margin-left: 2%;">
                <i class="fas fa-exclamation"></i>
            </span>`
      );
    } else {
      console.log(res);
    }
  });
});
