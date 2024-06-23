

document.querySelector('#form').addEventListener('submit', function(event) {
    let campoEmail = document.querySelector('#email');
    let campoContraseña = document.querySelector('#password');
    let campoReContraseña = document.querySelector('#repassword');
    let termsCheckbox = document.querySelector('#terms');

    let emailError = document.querySelector('#email-error');
    let passwordError = document.querySelector('#password-error');
    let repasswordError = document.querySelector('#repassword-error');

    emailError.style.display = 'none';
    passwordError.style.display = 'none';
    repasswordError.style.display = 'none';

    if (campoEmail.value === '') {
        emailError.textContent = 'Por favor complete el campo email';
        emailError.style.display = 'block';
        event.preventDefault();
    }

    if (campoContraseña.value === '') {
        passwordError.textContent = 'Por favor complete el campo contraseña';
        passwordError.style.display = 'block';
        event.preventDefault();
    } else if (campoContraseña.value.length < 6) {
        passwordError.textContent = 'Debe ingresar al menos 6 caracteres';
        passwordError.style.display = 'block';
        event.preventDefault();
    }

    if (campoReContraseña.value === '') {
        repasswordError.textContent = 'Por favor complete el campo de repetir contraseña';
        repasswordError.style.display = 'block';
        event.preventDefault();
    } else if (campoContraseña.value !== campoReContraseña.value) {
        repasswordError.textContent = 'Las contraseñas no coinciden';
        repasswordError.style.display = 'block';
        event.preventDefault();
    }

    if (!termsCheckbox.checked) {
        alert("Tienes que aceptar los términos y condiciones");
        event.preventDefault();
    }
});
