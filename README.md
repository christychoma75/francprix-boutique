# Francprix Boutique - E-Commerce Website

A modern, responsive static e-commerce website for Francprix Boutique, a premium fashion boutique in Gombe, Kinshasa, Congo.

## 📋 Project Overview

**Business Name:** Francprix Boutique  
**Location:** Gombe, Kinshasa, Democratic Republic of Congo  
**Products:** Premium men's and women's fashion items

### Product Categories

#### Women's Fashion
- **Dresses** - Evening wear, casual dresses, professional attire
- **Skirts** - Pencil skirts, maxi skirts, denim skirts
- **Jeans** - Skinny jeans, boyfriend jeans, distressed styles
- **Shoes** - High heels, flats, sneakers
- **Accessories** - Clutches, scarves, jewelry

#### Men's Fashion
- **Suits** - Classic suits, business wear, casual elegant
- **Shoes** - Oxford shoes, loafers, sneakers, boots
- **Watches** - Analog watches, digital watches, dress watches
- **Accessories** - Belts, ties, leather goods

## 🏗️ Website Structure

```
francprix-boutique/
├── index.html           # Homepage with featured products
├── products.html        # Shop page with filters and sorting
├── cart.html           # Shopping cart with order summary
├── about.html          # About the boutique
├── contact.html        # Contact form and FAQ
├── css/
│   └── style.css       # Complete styling and responsive design
├── js/
│   ├── script.js       # Main functionality (cart, mobile menu, etc.)
│   ├── products.js     # Product page filtering and sorting
│   ├── cart.js         # Cart management
│   └── contact.js      # Contact form handling
└── assets/
    └── images/         # Product images folder (ready for your images)
```

## ✨ Features

### Core Features
- ✅ **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- ✅ **Product Catalog** - 28+ high-quality products with details
- ✅ **Shopping Cart** - Full cart functionality with LocalStorage
- ✅ **Product Filters** - Filter by category, type, and price range
- ✅ **Sorting Options** - Sort by name, price (low-high, high-low)
- ✅ **Order Summary** - Real-time calculation of subtotal, tax, and shipping
- ✅ **Promo Codes** - Built-in support for discount codes

### Pages
1. **Home (index.html)**
   - Hero section with call-to-action
   - Featured collections (Women's & Men's)
   - Featured products
   - Why choose us section
   - Newsletter signup

2. **Shop (products.html)**
   - Advanced filtering system
   - Product grid with hover effects
   - Sorting functionality
   - Real-time product count
   - Add to cart buttons

3. **Shopping Cart (cart.html)**
   - View all cart items
   - Update quantities
   - Remove items
   - Order summary with calculations
   - Promo code application
   - Checkout simulation

4. **About (about.html)**
   - Store history and mission
   - Vision and values
   - Product offerings
   - Reasons to shop
   - Team information

5. **Contact (contact.html)**
   - Contact form with validation
   - Store information and hours
   - Location details
   - Frequently asked questions
   - Social media links

## 🎨 Design Features

- **Color Scheme:**
  - Primary Gold: #d4af37 (Premium & elegant)
  - Secondary Black: #1a1a1a (Professional)
  - Accent Red: #e74c3c (Attention/Alerts)

- **Typography:** Modern sans-serif with proper hierarchy
- **Animations:** Smooth transitions and hover effects
- **Mobile First:** Fully responsive layout

## 💰 Pricing Examples (Congo Francs - FC)

### Women's Items
- Dresses: 45,000 - 95,000 FC
- Skirts: 40,000 - 55,000 FC
- Jeans: 55,000 - 65,000 FC
- Shoes: 45,000 - 75,000 FC

### Men's Items
- Suits: 130,000 - 150,000 FC
- Shoes: 55,000 - 85,000 FC
- Watches: 95,000 - 120,000 FC
- Accessories: 35,000 - 45,000 FC

## 🚀 How to Use

### Opening the Website
1. Extract the folder
2. Open `index.html` in any modern web browser
3. No server or installation required!

### Shopping
1. Click **"Shop Now"** or navigate to the **Shop** page
2. Use filters on the left to narrow down products
3. Click **"Add to Cart"** to add items
4. Visit the **Cart** page to review your order
5. Apply promo codes (WELCOME10, FASHION20, CONGO5)
6. Click **"Proceed to Checkout"** to complete the order

### Promo Codes
- **WELCOME10** - 10% discount
- **FASHION20** - 20% discount
- **CONGO5** - 5% discount

## 📱 Responsive Breakpoints

- **Desktop:** 1200px+
- **Tablet:** 768px - 1199px
- **Mobile:** Below 768px

## 💾 Local Storage Features

The website uses browser LocalStorage to:
- Save shopping cart items
- Remember cart count across pages
- Store contact form submissions

## 🔧 Customization Guide

### Adding Your Logo
Replace the logo text in the navigation with your own logo image:
```html
<img src="path/to/your/logo.png" alt="Francprix Boutique" class="logo-img">
```

### Adding Product Images
Place product images in `assets/images/` and in the product cards, replace the emoji system:
```javascript
// In products.js, modify renderProducts() to use:
<img src="assets/images/product-${product.id}.jpg" alt="${product.name}">
```

### Updating Contact Information
Edit contact details in:
- `contact.html` - Physical address and contact info
- `footer.html` sections in all pages

### Changing Colors
Modify CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #your-gold;
    --secondary-color: #your-black;
    --accent-color: #your-red;
}
```

## 📞 Contact Information

**Francprix Boutique**
- 📍 Gombe, Kinshasa, Democratic Republic of Congo
- 📧 Email: info@francprix.cd
- 📱 Phone: +243 (0) 123 456 789
- 💬 WhatsApp: Available

## 📋 Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔒 Features for Security

- Client-side validation on all forms
- No sensitive data stored locally
- All transactions are simulation-ready for integration with payment gateways

## 📈 Next Steps for Production

1. **Add Product Images** - Replace emojis with real product photos
2. **Integrate Payment Gateway** - Add payment processing (PayPal, Stripe, etc.)
3. **Email Integration** - Set up email notifications for orders
4. **Analytics** - Add Google Analytics
5. **SEO** - Add meta descriptions and keywords
6. **Database** - Move product data to a real backend
7. **Admin Panel** - Create product management interface

## 📄 License

This website is created for Francprix Boutique, Gombe, Kinshasa, Congo.

---

Built with ❤️ for Francprix Boutique - Premium Fashion in Kinshasa

**Version:** 1.0  
**Last Updated:** 2026
