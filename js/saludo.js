// Utilizando Javascript, en el header de todas las páginas deberá verse la leyenda "Bienvenido:  elEmailDelUsuario" y una link con el texto "logout".

// Utilizando Javascript deberán desaparecer del menú los elementos "login" y "registro".

// La funcionalidad no tiene asociado un archivo html específico. Es una funcionalidad que puede estar en muchas partes del proyecto. Si bien deben desarrollarla en un archivo javascript individual deberán identificar en qué htmls debe relacionarlo.

let welcome = document.querySelector(".bienvenida")


welcome.addEventListener()

<section class="bienvenida">
   <h2>Bienvenido: </h2>
  </section>


titulo.addEventListener("mouseover", function(){
    let nombre = prompt("¿COMO TE LLAMAS?")
    console.log(nombre);

    if (saludo===null){
        saludo.innerHTML = `BIENVENID@"`
    } else{
        saludo.innerHTML = `BIENVENID@ ${nombre}`
    };

    saludo.style.textTransform = "uppercase"
    titulo.style.display = "none"
    span.style.display = "inline"

    span.addEventListener("click", function(){
        bienvenida.style.display = "none"
        personajes.style.display = "flex"
    })
    
});