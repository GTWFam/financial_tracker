function testUser() {
  document.getElementById("username").value = "Guest";
  document.getElementById("password").value = "test123";
  document.getElementById("login-form").submit();
  return false;
}
