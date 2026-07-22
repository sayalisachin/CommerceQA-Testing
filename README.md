# CommerceQA - E-Commerce Web Application

A modern, full-featured e-commerce web application built with React, Vite, Tailwind CSS, and React Router. Designed specifically for Quality Assurance testing and portfolio purposes.

## 🎯 Project Overview

CommerceQA is a realistic online shopping platform that demonstrates professional React development practices. The application provides a complete e-commerce experience without requiring a backend server, making it perfect for QA testing, manual test case creation, and software testing demonstrations.

**Key Features:**
- ✅ 30+ realistic products across 7 categories
- ✅ Full shopping cart functionality
- ✅ Complete checkout process with validations
- ✅ Wishlist management
- ✅ User profile with order history
- ✅ Search and advanced filtering
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ All data stored in localStorage (no backend required)

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router v6
- **Icons:** Lucide React
- **Language:** TypeScript
- **Package Manager:** npm/yarn

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── common/         # Shared components (Header, Footer, ProductCard, Alert)
│   └── cart/           # Cart-specific components (CartItem, CartSummary)
├── pages/              # Page components (Home, Products, Checkout, etc.)
├── context/            # React Context (Cart, Wishlist management)
├── hooks/              # Custom React hooks
│   ├── useProducts.ts  # Product filtering and fetching
│   └── useUserProfile.ts # User profile management
├── data/               # Static data
│   └── products.ts     # 30+ products with realistic data
├── types/              # TypeScript type definitions
├── utils/              # Utility functions (validation, formatting)
├── App.tsx             # Main app component with routing
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project:**
```bash
cd QA\ Testing
```

2. **Install dependencies:**
```bash
npm install
# or
yarn install
```

3. **Start the development server:**
```bash
npm run dev
# or
yarn dev
```

The application will open automatically at `http://localhost:5173`

### Building for Production

```bash
npm run build
# or
yarn build
```

The production-ready files will be in the `dist/` folder.

## 📋 Features & Pages

### 1. **Home Page** (`/`)
- Featured products showcase
- Product categories with navigation
- Promotional banners
- Newsletter subscription form
- Key benefits section

### 2. **Product Listing** (`/products`)
- Browse all products
- Filter by category
- Search functionality
- Sort by price, rating, or newest
- Price range slider
- Responsive grid layout

### 3. **Product Details** (`/product/:id`)
- High-quality product images
- Detailed descriptions and specifications
- Customer ratings and reviews
- Stock availability indicator
- Add to cart and wishlist buttons
- Quantity selector
- Shipping and return information

### 4. **Shopping Cart** (`/cart`)
- View all cart items
- Adjust quantities
- Remove items
- Order summary with tax and shipping calculations
- Free shipping threshold ($200+)
- Proceed to checkout button

### 5. **Checkout** (`/checkout`)
- **Step 1: Shipping Information**
  - Full name, email, phone
  - Address, city, state, postal code
  - Country selection
  - Form validation with error messages

- **Step 2: Payment Information**
  - Card details (validation using Luhn algorithm)
  - Expiry date and CVV validation
  - Order review before submission

### 6. **Order Confirmation** (`/order-confirmation/:id`)
- Order ID (randomly generated)
- Order date and total
- Itemized order details
- Shipping address confirmation
- Delivery timeline
- Status tracking

### 7. **Wishlist** (`/wishlist`)
- View saved products
- Remove items from wishlist
- Quick add to cart
- Quick access from header

### 8. **User Profile** (`/profile`)
- Edit user information
- View order history
- Order status tracking
- Member information

## 🎨 Component Architecture

### Common Components
- **Header** - Navigation, search bar, cart and wishlist badges
- **Footer** - Links, contact information, social media
- **ProductCard** - Reusable product display with add-to-cart and wishlist
- **Alert** - Success/error/warning/info messages
- **CartSummary** - Order total calculation display
- **CartItem** - Individual cart item with quantity controls

### Context & State Management
- **CartContext** - Global cart state using React Context
- **WishlistContext** - Global wishlist state
- Both persist data to localStorage automatically

### Custom Hooks
- **useProducts()** - Filter, search, and sort products
- **useProductById()** - Fetch single product by ID
- **useCategories()** - Get all unique categories
- **useUserProfile()** - Manage user profile and orders

## 💾 Data Storage

All data is persisted in the browser's localStorage:
- `cart` - Current shopping cart items
- `wishlist` - Saved products
- `user_profile` - User information and order history

No backend server required!

## ✅ Validation Features

The application includes comprehensive form validations:

| Field | Validation |
|-------|-----------|
| Email | Standard email format |
| Phone | 10-15 digit numbers |
| Postal Code | 5-10 alphanumeric characters |
| Card Number | Luhn algorithm validation |
| CVV | 3-4 digits |
| Expiry Date | MM/YY format, future date |

