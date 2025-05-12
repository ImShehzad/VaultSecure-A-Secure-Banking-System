document.getElementById("resetForm").addEventListener("submit", function(e) {
      e.preventDefault();

      const newPassword = document.getElementById("newPassword").value.trim();
      const confirmPassword = document.getElementById("confirmPassword").value.trim();
      const errorDiv = document.getElementById("passwordError");

      if (newPassword === "" || confirmPassword === "") {
        errorDiv.innerText = "Both fields are required.";
        return;
      }

      if (newPassword !== confirmPassword) {
        errorDiv.innerText = "Passwords do not match.";
        return;
      }

      errorDiv.innerText = "";
      alert("Your password has been updated.");
      // Redirect or reset the form
      window.location.href = "login.html";
    });