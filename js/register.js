

document.querySelector('#form').addEventListener('submit', function(event) {
    event.preventDefault();

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

    let valid = true;

    if (campoEmail.value.trim() === '') {
        emailError.textContent = 'Por favor complete el campo email';
        emailError.style.display = 'block';
        valid = false;
    }

    if (campoContraseña.value.trim() === '') {
        passwordError.textContent = 'Por favor complete el campo contraseña';
        passwordError.style.display = 'block';
        valid = false;
    } else if (campoContraseña.value.length < 6) {
        passwordError.textContent = 'Debe ingresar al menos 6 caracteres';
        passwordError.style.display = 'block';
        valid = false;
    }

    if (campoReContraseña.value.trim() === '') {
        repasswordError.textContent = 'Por favor complete el campo de repetir contraseña';
        repasswordError.style.display = 'block';
        valid = false;
    } else if (campoContraseña.value !== campoReContraseña.value) {
        repasswordError.textContent = 'Las contraseñas no coinciden';
        repasswordError.style.display = 'block';
        valid = false;
    }

    if (!termsCheckbox.checked) {
        alert("Tienes que aceptar los términos y condiciones");
        valid = false;
    }

    // Para redirigir a la página de login
    if (valid) {
        console.log('Formulario válido. Redirigiendo al formulario de login.');
        document.href = 'login.html';  // Cambiar a la página correcta
    }
});
