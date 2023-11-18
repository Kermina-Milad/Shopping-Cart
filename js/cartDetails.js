let products = JSON.parse(localStorage.getItem('products'));
let productId = localStorage.getItem('productId');
let itemDom = document.querySelector('.item_details');
let productDetails = products.find(item => item.id == productId);
console.log(productDetails);

itemDom.innerHTML = `
<img src="${productDetails.imageUrl}" alt="" />
                <h2> ${productDetails.title}</h2>
                <p> ${productDetails.desc}<p>
                <span>size: ${productDetails.size} </span><br>
                <span>Quantity: ${productDetails.qty} </span><br>
                <button onclick="editProduct(${productId})">Edit Product </button>

                `;
//edit product
function editProduct(id) {
    localStorage.setItem("editProduct", id);
    window.location = "editProduct.html";
}