const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = loginForm.loginEmail.value;
  const password = loginForm.loginPassword.value;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("Login successful! Welcome back!");
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      alert("Login failed: " + error.message);
    });
});
