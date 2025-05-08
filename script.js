document.addEventListener("DOMContentLoaded", function(){
  const form = document.getElementById("patientForm");
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const passwordError = document.getElementById('password-error');
  const formStatus = document.getElementById('form-status');
  // REAL TIME VALIDATION
  nameInput.addEventListener('input', validateName);
  emailInput.addEventListener('input', validateEmail);
  passwordInput.addEventListener('input', validatePassword);
  // FORM VALIDATION
  function validateName() {
    if (nameInput.value.trim() === "") {
      nameError.textContent = "Name is required";
      nameError.style.display = "block";
      return false;
    } else {
      nameError.style.display = "none";
      return true;
    }
  }
  function validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === "" || !emailRegex.test(emailInput.value)) {
      emailError.textContent = "Invalid email address";
      emailError.style.display = "block";
      return false;
    } else {
      emailError.style.display = "none";
      return true;
    }
  }
  function validatePassword() {
    if (passwordInput.value.trim() === "") {
      passwordError.textContent = "Password is required";
      passwordError.style.display = "block";
      return false;
    }
    if (passwordInput.value.length < 8) {
      passwordError.textContent = "Password must be at least 8 characters long";
      passwordError.style.display = "block";
      return false;
    } else {
      passwordError.style.display = "none";
      return true;
    }
  }
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    
    if (isNameValid && isEmailValid && isPasswordValid) {
      formStatus.textContent = "Form submitted successfully!";
      formStatus.style.color = "green";
      // Reset the form after successful submission
      setTimeout(function(){
        form.reset();
        formStatus.style.display = 'none';
      }, 2000);
       // Reset the form after successful submission
    } else {
      formStatus.textContent = "Please fix the errors in the form.";
      formStatus.style.color = "red";
    }
  });
  // EVENT HANDLING.
  const clickBtn = document.getElementById('click-event');
  const clicktext = document.getElementById('click-text');
  clickBtn.addEventListener('click', function(){
    clicktext.textContent = "Button clicked!";
    clicktext.style.color = "black";
    
  });
  // MOUSEOVER EVENT
 // Get the correct element (using class selector instead of ID)
const hoverBox = document.querySelector('.event-box');
const hoverOutput = document.getElementById('hover-output');

// Add both mouseenter and mouseleave events for better UX
hoverBox.addEventListener('mouseenter', function() {
    hoverOutput.textContent = "Mouse is over the box!";
    hoverOutput.style.color = "blue";
    hoverBox.style.backgroundColor = "#f0f8ff"; // Optional: change box color too
});

hoverBox.addEventListener('mouseleave', function() {
    hoverOutput.textContent = "Waiting for hover...";
    hoverOutput.style.color = ""; // Reset to default
    hoverBox.style.backgroundColor = ""; // Reset to default
});

// Keypress code (this part is correct)
const keypressInput = document.getElementById('keypress-input');
const keypressOutput = document.getElementById('keypress-output');
  
keypressInput.addEventListener('keydown', function(e) {
    keypressOutput.textContent = `Key pressed: ${e.key} (Code: ${e.code})`;
    keypressOutput.style.color = '#9b59b6';
});
 // IMAGE SLIDER
const galleryImages = document.querySelectorAll('.image-gallery img');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentImageIndex = 0;

// Set first image as active initially
showImage(currentImageIndex);

function showImage(index) {
    galleryImages.forEach(img => img.classList.remove('active'));
    galleryImages[index].classList.add('active');
    currentImageIndex = index;
}

prevBtn.addEventListener('click', function() {
    let newIndex = currentImageIndex - 1;
    if (newIndex < 0) newIndex = galleryImages.length - 1;
    showImage(newIndex);
});

nextBtn.addEventListener('click', function() {
    let newIndex = currentImageIndex + 1;
    if (newIndex >= galleryImages.length) newIndex = 0;
    showImage(newIndex);
});

// Auto-advance every 3 seconds 
// setInterval(function() {
//     let newIndex = currentImageIndex + 1;
//     if (newIndex >= galleryImages.length) newIndex = 0;
//     showImage(newIndex);
// }, 3000);
// TAB NAVIGATION
// TAB FUNCTIONALITY
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');
        
        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked button and corresponding content
        button.classList.add('active');
        document.getElementById(tabId).classList.add('active');
    });
    
});


});
  