// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    const asciiText = document.querySelector(".ascii-text");
    const titleContainer = document.querySelector(".title-container");
  
    // Function to animate ASCII text filling up the screen
    function animateAscii() {
      // Your animation code here
      // You can use CSS animations, JavaScript animations, or libraries like GSAP
      // Example using CSS animation:
      asciiText.classList.add("fill-screen");
      setTimeout(() => {
        asciiText.style.display = "none";
        titleContainer.style.display = "block";
        titleContainer.classList.add("reveal-title");
      }, 2000); // Adjust delay as needed
    }
  
    // Call the animation function
    animateAscii();
  });
  