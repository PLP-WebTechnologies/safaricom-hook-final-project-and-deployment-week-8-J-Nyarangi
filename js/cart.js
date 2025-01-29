// Menu Toggle
const menu = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const cartIcon = document.getElementById('cart-icon');
const cart = document.querySelector('.cart');
const closeCart = document.getElementById('close-cart');

// Ensure elements exist before adding event listeners
if (menu && navbar) {
    menu.addEventListener('click', () => {
        menu.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    });
}

// Hide menu on scroll
window.addEventListener('scroll', () => {
    if (menu && navbar) {
        menu.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
});

// Cart Open/Close
if (cartIcon && cart && closeCart) {
    cartIcon.addEventListener('click', () => {
        cart.classList.add('active');
    });

    closeCart.addEventListener('click', () => {
        cart.classList.remove('active');
    });

    // Close cart when clicking outside of it
    document.addEventListener('click', (event) => {
        if (!cart.contains(event.target) && event.target !== cartIcon) {
            cart.classList.remove('active');
        }
    });
} else {
    console.error('One or more cart elements not found');
}

// Ensure document is fully loaded before running script
document.addEventListener('DOMContentLoaded', () => {
    ready();
});

function ready() {
    document.querySelectorAll('.add-cart').forEach(button => {
        button.addEventListener('click', addCartClicked);
    });

    document.querySelectorAll('.cart-remove').forEach(button => {
        button.addEventListener('click', removeCartItem);
    });

    document.querySelectorAll('.cart-quantity').forEach(input => {
        input.addEventListener('change', quantityChanged);
    });

    const buyButton = document.querySelector('.cart-btn');
    if (buyButton) {
        buyButton.addEventListener('click', buyButtonClicked);
    }
}

function buyButtonClicked() {
    alert('Your Order is placed');
    const cartContent = document.querySelector('.cart-content');
    while (cartContent.firstChild) {
        cartContent.removeChild(cartContent.firstChild);
    }
    updateTotal();
}

function removeCartItem(event) {
    event.target.closest('.cart-box').remove();
    updateTotal();
}

function quantityChanged(event) {
    if (isNaN(event.target.value) || event.target.value <= 0) {
        event.target.value = 1;
    }
    updateTotal();
}



function addCartClicked(event) {
    const product = event.target.closest('.product-box');
    const title = product.querySelector('h2').innerText;
    const price = product.querySelector('.price').innerText;
    const productImg = product.querySelector('img').src;

    addProductToCart(title, price, productImg);
    updateTotal();
    
    showToast(); // Show animated toast
}
function showToast() {
    const toast = document.getElementById("cart-toast");
    toast.style.display = "flex";
    toast.style.opacity = "1";

    // Hide after 2.5 seconds
    setTimeout(() => {
        toast.style.opacity = "0";
        setTimeout(() => { toast.style.display = "none"; }, 500); // Smooth transition
    }, 2500);
}

function addProductToCart(title, price, productImg) {
    const cartItems = document.querySelector('.cart-content');
    if (!cartItems) return;
    
    const existingItem = [...cartItems.getElementsByClassName('cart-product-title')].find(item => item.innerText === title);

    if (existingItem) {
        alert('You have already added this item to cart');
        return;
    }

    const cartShopBox = document.createElement('div');
    cartShopBox.classList.add('cart-box');
    cartShopBox.innerHTML = `
        <img src="${productImg}" alt="" class="cart-img">
        <div class="detail-box">
            <div class="cart-product-title">${title}</div>
            <div class="cart-price">${price}</div>
            <input type="number" value="1" class="cart-quantity">
        </div>
        <i class='bx bxs-trash-alt cart-remove'></i>`;
    cartItems.append(cartShopBox);

    cartShopBox.querySelector('.cart-remove').addEventListener('click', removeCartItem);
    cartShopBox.querySelector('.cart-quantity').addEventListener('change', quantityChanged);
}

function updateTotal() {
    const cartBoxes = document.querySelectorAll('.cart-box');
    let total = 0;
    cartBoxes.forEach(cartBox => {
        const priceElement = cartBox.querySelector('.cart-price');
        const quantityElement = cartBox.querySelector('.cart-quantity');
        const price = parseFloat(priceElement.innerText.replace("$", ""));
        const quantity = quantityElement.value;
        total += price * quantity;
    });
    total = Math.round(total * 100) / 100;
    document.querySelector('.total-price').innerText = '$' + total;
}
