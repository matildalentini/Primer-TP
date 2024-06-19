console.log(location.search);

let queryString = location.search;

let queryStringObj = new URLSearchParams(queryString);

let category = queryStringObj.get('category');

console.log(category);


fetch(`https://fakestoreapi.com/products/category/mensclothing`)
    
    .then(function(res){
        return res.json();
    })
    .then (function(data){
        console.log(data);

        let section2 = document.querySelector(".ropaMen")
        let productosHTML = "";

        for (let i=0; i < data.length; i++){
            let product = data[i];
            productosHTML += `<article class="ropa">
                                <a href="./product.html?id=${product.id}">
                                <img src="${product.image}" alt="${product.title}">
                                <h2>${product.title}</h2>
                                <h2>Price: $${product.price}</h2>
                                </a>
                              </article>`
        }
        section2.innerHTML = productosHTML

    })
    .catch(function(err){
        console.log(err);
    });

    
