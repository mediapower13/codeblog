// Addition of client-side validation or other interactive features here
// validating file type or size before form submission
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("applicationForm");

  form.addEventListener("submit", function(event) {
      // Prevent form submission if validation fails
      if (!validateForm()) {
          event.preventDefault();
      }
  });

  function validateForm() {
      let isValid = true;

      // Reset all error messages
      const errorMessages = document.querySelectorAll(".error-message");
      errorMessages.forEach(element => element.textContent = "");

      // Validate each input field
      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const resume = document.getElementById("resume");
      const coverLetter = document.getElementById("coverLetter");

      if (name.value.trim() === "") {
          setErrorFor(name, "Name cannot be blank");
          isValid = false;
      }

      if (email.value.trim() === "") {
          setErrorFor(email, "Email cannot be blank");
          isValid = false;
      } else if (!isValidEmail(email.value.trim())) {
          setErrorFor(email, "Invalid email format");
          isValid = false;
      }

      if (resume.files.length === 0) {
          setErrorFor(resume, "Please upload a resume");
          isValid = false;
      } else {
          const allowedExtensions = /(\.pdf|\.doc|\.docx)$/i;
          const fileSizeLimit = 10 * 1024 * 1024; // 10 MB
          const file = resume.files[0];

          if (!allowedExtensions.exec(file.name)) {
              setErrorFor(resume, "Supported file formats: PDF, DOC, DOCX");
              isValid = false;
          } else if (file.size > fileSizeLimit) {
              setErrorFor(resume, "File size exceeds limit (10MB)");
              isValid = false;
          }
      }

      if (coverLetter.value.trim() === "") {
          setErrorFor(coverLetter, "Cover letter cannot be blank");
          isValid = false;
      }

      return isValid;
  }

  function setErrorFor(input, message) {
      const errorElement = input.nextElementSibling; // Assuming error message is placed next to the input
      errorElement.textContent = message;
  }

  function isValidEmail(email) {
      // Simple email validation regex
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
});
