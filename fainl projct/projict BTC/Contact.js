
  function validateForm() {
    let name = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    // Validate name
    if (!/^([A-Za-z]{3,}( [A-Za-z]{3,})*)$/.test(name)) {
      alert("Name should contain only characters");
      document.getElementById("fullname").value = "";
      document.getElementById("fullname").focus();
      return false;
    }

    // Validate email
    if (! /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(com|net|edu|org)\.eg$/.test(email)) {
      alert("Invalid email address");
      document.getElementById("email").value = "";
      document.getElementById("email").focus();
      return false;
    }

    // Validate phone number
   // Validate phone number
if (!/^(010|011|012|015)+/.test(phone)) {
  alert("Phone number should start with 010, 011, 012, or 015 and contain up to 8 digits");
  document.getElementById("phone").value = "";
  document.getElementById("phone").focus();
  return false;
}

return true;
  }