

let logoutLink = document.querySelector('.logout');
let welcome = document.querySelector('.bienvenida');
let desaparecer = document.querySelector('.identidad');
let loginLink = document.querySelector('#login-link');
let registerLink = document.querySelector('#register-link');

if (logoutLink) {
    logoutLink.addEventListener('click', function(event) {
        event.preventDefault();

        // Eliminar los datos del usuario de local storage
        localStorage.removeItem('userEmail');

        // Ocultar la leyenda de bienvenida y el link de logout
        welcome.style.display = 'none';

        // Volver a mostrar los elementos "login" y "registro" en el menú
        if (loginLink) {
            loginLink.style.display = 'block';
        }
        if (registerLink){
            registerLink.style.display = 'block';
        }
    });
}
