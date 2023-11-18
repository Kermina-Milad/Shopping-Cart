//define products
let productDom = document.querySelector(`.products`);
let products = productsDB;

//display products
let drawProductUI;
(drawProductUI = function(products = []) {
    let productsUI = products.map((item) => {
        return `
        <div class="product_item" style="border:${item.isMe==='y' ?"2px solid green":"" }">
                    <img src="${item.imageUrl}" class="product-item-img" alt="image" />

                    <div class="product-item-desc">
                        <a onclick="saveItemData(${item.id})">${item.title}</a>
                        <p> ${item.desc}<p>
                        <span> Size : ${item.size} </span>
                    </div>
                    <div class="product-item-action">
                        <button class="add-to-cart" onclick="addedToCart(${item.id})">Add To Cart</button>
                        <i class="favorite far fa-heart" style="color: ${item.liked==true ? 'red': "" }" onClick={addToFavorite(${item.id})}></i>
                    </div>
                </div>
        `;
    });
    productDom.innerHTML = productsUI.join("");
})(JSON.parse(localStorage.getItem('products')) || products);

// Add To Cart
function addedToCart(id) {
    if (localStorage.getItem('username')) {
        let products = JSON.parse(localStorage.getItem('products')) || productsDB;
        let product = products.find((item) => item.id === id);
        let isProductInCart = addedItem.some(i => i.id === product.id)
        if (isProductInCart) {
            addedItem = addedItem.map(p => {
                if (p.id === product.id) p.qty += 1;
                return p;
            })
        } else {
            addedItem.push(product);
        }
        //UI
        cartProductDivDom.innerHTML = "";
        addedItem.forEach(item => {
            cartProductDivDom.innerHTML += `<p>${item.title}<span class="itemQty"> ${item.qty}</span></p>`;
        })

        // save data
        localStorage.setItem('productsInCart', JSON.stringify(addedItem));
        //add counter of items
        let cartProductItemsLength = document.querySelectorAll('.carts_products div p');
        badgeDom.style.display = "block";
        badgeDom.innerHTML = cartProductItemsLength.length;

    } else {
        window.location = 'login.html';
    }





}

function getUniqueArr(arr, filterType) {
    let Unique = arr.map(item => item[filterType])
        .map((item, i, final) => final.indexOf(item) === i && i)
        .filter(item => arr[item])
        .map((item) => arr[item]);
    return Unique;
}


function saveItemData(id) {
    localStorage.setItem('productId', id);
    window.location = "cartDetailes.html";
}
//search function
let input = document.getElementById('search');
input.addEventListener('keyup', function(e) {

    search(e.target.value, JSON.parse(localStorage.getItem('products')));

    if (e.target.value.trim() === "") {
        drawProductUI(JSON.parse(localStorage.getItem("products")));
    }
});

function search(title, myArray) {
    let arr = myArray.filter(item => item.title.toLowerCase().indexOf(title.toLowerCase()) !== -1);
    drawProductUI(arr);

}
//add to favorite
let favoritesItems = localStorage.getItem("productsFavorite") ?
    JSON.parse(localStorage.getItem("productsFavorite")) : [];

function addToFavorite(id) {
    if (localStorage.getItem("username")) {
        let choosenItem = products.find((item) => item.id === id);
        choosenItem.liked = true;
        favoritesItems = [...favoritesItems, choosenItem];
        let uniqueProducts = getUniqueArr(favoritesItems, "id");
        localStorage.setItem("productsFavorite", JSON.stringify(uniqueProducts));
        products.map((item) => {
            if (item.id === choosenItem.id) {
                item.liked = true;
            }
        });
        localStorage.setItem("products", JSON.stringify(products));
        drawProductUI(products);
    } else {
        window.location = "login.html";
    }
}

//Filter Product By Size
let sizeFilter = document.getElementById('size-filter');

sizeFilter.addEventListener('change', getProductsFilterBySize);

function getProductsFilterBySize(e) {
    let val = e.target.value;
    let products = JSON.parse(localStorage.getItem("products")) || productsDB;

    if (val === "all") {
        drawProductUI(products);

    } else {
        products = products.filter((i) => i.size === val);
        drawProductUI(products);
    }
}
//edit product
function editProduct(id) {
    localStorage.setItem("editProduct", id);
    window.location = "editProduct.html";
}