console.log(location.search);
let queryString = location.search;

let queryStringObj = new URLSearchParams(queryString);

let category = queryStringObj.get('category');

console.log(category);

fetch(`https://fakestoreapi.com/products/category/${category}`)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
        let section = document.querySelector(".productList");
        let productsHTML = "";

        for (let i = 0; i < data.length; i++) {
            let product = data[i];
            productsHTML += `
                <div class="product">
                    <h2>${product.title}</h2>
                    <p>Precio: $${product.price}</p>
                    <p>Categoría: ${product.category}</p>
                    <img src="${product.image}" alt="${product.title}">
                    <a href="./producto.html?id=${product.id}">Ver detalles</a>
                </div>
            `;
        }
        section.innerHTML = productsHTML;
    })
    .catch(function(err){
        console.log(err);
    });
