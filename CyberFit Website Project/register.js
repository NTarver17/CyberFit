const form = document.getElementById("registerForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = form.email.value;
  const password = form.password.value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("Account created! Redirecting to dashboard...");
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      alert(error.message);
    });
});
