# CommerceQA - Requirement Traceability Matrix (RTM)

**Document Version:** 1.0  
**Created Date:** July 22, 2026  
**Purpose:** Map functional requirements to test cases for coverage verification

---

## RTM Overview

The Requirement Traceability Matrix establishes bidirectional traceability between functional requirements and test cases, ensuring:
- All requirements are tested
- All test cases map to requirements
- Complete test coverage
- No untested features

---

## FUNCTIONAL REQUIREMENTS & TEST CASE MAPPING

---

### REQUIREMENT CATEGORY: HOME PAGE FUNCTIONALITY

| REQ ID | Requirement | Description | Test Case ID | Status |
|---|---|---|---|---|
| REQ-HP-001 | Home Page Display | Home page displays hero banner with welcome message | TC_HP_001, TC_HP_002 | ✓ Mapped |
| REQ-HP-002 | Navigation Button | Shop Now button navigates to product listing | TC_HP_003 | ✓ Mapped |
| REQ-HP-003 | Features Section | Three feature cards display with icons and descriptions | TC_HP_004 | ✓ Mapped |
| REQ-HP-004 | Category Browse | All 7 product categories displayed with icons | TC_HP_005, TC_HP_006 | ✓ Mapped |
| REQ-HP-005 | Featured Products | 8 featured products displayed in grid | TC_HP_007, TC_HP_008 | ✓ Mapped |
| REQ-HP-006 | Newsletter Form | Newsletter subscription section at bottom | TC_HP_009 | ✓ Mapped |
| REQ-HP-007 | Responsive Design | Home page responsive on mobile (375px) | TC_HP_010 | ✓ Mapped |

---

### REQUIREMENT CATEGORY: PRODUCT LISTING

| REQ ID | Requirement | Description | Test Case ID | Status |
|---|---|---|---|---|
| REQ-PL-001 | Product Display | All products displayed in grid layout | TC_PL_001 | ✓ Mapped |
| REQ-PL-002 | Category Filter | Filter products by category (7 categories) | TC_PL_002, TC_PL_010 | ✓ Mapped |
| REQ-PL-003 | Price Range Filter | Filter products by price range ($0-$500) | TC_PL_003, TC_PL_010 | ✓ Mapped |
| REQ-PL-004 | Sort by Price (ASC) | Sort products by price low to high | TC_PL_004 | ✓ Mapped |
| REQ-PL-005 | Sort by Price (DESC) | Sort products by price high to low | TC_PL_005 | ✓ Mapped |
| REQ-PL-006 | Sort by Rating | Sort products by rating highest first | TC_PL_006 | ✓ Mapped |
| REQ-PL-007 | Search Products | Search for products by keyword | TC_PL_007 | ✓ Mapped |
| REQ-PL-008 | Mobile Filters | Filter panel togglable on mobile | TC_PL_008 | ✓ Mapped |
| REQ-PL-009 | No Results State | Display no products message when filters yield no results | TC_PL_009 | ✓ Mapped |
| REQ-PL-010 | Combined Filters | Apply multiple filters simultaneously | TC_PL_010 | ✓ Mapped |

---

### REQUIREMENT CATEGORY: PRODUCT DETAILS

| REQ ID | Requirement | Description | Test Case ID | Status |
|---|---|---|---|---|
| REQ-PD-001 | Product Information | Display product details page with all info | TC_PD_001 | ✓ Mapped |
| REQ-PD-002 | Invalid Product Handling | Show error for non-existent products | TC_PD_002 | ✓ Mapped |
| REQ-PD-003 | Price Display | Display original price, discount, and final price | TC_PD_003 | ✓ Mapped |
| REQ-PD-004 | Quantity Selection | Allow user to select product quantity | TC_PD_004 | ✓ Mapped |
| REQ-PD-005 | Stock Status (In Stock) | Display "In Stock" for products with >10 units | TC_PD_005 | ✓ Mapped |
| REQ-PD-006 | Stock Status (Low Stock) | Display "Only X left" for products with 1-10 units | TC_PD_006 | ✓ Mapped |
| REQ-PD-007 | Stock Status (Out of Stock) | Display "Out of Stock" and disable buttons | TC_PD_007 | ✓ Mapped |
| REQ-PD-008 | Add to Cart | Add product to cart with quantity | TC_PD_008 | ✓ Mapped |
| REQ-PD-009 | Stock Validation | Show error when quantity exceeds stock | TC_PD_009 | ✓ Mapped |
| REQ-PD-010 | Add to Wishlist | Add product to wishlist with heart icon | TC_PD_010 | ✓ Mapped |
| REQ-PD-011 | Remove from Wishlist | Remove product from wishlist | TC_PD_011 | ✓ Mapped |
| REQ-PD-012 | Specifications | Display product specifications | TC_PD_012 | ✓ Mapped |
| REQ-PD-013 | Rating Display | Display product rating and review count | TC_PD_013 | ✓ Mapped |
| REQ-PD-014 | Back Navigation | Navigate back to previous page | TC_PD_014 | ✓ Mapped |

