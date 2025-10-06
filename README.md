# Shopping Cart (HTML, CSS & JavaScript)

## Project Overview

This is a **Shopping Cart** web application built using **HTML**, **CSS**, and **JavaScript**. It allows users to browse products, add items to the cart, adjust quantities, and remove items. The app uses a simple JavaScript array to simulate product data.

## Features

* Display a list of products
* Add products to the cart
* Remove products from the cart
* Adjust product quantities in the cart
* Show total price dynamically
* Responsive design using CSS

## Project Structure

```
shopping-cart/
├─ index.html         # Main HTML file
├─ styles.css         # CSS styles
├─ script.js          # JavaScript functionality
├─ images/            # Product images
└─ README.md
```

## Usage

1. Clone or download the repository:

```bash
git clone https://github.com/Kermina-Milad/Shopping-Cart.git
cd Shopping-Cart
```

2. Open `index.html` in your browser.

## Example Code

**HTML (index.html)**

```html
<div class="product-card">
  <img src="images/shoes.jpg" alt="Shoes">
  <h3>Shoes</h3>
  <p>$59.99</p>
  <button class="add-to-cart">Add to Cart</button>
</div>
```

**CSS (styles.css)**

```css
.product-card {
  border: 1px solid #ddd;
  padding: 16px;
  text-align: center;
}
.add-to-cart {
  background-color: #f06292;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
}
```

**JavaScript (script.js)**

```js
let cart = [];
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const productCard = e.target.closest('.product-card');
    const product = {
      title: productCard.querySelector('h3').innerText,
      price: parseFloat(productCard.querySelector('p').innerText.replace('$', ''))
    };
    cart.push(product);
    updateCartUI();
  });
});

function updateCartUI() {
  const cartContainer = document.getElementById('cart-items');
  cartContainer.innerHTML = '';
  cart.forEach(item => {
    const div = document.createElement('div');
    div.innerText = `${item.title} - $${item.price}`;
    cartContainer.appendChild(div);
  });
}
```

## Development Tips

* Add more products by duplicating the product cards in HTML.
* Enhance UI using CSS Flexbox or Grid.
* Persist cart data using `localStorage` if needed.
* Add product images in the `images/` folder.

## Deployment

* Simply host the `index.html`, `styles.css`, and `script.js` on any static hosting service like GitHub Pages or Netlify.

---

*This README is prepared for your portfolio or educational Shopping Cart project using HTML, CSS, and JavaScript.*
