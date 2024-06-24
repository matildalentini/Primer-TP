// Utilizando Javascript, en el header de todas las páginas deberá verse la leyenda "Bienvenido:  elEmailDelUsuario" y una link con el texto "logout".

// Utilizando Javascript deberán desaparecer del menú los elementos "login" y "registro".

// La funcionalidad no tiene asociado un archivo html específico. Es una funcionalidad que puede estar en muchas partes del proyecto. Si bien deben desarrollarla en un archivo javascript individual deberán identificar en qué htmls debe relacionarlo.


let welcome = document.querySelector(".bienvenida")

let mail = localStorage.getItem("userEmail")

let oculto = document.querySelector(".identidad")



console.log(mail);

welcome.innerHTML = `<section class="bienvenida">
                          <h2>Bienvenido: ${mail}</h2>
                          <a href="../html/register.html" class="logout">LOG OUT</a>
                     </section>`


function desaparecer(){
    if(mail){
        welcome.style.display = "inline";
        oculto.style.display = "block";
    } else{
        welcome.style.display = "none";
        oculto.style.display = "inline";
    }
}