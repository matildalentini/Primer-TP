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

        let imagen = document.querySelector(".product-image");
        imagen.src = data.image;

        let name = document.querySelector(".nombre");
        name.innerText = data.title;

        let precio = document.querySelector(".precio");
        precio.innerText = `$${data.price}`;

        let descripcion = document.querySelector(".descripcion");
        descripcion.innerText = data.description;

        let categoria = document.querySelector(".categoria");
        categoria.innerText = `Back to ${data.category}`;
        categoria.href = `./category.html?category=${encodeURIComponent(data.category)}`;
        categoria.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = this.href;
        });

        let addToCartBtn = document.querySelector(".add-to-cart");
        addToCartBtn.addEventListener('click', function(event) {
            event.preventDefault();
            let cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
            cartProducts.push(productId);
            localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
            alert('Producto añadido al carrito');
        });

    })

    .catch(function(err){
        console.log(err);
    });
