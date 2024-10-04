// script.js (Login)

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const messageDiv = document.getElementById('message');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent form submission

        // Clear previous messages
        messageDiv.textContent = '';
        messageDiv.classList.remove('success', 'error');
        messageDiv.style.display = 'none';

        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Simple validation
        if (email === '' || password === '') {
            showMessage('Both fields are required.', 'error');
            return;
        }

        // Simulate form submission success
        showMessage('Login successful! Redirecting...', 'success');

        // Redirect to home page after a delay
        setTimeout(() => {
            window.location.href = 'oo.html'; // Change 'home.html' to your actual home page path
        }, 200); // Delay for 2 seconds before redirection
    });

    function showMessage(message, type) {
        messageDiv.textContent = message;
        messageDiv.classList.add(type);
        messageDiv.style.display = 'block';
    }
});
