

$(document).ready(function () {
    $(".btn-modal").click(function (e) {
      e.preventDefault(); // Prevent default anchor tag behavior

      var email = $("#loginEmail").val().trim();
      var password = $("#loginPassword").val().trim();

      // Check if email is empty
      if (email === "") {
        alert("Please enter your email address.");
        return;
      }

      // Optional: Validate email format
      var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!pattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      // Check if password is empty
      if (password === "") {
        alert("Please enter your password.");
        return;
      }

      // ✅ Check if password is less than 8 characters
      if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
      }

      // ✅ All validations passed
      alert("Login Successful (Simulation)");
      // Optionally submit the form
      // $("#form").submit();
    });
  });