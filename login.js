document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorMsg = document.getElementById('error-msg');

  // Get stored users from localStorage
  const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

  // Default users
  const defaultUsers = [
    { username: "admin", password: "1234" },
    { username: "user1", password: "pass1" },
    { username: "user2", password: "pass2" },
    { username: "john", password: "doe123" },
    { username: "alice", password: "wonder" }
  ];

  const allUsers = [...defaultUsers, ...storedUsers];

  // Validate user
  const isValid = allUsers.some(user => user.username === username && user.password === password);

  if (isValid) {
    localStorage.setItem("loggedInUser", username); // Save before redirect
    window.location.href = "index.html"; // Go to dashboard
  } else {
    errorMsg.textContent = "Invalid username or password!";
    errorMsg.style.color = "red";
  }
});
