        document.addEventListener('DOMContentLoaded', function() {
            // Mobile menu toggle
            const menuButton = document.querySelector('.ri-menu-line');
            if (menuButton) {
                const nav = document.querySelector('nav');
                menuButton.addEventListener('click', function() {
                    nav.classList.toggle('hidden');
                    nav.classList.toggle('flex');
                    nav.classList.toggle('flex-col');
                    nav.classList.toggle('absolute');
                    nav.classList.toggle('top-16');
                    nav.classList.toggle('right-4');
                    nav.classList.toggle('bg-white');
                    nav.classList.toggle('p-4');
                    nav.classList.toggle('shadow-lg');
                    nav.classList.toggle('rounded-lg');
                    nav.classList.toggle('z-50');
                });
            }
        });

        document.addEventListener('DOMContentLoaded', function() {
            // Custom switch functionality
            const switches = document.querySelectorAll('.custom-switch input');
            switches.forEach(switchInput => {
                switchInput.addEventListener('change', function() {
                    // You can add additional functionality here
                });
            });
        });

        document.addEventListener('DOMContentLoaded', function() {
            // Form validation
            const form = document.querySelector('form');
            if (form) {
                form.addEventListener('submit', function(e) {
                    e.preventDefault();
                    // Basic validation
                    const name = document.getElementById('name').value;
                    const email = document.getElementById('email').value;
                    const service = document.getElementById('service').value;
                    const date = document.getElementById('date').value;
                    
                    if (!name || !email || !service || !date) {
                        // const alert = document.getElementById('alert').style.display = 'block'
                        // Get the alert element and the close button
                       const alertElement = document.getElementById('alert');
                      const closeButton = document.getElementById('close-alert-btn');

                     // This part shows the alert (as you had before)
                         alertElement.style.display = 'flex'; 

                      // Add a click event listener to the close button
                      closeButton.addEventListener('click', () => {
                       // When the button is clicked, hide the alert
                             alertElement.style.display = 'none'; 
                          });
                        return;
                    }
                    
                    // Here you would typically send the form data to a server
                    alert('Thank you for booking! We will confirm your appointment shortly.');
                    form.reset();
                });
            }
        });
    