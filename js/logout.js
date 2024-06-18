
document.addEventListener('DOMContentLoaded', () => {
    let userEmail = localStorage.getItem('userEmail');
    
    let header = document.querySelector('header');
    let navMenu = document.querySelector('.nav-menu');
    
    if (userEmail) {
        let welcomeMessage = document.createElement('div');
        welcomeMessage.className = 'welcome-message';
        welcomeMessage.innerHTML = `Bienvenido: ${userEmail} <a href="#" id="logout-link">Logout</a>`;
        header.appendChild(welcomeMessage);

        let loginLink = document.querySelector('#login-link');
        let registerLink = document.querySelector('#register-link');

        if (loginLink) loginLink.style.display = 'none';
        if (registerLink) registerLink.style.display = 'none';

        let logoutLink = document.querySelector('#logout-link');
        logoutLink.addEventListener('click', (event) => {
            event.preventDefault();
            localStorage.removeItem('userEmail');
            welcomeMessage.style.display = 'none';
            if (loginLink) loginLink.style.display = 'block';
            if (registerLink) registerLink.style.display = 'block';
        });
    }
});
