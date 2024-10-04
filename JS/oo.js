document.addEventListener('DOMContentLoaded', function() {
    const orderForm = document.getElementById('orderForm');
    const orderMessage = document.getElementById('orderMessage');
    const locationMessage = document.getElementById('locationMessage');
    const deliveryAreas = ['Laga harree', 'BAAROO KORMAA', 'BAAROO KORMAA', 'AGAMSA', 'Caffee Araaraa', 'DAALATTII']; // Add more areas as needed
    const submitButton = document.getElementById('sub');

    orderForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent form submission

        // Clear previous messages
        orderMessage.textContent = '';
        locationMessage.textContent = '';

        // Check if any dish has been ordered
        const quantities = document.querySelectorAll('#order input[type="number"]');
        let isAnyDishOrdered = false;
        
        quantities.forEach(qty => {
            if (qty.value > 0) {
                isAnyDishOrdered = true;
            }
        });

        if (!isAnyDishOrdered) {
            orderMessage.textContent = 'Please select at least one dish before placing an order.';
            orderMessage.style.color = '#e74c3c';
            return;
        }

        // Display location selection prompt
        let locationInput = document.createElement('input');
        locationInput.type = 'text';
        locationInput.placeholder = 'Enter your delivery location from available locations';
        locationInput.id = 'locationInput';
        locationMessage.appendChild(locationInput);

        // Event listener for pressing Enter key
        locationInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.keyCode === 13) {
                handleLocationSubmission();
            }
        });

        // Event listener for clicking the submit button
        submitButton.addEventListener('click', handleLocationSubmission);

        function handleLocationSubmission() {
            const location = locationInput.value.trim();

            if (deliveryAreas.includes(location)) {
                document.getElementById('responce').innerHTML = 'Order placed successfully! Just wait for a while we will arive soon!.'
                // locationMessage.textContent = 'Order placed successfully! Just wait a minute.';
                locationMessage.style.color = '#2ecc71';
            } else {
                locationMessage.textContent = 'Invalid location. Please select a location from the list.';
                locationMessage.style.color = '#e74c3c';
            }
        }
    });
});




// Form Validation
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('#contact form');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        let isValid = true;
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        // Clear previous error messages
        clearErrors();

        // Validate Name
        if (name.value.trim() === '') {
            showError(name, 'Name is required');
            isValid = false;
        }

        // Validate Email
        if (email.value.trim() === '') {
            showError(email, 'Email is required');
            isValid = false;
        } else if (!isValidEmail(email.value)) {
            showError(email, 'Enter a valid email address');
            isValid = false;
        }

        // Validate Message
        if (message.value.trim() === '') {
            showError(message, 'Message is required');
            isValid = false;
        }

        // If the form is valid, submit it
        if (isValid) {
            // contactForm.submit();
            document.getElementById('sumitted').innerHTML='your requeriment form is succesfully submitted'
        }
    });

    // Utility functions
    function showError(input, message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error';
        errorDiv.innerText = message;
        input.parentElement.appendChild(errorDiv);
        input.classList.add('error-border');
    }

    function clearErrors() {
        const errors = document.querySelectorAll('.error');
        errors.forEach(error => error.remove());
        const inputs = document.querySelectorAll('.error-border');
        inputs.forEach(input => input.classList.remove('error-border'));
    }

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});

// Smooth Scrolling for In-Page Links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.hash !== '') {
                e.preventDefault();

                const hash = this.hash;

                document.querySelector(hash).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

