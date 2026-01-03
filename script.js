// Button click interaction
document.getElementById("btn").addEventListener("click", function () {
    alert("Hello! You clicked the button.");
});

// Simple form submission message
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Form submitted successfully!");
});
