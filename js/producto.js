document.addEventListener('DOMContentLoaded', function() {
    let queryString = location.search;
    let queryStringObj = new URLSearchParams(queryString);
    let productId = queryStringObj.get('id');

    fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(function(response) {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(function(data) {
            let productContainer = document.querySelector('.product-details');
            productContainer.innerHTML = `
                <div class="product-image">
                    <img src="${data.image}" alt="${data.title}">
                </div>
                <div class="product-info">
                    <h2>${data.title}</h2>
                    <p>Categoría: <a href="./category.html?category=${data.category}">${data.category}</a></p>
                    <p>Precio: $${data.price}</p>
                    <p>Descripción: ${data.description}</p>
                    <a href="#" class="add-to-cart">Agregar al carrito</a>
                </div>
            `;

            let addToCartBtn = productContainer.querySelector('.add-to-cart');
            addToCartBtn.addEventListener('click', function(event) {
                event.preventDefault();
                let cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
                cartProducts.push(productId);
                localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
                alert('Producto añadido al carrito');
            });
        })
        .catch(function(error) {
            console.error('Error al cargar el producto:', error);
            let productContainer = document.querySelector('.product-details');
            productContainer.innerHTML = '<p>Error al cargar el producto.</p>';
        });
});
