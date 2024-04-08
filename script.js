const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');

const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

// Define JSON object with user credentials
const userData = {
    username: "user123",
    password: "pass123"
};

// Function to handle login
document.getElementById("loginForm").addEventListener("submit", function(event) {
    // Prevent default form submission
    event.preventDefault();

    // Get form values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if credentials match
    if (username === userData.username && password === userData.password) {
        // Redirect to dashboard upon successful authentication
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid username or password.");
    }
});


document.getElementById("loginButton").addEventListener("click", function() {
    window.location.href = "file:///C:/Users/HP/Desktop/login%20proj1/dashboard.html";
});


loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});
