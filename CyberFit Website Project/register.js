// Grab the form element
const form = document.getElementById("register-form");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = form.querySelector('input[type="email"]').value;
    const password = form.querySelectorAll('input[type="password"]')[0].value;
    const confirmPassword = form.querySelectorAll('input[type="password"]')[1].value;

    // Confirm password match
    if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }

    // Firebase sign up
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        alert("Account created successfully! Redirecting to dashboard...");
        window.location.href = "dashboard.html";
      })
      .catch((error) => {
        alert(error.message);
      });
  });
}
