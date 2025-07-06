// Select the login form
const loginForm = document.getElementById("login-form");

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = loginForm.querySelector('input[type="email"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;

    // Firebase Login
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        alert("Login successful! Welcome back.");
        window.location.href = "dashboard.html";
      })
      .catch((error) => {
        alert("Login failed: " + error.message);
      });
  });
}
