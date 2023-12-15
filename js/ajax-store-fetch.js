"use strict";

// Cart object to store cart items
let cart = {};

document.addEventListener('DOMContentLoaded', function() {
    fetch('data/inventory.json')
        .then(response => response.json())
        .then(data => {
            const productContainer = document.getElementById('product-container');
            productContainer.innerHTML = ''; // Clear the container

            // Generate product cards and append them to the container
            data.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'col-md-4 mb-4';
                productCard.innerHTML = `
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title">${product.title}</h5>
                            <p class="card-text">${product.quantity} in stock - $${product.price}</p>
                            <p class="card-text">Categories: ${product.categories.join(', ')}</p>
                            <button class="btn btn-primary add-to-cart" data-title="${product.title}" data-price="${product.price}">Add to Cart</button>
                        </div>
                    </div>
                `;
                productContainer.appendChild(productCard);
            });

            // Attach event listener to Add to Cart buttons
            document.querySelectorAll('.add-to-cart').forEach(button => {
                button.addEventListener('click', addToCart);
            });
        })
        .catch(error => console.error('Error loading inventory:', error));
});

// Function to add items to the cart
function addToCart(event) {
    const title = event.target.getAttribute('data-title');
    const price = parseFloat(event.target.getAttribute('data-price'));

    // Check if the item is already in the cart
    if (cart[title]) {
        cart[title].quantity++;
    } else {
        cart[title] = {
            quantity: 1,
            price: price
        };
    }

    // Update cart display
    updateCart();
}

// Function to update cart display
function updateCart() {
    const cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = ''; // Clear the cart container

    let total = 0;
    for (const [title, item] of Object.entries(cart)) {
        total += item.quantity * item.price;
        cartContainer.innerHTML += `
            <div class="cart-item">
                <span>${title}</span>
                <span>Quantity: ${item.quantity}</span>
                <span>Total: $${(item.quantity * item.price).toFixed(2)}</span>
            </div>
        `;
    }

    // Add a total display
    cartContainer.innerHTML += `
        <div class="cart-total">
            <strong>Total Cost: $${total.toFixed(2)}</strong>
        </div>
    `;
}