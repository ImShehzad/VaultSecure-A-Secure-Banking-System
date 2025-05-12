let generatedOTP = "";

    // Generate OTP when page loads or resend clicked
    function generateOTP() {
      generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();
      console.log("Your phone verification code:", generatedOTP);
    }

    // Initial OTP
    generateOTP();

    // Resend OTP logic
    document.getElementById("resendOtp").addEventListener("click", function(e) {
      e.preventDefault();
      generateOTP();
      document.getElementById("otpStatus").innerHTML = "<span class='text-info'>🔄 New OTP sent to console.</span>";
    });

    // OTP verification
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
        window.location.href = 'login.html';
      } else {
        error.innerText = "";
        status.innerHTML = "<span class='text-danger'>❌ Incorrect OTP. Please try again.</span>";
      }
    });