//get data from local storage
let get_user = localStorage.getItem('username');
let get_email = localStorage.getItem('email');
let products = JSON.parse(localStorage.getItem('products')) || productsDB;
let myProducts = products.filter((i) => i.isMe === 'y');


//variable
let userDom2 = document.getElementById('username');
let userEmailDom = document.getElementById('email');
let productslength = document.querySelector("#productslength span");


userDom2.innerHTML = get_user;
userEmailDom.innerHTML = get_email;
if (myProducts.length !== 0) {
    productslength.innerHTML = myProducts.length;
} else {
    productslength.remove();
}