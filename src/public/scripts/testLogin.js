import { gtag } from "./GA";

export function testUser() {
  document.getElementById("username").value = "Guest";
  document.getElementById("password").value = "test123";
  gtag("event", "Guest Login");
  document.getElementById("login-form").submit();
  return false;
}