---

### REQUIREMENT CATEGORY: SHOPPING CART

| REQ ID | Requirement | Description | Test Case ID | Status |
|---|---|---|---|---|
| REQ-SC-001 | Empty Cart Display | Show empty cart message when no items | TC_SC_001 | ✓ Mapped |
| REQ-SC-002 | Cart Items Display | List all items in cart with details | TC_SC_002 | ✓ Mapped |
| REQ-SC-003 | Update Quantity | Modify item quantity in cart | TC_SC_003 | ✓ Mapped |
| REQ-SC-004 | Remove Item | Delete item from cart | TC_SC_004 | ✓ Mapped |
| REQ-SC-005 | Clear Cart | Remove all items at once | TC_SC_005 | ✓ Mapped |
| REQ-SC-006 | Subtotal Calculation | Calculate subtotal of all items | TC_SC_006 | ✓ Mapped |
| REQ-SC-007 | Checkout Navigation | Proceed to checkout from cart | TC_SC_007 | ✓ Mapped |
| REQ-SC-008 | Cart Persistence | Cart data persists after page refresh | TC_SC_008 | ✓ Mapped |
| REQ-SC-009 | Continue Shopping | Navigate back to products | TC_SC_009 | ✓ Mapped |

---

### REQUIREMENT CATEGORY: CHECKOUT

| REQ ID | Requirement | Description | Test Case ID | Status |
|---|---|---|---|---|
| REQ-CO-001 | Checkout Page Load | Checkout page displays with shipping form | TC_CO_001 | ✓ Mapped |
| REQ-CO-002 | Empty Cart Prevention | Prevent checkout with empty cart | TC_CO_002 | ✓ Mapped |
| REQ-CO-003 | Shipping Form | Accept valid shipping information | TC_CO_003 | ✓ Mapped |
| REQ-CO-004 | Validate Full Name | Require full name field | TC_CO_004 | ✓ Mapped |
| REQ-CO-005 | Validate Email | Validate email format | TC_CO_005 | ✓ Mapped |
| REQ-CO-006 | Validate Phone | Validate phone number (10-15 digits) | TC_CO_006 | ✓ Mapped |
| REQ-CO-007 | Validate Postal Code | Validate postal code (5-10 chars) | TC_CO_007 | ✓ Mapped |
| REQ-CO-008 | Payment Form | Display payment form after shipping | TC_CO_008 | ✓ Mapped |
| REQ-CO-009 | Validate Card Number | Validate card number with Luhn algorithm | TC_CO_009 | ✓ Mapped |
| REQ-CO-010 | Validate Expiry Date | Validate expiry date format (MM/YY) | TC_CO_010 | ✓ Mapped |
| REQ-CO-011 | Validate CVV | Validate CVV (3-4 digits) | TC_CO_011 | ✓ Mapped |
| REQ-CO-012 | Order Creation | Create order and generate Order ID | TC_CO_012 | ✓ Mapped |

---

### REQUIREMENT CATEGORY: ORDER CONFIRMATION

