let generatedOTP = "";

    // Generate OTP
    function generateOTP() {
      generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();
      console.log("Your OTP for update password:", generatedOTP);
    }

    // CNIC form submit
    document.getElementById("cnicForm").addEventListener("submit", function(e) {
      e.preventDefault();

      const cnic = document.getElementById("cnic").value.trim();
      if (cnic === "") {
        alert("CNIC is required");
        return;
      }

      generateOTP();

      // Hide CNIC form, show OTP form
      document.getElementById("cnicForm").classList.add("d-none");
      document.getElementById("otpForm").classList.remove("d-none");
    });

    // Resend OTP
    document.getElementById("resendOtp").addEventListener("click", function(e) {
      e.preventDefault();
      generateOTP();
      document.getElementById("otpStatus").innerHTML = "<span class='text-info'>🔄 New OTP sent to console.</span>";
    });

    // OTP Form submit
    document.getElementById("otpForm").addEventListener("submit", function(e) {
      e.preventDefault();

      const userOTP = document.getElementById("otpInput").value.trim();
      const status = document.getElementById("otpStatus");
      const error = document.getElementById("otpError");

      if (userOTP === "") {
        error.innerText = "OTP is required.";
        status.innerText = "";
        return;
      }

      if (userOTP === generatedOTP) {
        error.innerText = "";
        status.innerHTML = "<span class='text-success'>✅ OTP Verified Successfully!</span>";
        setTimeout(() => {
          window.location.href = "reset-password.html"; // or wherever you want to go
        }, 1500);
      } else {
        error.innerText = "";
        status.innerHTML = "<span class='text-danger'>❌ Incorrect OTP. Please try again.</span>";
      }
    });