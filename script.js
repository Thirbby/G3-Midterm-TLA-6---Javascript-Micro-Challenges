// 1. Target DOM Nodes (Matching Slide 8)
const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("usernameInput");
const passwordInput = document.getElementById("passwordInput");
const feedbackBox = document.getElementById("loginFeedback");
// 2. Attach Form Submission Listener
loginForm.addEventListener("submit", function(event) {
// Prevent native HTTP page refresh
event.preventDefault();
const username = usernameInput.value.trim();
const password = passwordInput.value.trim();
// Reset Alert State
feedbackBox.className = "alert d-none";
// Validate Credentials
if (username === "admin" && password === "secret123") {
feedbackBox.className = "alert alert-success";
feedbackBox.textContent = "Authentication successful! Redirecting...";
} else {

feedbackBox.className = "alert alert-danger";
feedbackBox.textContent = "Invalid credentials. Please try again.";
passwordInput.value = "";
passwordInput.focus();
}
});
