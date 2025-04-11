
//login ligic antunna......
window.addEventListener("DOMContentLoaded", () => {
    const authControls = document.getElementById("auth-controls");
    const loginBtn = document.getElementById("login-btn");

    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      authControls.innerHTML = `
        <span>Welcome!!</span>
        <button id="logout-btn">Logout</button>
      `;

      document.getElementById("logout-btn").addEventListener("click", () => {
        localStorage.removeItem("loggedInUser");
        location.reload(); 
      });
    }
  });



  document.getElementById("menu-toggle").addEventListener("click", () => {
    document.getElementById("navbar-links").classList.toggle("active");
  });

  window.addEventListener("DOMContentLoaded", () => {
    const authControls = document.getElementById("auth-controls");
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      authControls.innerHTML = `
        <span class="welcome-text">Welcome, <b>${loggedInUser}</b></span>
        <button id="logout-btn">Logout</button>
      `;

      document.getElementById("logout-btn").addEventListener("click", () => {
        localStorage.removeItem("loggedInUser");
        location.reload();
      });
    }
  });