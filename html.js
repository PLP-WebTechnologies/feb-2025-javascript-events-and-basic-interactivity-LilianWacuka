// This script handles form validation, event handling, and tab functionality for a web page.
document.addEventListener("DOMContentLoaded", function () {
    // ===== FORM VALIDATION =====
    const form = document.querySelector("form");
    const inputs = form.querySelectorAll("input");
  
    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        if (input.type === "email") {
          validateEmail(input);
        } else if (input.name === "password") {
          validatePassword(input);
        } else {
          validateRequired(input);
        }
      });
    });
  
    form.addEventListener("submit", function (e) {
      let isValid = true;
      inputs.forEach((input) => {
        if (input.type === "email") {
          isValid = validateEmail(input) && isValid;
        } else if (input.name === "password") {
          isValid = validatePassword(input) && isValid;
        } else {
          isValid = validateRequired(input) && isValid;
        }
      });
  
      if (!isValid) {
        e.preventDefault();
      }
    });
  
    function validateRequired(input) {
      if (input.value.trim() === "") {
        input.classList.add("invalid");
        input.classList.remove("valid");
        return false;
      } else {
        input.classList.add("valid");
        input.classList.remove("invalid");
        return true;
      }
    }
  
    function validateEmail(input) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValid = emailPattern.test(input.value.trim());
      input.classList.toggle("valid", isValid);
      input.classList.toggle("invalid", !isValid);
      return isValid;
    }
  
    function validatePassword(input) {
      const isValid = input.value.length >= 8;
      input.classList.toggle("valid", isValid);
      input.classList.toggle("invalid", !isValid);
      return isValid;
    }
  
    // ===== EVENT HANDLING =====
    const btn = document.querySelector(".interactive-button");
    const secret = document.querySelector(".secret-action");


    btn.addEventListener
    btn.addEventListener("click", () => {
      btn.textContent = btn.textContent === "Clicked!" ? "Click Me" : "Clicked!";
      btn.style.backgroundColor = btn.style.backgroundColor === "red" ? "#28a745" : "red";
    });
  
    btn.addEventListener("mouseover", () => {
      btn.style.opacity = 0.9;
    });
  
    btn.addEventListener("mouseout", () => {
      btn.style.opacity = 1;
    });
  
    document.addEventListener("keypress", (e) => {
      console.log("Key pressed:", e.key);
    });
  
    let clickTimer = null;
    btn.addEventListener("dblclick", () => {
      secret.style.display = "block";
      secret.textContent = "Double-click secret activated!";
    });
  
    // Optional: Long Press (500ms)
    let pressTimer;
    btn.addEventListener("mousedown", () => {
      pressTimer = setTimeout(() => {
        secret.style.display = "block";
        secret.textContent = "Long press detected!";
      }, 500);
    });
  
    btn.addEventListener("mouseup", () => {
      clearTimeout(pressTimer);
    });
  
    // ===== TABS (for interactive content) =====
    const tabs = document.querySelectorAll(".tab-button");
    const contents = document.querySelectorAll(".tab-content");
  
    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        contents.forEach((c) => c.classList.remove("active"));
        contents[index].classList.add("active");
      });
    });
  });
  