

let cartContainer = document.querySelector('.cart-container');
let finalizarCompraBtn = document.querySelector('.finalizar-compra');

// Verificar si hay productos en el carrito en localStorage
let cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];

if (cartProducts.length === 0) {
    // Mostrar mensaje de carrito vacío
    cartContainer.innerHTML = '<p>Su carrito está vacío.</p>';
    finalizarCompraBtn.style.display = 'none';
} else {
    // Recuperar datos de cada producto del carrito desde la API
    cartProducts.forEach(productId => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(function(res) {
                return res.json();
            })
            .then(function(data) {
                cartContainer.innerHTML += `
                    <div class="product">
                        <h2>${data.title}</h2>
                        <img src="${data.image}" alt="${data.title}">
                        <p>Precio: $${data.price}</p>
                        <p>${data.description}</p>
                    </div>
                `;
            })
            .catch(function(err) {
                console.log(err);
            });
    });

    // Mostrar el botón "Finalizar Compra"
    finalizarCompraBtn.style.display = 'inline-block';

    // Agregar evento al botón "Finalizar Compra"
    finalizarCompraBtn.addEventListener('click', function(event) {
        event.preventDefault();
        // Limpiar localStorage
        localStorage.removeItem('cartProducts');
        alert('¡Gracias por su compra!');
        cartContainer.innerHTML = '<p>Su carrito está vacío.</p>';
        finalizarCompraBtn.style.display = 'none';
    });
}
