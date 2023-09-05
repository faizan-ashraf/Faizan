document.addEventListener("DOMContentLoaded", function() {
    const createButton = document.getElementById("createaccount");
    createButton.addEventListener("click", function() {
        window.location.href = "create_new_form.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector(".loginForm"); // Select by class
    const loginResult = document.getElementById("loginResult");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
  
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
  
      if (isValidUser(email, password)) {
        loginResult.textContent = "Login successful!";
        emailInput.classList.remove("red-border");
        passwordInput.classList.remove("red-border");
      } else {  
        loginResult.textContent = "Invalid email or password. Please try again.";
        emailInput.classList.add("red-border");
      passwordInput.classList.add("red-border");
      }
    });
  
    function isValidUser(email, password) {
      // Implement your server-side authentication logic here.
      // You should check the email and password against your database or some authentication system.
      // For this example, we'll use a hardcoded check.
      return email === "123@gmail.com" && password === "101010";
    }
  });
  