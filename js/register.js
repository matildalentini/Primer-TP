

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    let campoEmail = document.getElementById('email');
    let campoContraseña = document.getElementById('password');
    let campoReContraseña = document.getElementById('repassword');
    let termsCheckbox = document.getElementById('terms');

    let emailError = document.getElementById('email-error');
    let passwordError = document.getElementById('password-error');
    let repasswordError = document.getElementById('repassword-error');

    emailError.style.display = 'none';
    passwordError.style.display = 'none';
    repasswordError.style.display = 'none';

    let valid = true;

    if (campoEmail.value.trim() === '') {
        emailError.textContent = 'Por favor complete el campo';
        emailError.style.display = 'block';
        valid = false;
    }

    if (campoContraseña.value.trim() === '') {
        passwordError.textContent = 'Por favor complete el campo';
        passwordError.style.display = 'block';
        valid = false;
    } else if (campoContraseña.value.length < 6) {
        passwordError.textContent = 'Debe ingresar al menos 6 caracteres';
        passwordError.style.display = 'block';
        valid = false;
    }

    if (campoReContraseña.value.trim() === '') {
        repasswordError.textContent = 'Por favor complete el campo';
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

    if (valid) {
        // Redirigir al formulario de login (simulado aquí con un mensaje en consola)
        console.log('Formulario válido. Redirigiendo al formulario de login.');
        // Simulación de redirección:
        window.location.href = 'login.html';  // Cambiar a la página correcta
        
    }
});