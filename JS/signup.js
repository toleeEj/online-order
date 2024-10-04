// script.js (Sign-Up)

document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    const messageDiv = document.getElementById('message');

    signupForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent form submission

        // Clear previous messages
        messageDiv.textContent = '';
        messageDiv.classList.remove('success', 'error');
        messageDiv.style.display = 'none';

        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const confirmPassword = document.getElementById('confirm-password').value.trim();

        // Simple validation
        if (username === '' || email === '' || password === '' || confirmPassword === '') {
            showMessage('All fields are required.', 'error');
            return;
        }

        if (password !== confirmPassword) {
            showMessage('Passwords do not match.', 'error');
            return;
        }

        // Password strength validation (example)
        if (password.length < 6) {
            showMessage('Password must be at least 6 characters long.', 'error');
            return;
        }

        // Simulate form submission success
        showMessage('Sign up successful! Redirecting...', 'success');

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
