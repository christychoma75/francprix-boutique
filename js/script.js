/* ===================================
   MAIN JAVASCRIPT - SHARED FUNCTIONALITY
   =================================== */

// Product Database
const productsDB = [
    // Women's Dresses
    { id: 1, name: 'Elegant Evening Dress', category: 'women', type: 'dresses', price: 85000, rating: 4.8, featured: true },
    { id: 2, name: 'Casual Summer Dress', category: 'women', type: 'dresses', price: 45000, rating: 4.5, featured: true },
    { id: 3, name: 'Professional Midi Dress', category: 'women', type: 'dresses', price: 65000, rating: 4.7 },
    { id: 4, name: 'Party Sequin Dress', category: 'women', type: 'dresses', price: 95000, rating: 4.9 },

    // Women's Skirts
    { id: 5, name: 'Pleated Pencil Skirt', category: 'women', type: 'skirts', price: 55000, rating: 4.6, featured: true },
    { id: 6, name: 'Maxi Floral Skirt', category: 'women', type: 'skirts', price: 50000, rating: 4.4 },
    { id: 7, name: 'Denim Mini Skirt', category: 'women', type: 'skirts', price: 40000, rating: 4.3 },

    // Women's Jeans
    { id: 8, name: 'Skinny Blue Jeans', category: 'women', type: 'jeans', price: 60000, rating: 4.7, featured: true },
    { id: 9, name: 'Boyfriend Jeans', category: 'women', type: 'jeans', price: 65000, rating: 4.6 },
    { id: 10, name: 'Distressed Jeans', category: 'women', type: 'jeans', price: 55000, rating: 4.5 },

    // Women's Shoes
    { id: 11, name: 'Elegant High Heels', category: 'women', type: 'shoes', price: 75000, rating: 4.8, featured: true },
    { id: 12, name: 'Comfortable Flats', category: 'women', type: 'shoes', price: 45000, rating: 4.5 },
    { id: 13, name: 'Sneaker Canvas', category: 'women', type: 'shoes', price: 50000, rating: 4.6 },

    // Women's Accessories
    { id: 14, name: 'Hand-woven Clutch', category: 'women', type: 'accessories', price: 35000, rating: 4.4 },
    { id: 15, name: 'Silk Scarf', category: 'women', type: 'accessories', price: 25000, rating: 4.5 },

    // Men's Suits
    { id: 16, name: 'Classic Black Suit', category: 'men', type: 'suits', price: 150000, rating: 4.9, featured: true },
    { id: 17, name: 'Navy Business Suit', category: 'men', type: 'suits', price: 140000, rating: 4.8, featured: true },
    { id: 18, name: 'Grey Formal Suit', category: 'men', type: 'suits', price: 145000, rating: 4.7 },
    { id: 19, name: 'Brown Casual Suit', category: 'men', type: 'suits', price: 130000, rating: 4.6 },

    // Men's Shoes
    { id: 20, name: 'Oxford Dress Shoes', category: 'men', type: 'shoes', price: 80000, rating: 4.8, featured: true },
    { id: 21, name: 'Leather Loafers', category: 'men', type: 'shoes', price: 75000, rating: 4.7 },
    { id: 22, name: 'Casual Sneakers', category: 'men', type: 'shoes', price: 55000, rating: 4.5 },
    { id: 23, name: 'Combat Boots', category: 'men', type: 'shoes', price: 85000, rating: 4.6 },

    // Men's Watches
    { id: 24, name: 'Classic Analog Watch', category: 'men', type: 'accessories', price: 120000, rating: 4.8, featured: true },
    { id: 25, name: 'Digital Sport Watch', category: 'men', type: 'accessories', price: 95000, rating: 4.6 },
    { id: 26, name: 'Elegant Dress Watch', category: 'men', type: 'accessories', price: 110000, rating: 4.7 },

    // Men's Accessories
    { id: 27, name: 'Premium Leather Belt', category: 'men', type: 'accessories', price: 45000, rating: 4.6 },
    { id: 28, name: 'Silk Tie Collection', category: 'men', type: 'accessories', price: 35000, rating: 4.5 },
];

// Cart Management
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const count = cart.length;
    document.querySelectorAll('.cart-count').forEach(el => {
        el.textContent = count;
    });
}

function addToCart(productId) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = productsDB.find(p => p.id === productId);
    
    if (product) {
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        showNotification('Product added to cart!');
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #27ae60;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 4px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Mobile Menu Toggle
function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
            navMenu.style.position = 'absolute';
            navMenu.style.top = '60px';
            navMenu.style.left = '0';
            navMenu.style.right = '0';
            navMenu.style.flexDirection = 'column';
            navMenu.style.backgroundColor = 'white';
            navMenu.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
    }
}

// Newsletter Form
function setupNewsletter() {
    const form = document.querySelector('.newsletter-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = form.querySelector('input[type="email"]');
            if (email.value) {
                showNotification('Thanks for subscribing!');
                email.value = '';
            }
        });
    }
}

// Add CSS animations
function addAnimations() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    setupMobileMenu();
    setupNewsletter();
    addAnimations();
    updatePageLanguage();
    updateLanguageSelectorDisplay();
});

// Update all text elements based on current language
function updatePageLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        //only update text content, not if it has children elements
        if (element.children.length === 0 || element.tagName === 'A' || element.tagName === 'BUTTON' || element.tagName === 'SPAN') {
            element.textContent = t(key);
        }
    });
}

// Update language selector display
function updateLanguageSelectorDisplay() {
    const currentLang = getCurrentLanguage().toUpperCase();
    const langDisplay = document.getElementById('current-lang');
    if (langDisplay) {
        langDisplay.textContent = currentLang;
    }
}

// Toggle language menu
function toggleLanguageMenu() {
    const langMenu = document.getElementById('lang-menu');
    if (langMenu) {
        langMenu.style.display = langMenu.style.display === 'flex' ? 'none' : 'flex';
    }
}