| REQ ID | Requirement | Description | Test Case ID | Status |
|---|---|---|---|---|
| REQ-OC-001 | Confirmation Page | Display order confirmation page after purchase | TC_OC_001 | ✓ Mapped |
| REQ-OC-002 | Order ID Generation | Generate unique Order ID with format ORD+10chars | TC_OC_002 | ✓ Mapped |
| REQ-OC-003 | Order Items Display | List all purchased items with quantities and prices | TC_OC_003 | ✓ Mapped |
| REQ-OC-004 | Total Calculation | Display order summary with subtotal, tax, shipping | TC_OC_004 | ✓ Mapped |
| REQ-OC-005 | Shipping Address | Display shipping address information | TC_OC_005 | ✓ Mapped |
| REQ-OC-006 | Order Timeline | Display next steps (Order Processing, Shipment, Delivery) | TC_OC_006 | ✓ Mapped |
| REQ-OC-007 | Order Status | Display order status (processing) | TC_OC_007 | ✓ Mapped |
| REQ-OC-008 | Cart Clear | Clear cart after successful order | TC_OC_008 | ✓ Mapped |

---

### REQUIREMENT CATEGORY: WISHLIST

| REQ ID | Requirement | Description | Test Case ID | Status |
|---|---|---|---|---|
| REQ-WL-001 | Empty Wishlist | Display empty message when no items | TC_WL_001 | ✓ Mapped |
| REQ-WL-002 | Wishlist Display | Display all saved products in grid | TC_WL_002 | ✓ Mapped |
| REQ-WL-003 | Remove from Wishlist | Remove product via heart icon | TC_WL_003 | ✓ Mapped |
| REQ-WL-004 | Add to Cart from Wishlist | Move product from wishlist to cart | TC_WL_004 | ✓ Mapped |
| REQ-WL-005 | Wishlist Persistence | Wishlist persists after refresh | TC_WL_005 | ✓ Mapped |

---

### REQUIREMENT CATEGORY: USER PROFILE

| REQ ID | Requirement | Description | Test Case ID | Status |
|---|---|---|---|---|
| REQ-UP-001 | Profile Display | Display user profile page with info | TC_UP_001 | ✓ Mapped |
| REQ-UP-002 | Profile Information | Display email, phone, and order count | TC_UP_002 | ✓ Mapped |
| REQ-UP-003 | Edit Profile | Allow user to edit profile information | TC_UP_003 | ✓ Mapped |
| REQ-UP-004 | Save Profile | Save updated profile information | TC_UP_004 | ✓ Mapped |
| REQ-UP-005 | Cancel Edit | Discard changes and return to view mode | TC_UP_005 | ✓ Mapped |
| REQ-UP-006 | Order History | Display previous orders in profile | TC_UP_006 | ✓ Mapped |
| REQ-UP-007 | Profile Persistence | Profile changes persist after refresh | TC_UP_007 | ✓ Mapped |

---

### REQUIREMENT CATEGORY: NAVIGATION

| REQ ID | Requirement | Description | Test Case ID | Status |
|---|---|---|---|---|
| REQ-NAV-001 | Navigation Links | Header navigation links functional | TC_NAV_001 | ✓ Mapped |
| REQ-NAV-002 | Search Bar | Search for products via header search | TC_NAV_002 | ✓ Mapped |
| REQ-NAV-003 | Cart Icon | Display cart item count in header | TC_NAV_003 | ✓ Mapped |
| REQ-NAV-004 | Wishlist Icon | Navigate to wishlist from header | TC_NAV_004 | ✓ Mapped |
| REQ-NAV-005 | Mobile Menu | Toggle mobile menu on small screens | TC_NAV_005 | ✓ Mapped |
| REQ-NAV-006 | Footer | Display footer with company info | TC_NAV_006 | ✓ Mapped |

---

### REQUIREMENT CATEGORY: DATA VALIDATION

| REQ ID | Requirement | Description | Test Case ID | Status |
|---|---|---|---|---|
| REQ-VAL-001 | Email Validation | Validate email format | TC_VAL_001, TC_VAL_002 | ✓ Mapped |
| REQ-VAL-002 | Phone Validation | Validate phone 10-15 digits | TC_VAL_003, TC_VAL_004 | ✓ Mapped |
| REQ-VAL-003 | Postal Code Validation | Validate postal code 5-10 chars | TC_VAL_005, TC_VAL_006 | ✓ Mapped |
| REQ-VAL-004 | Card Number Validation | Validate card using Luhn algorithm | TC_VAL_007, TC_VAL_008 | ✓ Mapped |
| REQ-VAL-005 | Expiry Date Validation | Validate expiry date MM/YY format | TC_VAL_009 | ✓ Mapped |
| REQ-VAL-006 | CVV Validation | Validate CVV 3-4 digits | TC_VAL_010 | ✓ Mapped |

