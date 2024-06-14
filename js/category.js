
fetch('https://fakestoreapi.com/products')
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
        let section=document.querySelector(".clothesList")
        let ropaElegida=""

        for(let i=0; i<data.results.length; i++){
            let char= data.results[i];
            personajesRecorridos+= ` <article class= "characters">
                                  <img src="${char.image}" alt='${char.name}'>
                                    <a href="./producto.html?id=${char.id}"> 
                                        <p>Talle: ${char.size}</p>
                                    </a>
                                    <p>Precio: ${char.price} </p>
                                    </article>
                                    `;
        }
        section.innerHTML= ropaElegida

    })

    
    .catch(function(error) {
        console.log("Error: " + error);
    })