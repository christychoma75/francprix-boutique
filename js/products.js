/* ===================================
   PRODUCTS PAGE FUNCTIONALITY
   =================================== */

let currentFilters = {
    category: 'all',
    types: [],
    price: 'all'
};

function renderProducts(filteredProducts) {
    const container = document.getElementById('products-container');
    const countElement = document.getElementById('count-number');
    
    container.innerHTML = '';
    countElement.textContent = filteredProducts.length;
    
    if (filteredProducts.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem; color: #666;">No products found</p>';
        return;
    }

    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        const emoji = getProductEmoji(product.type);
        
        card.innerHTML = `
            <div class="product-image" data-image="${emoji}"></div>
            <div class="product-info">
                <p class="product-category">${product.category.toUpperCase()}</p>
                <h3 class="product-title">${product.name}</h3>
                <p class="product-rating">⭐ ${product.rating}/5</p>
                <p class="product-price">${product.price.toLocaleString()} FC</p>
                <div class="product-actions">
                    <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
                    <button class="btn btn-secondary" onclick="viewDetails(${product.id})">View</button>
                </div>
            </div>
        `;
        
        container.appendChild(card);
    });
}

function getProductEmoji(type) {
    const emojiMap = {
        'dresses': '👗',
        'skirts': '👚',
        'jeans': '👖',
        'shoes': '👠',
        'suits': '🧥',
        'accessories': '⌚'
    };
    return emojiMap[type] || '👕';
}

function filterProducts() {
    let filtered = productsDB.filter(product => {
        // Category filter
        if (currentFilters.category !== 'all' && product.category !== currentFilters.category) {
            return false;
        }

        // Type filter
        if (currentFilters.types.length > 0 && !currentFilters.types.includes(product.type)) {
            return false;
        }

        // Price filter
        if (currentFilters.price !== 'all') {
            const price = product.price;
            if (currentFilters.price === '0-50000' && (price < 0 || price > 50000)) return false;
            if (currentFilters.price === '50000-100000' && (price < 50000 || price > 100000)) return false;
            if (currentFilters.price === '100000+' && price < 100000) return false;
        }

        return true;
    });

    renderProducts(filtered);
}

function resetFilters() {
    document.querySelectorAll('input[type="radio"][name="category"]').forEach(radio => {
        if (radio.value === 'all') radio.checked = true;
    });
    
    document.querySelectorAll('.product-type').forEach(checkbox => {
        checkbox.checked = false;
    });
    
    document.querySelectorAll('input[type="radio"][name="price"]').forEach(radio => {
        if (radio.value === 'all') radio.checked = true;
    });
    
    currentFilters = {
        category: 'all',
        types: [],
        price: 'all'
    };
    
    filterProducts();
}

function sortProducts(sortBy) {
    let products = [...productsDB];
    
    // Apply current filters first
    const filtered = products.filter(product => {
        if (currentFilters.category !== 'all' && product.category !== currentFilters.category) return false;
        if (currentFilters.types.length > 0 && !currentFilters.types.includes(product.type)) return false;
        if (currentFilters.price !== 'all') {
            const price = product.price;
            if (currentFilters.price === '0-50000' && (price < 0 || price > 50000)) return false;
            if (currentFilters.price === '50000-100000' && (price < 50000 || price > 100000)) return false;
            if (currentFilters.price === '100000+' && price < 100000) return false;
        }
        return true;
    });

    // Sort
    if (sortBy === 'name') {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'price-low') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
        filtered.sort((a, b) => b.price - a.price);
    }

    renderProducts(filtered);
}

function viewDetails(productId) {
    const product = productsDB.find(p => p.id === productId);
    alert(`${product.name}\n\nPrice: ${product.price.toLocaleString()} FC\nRating: ${product.rating}/5\n\nClick "Add to Cart" to purchase!`);
}

// Event listeners for filters
function setupFilters() {
    // Category filters
    document.querySelectorAll('input[type="radio"][name="category"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            currentFilters.category = e.target.value;
            filterProducts();
        });
    });

    // Type filters
    document.querySelectorAll('.product-type').forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            currentFilters.types = Array.from(
                document.querySelectorAll('.product-type:checked')
            ).map(cb => cb.value);
            filterProducts();
        });
    });

    // Price filters
    document.querySelectorAll('input[type="radio"][name="price"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            currentFilters.price = e.target.value;
            filterProducts();
        });
    });
}

// Load featured products on products page
function loadFeaturedProducts() {
    const container = document.getElementById('featured-products');
    if (container) {
        const featured = productsDB.filter(p => p.featured);
        container.innerHTML = '';
        featured.forEach(product => {
            const emoji = getProductEmoji(product.type);
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <div class="product-image" data-image="${emoji}"></div>
                <div class="product-info">
                    <p class="product-category">${product.category.toUpperCase()}</p>
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-rating">⭐ ${product.rating}/5</p>
                    <p class="product-price">${product.price.toLocaleString()} FC</p>
                    <div class="product-actions">
                        <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
                        <button class="btn btn-secondary" onclick="viewDetails(${product.id})">View</button>
                    </div>
                </div>
            `;
            container.appendChild(card);
        });
    }
}

// Check URL parameters for category filter
function checkCategoryFilter() {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');
    
    if (category) {
        currentFilters.category = category;
        document.querySelectorAll('input[type="radio"][name="category"]').forEach(radio => {
            radio.checked = radio.value === category;
        });
        filterProducts();
    } else {
        filterProducts();
    }
}

// Initialize products page
document.addEventListener('DOMContentLoaded', () => {
    setupFilters();
    loadFeaturedProducts();
    
    if (document.getElementById('products-container')) {
        checkCategoryFilter();
    }
});
