

document.addEventListener(`DOMContentLoaded`, function(){
    let cartContainer= document.querySelector(`.cart-container`);


//Para verificar si hay productos en el carrito en el localstorage
    let cartProducts = JSON.parse(localStorage.getItem('cartProducts'));

    if(cartProducts === 0) {
        //mensaje del carrito vacio

    }else {
        
    }

})

.catch(function(error){
    console.log(error);
});