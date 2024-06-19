

document.addEventListener('DOMContentLoaded', function() {
    let cartContainer = document.querySelector('.cart-container');

    // Verificar si hay productos en el carrito en localStorage
    let cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];

    if (cartProducts.length === 0) {
        // Mostrar mensaje de carrito vacío
        cartContainer.innerHTML = '<p>Su carrito está vacío.</p>';
    } else {
        // Recuperar datos de cada producto del carrito desde la API
        cartProducts.forEach(productId => {
            fetch(`https://fakestoreapi.com/products/${productId}`)
                .then(res => res.json())
                .then(data => {
                    cartContainer.innerHTML += `
                        <div class="product">
                            <h2>${data.title}</h2>
                            <img src="${data.image}" alt="${data.title}">
                            <p>Price: $${data.price}</p>
                            <p>${data.description}</p>
                        </div>
                    `;
                })
                .catch(function(err){
                    console.log(err);
                });
        });

        // Crear y agregar el botón "Finalizar Compra"
        cartContainer.innerHTML += '<button id="checkoutBtn">Finalizar Compra</button>';

        // agregarle el evento click al botón "Finalizar Compra"
        document.getElementById('checkoutBtn').addEventListener('click', function() {
            // Limpiar localStorage
            localStorage.removeItem('cartProducts');
            // Mostrar mensaje de agradecimiento
            alert('¡Gracias por su compra!');
            // Redirigir a la página principal
            window.location.href = './index.html';
        });
    }
});
