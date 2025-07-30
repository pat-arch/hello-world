// js/navbar.js

document.addEventListener("DOMContentLoaded", () => {
  // Load the navbar HTML into the #navbar container
  fetch("./components/navbar.html")
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to load navbar");
      }
      return response.text();
    })
    .then(data => {
      document.getElementById("navbar").innerHTML = data;

      // Optional: Highlight the active link based on current page
      const currentPage = window.location.pathname.split("/").pop();
      const navLinks = document.querySelectorAll("#navbar a");

      navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
          link.classList.add("active");
        }
      });
    })
    .catch(error => {
      console.error("Error loading navbar:", error);
    });
});