console.log(location.search);
let queryString= location.search

let queryStringObj= new URLSearchParams(queryString);

let charId=queryStringObj.get('id')

console.log(charId);


fetch(`https://fakestoreapi.com/products/category/${charId}`)
    .then(function(res){
        return res.json()
    })
    .then (function(data){
        console.log(data);
        let name= document.querySelector (".nombre")
        name.innerText=data.name;
        let precio = document.querySelector(".precio");
        precio.innerText += data.price;
        let imagen = document.querySelector("img");
        imagen.src = data.image;
        let talle = document.querySelector(".talle");
        talle.innerText += data.size;
    })



    .catch (function(err){
        console.log(err);
    })




   .catch (function(err){
       console.log(err);
   })
