
let form = document.querySelector (`form`);
let user= document.querySelector(`#email`);
let email = document.querySelector (`#email`);
let errorMessage = document.querySelector(`.error-message`);
let checkbox = document.querySelector(`#check`);
let errorCheckbox = document.querySelector(`.errorCheckbox`);
let avisoMail = document.querySelector(".aviso")
let irAlLogin = document.querySelector("#ir")

irAlLogin.style.display=`none`

form.addEventListener(`submit`,function(e){
    e.preventDefault();
    if (email.value == '') {
        errorMessage.innerText = `Por favor complete el campo email`;
    } else if (!checkbox.checked) {
        errorCheckbox.innerText=`Por favor aceptar el campo "quiero recuperar mi contraseña"`
    } else if (this.submit){
        avisoMail.innerText = `Recibiras un mail con las instrucciones para recuperar tu contraseña`
        irAlLogin.style.display=`block`
    } else {
        user.email = email.value;
        localStorage.setItem(`user`,JSON.stringify(user))
    }
})