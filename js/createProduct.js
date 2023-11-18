//variables
let productName = document.getElementById('product-name');
let productDesc = document.getElementById('product-desc');
let productSizeSelect = document.getElementById('product-size');
let createForm = document.getElementById('create-form');
let inputFile = document.getElementById('upload-img');
let productSizeValue;
let productImage;

//Events
productSizeSelect.addEventListener('change', getProductSizeValue);
createForm.addEventListener('submit', createProductFun);
inputFile.addEventListener('change', uploadImage)

//functions
function getProductSizeValue(e) {
    productSizeValue = e.target.value;
}

function createProductFun(e) {
    e.preventDefault();
    let allproducts = JSON.parse(localStorage.getItem("products")) || productsDB;
    let nameValue = productName.value;
    let descValue = productDesc.value;

    if (nameValue && descValue) {
        let obj = {
            id: allproducts ? allproducts.length + 1 : 1,
            qty: 1,
            imageUrl: productImage,
            size: productSizeValue,
            title: nameValue,
            desc: descValue,
            isMe: 'y',
        };

        let newProducts = allproducts ? [...allproducts, obj] : [obj];
        localStorage.setItem("products", JSON.stringify(newProducts));
        productName.value = "";
        productDesc.value = "";
        productSizeSelect.value = "";
        setTimeout(() => {
            window.location = "index.html";
        }, 500);
    } else {
        alert("enter data");
    }
}

//upload image

function uploadImage(e) {
    let file = this.files[0];
    let types = ["image/jpeg", "image/png"]
    if (types.indexOf(file.type) == -1) {
        alert("Type Not Supported");
        return;
    }
    if (file.size > 2 * 1024 * 1024) {
        alert("image not exced 2MG");
        return;
    }
    getImagebase64(file);
    // productImage = URL.createObjectURL(file);
}

function getImagebase64(file) {
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function() {
        productImage = reader.result;
    };
    reader.onerror = function() {
        alert("error !!")
    }
}