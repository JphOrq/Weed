$(document).ready(function () {
  $("#myCarousel").carousel({
    interval: 5000,
  });
});

// Get the current year
var currentYear = new Date().getFullYear();

document.getElementById("currentYear").textContent = currentYear;