## 📊 Sample Products

The application includes 30+ products across categories:

1. **Electronics** (5 products) - Headphones, webcam, SSD, keyboard, mouse
2. **Fashion** (5 products) - T-shirts, jeans, blazers, sweaters, shirts
3. **Books** (4 products) - Programming and tech books
4. **Shoes** (5 products) - Running shoes, sneakers, loafers, athletic, casual
5. **Beauty** (4 products) - Serums, creams, shampoo, lipsticks
6. **Accessories** (4 products) - Wallet, smartwatch, watch, sunglasses
7. **Home Appliances** (3 products) - Coffee maker, air purifier, vacuum

Each product includes:
- Realistic image URL (from Unsplash)
- Title and description
- Category and price
- Discount percentage
- Stock quantity
- Customer rating (1-5 stars)
- Number of reviews
- Product specifications

## 🧪 QA Testing Scenarios

This application is perfect for manual testing:

### Functional Testing
- ✓ Product search and filtering
- ✓ Add/remove items from cart
- ✓ Apply discounts and calculate totals
- ✓ Checkout process with validation
- ✓ Wishlist management
- ✓ Order confirmation

### Edge Cases
- ✓ Empty cart checkout prevention
- ✓ Out of stock item handling
- ✓ Invalid form submissions
- ✓ Session persistence
- ✓ Mobile responsiveness

### Regression Testing
- ✓ Cross-browser compatibility
- ✓ Navigation flows
- ✓ Data persistence
- ✓ Performance with large product lists

## 🎯 Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint the code
npm run lint

# Format code with Prettier
npm run format
```

## 📱 Responsive Design

The application is fully responsive:
- ✓ **Mobile** (320px - 640px)
- ✓ **Tablet** (641px - 1024px)
- ✓ **Desktop** (1025px+)

## 🔐 Security & Validations

- ✓ Credit card number validation (Luhn algorithm)
- ✓ Email format validation
- ✓ Phone number format validation
- ✓ Postal code validation
- ✓ Required field validation
- ✓ Input sanitization for XSS prevention

## 🎨 UI/UX Features

- Clean, modern interface inspired by major e-commerce platforms (Amazon, Flipkart)
- Intuitive navigation
- Clear call-to-action buttons
- Real-time cart updates
- Loading states and error handling
- Success/error notifications
- Smooth transitions and hover effects
- Accessibility considerations

## 📝 Code Quality

- ✓ TypeScript for type safety
- ✓ Component-based architecture
- ✓ Clean, maintainable code
- ✓ Clear comments and documentation
- ✓ ESLint configuration
- ✓ Prettier formatting
- ✓ SOLID principles

## 🚀 Performance Optimizations

- ✓ Code splitting with React Router
- ✓ Lazy loading components
- ✓ Memoized selectors and calculations
- ✓ Optimized re-renders
- ✓ CSS-in-JS with Tailwind (no runtime overhead)

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📖 How to Use for QA Testing

### 1. **Create Test Cases**
Document test scenarios for:
- User registration and profile management
- Product browsing and search
- Shopping cart operations
- Checkout process
- Payment validation
- Order management

### 2. **Execute Manual Tests**
- Follow your test cases
- Document results
- Capture screenshots/videos
- Log bugs with detailed descriptions

### 3. **Prepare Bug Reports**
Use the application's realistic scenarios to create comprehensive bug reports including:
- Steps to reproduce
- Expected vs actual behavior
- Screenshots/videos
- Browser and OS information
- Severity and priority

### 4. **Create QA Documentation**
- Test plan document
- Test case specifications
- Bug report template
- Regression test suite
- UAT checklist

## 📚 Educational Value

This project demonstrates:
- Professional React component design
- State management with Context API
- React Router navigation
- Form validation and error handling
- Responsive CSS with Tailwind
- TypeScript best practices
- Custom hooks development
- localStorage integration

## 🔄 Future Enhancements

Potential features for expanded testing:
- User authentication and registration
- Product reviews and ratings system
- Multiple payment methods
- Coupon and promo code system
- Inventory management
- Order tracking
- Customer support chat
- Analytics dashboard

## 📄 License

This project is created for educational and portfolio purposes.

## 👥 Author

Created as a comprehensive QA testing portfolio project demonstrating professional e-commerce application development.

## 🤝 Contributing

This is a portfolio project. For modifications or improvements:
1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit for review

## 📞 Support

For questions or issues:
1. Check the browser console for errors
2. Verify localStorage is enabled
3. Clear browser cache and reload
4. Test in a different browser

---

**Ready to test? Start by running `npm run dev` and begin exploring the application!**
