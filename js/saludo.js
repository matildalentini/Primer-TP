// Utilizando Javascript, en el header de todas las páginas deberá verse la leyenda "Bienvenido:  elEmailDelUsuario" y una link con el texto "logout".

// Utilizando Javascript deberán desaparecer del menú los elementos "login" y "registro".

// La funcionalidad no tiene asociado un archivo html específico. Es una funcionalidad que puede estar en muchas partes del proyecto. Si bien deben desarrollarla en un archivo javascript individual deberán identificar en qué htmls debe relacionarlo.

let welcome = document.querySelector(".bienvenida")

let mail = localStorage.getItem("userEmail")

console.log(mail);

welcome.innerHTML = `<section class="bienvenida">  
                          <h2>Bienvenido: ${mail}</h2>
                          <a href="../html/register.html">LOG OUT</a>
                     </section>`



//
    saludo.style.textTransform = "uppercase"
    titulo.style.display = "none"
    span.style.display = "inline"

    span.addEventListener("click", function(){
        bienvenida.style.display = "none"
        personajes.style.display = "flex"
    })
    
