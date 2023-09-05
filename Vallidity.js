document.addEventListener("DOMContentLoaded", function(){

    function validateName() {
      const firstNameInput = document.querySelector('.FirstName');
      const firstNameValue = firstNameInput.value.trim();
      
      if (firstNameValue === '') {
          firstNameInput.style.borderColor = 'red';
          return false;
      }

      firstNameInput.style.borderColor = '';
      return true;
  }

  function validateEmailOrPhone() {
      const reEmailInput = document.querySelector('.ReEmail');
      const reEmailValue = reEmailInput.value.trim();

      const phoneNumberPattern = /^\d{11}$/;
      const emailPattern = /^[A-Za-z0-9._%+-]+@gmail\.com$/i;

      if (!phoneNumberPattern.test(reEmailValue) && !emailPattern.test(reEmailValue)) {
          reEmailInput.style.borderColor = 'red';
          reEmailInput.placeholder= 'Invalid Email or Phone Number';
          reEmailInput.value= '';
          return false;
      }

      reEmailInput.style.borderColor = '';
      return true;
  }

  function validateAge() {
      const daySelect = document.querySelector('.day');
      const monthSelect = document.querySelector('.month');
      const yearSelect = document.querySelector('.year');

      const selectedDay = parseInt(daySelect.value, 10);
      const selectedMonth = parseInt(monthSelect.value, 10);
      const selectedYear = parseInt(yearSelect.value, 10);

      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const minValidYear = currentYear - 18;

      if (selectedYear > minValidYear) {
          alert('Not eligible for individuals under 18 years old.');
          return false;
      }

      return true;
  }

  function validatePassword() {
      const passwordInput = document.querySelector('.Password');
      const passwordValue = passwordInput.value.trim();

      if(passwordValue.length<8){
        passwordInput.style.borderColor = 'red';
        passwordInput.value= '';
        passwordInput.placeholder= 'Password must contain 8 characters';
        return false;
      }
      else if(!/[A-Z]/.test(passwordValue)){
        passwordInput.style.borderColor = 'red';
        passwordInput.value= '';
        passwordInput.placeholder= 'Password must contain an uppercase';
        return false;
      }

      passwordInput.style.borderColor = ''; // Reset border color
      return true;
  }

  // Function to handle form submission
  function validateForm(event) {
      event.preventDefault(); // Prevent the form from submitting

      // Call validation functions and check their return values
      const isNameValid = validateName();
      const isEmailOrPhoneValid = validateEmailOrPhone();
      const isAgeValid = validateAge();
      const isPasswordValid = validatePassword();

      // If all validations are successful, submit the form
      if (isNameValid && isEmailOrPhoneValid && isAgeValid && isPasswordValid) {
          alert('Form submitted successfully!');
          location.reload(true);
          // You can add code to submit the form to your server here.
      }
  }


  // Add a submit event listener to the form
  const form = document.querySelector('.NewForm');
  form.addEventListener('submit', validateForm);
});