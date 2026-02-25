/* ===================================
   SHOPPING CART FUNCTIONALITY
   =================================== */

function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const emptyCart = document.getElementById('empty-cart');
    const cartContent = document.getElementById('cart-content');
    const cartItemsBody = document.getElementById('cart-items-body');
    
    if (cart.length === 0) {
        emptyCart.style.display = 'block';
        cartContent.style.display = 'none';
        return;
    }

    emptyCart.style.display = 'none';
    cartContent.style.display = 'grid';
    
    cartItemsBody.innerHTML = '';
    
    cart.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.price.toLocaleString()} FC</td>
            <td>
                <div class="quantity-control">
                    <button onclick="decreaseQuantity(${index})">−</button>
                    <input type="number" value="1" min="1" readonly>
                    <button onclick="increaseQuantity(${index})">+</button>
                </div>
            </td>
            <td>${item.price.toLocaleString()} FC</td>
            <td>
                <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
            </td>
        `;
        cartItemsBody.appendChild(row);
    });
    
    updateCartSummary();
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    loadCart();
}

function increaseQuantity(index) {
    const rows = document.querySelectorAll('#cart-items-body tr');
    const input = rows[index].querySelector('input[type="number"]');
    input.value = parseInt(input.value) + 1;
    updateCartSummary();
}

function decreaseQuantity(index) {
    const rows = document.querySelectorAll('#cart-items-body tr');
    const input = rows[index].querySelector('input[type="number"]');
    if (parseInt(input.value) > 1) {
        input.value = parseInt(input.value) - 1;
    }
    updateCartSummary();
}

function updateCartSummary() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const rows = document.querySelectorAll('#cart-items-body tr');
    
    let subtotal = 0;
    
    cart.forEach((item, index) => {
        const quantity = parseInt(rows[index].querySelector('input[type="number"]').value) || 1;
        subtotal += item.price * quantity;
    });
    
    const shipping = subtotal > 100000 ? 0 : 5000;
    const tax = subtotal * 0.05;
    const total = subtotal + shipping + tax;
    
    document.getElementById('subtotal').textContent = subtotal.toLocaleString() + ' FC';
    document.getElementById('shipping').textContent = (shipping === 0 ? 'FREE' : shipping.toLocaleString() + ' FC');
    document.getElementById('tax').textContent = Math.round(tax).toLocaleString() + ' FC';
    document.getElementById('total').textContent = Math.round(total).toLocaleString() + ' FC';
}

function applyPromo() {
    const promoCode = document.getElementById('promo-code').value;
    const validCodes = {
        'WELCOME10': 0.10,
        'FASHION20': 0.20,
        'CONGO5': 0.05
    };
    
    if (validCodes[promoCode]) {
        const discount = validCodes[promoCode];
        const subtotal = parseFloat(document.getElementById('subtotal').textContent.replace(/[^0-9]/g, ''));
        const newSubtotal = subtotal * (1 - discount);
        
        document.getElementById('subtotal').textContent = Math.round(newSubtotal).toLocaleString() + ' FC';
        updateCartSummary();
        showNotification(`Promo code applied! ${Math.round(discount * 100)}% discount`);
        document.getElementById('promo-code').value = '';
    } else {
        showNotification('Invalid promo code');
    }
}

function proceedToCheckout() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        showNotification('Your cart is empty');
        return;
    }
    
    const total = document.getElementById('total').textContent;
    const confirmation = confirm(`Your order total is: ${total}\n\nFor this static website, you would normally proceed to payment.\n\nThank you for shopping at Francprix Boutique!`);
    
    if (confirmation) {
        localStorage.removeItem('cart');
        updateCartCount();
        showNotification('Order placed successfully!');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
    }
}

// Initialize cart on page load
document.addEventListener('DOMContentLoaded', () => {
    loadCart();
});
