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