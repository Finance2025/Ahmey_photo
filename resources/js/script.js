// This function shows an alert when the "Contact Me" button is clicked
function showContactMessage() {
    alert("Thank you for visiting my portfolio! Feel free to reach out.");
}

// Example of dynamic content addition
document.addEventListener("DOMContentLoaded", () => {
    // Adding a new section dynamically after page loads
    const newSection = document.createElement("section");
    newSection.innerHTML = "<h2>About Me</h2><p>Welcome to my portfolio! I am a passionate developer.</p>";
    document.querySelector("main").appendChild(newSection);
});
