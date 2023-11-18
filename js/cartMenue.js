let cartProductDivDom = document.querySelector('.carts_products div');
let badgeDom = document.querySelector('.badge');
let cartProductMenu = document.querySelector('.carts_products ');
let shoppingCartIcon = document.querySelector('.shoppingCart');
shoppingCartIcon.addEventListener('click', openCartMenu);
// check if there is items in local storage
let addedItem = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : [];

if (addedItem) {
    addedItem.map(item => {
        cartProductDivDom.innerHTML += `<p>${item.title}${ item.qty}</p>`;

    });
    badgeDom.style.display = "block";
    badgeDom.innerHTML += addedItem.length;
};
//Open Cart Menu
function openCartMenu() {
    if (cartProductDivDom.innerHTML != "") {
        if (cartProductMenu.style.display == "block") {
            cartProductMenu.style.display = "none";
        } else {
            cartProductMenu.style.display = "block";
        }
    }

}