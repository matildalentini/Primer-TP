
// Eliminar los datos del usuario de local storage.
// Ocultar la leyenda "Bienvenido: elEmailDelUsuario" y el link con el texto "logout".
// Volver a mostrar los elementos "login" y "registro" en el menú.

let logoutLink = document.querySelector('.logout');

logoutLink.addEventListener("click", function boton(event){
    event.preventDefault();
    localStorage.removeItem('userEmail');
    welcome.style.display = "none";
    oculto.style.display = "block"
})

