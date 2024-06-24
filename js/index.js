

cargarProductosMujer();
cargarProductosHombre();
cargarProductosAccesorios();


function cargarProductosMujer() {
    fetch('https://fakestoreapi.com/products/category/women\'s clothing')
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            var productosHTML = "";
            data.forEach(function(product){
                productosHTML += `
                    <article class="producto">
                        <img src="${product.image}" alt="${product.title}">
                        <h2>${product.title}</h2>
                        <p>${product.description}</p>
                        <h3>Price: $${product.price}</h3>
                        <a href="./producto.html?id=${product.id}">Ver detalles</a>
                    </article>`;
            });
            document.getElementById('women-section').innerHTML = productosHTML;
        })
        .catch(function(error){
            console.error(error);
        });
}

// Función para cargar productos de ropa de hombre
function cargarProductosHombre() {
    fetch('https://fakestoreapi.com/products/category/men\'s clothing')
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            var productosHTML = "";
            data.forEach(function(product){
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
        .catch(function(error){
            console.error(error);
        });
}

// Función para cargar productos de accesorios
function cargarProductosAccesorios() {
    fetch('https://fakestoreapi.com/products/category/jewelery')
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            var productosHTML = "";
            data.forEach(function(product){
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
        .catch(function(error){
            console.error(error);
        });
}