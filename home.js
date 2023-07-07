// JavaScript code in script.js
function navigateTo(url) {
    window.location.href = url;
  }
  
  // Attach event listeners to the dropdowns
  document.getElementById("dataScienceDropdown").addEventListener("change", function() {
    navigateTo(this.value);
  });
  
  document.getElementById("fullStackDropdown").addEventListener("change", function() {
    navigateTo(this.value);
  });
  