document.querySelector('.contact-btn').addEventListener('click', () => {
    alert("Contact form coming soon!");
});

document.querySelectorAll('.hobby-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        alert("Hobby content loading...");
    });
});
// Optional for dynamic effect on button click
document.querySelectorAll('.project-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        alert("Project details coming soon!");
    });
});

// Select each hobby div by their IDs
const hobbyCoding = document.getElementById('hobby-coding');
const hobbyOpenSource = document.getElementById('hobby-open-source');
const hobbyML = document.getElementById('hobby-ml');

// Add click event listeners to each hobby div
hobbyCoding.addEventListener('click', function() {
    alert('Competitive Coding is a great way to sharpen your coding skills and stay competitive in the tech world!');
});

hobbyOpenSource.addEventListener('click', function() {
    alert('Open Source Contributions help the community grow and provide valuable learning experiences.');
});

hobbyML.addEventListener('click', function() {
    alert('Machine Learning is an exciting field with endless possibilities in NLP, Computer Vision, and more.');
});

// Script to add interactivity to buttons

// Example of how you can handle button clicks to show an alert or navigate to a section
document.querySelector('.contact-btn').addEventListener('click', function() {
    alert('Contact me at: sarah@example.com');
});

document.querySelector('.learn-more-btn').addEventListener('click', function() {
    window.location.href = '#hobbies-section';  // Navigates to the hobbies section
});

document.querySelectorAll('.hobby-btn').forEach(button => {
    button.addEventListener('click', function() {
        alert('More details coming soon!');
    });
});

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    if (name && email && message) {
      alert("Message sent successfully!"); // Temporary success message
      // You can implement AJAX or API call here to send form data
    } else {
      alert("Please fill out all fields.");
    }
  });
  