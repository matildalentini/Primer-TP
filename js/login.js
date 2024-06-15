//  *  Validar que el campo email no esté vacío. Si está vacío mostrar al usuario el texto "Por favor complete el campo email" usando un alert.

//  * Validar que el campo contraseña no esté vacío. Si está vacío mostrar al usuario el texto "Por favor complete el campo contraseña" usando un alert.

//  *  Validar que la contraseña tenga al menos una longitud de 6 caracteres. Si tiene menos de 6 caracteres mostrar al usuario el texto "La contraseña debe tener al menos 6 caracteres" usando un alert y el formulario no se enviará.

//  *  Si el formulario cumple con las validaciones deberá guardar el email del usuario en localstorage y redirigir a la página principal.

let formulario = document.querySelector("form")

let campoEmail = document.querySelector("#email");
let emailError = document.querySelector("#email-error");

let campoContrasena = document.querySelector("#contraseña");
let passwordError = document.querySelector("#password-error");

emailError.style.display = 'none';
passwordError.style.display = 'none';

let valid = true;


formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    if (campoEmail.value == '' ){
        alert ("Por favor complete el campo email")
    } else if (campoContrasena.value == ''){
        alert ("Por favor complete el campo contraseña")
    } else if (campoContrasena.value.length < 6){
        alert("La contraseña debe tener al menos 6 caracteres")
    } else{
        formulario.submit()
        document.location.href = "index.html"
        localStorage.setItem("userEmail", campoEmail.value)
}
});