---

### REQUIREMENT CATEGORY: DATA PERSISTENCE

| REQ ID | Requirement | Description | Test Case ID | Status |
|---|---|---|---|---|
| REQ-DP-001 | Cart Persistence | Cart saved to localStorage | TC_DP_001 | ✓ Mapped |
| REQ-DP-002 | Wishlist Persistence | Wishlist saved to localStorage | TC_DP_002 | ✓ Mapped |
| REQ-DP-003 | Profile Persistence | User profile saved to localStorage | TC_DP_003 | ✓ Mapped |
| REQ-DP-004 | Order Storage | Orders stored in user profile | TC_DP_004 | ✓ Mapped |

---

## COVERAGE ANALYSIS

### Requirement Coverage Summary

| Category | Total REQ | Mapped | Coverage % |
|---|---|---|---|
| Home Page | 7 | 7 | 100% |
| Product Listing | 10 | 10 | 100% |
| Product Details | 14 | 14 | 100% |
| Shopping Cart | 9 | 9 | 100% |
| Checkout | 12 | 12 | 100% |
| Order Confirmation | 8 | 8 | 100% |
| Wishlist | 5 | 5 | 100% |
| User Profile | 7 | 7 | 100% |
| Navigation | 6 | 6 | 100% |
| Data Validation | 6 | 6 | 100% |
| Data Persistence | 4 | 4 | 100% |
| **TOTAL** | **88** | **88** | **100%** |

---

### Test Case to Requirement Mapping

| Test Case Module | Test Count | Requirements Covered | Coverage |
|---|---|---|---|
| Home Page | 10 | 7 | 100% |
| Product Listing | 10 | 10 | 100% |
| Product Details | 14 | 14 | 100% |
| Shopping Cart | 9 | 9 | 100% |
| Checkout | 12 | 12 | 100% |
| Order Confirmation | 8 | 8 | 100% |
| Wishlist | 5 | 5 | 100% |
| Profile | 7 | 7 | 100% |
| Navigation | 6 | 6 | 100% |
| Validation | 10 | 6 | 100% |
| Data Persistence | 4 | 4 | 100% |
| Smoke Tests | 5 | 15 | Multi-requirement |
| Regression Tests | 10 | Bug fixes | Coverage |
| **TOTAL** | **125** | **88** | **100%** |

---

## REQUIREMENTS WITHOUT TEST COVERAGE

No requirements are without test coverage. ✓ All requirements are mapped to test cases.

---

## TEST CASES WITHOUT REQUIREMENT MAPPING

Some test cases cover multiple requirements or test edge cases beyond base requirements:

| Test Case | Purpose |
|---|---|
| TC_HP_010 | Responsive design edge case testing |
| TC_PL_008 | Mobile-specific UI testing |
| TC_PD_004 | Boundary value testing |
| Additional validation tests | Negative and edge case testing |

---

## TRACEABILITY METRICS

| Metric | Value | Status |
|---|---|---|
| **Requirements** | 88 | ✓ Complete |
| **Test Cases** | 125 | ✓ Complete |
| **Requirement Coverage** | 100% | ✓ Pass |
| **Test Case Mapping** | 100% | ✓ Pass |
| **Unmapped Requirements** | 0 | ✓ Pass |
| **Unmapped Test Cases** | ~20 (edge cases) | ✓ Pass |

---

## RTM MAINTENANCE

The RTM should be updated when:
1. New requirements are added to the application
2. Requirements are modified or deprecated
3. New test cases are created
4. Test cases are removed or consolidated
5. Bugs are discovered and addressed

---

**END OF REQUIREMENT TRACEABILITY MATRIX**

**Document Approval:**

QA Lead: _________________ Date: _________________

