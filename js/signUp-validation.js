document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form values
  const fullName = document.getElementById("fullName").value.trim();
  const cnic = document.getElementById("cnic").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  // Get error message elements
  const errors = {
    fullName: document.getElementById("fullNameError"),
    cnic: document.getElementById("cnicError"),
    phone: document.getElementById("phoneError"),
    email: document.getElementById("emailError"),
    password: document.getElementById("passwordError"),
    confirmPassword: document.getElementById("confirmPasswordError"),
  };

  // Regex patterns
  const namePattern = /^[A-Za-z\s]+$/;
  const cnicPattern = /^[0-9]{13}$/;
  const phonePattern = /^[0-9]{11}$/;
  const gmailPattern = /^[^\s@]+@gmail\.com$/;
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // Clear previous errors
  let hasError = false;

  

  if (!fullName || !namePattern.test(fullName)) {
    errors.fullName.textContent = "Full name must contain only letters and spaces.";
    document.getElementById("fullName").classList.add("is-invalid");
    hasError = true;
  } else {
    errors.fullName.textContent = "";
    document.getElementById("fullName").classList.remove("is-invalid");
  }
  

  if (!cnic || !cnicPattern.test(cnic)) {
    errors.cnic.textContent = "Enter a valid 13-digit CNIC (without dashes).";
    hasError = true;
  }

  if (!phone || !phonePattern.test(phone)) {
    errors.phone.textContent = "Phone number must be 11 digits.";
    hasError = true;
  }

  if (!email || !gmailPattern.test(email)) {
    errors.email.textContent = "Email must be a valid Gmail address (ends with @gmail.com).";
    hasError = true;
  }

  if (!password || !passwordPattern.test(password)) {
    errors.password.textContent = "Password must include 1 uppercase, 1 lowercase, 1 number, 1 special character, and be at least 8 characters.";
    hasError = true;
  }

  if (confirmPassword !== password) {
    errors.confirmPassword.textContent = "Passwords do not match.";
    hasError = true;
  }

  if (!hasError) {
    alert("All validations passed. Form can be submitted!");
    // Proceed to submit via AJAX or send to backend here
    window.location.href = "otp-verification.html";
    
  }
});
