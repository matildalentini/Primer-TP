console.log(location.search);
let queryString = location.search;

let queryStringObj = new URLSearchParams(queryString);

let productId = queryStringObj.get('id');

console.log(productId);

fetch(`https://fakestoreapi.com/products/${productId}`)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
        let name = document.querySelector(".nombre");
        name.innerText = data.title;
        let precio = document.querySelector(".precio");
        precio.innerText += `$${data.price}`;
        let descripcion = document.querySelector(".descripcion");
        descripcion.innerText += data.description;
        let categoria = document.querySelector(".categoria");
        categoria.innerText += data.category;
        let imagen = document.querySelector("img");
        imagen.src = data.image;
    })
    .catch(function(err){
        console.log(err);
    });
