// Utilizando Javascript, en el header de todas las páginas deberá verse la leyenda "Bienvenido:  elEmailDelUsuario" y una link con el texto "logout".

// Utilizando Javascript deberán desaparecer del menú los elementos "login" y "registro".

// La funcionalidad no tiene asociado un archivo html específico. Es una funcionalidad que puede estar en muchas partes del proyecto. Si bien deben desarrollarla en un archivo javascript individual deberán identificar en qué htmls debe relacionarlo.


let welcome = document.querySelector(".bienvenida")

let mail = localStorage.getItem("userEmail")

let oculto = document.querySelector(".oculto")

console.log(welcome);
console.log(mail);

welcome.innerHTML = `<h2>Bienvenido: ${mail}</h2>
                     <a href="../html/login.html" class="logout">LOG OUT</a>`


if(mail){
    welcome.style.display = "block";
    oculto.style.display = "none";
} else{
    welcome.style.display = "none";
    oculto.style.display = "block";
}
