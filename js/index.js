document.addEventListener('DOMContentLoaded', function() {
    cargarProductosMujer();
    cargarProductosHombre();
    cargarProductosAccesorios();
});

// Función para cargar productos de ropa de mujer
function cargarProductosMujer() {
    fetch('https://fakestoreapi.com/products/category/women\'s clothing')
        .then(res => res.json())
        .then(data => {
            let productosHTML = "";
            data.forEach(product => {
                productosHTML += `
                    <article class="producto">
                        <a href="./producto.html?id=${product.id}">
                            <img src="${product.image}" alt="${product.title}">
                            <h2>${product.title}</h2>
                            <p>${product.description}</p>
                            <h3>Price: $${product.price}</h3>
                            <a href="./producto.html?id=${product.id}">Ver detalles</a>
                    </article>`;

            });
            document.getElementById('women-section').innerHTML = productosHTML;
        })
        .catch(err => console.error(err));
}

// Función para cargar productos de ropa de hombre
function cargarProductosHombre() {
    fetch('https://fakestoreapi.com/products/category/men\'s clothing')
        .then(res => res.json())
        .then(data => {
            let productosHTML = "";
            data.forEach(product => {
                productosHTML += `
                    <article class="producto">
                            <img src="${product.image}" alt="${product.title}">
                            <h2>${product.title}</h2>
                            <p>${product.description}</p>
                            <h3>Price: $${product.price}</h3>
                            <a href="./producto.html?id=${product.id}">Ver detalles</a>
                    </article>`;
            });
            document.getElementById('men-section').innerHTML = productosHTML;
        })
        .catch(err => console.error(err));
}

// Función para cargar productos de accesorios
function cargarProductosAccesorios() {
    fetch('https://fakestoreapi.com/products/category/jewelery')
        .then(res => res.json())
        .then(data => {
            let productosHTML = "";
            data.forEach(product => {
                productosHTML += `
                    <article class="producto">
                            <img src="${product.image}" alt="${product.title}">
                            <h2>${product.title}</h2>
                            <p>${product.description}</p>
                            <h3>Price: $${product.price}</h3>
                            <a href="./producto.html?id=${product.id}">Ver detalles</a>
                    </article>`;
            });
            document.getElementById('accessories-section').innerHTML = productosHTML;
        })
        .catch(err => console.error(err));
}
