

let logoutLink = document.querySelector('#logout-link');

if (logoutLink) {
    logoutLink.addEventListener('click', function(event) {
        event.preventDefault();
        
        // Para sacar la informacion del local storage
        localStorage.removeItem('userEmail');
        
        // Volver a mostrar login y register links
        let loginLink = document.querySelector('#login-link');
        let registerLink = document.querySelector('#register-link');

        if (loginLink) loginLink.innerText = 'Log in';
        if (registerLink) registerLink.innerText = 'Register';

    });
}
