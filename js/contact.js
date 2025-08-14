  // Get the form, the alert box, and the close button
    const contactForm = document.getElementById('contactForm');
    const customAlert = document.getElementById('customAlert');
    const closeBtn = customAlert.querySelector('.close-btn');

    // Add an event listener to the form's submit event
    contactForm.addEventListener('submit', function(event) {
        // Prevent the default form submission (so the page doesn't reload)
        event.preventDefault();

        // 1. Show the custom alert
        customAlert.classList.add('show');

        // 2. Clear the form fields
        contactForm.reset();

        // 3. Hide the alert after 5 seconds
        setTimeout(() => {
            customAlert.classList.remove('show');
        }, 5000); // 5000 milliseconds = 5 seconds
    });

    // Add an event listener to the close button to hide the alert manually
    closeBtn.addEventListener('click', () => {
        customAlert.classList.remove('show');
    });
