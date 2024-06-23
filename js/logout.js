
document.addEventListener('DOMContentLoaded', () => {
    let logoutLink = document.querySelector('#logout-link');

    if (logoutLink) {
        logoutLink.addEventListener('click', (event) => {
            event.preventDefault();
            
            // Remove user data from localStorage
            localStorage.removeItem('userEmail');
            
            // Show login and register links
            let loginLink = document.querySelector('#login-link');
            let registerLink = document.querySelector('#register-link');

            if (loginLink) loginLink.style.display = 'block';
            if (registerLink) registerLink.style.display = 'block';

        });
    }
});
