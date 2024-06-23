
document.addEventListener('DOMContentLoaded', function() {
    let logoutLink = document.querySelector('#logout-link');

    if (logoutLink) {
        logoutLink.addEventListener('click', function(event) {
            event.preventDefault();
            
            // Remove user data from localStorage
            localStorage.removeItem('userEmail');
            
            // Show login and register links
            let loginLink = document.querySelector('#login-link');
            let registerLink = document.querySelector('#register-link');

            if (loginLink) loginLink.innerText = 'Log in';
            if (registerLink) registerLink.innerText = 'Register';

        });
    }
});

