// signup.js
document.getElementById("signup-form").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const username = document.getElementById("new-username").value.trim();
    const password = document.getElementById("new-password").value.trim();
    const msg = document.getElementById("signup-msg");
  
    if (!username || !password) {
      msg.textContent = "Please enter both fields.";
      msg.style.color = "red";
      return;
    }
  
    // Get stored users or initialize empty array
    let users = JSON.parse(localStorage.getItem("users")) || [];
  
    // Check if user already exists
    const exists = users.some(user => user.username === username);
  
    if (exists) {
      msg.textContent = "Username already exists.";
      msg.style.color = "red";
    } else {
      // Add new user
      users.push({ username, password });
      localStorage.setItem("users", JSON.stringify(users)); // Save updated user list
  
      msg.textContent = "Signup successful! Redirecting to login...";
      msg.style.color = "green";
  
      setTimeout(() => {
        window.location.href = "login.html";
      }, 1500);
    }
  });

  
  localStorage.setItem("loggedInUser", username);
