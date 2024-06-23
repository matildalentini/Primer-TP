

let logoutLink = document.querySelector('#logout-link');
let welcomeMessage = document.querySelector('#welcomeMessage');
let loginLink = document.querySelector('#login-link');
let registerLink = document.querySelector('#register-link');

if (logoutLink) {
    logoutLink.addEventListener('click', function(event) {
        event.preventDefault();

        localStorage.removeItem('userEmail');

        welcomeMessage.style.display = 'none';
        logoutLink.style.display = 'none';

        if (loginLink) loginLink.style.display = 'block';
        if (registerLink) registerLink.style.display = 'block';

        document.location.href = "./index.html";
    });
}
