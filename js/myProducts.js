let productDom = document.querySelector(".products");
let noProductsDom = document.querySelector(".noProducts");
//display products
let drawProductUI;
(drawProductUI = function(products = []) {
    let myProducts = products.filter(item => item.isMe === "y");
    if (myProducts.length !== 0) {
        let productsUI = myProducts.map((item) => {
            return `
        <div class="product_item" style="border:${item.isMe==='y' ?"2px solid green":"" }">
                    <img src="${item.imageUrl}" class="product-item-img" alt="image" />

                    <div class="product-item-desc">
                        <a onclick="saveItemData(${item.id})">${item.title}</a>
                        <p> ${item.desc}<p>
                        <span> Size : ${item.size} </span>
                        <button class='edit-product' onclick='editProduct(${
                            item.id
                        })'>Edit Product</button> 
                        <br>
                        <button class='edit-product' onclick='deleteProduct(${
                            item.id})')>Delete Product</button> 
                            </div>
                    </div>
                    
        `;
        });
        productDom.innerHTML = productsUI.join("");
    } else {
        noProductsDom.innerHTML = "No Products";
    }
})(JSON.parse(localStorage.getItem('products')) || productsDB);
//edit product
function editProduct(id) {
    localStorage.setItem("editProduct", id);
    window.location = "editProduct.html";
}

function deleteProduct(id) {
    let products = JSON.parse(localStorage.getItem('products')) || productsDB;
    let myProducts = products.filter(item => item.isMe === "y");
    let filtered = myProducts.filter(i => i.id !== id);
    let clickedItem = myProducts.find(i => i.id === id);
    products = products.filter(i => i.id !== clickedItem.id);
    localStorage.setItem('products', JSON.stringify(products));
    drawProductUI(filtered);
    location.reload();



}