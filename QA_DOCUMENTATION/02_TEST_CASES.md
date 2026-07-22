# CommerceQA - Manual Test Cases

**Document Version:** 1.0  
**Created Date:** July 22, 2026  
**Total Test Cases:** 125  
**Status:** Ready for Execution

---

## Test Case Legend

- **Priority:** P0 (Critical) | P1 (High) | P2 (Medium) | P3 (Low)
- **Severity:** Critical | High | Medium | Low
- **Status:** Not Started | In Progress | Passed | Failed | Blocked

---

## TEST CASES BY MODULE

---

## MODULE 1: HOME PAGE

### TC_HP_001: Verify Home Page Loads Successfully
| Field | Value |
|---|---|
| **Test Case ID** | TC_HP_001 |
| **Module** | Home Page |
| **Test Scenario** | Verify home page loads without errors on initial application load |
| **Preconditions** | 1. Application is running at http://localhost:5173 |
| **Test Steps** | 1. Open browser and navigate to http://localhost:5173 2. Wait for page to fully load |
| **Test Data** | URL: http://localhost:5173 |
| **Expected Result** | 1. Page loads successfully within 3 seconds 2. Hero banner with "Welcome to CommerceQA" is displayed 3. No JavaScript errors in console 4. All images load properly |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P0 |
| **Severity** | Critical |

### TC_HP_002: Verify Hero Banner Elements Are Displayed
| Field | Value |
|---|---|
| **Test Case ID** | TC_HP_002 |
| **Module** | Home Page |
| **Test Scenario** | Verify all hero banner elements are visible and properly formatted |
| **Preconditions** | 1. Home page has loaded successfully 2. Browser resolution is 1920x1080 |
| **Test Steps** | 1. Observe hero banner section 2. Verify heading text is present 3. Verify description text is present 4. Verify "Shop Now" button is visible 5. Check button styling and color |
| **Test Data** | Expected heading: "Welcome to CommerceQA" |
| **Expected Result** | 1. Heading "Welcome to CommerceQA" is displayed in white color 2. Description text is visible below heading 3. "Shop Now" button is displayed with white background and primary color text 4. All elements are properly aligned |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P0 |
| **Severity** | Critical |

### TC_HP_003: Verify Shop Now Button Navigation
| Field | Value |
|---|---|
| **Test Case ID** | TC_HP_003 |
| **Module** | Home Page |
| **Test Scenario** | Verify clicking "Shop Now" button navigates to product listing page |
| **Preconditions** | 1. Home page is displayed 2. "Shop Now" button is visible |
| **Test Steps** | 1. Click on "Shop Now" button 2. Wait for page to load 3. Verify URL and page content |
| **Test Data** | Button text: "Shop Now" |
| **Expected Result** | 1. User is navigated to /products page 2. Product Listing page header "Products" is displayed 3. Product grid is visible with product cards 4. URL changed to http://localhost:5173/products |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P1 |
| **Severity** | High |

### TC_HP_004: Verify Features Section Cards Display
| Field | Value |
|---|---|
| **Test Case ID** | TC_HP_004 |
| **Module** | Home Page |
| **Test Scenario** | Verify three feature cards are displayed with correct information |
| **Preconditions** | 1. Home page has loaded successfully |
| **Test Steps** | 1. Scroll down to Features Section 2. Verify three cards are displayed 3. Verify "Fast Shipping" card content 4. Verify "Quality Guaranteed" card content 5. Verify "Best Prices" card content |
| **Test Data** | Card 1: "Fast Shipping" | Card 2: "Quality Guaranteed" | Card 3: "Best Prices" |
| **Expected Result** | 1. Three white cards are displayed horizontally 2. Each card has an icon at the top 3. Card 1: "Fast Shipping" with subtitle "Free shipping on orders over $200" 4. Card 2: "Quality Guaranteed" with warranty information 5. Card 3: "Best Prices" with discount information |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P2 |
| **Severity** | Medium |

### TC_HP_005: Verify Categories Section Displays All 7 Categories
| Field | Value |
|---|---|
| **Test Case ID** | TC_HP_005 |
| **Module** | Home Page |
| **Test Scenario** | Verify all product categories are displayed in category section |
| **Preconditions** | 1. Home page has loaded 2. Page scrolled to Categories Section |
| **Test Steps** | 1. Scroll to Categories Section 2. Count visible category cards 3. Verify each category name is present 4. Verify category emoji/icon is displayed |
| **Test Data** | Expected categories: Electronics, Fashion, Books, Shoes, Beauty, Accessories, Home Appliances |
| **Expected Result** | 1. All 7 categories are displayed 2. Each category has unique emoji/icon 3. Category names are properly formatted 4. Cards have hover effect (scale-105 transform) |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P1 |
| **Severity** | High |

### TC_HP_006: Verify Category Navigation Links
| Field | Value |
|---|---|
| **Test Case ID** | TC_HP_006 |
| **Module** | Home Page |
| **Test Scenario** | Verify clicking category card navigates with proper filter parameter |
| **Preconditions** | 1. Home page is displayed 2. Categories section is visible |
| **Test Steps** | 1. Click on "Electronics" category card 2. Wait for page navigation 3. Verify URL contains category parameter 4. Verify products shown are from Electronics category only |
| **Test Data** | Category: "Electronics" |
| **Expected Result** | 1. URL changes to /products?category=Electronics 2. Product Listing page displays only Electronics products 3. Product cards show only items from Electronics category 4. Filter sidebar shows "Electronics" selected |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P1 |
| **Severity** | High |

### TC_HP_007: Verify Featured Products Section Displays 8 Products
| Field | Value |
|---|---|
| **Test Case ID** | TC_HP_007 |
| **Module** | Home Page |
| **Test Scenario** | Verify Featured Products section displays exactly 8 products in grid layout |
| **Preconditions** | 1. Home page has loaded 2. Page scrolled to Featured Products section |
| **Test Steps** | 1. Scroll to Featured Products section 2. Count product cards displayed 3. Verify 4-column grid layout on desktop 4. Verify product image, title, price displayed on each card |
| **Test Data** | Expected count: 8 featured products |
| **Expected Result** | 1. 8 product cards are displayed 2. Grid is 4 columns on desktop (1366+ width) 3. Each product card shows image, title, price, rating 4. Cards are properly spaced and aligned |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P1 |
| **Severity** | High |

### TC_HP_008: Verify View All Link in Featured Products
| Field | Value |
|---|---|
| **Test Case ID** | TC_HP_008 |
| **Module** | Home Page |
| **Test Scenario** | Verify "View All" link navigates to full product listing |
| **Preconditions** | 1. Home page is displayed 2. Featured Products section is visible |
| **Test Steps** | 1. Click on "View All" link in Featured Products section header 2. Wait for page navigation 3. Verify URL and page content |
| **Test Data** | Link text: "View All" |
| **Expected Result** | 1. User navigates to /products page 2. All products are displayed (not just featured) 3. Product count shows total products available 4. No category filter is applied |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P2 |
| **Severity** | Medium |

### TC_HP_009: Verify Newsletter Subscription Form Presence
| Field | Value |
|---|---|
| **Test Case ID** | TC_HP_009 |
| **Module** | Home Page |
| **Test Scenario** | Verify newsletter subscription section is visible at bottom of page |
| **Preconditions** | 1. Home page is loaded 2. Page scrolled to bottom |
| **Test Steps** | 1. Scroll to bottom of home page 2. Locate Newsletter section 3. Verify section title "Stay Updated" 4. Verify email input field 5. Verify "Subscribe" button |
| **Test Data** | Section title: "Stay Updated" |
| **Expected Result** | 1. Newsletter section is displayed with light blue background 2. Heading "Stay Updated" is present 3. Subscription text explains newsletter benefit 4. Email input placeholder: "Enter your email" 5. "Subscribe" button is visible and clickable |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P3 |
| **Severity** | Low |

### TC_HP_010: Verify Responsive Design - Mobile View (375px)
| Field | Value |
|---|---|
| **Test Case ID** | TC_HP_010 |
| **Module** | Home Page |
| **Test Scenario** | Verify home page is responsive and displays correctly on mobile devices (375x667) |
| **Preconditions** | 1. Home page is loaded 2. Browser is set to mobile view (375px width) |
| **Test Steps** | 1. Set browser viewport to 375x667 2. Observe page layout 3. Verify hero banner is visible 4. Verify categories display in 2-column grid 5. Verify products display in single column 6. Verify no horizontal scrolling |
| **Test Data** | Mobile viewport: 375x667px |
| **Expected Result** | 1. Page is fully visible without horizontal scrolling 2. Hero banner text is readable 3. Categories display in 2-column grid on mobile 4. Product cards display in single column 5. All interactive elements are accessible |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P2 |
| **Severity** | Medium |

---

## MODULE 2: PRODUCT LISTING PAGE

### TC_PL_001: Verify Product Listing Page Loads Successfully
| Field | Value |
|---|---|
| **Test Case ID** | TC_PL_001 |
| **Module** | Product Listing |
| **Test Scenario** | Verify product listing page loads with all products displayed |
| **Preconditions** | 1. User navigates to /products page |
| **Test Steps** | 1. Click on "Products" in main navigation or navigate directly to /products 2. Wait for page to fully load 3. Observe product grid |
| **Test Data** | URL: /products |
| **Expected Result** | 1. Page title "Products" is displayed 2. Product count shows "25+ products found" 3. Products are displayed in 3-column grid 4. No errors in console |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P0 |
| **Severity** | Critical |

### TC_PL_002: Verify Category Filter - Electronics
| Field | Value |
|---|---|
| **Test Case ID** | TC_PL_002 |
| **Module** | Product Listing |
| **Test Scenario** | Verify category filter correctly filters products to show only Electronics |
| **Preconditions** | 1. Product Listing page is displayed 2. Filter sidebar is visible |
| **Test Steps** | 1. In filter sidebar, click on "Electronics" checkbox 2. Wait for filter to apply 3. Count displayed products 4. Verify all displayed products are from Electronics category |
| **Test Data** | Filter: Electronics category |
| **Expected Result** | 1. Only Electronics products are displayed 2. Product count updates to show Electronics items only (approximately 5 products) 3. All other categories are deselected 4. Filter panel shows "Electronics" as selected |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P1 |
| **Severity** | High |

### TC_PL_003: Verify Price Range Filter
| Field | Value |
|---|---|
| **Test Case ID** | TC_PL_003 |
| **Module** | Product Listing |
| **Test Scenario** | Verify price range slider filters products by price |
| **Preconditions** | 1. Product Listing page is displayed 2. Filter sidebar is visible 3. Price range filter sliders are visible |
| **Test Steps** | 1. Adjust Min price slider to $100 2. Adjust Max price slider to $200 3. Wait for filter to apply 4. Verify only products between $100-$200 are displayed |
| **Test Data** | Min: $100, Max: $200 |
| **Expected Result** | 1. Products with final price between $100-$200 are displayed 2. Product count updates accordingly 3. Products outside range are filtered out 4. Price labels update on sliders |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P1 |
| **Severity** | High |

### TC_PL_004: Verify Sort by Price - Low to High
| Field | Value |
|---|---|
| **Test Case ID** | TC_PL_004 |
| **Module** | Product Listing |
| **Test Scenario** | Verify products are sorted by price in ascending order |
| **Preconditions** | 1. Product Listing page is displayed 2. Filter sidebar is visible |
| **Test Steps** | 1. Click on "Sort By" dropdown 2. Select "Price: Low to High" 3. Wait for products to re-sort 4. Verify first product has lowest price 5. Verify last product has highest price |
| **Test Data** | Sort option: "Price: Low to High" |
| **Expected Result** | 1. Products are sorted with cheapest product first 2. Most expensive product is last 3. Prices increase from left to right, top to bottom 4. Sort dropdown shows "Price: Low to High" as selected |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P1 |
| **Severity** | High |

### TC_PL_005: Verify Sort by Price - High to Low
| Field | Value |
|---|---|
| **Test Case ID** | TC_PL_005 |
| **Module** | Product Listing |
| **Test Scenario** | Verify products are sorted by price in descending order |
| **Preconditions** | 1. Product Listing page is displayed 2. Sort dropdown is accessible |
| **Test Steps** | 1. Click on "Sort By" dropdown 2. Select "Price: High to Low" 3. Observe product ordering 4. Verify expensive products appear first |
| **Test Data** | Sort option: "Price: High to Low" |
| **Expected Result** | 1. Most expensive product is displayed first 2. Cheapest product is displayed last 3. Prices decrease from top to bottom 4. Correct sort order is maintained |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P1 |
| **Severity** | High |

### TC_PL_006: Verify Sort by Rating - Highest Rated
| Field | Value |
|---|---|
| **Test Case ID** | TC_PL_006 |
| **Module** | Product Listing |
| **Test Scenario** | Verify products are sorted by rating in descending order |
| **Preconditions** | 1. Product Listing page is displayed 2. Sort dropdown is accessible |
| **Test Steps** | 1. Click on "Sort By" dropdown 2. Select "Highest Rated" 3. Verify product order by rating 4. Highest rated product should be first |
| **Test Data** | Sort option: "Highest Rated" |
| **Expected Result** | 1. Products with highest ratings appear first 2. Products with lower ratings appear last 3. Rating values decrease from top to bottom 4. Correct sort order is maintained |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P1 |
| **Severity** | High |

### TC_PL_007: Verify Search Functionality
| Field | Value |
|---|---|
| **Test Case ID** | TC_PL_007 |
| **Module** | Product Listing |
| **Test Scenario** | Verify search query parameter filters products based on keyword |
| **Preconditions** | 1. Product Listing page is accessed via search with query parameter |
| **Test Steps** | 1. Navigate to /products?search=headphones 2. Wait for page to load 3. Verify "Results for 'headphones'" message is displayed 4. Verify only headphone products are shown |
| **Test Data** | Search query: "headphones" |
| **Expected Result** | 1. Page displays "Results for 'headphones'" in breadcrumb 2. Only products matching search term are displayed 3. "Wireless Noise-Canceling Headphones" product is shown 4. Product count reflects search results |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P1 |
| **Severity** | High |

### TC_PL_008: Verify Mobile Filter Toggle Button
| Field | Value |
|---|---|
| **Test Case ID** | TC_PL_008 |
| **Module** | Product Listing |
| **Test Scenario** | Verify filter panel toggle works on mobile devices |
| **Preconditions** | 1. Product Listing page loaded at 375px mobile viewport |
| **Test Steps** | 1. Set viewport to 375px width 2. Verify "Filters" button is visible 3. Click on "Filters" button 4. Verify filter panel is shown/hidden on toggle |
| **Test Data** | Mobile viewport: 375px |
| **Expected Result** | 1. "Filters" button is visible on mobile 2. Clicking button toggles filter panel visibility 3. Filter panel slides in/out smoothly 4. Products grid remains responsive |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P2 |
| **Severity** | Medium |

### TC_PL_009: Verify No Products Found Message
| Field | Value |
|---|---|
| **Test Case ID** | TC_PL_009 |
| **Module** | Product Listing |
| **Test Scenario** | Verify "No products found" message when filters result in no products |
| **Preconditions** | 1. Product Listing page is displayed 2. Filter sidebar is accessible |
| **Test Steps** | 1. Set price range to $2000-$5000 (above all products) 2. Wait for filter to apply 3. Observe result area 4. Verify no-results message is displayed |
| **Test Data** | Price filter: $2000-$5000 |
| **Expected Result** | 1. Product grid is empty 2. Message "No products found matching your criteria." is displayed 3. Message is centered on page 4. User can modify filters or return to shopping |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P2 |
| **Severity** | Medium |

### TC_PL_010: Verify Combined Filters - Category + Price
| Field | Value |
|---|---|
| **Test Case ID** | TC_PL_010 |
| **Module** | Product Listing |
| **Test Scenario** | Verify multiple filters work together (category AND price range) |
| **Preconditions** | 1. Product Listing page is displayed |
| **Test Steps** | 1. Select "Fashion" category 2. Set price range $30-$100 3. Wait for combined filter to apply 4. Verify only Fashion products within price range shown |
| **Test Data** | Category: Fashion, Price: $30-$100 |
| **Expected Result** | 1. Only Fashion category products are displayed 2. All displayed products are within $30-$100 price range 3. Product count reflects combined filter results 4. Breadcrumb shows both filters applied |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P1 |
| **Severity** | High |

---

## MODULE 3: PRODUCT DETAILS PAGE

### TC_PD_001: Verify Product Details Page Loads Correctly
| Field | Value |
|---|---|
| **Test Case ID** | TC_PD_001 |
| **Module** | Product Details |
| **Test Scenario** | Verify product details page loads with complete product information |
| **Preconditions** | 1. Product ID exists in the system (e.g., productId='1') |
| **Test Steps** | 1. Navigate to /product/1 2. Wait for page to load 3. Observe all product details sections |
| **Test Data** | Product ID: 1 |
| **Expected Result** | 1. Product image is displayed 2. Product title, description, and specifications visible 3. Price and discount information shown 4. "Add to Cart" and "Add to Wishlist" buttons present 5. No console errors |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P0 |
| **Severity** | Critical |

### TC_PD_002: Verify Invalid Product ID Shows Error
| Field | Value |
|---|---|
| **Test Case ID** | TC_PD_002 |
| **Module** | Product Details |
| **Test Scenario** | Verify appropriate error message when product does not exist |
| **Preconditions** | 1. Invalid product ID is used |
| **Test Steps** | 1. Navigate to /product/99999 (non-existent product) 2. Wait for page response 3. Observe error message |
| **Test Data** | Product ID: 99999 (invalid) |
| **Expected Result** | 1. "Product not found" message is displayed 2. "Back to Products" link is visible and clickable 3. Page layout is clean and professional 4. No broken elements |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P2 |
| **Severity** | Medium |

### TC_PD_003: Verify Price Display with Discount
| Field | Value |
|---|---|
| **Test Case ID** | TC_PD_003 |
| **Module** | Product Details |
| **Test Scenario** | Verify discount price calculation and display |
| **Preconditions** | 1. Product Details page loaded for product with discount (Product ID: 1) |
| **Test Steps** | 1. Observe price section 2. Verify final price is lower than original 3. Verify original price is struck through 4. Verify discount percentage is displayed |
| **Test Data** | Product: Headphones - Original: $299, Discount: 15% |
| **Expected Result** | 1. Original price $299 shown with strikethrough 2. Final price $254.15 shown in bold 3. "Save 15%" text in green 4. "Inclusive of all taxes" note displayed |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P1 |
| **Severity** | High |

### TC_PD_004: Verify Quantity Selector Functionality
| Field | Value |
|---|---|
| **Test Case ID** | TC_PD_004 |
| **Module** | Product Details |
| **Test Scenario** | Verify quantity can be changed using increment/decrement buttons and input |
| **Preconditions** | 1. Product Details page is displayed 2. Product has stock available |
| **Test Steps** | 1. Locate quantity selector 2. Click minus button to decrease from 1 to 0 (should stay at 1) 3. Click plus button to increase to 2 4. Verify quantity input shows 2 5. Manually enter 5 in quantity field |
| **Test Data** | Initial quantity: 1 |
| **Expected Result** | 1. Quantity starts at 1 2. Minus button prevents going below 1 3. Plus button increases quantity correctly 4. Quantity input updates with manual entry 5. Quantity cannot exceed available stock |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P1 |
| **Severity** | High |

### TC_PD_005: Verify Stock Availability Display - In Stock
| Field | Value |
|---|---|
| **Test Case ID** | TC_PD_005 |
| **Module** | Product Details |
| **Test Scenario** | Verify stock status displays correctly for products with ample stock |
| **Preconditions** | 1. Product Details page displayed for product with high stock (>10 units) |
| **Test Steps** | 1. Observe stock status section 2. Verify "In Stock" message 3. Verify status is in green color |
| **Test Data** | Product: Wireless Mouse - Stock: 120 units |
| **Expected Result** | 1. Stock status shows "In Stock" in green color 2. Add to Cart button is enabled 3. Quantity selector is enabled |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P1 |
| **Severity** | High |

### TC_PD_006: Verify Stock Availability Display - Low Stock
| Field | Value |
|---|---|
| **Test Case ID** | TC_PD_006 |
| **Module** | Product Details |
| **Test Scenario** | Verify stock status displays warning for low stock products |
| **Preconditions** | 1. Product Details page displayed for product with low stock (1-10 units) |
| **Test Steps** | 1. Navigate to product with low stock 2. Observe stock status section 3. Verify "Only X left" message appears |
| **Test Data** | Product: Mechanical Keyboard - Stock: 5 units |
| **Expected Result** | 1. Stock status shows "Only 5 left" in orange/warning color 2. Message indicates scarcity 3. Add to Cart button remains enabled |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P2 |
| **Severity** | Medium |

### TC_PD_007: Verify Stock Availability Display - Out of Stock
| Field | Value |
|---|---|
| **Test Case ID** | TC_PD_007 |
| **Module** | Product Details |
| **Test Scenario** | Verify stock status and disabled buttons for out-of-stock products |
| **Preconditions** | 1. Product Details page displayed for out-of-stock product (stock = 0) |
| **Test Steps** | 1. Observe stock status 2. Verify "Out of Stock" message 3. Verify status is in red color 4. Verify Add to Cart button is disabled 5. Verify quantity selector is disabled |
| **Test Data** | Product with stock: 0 |
| **Expected Result** | 1. Stock status shows "Out of Stock" in red 2. Add to Cart button is grayed out/disabled 3. Quantity selector is not displayed or disabled 4. Wishlist button may still be active |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P1 |
| **Severity** | High |

### TC_PD_008: Verify Add to Cart Success
| Field | Value |
|---|---|
| **Test Case ID** | TC_PD_008 |
| **Module** | Product Details |
| **Test Scenario** | Verify product is successfully added to cart with success message |
| **Preconditions** | 1. Product Details page displayed 2. Cart is empty 3. Product has available stock |
| **Test Steps** | 1. Set quantity to 2 2. Click "Add to Cart" button 3. Observe success message 4. Verify message displays correct quantity 5. Wait for message to dismiss |
| **Test Data** | Quantity: 2 |
| **Expected Result** | 1. Success message appears: "Added 2 item(s) to cart" 2. Message is displayed for 3 seconds 3. Cart icon in header updates with item count 4. Product not removed from page |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P1 |
| **Severity** | High |

### TC_PD_009: Verify Add to Cart Exceeds Stock
| Field | Value |
|---|---|
| **Test Case ID** | TC_PD_009 |
| **Module** | Product Details |
| **Test Scenario** | Verify error message when attempting to add more items than available stock |
| **Preconditions** | 1. Product Details page displayed 2. Product has limited stock (e.g., 5 units) |
| **Test Steps** | 1. Set quantity to 10 (exceeds available stock of 5) 2. Click "Add to Cart" button 3. Observe error message |
| **Test Data** | Product stock: 5, Quantity attempted: 10 |
| **Expected Result** | 1. Error message displays: "Only 5 items available" 2. Message is shown in red/error styling 3. Product is NOT added to cart 4. Cart remains unchanged |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P2 |
| **Severity** | Medium |

### TC_PD_010: Verify Add to Wishlist Functionality
| Field | Value |
|---|---|
| **Test Case ID** | TC_PD_010 |
| **Module** | Product Details |
| **Test Scenario** | Verify product is added to wishlist and heart icon changes state |
| **Preconditions** | 1. Product Details page displayed 2. Product not in wishlist 3. Wishlist is empty |
| **Test Steps** | 1. Click "Add to Wishlist" heart icon 2. Observe icon state change 3. Verify product is marked as favorited 4. Navigate to Wishlist page 5. Verify product appears in wishlist |
| **Test Data** | Product ID: 1 |
| **Expected Result** | 1. Heart icon becomes filled/solid 2. Heart color changes to red/pink 3. Product is added to localStorage wishlist 4. Product appears in Wishlist page 5. Heart icon shows favorited state on revisit |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P1 |
| **Severity** | High |

### TC_PD_011: Verify Remove from Wishlist Functionality
| Field | Value |
|---|---|
| **Test Case ID** | TC_PD_011 |
| **Module** | Product Details |
| **Test Scenario** | Verify product is removed from wishlist when unfavorited |
| **Preconditions** | 1. Product is in wishlist (heart icon is filled) |
| **Test Steps** | 1. Click heart icon to remove from wishlist 2. Observe icon state change 3. Verify icon becomes unfilled/outline 4. Navigate to Wishlist page 5. Verify product is removed from wishlist |
| **Test Data** | Product ID: 1 (already in wishlist) |
| **Expected Result** | 1. Heart icon becomes unfilled/outline 2. Heart color reverts to gray/default 3. Product is removed from localStorage 4. Product no longer appears in Wishlist page 5. Icon shows unfavorited state on revisit |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P1 |
| **Severity** | High |

### TC_PD_012: Verify Product Specifications Display
| Field | Value |
|---|---|
| **Test Case ID** | TC_PD_012 |
| **Module** | Product Details |
| **Test Scenario** | Verify product specifications section displays all key specifications |
| **Preconditions** | 1. Product Details page displayed for product with specifications |
| **Test Steps** | 1. Observe Specifications section 2. Verify each spec key-value pair is displayed 3. Verify formatting and alignment |
| **Test Data** | Product: Headphones - Specs: Connectivity, Battery Life, Noise Cancellation, Weight |
| **Expected Result** | 1. "Specifications" heading is displayed 2. All 4 specifications are shown in 2-column format 3. Specification keys and values are properly aligned 4. Text is readable and well-formatted |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P2 |
| **Severity** | Medium |

### TC_PD_013: Verify Product Rating and Reviews Count
| Field | Value |
|---|---|
| **Test Case ID** | TC_PD_013 |
| **Module** | Product Details |
| **Test Scenario** | Verify rating stars and review count are displayed correctly |
| **Preconditions** | 1. Product Details page displayed |
| **Test Steps** | 1. Locate rating section 2. Count displayed stars 3. Verify review count is shown 4. Verify star count matches rating value |
| **Test Data** | Product: Headphones - Rating: 4.5, Reviews: 328 |
| **Expected Result** | 1. 4 filled stars and 1 half star displayed 2. Rating value 4.5 can be inferred from stars 3. "(328 reviews)" text is displayed 4. Star display is consistent |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P2 |
| **Severity** | Medium |

### TC_PD_014: Verify Back Button Navigation
| Field | Value |
|---|---|
| **Test Case ID** | TC_PD_014 |
| **Module** | Product Details |
| **Test Scenario** | Verify back button navigates to previous page |
| **Preconditions** | 1. Product Details page displayed 2. User came from Product Listing page |
| **Test Steps** | 1. Click "Back" button (chevron left) 2. Wait for navigation 3. Verify previous page is displayed |
| **Test Data** | Previous page: /products |
| **Expected Result** | 1. User is navigated back to previous page 2. Product Listing page is displayed 3. URL changes back to /products 4. Filters/search parameters are preserved if applicable |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P2 |
| **Severity** | Medium |

---

## MODULE 4: SHOPPING CART

### TC_SC_001: Verify Cart Page Empty State
| Field | Value |
|---|---|
| **Test Case ID** | TC_SC_001 |
| **Module** | Shopping Cart |
| **Test Scenario** | Verify empty cart message is displayed when cart contains no items |
| **Preconditions** | 1. Cart is empty (localStorage cleared) 2. User navigates to /cart page |
| **Test Steps** | 1. Clear cart via developer tools or by navigating to cart when empty 2. Navigate to /cart 3. Observe page content |
| **Test Data** | Cart items: 0 |
| **Expected Result** | 1. Shopping cart icon is displayed 2. "Your Cart is Empty" heading is shown 3. Message "Looks like you haven't added any products yet." is displayed 4. "Continue Shopping" button is visible and navigates to /products |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P1 |
| **Severity** | High |

### TC_SC_002: Verify Cart Items Display
| Field | Value |
|---|---|
| **Test Case ID** | TC_SC_002 |
| **Module** | Shopping Cart |
| **Test Scenario** | Verify cart items are displayed with product details and quantity |
| **Preconditions** | 1. Products added to cart (2-3 items with different quantities) 2. User navigates to /cart page |
| **Test Steps** | 1. Add multiple products to cart from Product Details page 2. Navigate to /cart 3. Observe cart items list 4. Verify each item shows product name, image, price, and quantity |
| **Test Data** | Cart contains: 2x Headphones, 1x Webcam |
| **Expected Result** | 1. Each cart item displays product image, name, and price 2. Quantity is shown for each item 3. Total price per item is calculated (price × quantity) 4. All items in cart are listed correctly |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P1 |
| **Severity** | High |

### TC_SC_003: Verify Update Quantity in Cart
| Field | Value |
|---|---|
| **Test Case ID** | TC_SC_003 |
| **Module** | Shopping Cart |
| **Test Scenario** | Verify quantity can be updated for cart items |
| **Preconditions** | 1. At least one product in cart 2. Cart page is displayed |
| **Test Steps** | 1. Locate quantity input field for a product 2. Change quantity from 1 to 3 3. Verify cart updates (wait for update) 4. Verify total price updates accordingly 5. Verify localStorage is updated |
| **Test Data** | Product price: $299, Original quantity: 1, New quantity: 3 |
| **Expected Result** | 1. Quantity input field is editable 2. Item total updates from $254.15 to $762.45 (assuming discount) 3. Order Summary total updates 4. localStorage cart is updated with new quantity |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P1 |
| **Severity** | High |

### TC_SC_004: Verify Remove Item from Cart
| Field | Value |
|---|---|
| **Test Case ID** | TC_SC_004 |
| **Module** | Shopping Cart |
| **Test Scenario** | Verify product can be removed from cart |
| **Preconditions** | 1. Cart contains 2+ items 2. Cart page is displayed |
| **Test Steps** | 1. Locate remove button for one product 2. Click remove button 3. Verify item is removed from cart list 4. Verify item count decreases 5. Verify totals are recalculated |
| **Test Data** | Removing: 1 product from 2-item cart |
| **Expected Result** | 1. Item is immediately removed from cart 2. Cart shows remaining items 3. Item count updates in header 4. Order summary totals recalculate 5. localStorage is updated |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P1 |
| **Severity** | High |

### TC_SC_005: Verify Clear Cart Button
| Field | Value |
|---|---|
| **Test Case ID** | TC_SC_005 |
| **Module** | Shopping Cart |
| **Test Scenario** | Verify Clear Cart button removes all items at once |
| **Preconditions** | 1. Cart contains 3+ items 2. Cart page is displayed |
| **Test Steps** | 1. Click "Clear Cart" button below item list 2. Verify all items are removed 3. Verify page shows empty cart state 4. Verify cart is empty in header |
| **Test Data** | Cart items: 3 |
| **Expected Result** | 1. All items are removed from cart 2. Empty cart message is displayed 3. "Continue Shopping" button is shown 4. localStorage is cleared |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P2 |
| **Severity** | Medium |

### TC_SC_006: Verify Order Summary - Subtotal Calculation
| Field | Value |
|---|---|
| **Test Case ID** | TC_SC_006 |
| **Module** | Shopping Cart |
| **Test Scenario** | Verify subtotal is calculated correctly as sum of all items |
| **Preconditions** | 1. Cart contains multiple items with prices and quantities |
| **Test Steps** | 1. Observe Order Summary section 2. Verify subtotal shows sum of all items 3. Manually verify calculation |
| **Test Data** | Item 1: $254 × 1 = $254, Item 2: $124 × 2 = $248, Expected Subtotal: $502 |
| **Expected Result** | 1. Subtotal field shows $502 2. Subtotal = sum of (price × quantity) for all items 3. Calculation is accurate 4. Currency formatting is correct |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P1 |
| **Severity** | High |

### TC_SC_007: Verify Proceed to Checkout Button
| Field | Value |
|---|---|
| **Test Case ID** | TC_SC_007 |
| **Module** | Shopping Cart |
| **Test Scenario** | Verify Proceed to Checkout button navigates to checkout page |
| **Preconditions** | 1. Cart contains 1+ items 2. Cart page is displayed |
| **Test Steps** | 1. Click "Proceed to Checkout" button 2. Wait for page navigation 3. Verify checkout page is displayed |
| **Test Data** | Cart items: 1+ |
| **Expected Result** | 1. User is navigated to /checkout page 2. Checkout page header is displayed 3. Cart items are available for checkout 4. URL changes to http://localhost:5173/checkout |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P1 |
| **Severity** | High |

### TC_SC_008: Verify Cart Persistence After Page Refresh
| Field | Value |
|---|---|
| **Test Case ID** | TC_SC_008 |
| **Module** | Shopping Cart |
| **Test Scenario** | Verify cart items persist in localStorage after page refresh |
| **Preconditions** | 1. Products added to cart (2 items) 2. User is on cart page |
| **Test Steps** | 1. Add products to cart 2. Note cart contents 3. Refresh the page (F5) 4. Verify cart items are still present 5. Verify quantities are unchanged |
| **Test Data** | Cart: 2 items added |
| **Expected Result** | 1. Cart items remain after refresh 2. Quantities are preserved 3. Order summary totals are recalculated correctly 4. Cart functionality is intact |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P1 |
| **Severity** | High |

### TC_SC_009: Verify Continue Shopping Navigation
| Field | Value |
|---|---|
| **Test Case ID** | TC_SC_009 |
| **Module** | Shopping Cart |
| **Test Scenario** | Verify "Continue Shopping" button navigates to product listing |
| **Preconditions** | 1. Cart page is displayed |
| **Test Steps** | 1. Click "Continue Shopping" button 2. Wait for page navigation 3. Verify product listing page is displayed |
| **Test Data** | Button text: "Continue Shopping" |
| **Expected Result** | 1. User is navigated to /products page 2. Product Listing page is displayed 3. Cart remains in background 4. User can add more products |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P2 |
| **Severity** | Medium |

---

## MODULE 5: CHECKOUT

### TC_CO_001: Verify Checkout Page Loads Successfully
| Field | Value |
|---|---|
| **Test Case ID** | TC_CO_001 |
| **Module** | Checkout |
| **Test Scenario** | Verify checkout page loads with shipping form displayed |
| **Preconditions** | 1. At least one product in cart 2. User navigates to /checkout |
| **Test Steps** | 1. Click "Proceed to Checkout" from cart 2. Wait for checkout page to load 3. Observe form sections |
| **Test Data** | Cart items: 1+ |
| **Expected Result** | 1. Checkout page header is displayed 2. Step indicator shows "1. Shipping" and "2. Payment" 3. Shipping form is displayed 4. All input fields are visible and editable |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P0 |
| **Severity** | Critical |

### TC_CO_002: Verify Empty Cart Checkout Prevention
| Field | Value |
|---|---|
| **Test Case ID** | TC_CO_002 |
| **Module** | Checkout |
| **Test Scenario** | Verify checkout page shows error when cart is empty |
| **Preconditions** | 1. Cart is empty 2. User navigates to /checkout |
| **Test Steps** | 1. Clear cart or navigate to /checkout with empty cart 2. Observe page content 3. Verify error message is displayed |
| **Test Data** | Cart items: 0 |
| **Expected Result** | 1. Message "Your cart is empty" is displayed 2. "Back to Cart" link is visible 3. User cannot proceed with checkout 4. Checkout page does not process |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P1 |
| **Severity** | High |

### TC_CO_003: Verify Shipping Form - Valid Input
| Field | Value |
|---|---|
| **Test Case ID** | TC_CO_003 |
| **Module** | Checkout |
| **Test Scenario** | Verify shipping form accepts valid input and proceeds to payment |
| **Preconditions** | 1. Checkout page is displayed 2. Shipping form is on screen |
| **Test Steps** | 1. Fill in all required shipping fields with valid data 2. Click "Continue to Payment" button 3. Verify form is validated and accepted |
| **Test Data** | Full Name: John Smith, Email: john@example.com, Phone: 1234567890, Address: 123 Main St, City: New York, State: NY, Postal Code: 10001 |
| **Expected Result** | 1. All fields accept input without errors 2. No validation errors appear 3. Page progresses to payment step 4. Shipping info is retained |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P1 |
| **Severity** | High |

### TC_CO_004: Verify Shipping Form Validation - Missing Full Name
| Field | Value |
|---|---|
| **Test Case ID** | TC_CO_004 |
| **Module** | Checkout |
| **Test Scenario** | Verify error when Full Name field is empty |
| **Preconditions** | 1. Checkout page shipping form is displayed |
| **Test Steps** | 1. Leave Full Name field empty 2. Fill other required fields correctly 3. Click "Continue to Payment" 4. Observe validation error |
| **Test Data** | Full Name: (empty) |
| **Expected Result** | 1. Error message "Full name is required" appears below field 2. Field is highlighted with red border 3. Form does not proceed to payment 4. Other filled data is preserved |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P1 |
| **Severity** | High |

### TC_CO_005: Verify Shipping Form Validation - Invalid Email
| Field | Value |
|---|---|
| **Test Case ID** | TC_CO_005 |
| **Module** | Checkout |
| **Test Scenario** | Verify error when email format is invalid |
| **Preconditions** | 1. Checkout page shipping form is displayed |
| **Test Steps** | 1. Enter invalid email "johnexample.com" (missing @) 2. Fill other fields correctly 3. Click "Continue to Payment" 4. Observe validation error |
| **Test Data** | Email: johnexample.com |
| **Expected Result** | 1. Error message "Valid email is required" appears 2. Email field is highlighted with red border 3. Form does not proceed 4. Other data is preserved |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P1 |
| **Severity** | High |

### TC_CO_006: Verify Shipping Form Validation - Invalid Phone Number
| Field | Value |
|---|---|
| **Test Case ID** | TC_CO_006 |
| **Module** | Checkout |
| **Test Scenario** | Verify error when phone number is invalid format |
| **Preconditions** | 1. Checkout page shipping form is displayed |
| **Test Steps** | 1. Enter phone number "123" (too short, only 3 digits) 2. Fill other fields correctly 3. Click "Continue to Payment" 4. Observe validation error |
| **Test Data** | Phone: 123 |
| **Expected Result** | 1. Error message "Valid phone number is required" appears 2. Phone field is highlighted 3. Form does not proceed 4. Message indicates requirement (10-15 digits) |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P1 |
| **Severity** | High |

### TC_CO_007: Verify Shipping Form Validation - Invalid Postal Code
| Field | Value |
|---|---|
| **Test Case ID** | TC_CO_007 |
| **Module** | Checkout |
| **Test Scenario** | Verify error when postal code format is invalid |
| **Preconditions** | 1. Checkout page shipping form is displayed |
| **Test Steps** | 1. Enter postal code "123" (too short, only 3 characters) 2. Fill other fields correctly 3. Click "Continue to Payment" 4. Observe validation error |
| **Test Data** | Postal Code: 123 |
| **Expected Result** | 1. Error message "Valid postal code is required (5-10 characters)" appears 2. Postal code field is highlighted 3. Form does not proceed 4. User knows requirement (5-10 alphanumeric) |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P1 |
| **Severity** | High |

### TC_CO_008: Verify Payment Form - Valid Card Information
| Field | Value |
|---|---|
| **Test Case ID** | TC_CO_008 |
| **Module** | Checkout |
| **Test Scenario** | Verify payment form accepts valid credit card information |
| **Preconditions** | 1. Checkout at payment step 2. Payment form is displayed |
| **Test Steps** | 1. Enter cardholder name "John Smith" 2. Enter valid test card "4532015112830366" 3. Enter expiry date "12/25" 4. Enter CVV "123" 5. Click "Place Order" button |
| **Test Data** | Card: 4532015112830366, Expiry: 12/25, CVV: 123 |
| **Expected Result** | 1. All fields accept input 2. No validation errors appear 3. "Place Order" button is clickable 4. Form can be submitted |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P1 |
| **Severity** | High |

### TC_CO_009: Verify Payment Form Validation - Invalid Card Number
| Field | Value |
|---|---|
| **Test Case ID** | TC_CO_009 |
| **Module** | Checkout |
| **Test Scenario** | Verify error when card number fails Luhn validation |
| **Preconditions** | 1. Checkout at payment step |
| **Test Steps** | 1. Enter invalid card "1234567890123456" (fails Luhn check) 2. Fill other payment fields correctly 3. Click "Place Order" 4. Observe validation error |
| **Test Data** | Card: 1234567890123456 |
| **Expected Result** | 1. Error message "Valid card number is required" appears 2. Card number field is highlighted 3. Form does not submit 4. Form remains on payment step |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P1 |
| **Severity** | High |

### TC_CO_010: Verify Payment Form Validation - Invalid Expiry Date
| Field | Value |
|---|---|
| **Test Case ID** | TC_CO_010 |
| **Module** | Checkout |
| **Test Scenario** | Verify error when expiry date format is invalid |
| **Preconditions** | 1. Checkout at payment step |
| **Test Steps** | 1. Enter expiry date "13/25" (invalid month 13) 2. Fill other payment fields correctly 3. Click "Place Order" 4. Observe validation error |
| **Test Data** | Expiry: 13/25 |
| **Expected Result** | 1. Error message "Valid expiry date (MM/YY) is required" appears 2. Expiry field is highlighted 3. Form does not submit 4. Correct format indication provided |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P1 |
| **Severity** | High |

### TC_CO_011: Verify Payment Form Validation - Invalid CVV
| Field | Value |
|---|---|
| **Test Case ID** | TC_CO_011 |
| **Module** | Checkout |
| **Test Scenario** | Verify error when CVV format is invalid |
| **Preconditions** | 1. Checkout at payment step |
| **Test Steps** | 1. Enter CVV "12" (only 2 digits, requires 3-4) 2. Fill other payment fields correctly 3. Click "Place Order" 4. Observe validation error |
| **Test Data** | CVV: 12 |
| **Expected Result** | 1. Error message "Valid CVV (3-4 digits) is required" appears 2. CVV field is highlighted 3. Form does not submit 4. Requirement (3-4 digits) is clear |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P1 |
| **Severity** | High |

### TC_CO_012: Verify Order Creation and Confirmation Redirect
| Field | Value |
|---|---|
| **Test Case ID** | TC_CO_012 |
| **Module** | Checkout |
| **Test Scenario** | Verify order is created and user is redirected to confirmation page |
| **Preconditions** | 1. All shipping and payment info filled correctly 2. User ready to place order |
| **Test Steps** | 1. Fill shipping form with valid data 2. Proceed to payment 3. Fill payment form with valid test card 4. Click "Place Order" 5. Wait 2-3 seconds for processing 6. Observe page navigation |
| **Test Data** | Valid shipping and payment data |
| **Expected Result** | 1. "Processing..." indication is shown 2. After 2-3 seconds, redirected to order confirmation page 3. Order ID is displayed (format: ORD + 10 characters) 4. Order details are shown 5. URL changes to /order-confirmation/{orderId} |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P1 |
| **Severity** | High |

---

## MODULE 6: ORDER CONFIRMATION

### TC_OC_001: Verify Order Confirmation Page Displays
| Field | Value |
|---|---|
| **Test Case ID** | TC_OC_001 |
| **Module** | Order Confirmation |
| **Test Scenario** | Verify order confirmation page displays successfully after order placement |
| **Preconditions** | 1. Order has been successfully placed 2. User is redirected to confirmation page |
| **Test Steps** | 1. Wait for page to load 2. Observe confirmation message 3. Verify order ID is displayed 4. Verify order details section |
| **Test Data** | Order ID: ORD followed by 10 alphanumeric characters |
| **Expected Result** | 1. Green checkmark icon is displayed 2. "Order Confirmed!" heading shown 3. "Thank you for your purchase" message displayed 4. Order details card is visible 5. All order information is accessible |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P0 |
| **Severity** | Critical |

### TC_OC_002: Verify Order ID Format and Generation
| Field | Value |
|---|---|
| **Test Case ID** | TC_OC_002 |
| **Module** | Order Confirmation |
| **Test Scenario** | Verify order ID follows correct format and is unique |
| **Preconditions** | 1. Multiple orders have been placed |
| **Test Steps** | 1. Place order and note order ID 2. Place another order 3. Note second order ID 4. Verify format and uniqueness |
| **Test Data** | Expected format: ORD + 10 random alphanumeric characters |
| **Expected Result** | 1. Order ID starts with "ORD" 2. Followed by exactly 10 alphanumeric characters 3. Each order has unique ID 4. IDs are easily readable and copy-able |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P1 |
| **Severity** | High |

### TC_OC_003: Verify Order Items Display
| Field | Value |
|---|---|
| **Test Case ID** | TC_OC_003 |
| **Module** | Order Confirmation |
| **Test Scenario** | Verify all order items are displayed with correct details |
| **Preconditions** | 1. Order confirmation page displayed 2. Order contains 2+ items |
| **Test Steps** | 1. Scroll to Order Items section 2. Verify each item shows product name 3. Verify quantity is displayed 4. Verify price for each item 5. Verify total per item = price × quantity |
| **Test Data** | 2x Headphones ($254.15 each), 1x Webcam ($134.10) |
| **Expected Result** | 1. All 3 items listed in "Order Items" section 2. Each item shows product name, quantity, and line total 3. Line totals are correct (qty × price) 4. All items match what was in cart |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P1 |
| **Severity** | High |

### TC_OC_004: Verify Order Summary - Total Calculation
| Field | Value |
|---|---|
| **Test Case ID** | TC_OC_004 |
| **Module** | Order Confirmation |
| **Test Scenario** | Verify order totals are calculated correctly including tax and shipping |
| **Preconditions** | 1. Order confirmation page displayed |
| **Test Steps** | 1. Observe order summary section 2. Verify subtotal is displayed 3. Verify tax (10%) is calculated 4. Verify shipping cost or "Free" status 5. Verify final total |
| **Test Data** | Subtotal: $642.40, Tax (10%): $64.24, Shipping: Free (over $200), Total: $706.64 |
| **Expected Result** | 1. Subtotal: $642.40 2. Tax (10%): $64.24 3. Shipping: Free (because > $200) 4. Total: $706.64 5. All calculations correct |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P1 |
| **Severity** | High |

### TC_OC_005: Verify Shipping Address Display
| Field | Value |
|---|---|
| **Test Case ID** | TC_OC_005 |
| **Module** | Order Confirmation |
| **Test Scenario** | Verify shipping address is displayed in confirmation |
| **Preconditions** | 1. Order confirmation page displayed |
| **Test Steps** | 1. Locate Shipping Address section 2. Verify all address details are shown 3. Verify formatting and readability |
| **Test Data** | Address: 123 Main St, New York, NY 10001 |
| **Expected Result** | 1. "Shipping Address" section is displayed 2. Full name is shown 3. Street address, city, state, postal code displayed 4. Country is shown 5. Phone and email are visible below |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P1 |
| **Severity** | High |

### TC_OC_006: Verify What's Next Timeline Display
| Field | Value |
|---|---|
| **Test Case ID** | TC_OC_006 |
| **Module** | Order Confirmation |
| **Test Scenario** | Verify "What's Next" section with order processing timeline |
| **Preconditions** | 1. Order confirmation page displayed |
| **Test Steps** | 1. Scroll to "What's Next?" section 2. Verify 3 timeline steps are displayed 3. Verify step titles and descriptions |
| **Test Data** | Steps: Order Processing, Shipment, Delivery |
| **Expected Result** | 1. "What's Next?" section with green background 2. 3 items with icons: Order Processing, Shipment, Delivery 3. Each has descriptive text 4. Timeline is clear and professional |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P2 |
| **Severity** | Medium |

### TC_OC_007: Verify Order Status Display
| Field | Value |
|---|---|
| **Test Case ID** | TC_OC_007 |
| **Module** | Order Confirmation |
| **Test Scenario** | Verify order status is displayed as "processing" |
| **Preconditions** | 1. Order confirmation page displayed |
| **Test Steps** | 1. Locate order status field 2. Verify status is shown as "processing" 3. Verify status color/styling (orange) |
| **Test Data** | Expected status: "processing" |
| **Expected Result** | 1. Status field shows "processing" 2. Status is displayed in orange/warning color 3. Status matches order state in backend 4. Capitalization is consistent |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P2 |
| **Severity** | Medium |

### TC_OC_008: Verify Cart is Cleared After Order
| Field | Value |
|---|---|
| **Test Case ID** | TC_OC_008 |
| **Module** | Order Confirmation |
| **Test Scenario** | Verify cart is empty after successful order placement |
| **Preconditions** | 1. Order just placed 2. User on confirmation page |
| **Test Steps** | 1. Click on Cart in header navigation 2. Verify cart page shows empty state 3. Check localStorage to confirm empty |
| **Test Data** | Order just placed |
| **Expected Result** | 1. Cart icon shows 0 items 2. Cart page displays empty cart message 3. Cart is cleared from localStorage 4. User can add new products |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P1 |
| **Severity** | High |

---

## MODULE 7: WISHLIST

### TC_WL_001: Verify Empty Wishlist Display
| Field | Value |
|---|---|
| **Test Case ID** | TC_WL_001 |
| **Module** | Wishlist |
| **Test Scenario** | Verify empty wishlist page displays properly |
| **Preconditions** | 1. Wishlist is empty (localStorage cleared) |
| **Test Steps** | 1. Navigate to /wishlist 2. Observe page content |
| **Test Data** | Wishlist items: 0 |
| **Expected Result** | 1. Heart icon is displayed 2. "Your Wishlist is Empty" heading shown 3. Message "Add products to your wishlist to save them for later." displayed 4. "Continue Shopping" button visible and functional |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P2 |
| **Severity** | Medium |

### TC_WL_002: Verify Wishlist Products Display
| Field | Value |
|---|---|
| **Test Case ID** | TC_WL_002 |
| **Module** | Wishlist |
| **Test Scenario** | Verify products in wishlist are displayed correctly |
| **Preconditions** | 1. 3 products added to wishlist 2. User navigates to /wishlist |
| **Test Steps** | 1. Add products to wishlist from product details pages 2. Navigate to /wishlist 3. Observe product grid 4. Verify all 3 products are displayed |
| **Test Data** | 3 products: Headphones, T-Shirt, Webcam |
| **Expected Result** | 1. Wishlist page header "My Wishlist" shown 2. "3 items saved" count displayed 3. All 3 products displayed in grid 4. Product cards show image, name, price, rating |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P1 |
| **Severity** | High |

### TC_WL_003: Verify Remove from Wishlist on Wishlist Page
| Field | Value |
|---|---|
| **Test Case ID** | TC_WL_003 |
| **Module** | Wishlist |
| **Test Scenario** | Verify products can be removed from wishlist via heart icon |
| **Preconditions** | 1. Wishlist contains 3 products 2. User on /wishlist page |
| **Test Steps** | 1. Click heart icon on one product card 2. Verify product is removed from wishlist 3. Verify count updates to 2 items 4. Verify page refreshes product grid |
| **Test Data** | Wishlist: 3 items, Removing: 1 item |
| **Expected Result** | 1. Heart icon on removed product changes to unfilled 2. Product is removed from wishlist grid 3. Item count updates from "3 items saved" to "2 items saved" 4. Remaining 2 products still displayed |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P1 |
| **Severity** | High |

### TC_WL_004: Verify Move to Cart from Wishlist
| Field | Value |
|---|---|
| **Test Case ID** | TC_WL_004 |
| **Module** | Wishlist |
| **Test Scenario** | Verify products can be added to cart from wishlist page |
| **Preconditions** | 1. Wishlist contains products 2. User on /wishlist page |
| **Test Steps** | 1. Click "Add to Cart" button on product card 2. Verify success message 3. Verify cart count in header increases 4. Verify product stays in wishlist |
| **Test Data** | Product: Headphones, Wishlist items: 2, Cart items: 0 |
| **Expected Result** | 1. "Add to Cart" button is clickable on wishlist 2. Success message displayed 3. Cart icon shows 1 item 4. Product remains in wishlist 5. User can remove from wishlist separately |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P2 |
| **Severity** | Medium |

### TC_WL_005: Verify Wishlist Persistence After Page Refresh
| Field | Value |
|---|---|
| **Test Case ID** | TC_WL_005 |
| **Module** | Wishlist |
| **Test Scenario** | Verify wishlist items persist after page refresh |
| **Preconditions** | 1. Wishlist contains 2 products |
| **Test Steps** | 1. Add products to wishlist 2. Note wishlist contents 3. Refresh page (F5) 4. Verify wishlist items are still present |
| **Test Data** | Wishlist items: 2 (Headphones, T-Shirt) |
| **Expected Result** | 1. After refresh, wishlist still shows 2 items 2. Same products are displayed 3. Item count is correct 4. Wishlist functionality remains intact |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P1 |
| **Severity** | High |

---

## MODULE 8: USER PROFILE

### TC_UP_001: Verify Profile Page Loads Successfully
| Field | Value |
|---|---|
| **Test Case ID** | TC_UP_001 |
| **Module** | User Profile |
| **Test Scenario** | Verify profile page displays user information |
| **Preconditions** | 1. User navigates to /profile |
| **Test Steps** | 1. Navigate to /profile page 2. Wait for page to load 3. Observe profile information |
| **Test Data** | Profile page: /profile |
| **Expected Result** | 1. Profile header with user avatar icon displayed 2. "Customer" or user name shown 3. "Member since" date displayed 4. Email, phone, and order count shown 5. "Edit Profile" button visible |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P1 |
| **Severity** | High |

### TC_UP_002: Verify Profile Information Display
| Field | Value |
|---|---|
| **Test Case ID** | TC_UP_002 |
| **Module** | User Profile |
| **Test Scenario** | Verify default profile information is displayed correctly |
| **Preconditions** | 1. Profile page loaded 2. User has default profile data |
| **Test Steps** | 1. Observe profile information section 2. Verify email is displayed 3. Verify phone field shows "Not added" if empty 4. Verify order count |
| **Test Data** | Email: user@example.com, Phone: (empty), Orders: 0 |
| **Expected Result** | 1. Email shows "user@example.com" 2. Phone shows "Not added" 3. Order count shows "0" 4. All information is formatted clearly |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P2 |
| **Severity** | Medium |

### TC_UP_003: Verify Edit Profile Button
| Field | Value |
|---|---|
| **Test Case ID** | TC_UP_003 |
| **Module** | User Profile |
| **Test Scenario** | Verify Edit Profile button switches to edit mode |
| **Preconditions** | 1. Profile page displayed |
| **Test Steps** | 1. Click "Edit Profile" button 2. Observe form change 3. Verify input fields become editable |
| **Test Data** | Button text: "Edit Profile" |
| **Expected Result** | 1. "Edit Profile" button is replaced with form 2. Input fields appear for Full Name, Email, Phone 3. "Save Changes" and "Cancel" buttons appear 4. Form is editable |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P1 |
| **Severity** | High |

### TC_UP_004: Verify Update Profile - Valid Data
| Field | Value |
|---|---|
| **Test Case ID** | TC_UP_004 |
| **Module** | User Profile |
| **Test Scenario** | Verify profile can be updated with new valid information |
| **Preconditions** | 1. Profile page in edit mode |
| **Test Steps** | 1. Update Full Name to "Jane Doe" 2. Update Email to "jane@example.com" 3. Update Phone to "9876543210" 4. Click "Save Changes" 5. Observe confirmation |
| **Test Data** | Full Name: Jane Doe, Email: jane@example.com, Phone: 9876543210 |
| **Expected Result** | 1. Success message "Profile updated successfully!" displayed 2. Changes are saved to localStorage 3. Profile page shows updated information 4. Can verify changes persist after refresh |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P1 |
| **Severity** | High |

### TC_UP_005: Verify Cancel Edit Profile
| Field | Value |
|---|---|
| **Test Case ID** | TC_UP_005 |
| **Module** | User Profile |
| **Test Scenario** | Verify Cancel button discards changes and returns to view mode |
| **Preconditions** | 1. Profile page in edit mode 2. Form fields have been modified |
| **Test Steps** | 1. Modify profile fields 2. Click "Cancel" button 3. Observe form change 4. Verify original data is unchanged |
| **Test Data** | Modifications not saved |
| **Expected Result** | 1. Form exits edit mode 2. Changes are discarded 3. Original profile information is displayed 4. "Edit Profile" button reappears |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P2 |
| **Severity** | Medium |

### TC_UP_006: Verify Order History Display
| Field | Value |
|---|---|
| **Test Case ID** | TC_UP_006 |
| **Module** | User Profile |
| **Test Scenario** | Verify previous orders are displayed in profile |
| **Preconditions** | 1. User has placed 2+ orders 2. Profile page displayed |
| **Test Steps** | 1. Scroll to Order History section 2. Count displayed orders 3. Verify order ID, date, and total are shown 4. Verify order status is displayed |
| **Test Data** | 2 orders placed |
| **Expected Result** | 1. Order History section titled "Your Orders" 2. Both orders listed in reverse chronological order 3. Each order shows ID, date, total, status 4. Orders are clickable/expandable |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P2 |
| **Severity** | Medium |

### TC_UP_007: Verify Profile Persistence
| Field | Value |
|---|---|
| **Test Case ID** | TC_UP_007 |
| **Module** | User Profile |
| **Test Scenario** | Verify profile changes persist after page refresh |
| **Preconditions** | 1. Profile has been updated with new information |
| **Test Steps** | 1. Update profile with new data 2. Refresh page (F5) 3. Verify updated information is still present |
| **Test Data** | Profile updates: Name, Email, Phone |
| **Expected Result** | 1. After refresh, all changes are preserved 2. localStorage profile data is maintained 3. Profile page loads with updated data |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P1 |
| **Severity** | High |

---

## MODULE 9: NAVIGATION & HEADER

### TC_NAV_001: Verify Header Navigation Links
| Field | Value |
|---|---|
| **Test Case ID** | TC_NAV_001 |
| **Module** | Navigation |
| **Test Scenario** | Verify all header navigation links are functional |
| **Preconditions** | 1. Application is running 2. Header is visible on all pages |
| **Test Steps** | 1. Click "Home" logo/link 2. Verify navigation to home page 3. Click "Products" link 4. Verify navigation to product listing 5. Click other nav items |
| **Test Data** | Navigation links: Home, Products, Cart, Wishlist, Profile |
| **Expected Result** | 1. "Home" link navigates to / 2. "Products" link navigates to /products 3. All navigation links work correctly 4. Current page is highlighted in nav 5. Page loads without errors |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P1 |
| **Severity** | High |

### TC_NAV_002: Verify Search Bar Functionality
| Field | Value |
|---|---|
| **Test Case ID** | TC_NAV_002 |
| **Module** | Navigation |
| **Test Scenario** | Verify search bar allows searching products |
| **Preconditions** | 1. Header is visible |
| **Test Steps** | 1. Click on search input field 2. Type "headphones" 3. Press Enter 4. Verify redirect to /products?search=headphones 5. Verify search results shown |
| **Test Data** | Search query: "headphones" |
| **Expected Result** | 1. Search results page loads 2. URL contains search parameter 3. Only products matching "headphones" are shown 4. Result count displays 5. Search functionality works across pages |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P1 |
| **Severity** | High |

### TC_NAV_003: Verify Cart Icon and Count
| Field | Value |
|---|---|
| **Test Case ID** | TC_NAV_003 |
| **Module** | Navigation |
| **Test Scenario** | Verify cart icon displays correct item count |
| **Preconditions** | 1. Header is visible |
| **Test Steps** | 1. Click on cart icon 2. Navigate to /cart 3. Add product to cart 4. Return to another page 5. Verify cart count updates in header |
| **Test Data** | Cart items: 1 |
| **Expected Result** | 1. Cart icon is visible in header 2. Item count badge shows "1" 3. Clicking cart icon navigates to /cart 4. Count updates immediately when items added/removed |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P1 |
| **Severity** | High |

### TC_NAV_004: Verify Wishlist Icon
| Field | Value |
|---|---|
| **Test Case ID** | TC_NAV_004 |
| **Module** | Navigation |
| **Test Scenario** | Verify wishlist icon in header navigates to wishlist page |
| **Preconditions** | 1. Header is visible |
| **Test Steps** | 1. Click wishlist/heart icon in header 2. Wait for navigation 3. Verify /wishlist page is displayed |
| **Test Data** | Heart/Wishlist icon |
| **Expected Result** | 1. Icon is visible in header 2. Clicking navigates to /wishlist 3. Wishlist page displays saved products 4. Icon is accessible from all pages |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P2 |
| **Severity** | Medium |

### TC_NAV_005: Verify Mobile Menu Toggle
| Field | Value |
|---|---|
| **Test Case ID** | TC_NAV_005 |
| **Module** | Navigation |
| **Test Scenario** | Verify mobile menu toggles on small screens |
| **Preconditions** | 1. Viewport set to 375px mobile size |
| **Test Steps** | 1. Set viewport to mobile 2. Click menu toggle button 3. Verify mobile menu appears 4. Click toggle again 5. Verify menu closes |
| **Test Data** | Mobile viewport: 375px width |
| **Expected Result** | 1. Menu toggle button visible on mobile 2. Clicking opens mobile navigation menu 3. All navigation options accessible 4. Menu can be closed 5. No overlap with content |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P2 |
| **Severity** | Medium |

### TC_NAV_006: Verify Footer Links
| Field | Value |
|---|---|
| **Test Case ID** | TC_NAV_006 |
| **Module** | Navigation |
| **Test Scenario** | Verify footer contains company information |
| **Preconditions** | 1. User scrolled to bottom of page |
| **Test Steps** | 1. Scroll to footer section 2. Verify footer company name/logo 3. Verify footer links presence 4. Verify copyright information |
| **Test Data** | Footer content |
| **Expected Result** | 1. Footer is visible at bottom of all pages 2. Contains company branding 3. Copyright/year is displayed 4. Footer links are accessible |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P3 |
| **Severity** | Low |

---

## MODULE 10: FORM VALIDATIONS

### TC_VAL_001: Verify Email Validation - Valid Format
| Field | Value |
|---|---|
| **Test Case ID** | TC_VAL_001 |
| **Module** | Form Validations |
| **Test Scenario** | Verify email with standard format is accepted |
| **Preconditions** | 1. Email validation is required in checkout form |
| **Test Steps** | 1. Enter email "user@example.com" 2. Tab out of field 3. Observe validation result |
| **Test Data** | Email: user@example.com |
| **Expected Result** | 1. Email is accepted without error 2. No validation message displayed 3. Field remains without red border |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P2 |
| **Severity** | Medium |

### TC_VAL_002: Verify Email Validation - Missing @
| Field | Value |
|---|---|
| **Test Case ID** | TC_VAL_002 |
| **Module** | Form Validations |
| **Test Scenario** | Verify email without @ symbol is rejected |
| **Preconditions** | 1. Email field in checkout form |
| **Test Steps** | 1. Enter email "userexample.com" (missing @) 2. Tab out or submit 3. Observe validation error |
| **Test Data** | Email: userexample.com |
| **Expected Result** | 1. Validation error message displayed 2. Email field highlighted in red 3. Submit button does not proceed 4. Error: "Valid email is required" |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P1 |
| **Severity** | High |

### TC_VAL_003: Verify Phone Number Validation - Valid Format
| Field | Value |
|---|---|
| **Test Case ID** | TC_VAL_003 |
| **Module** | Form Validations |
| **Test Scenario** | Verify 10-digit phone number is accepted |
| **Preconditions** | 1. Phone field in checkout form |
| **Test Steps** | 1. Enter phone "1234567890" 2. Tab out of field 3. Observe validation |
| **Test Data** | Phone: 1234567890 |
| **Expected Result** | 1. Phone is accepted without error 2. No validation message 3. Field is clean (no red border) |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P2 |
| **Severity** | Medium |

### TC_VAL_004: Verify Phone Number Validation - Too Short
| Field | Value |
|---|---|
| **Test Case ID** | TC_VAL_004 |
| **Module** | Form Validations |
| **Test Scenario** | Verify phone number with less than 10 digits is rejected |
| **Preconditions** | 1. Phone field in checkout form |
| **Test Steps** | 1. Enter phone "123456" (only 6 digits) 2. Tab out or submit 3. Observe error |
| **Test Data** | Phone: 123456 |
| **Expected Result** | 1. Validation error displayed 2. Field highlighted in red 3. Error message: "Valid phone number is required" 4. Submit prevented |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P1 |
| **Severity** | High |

### TC_VAL_005: Verify Postal Code Validation - Valid Format
| Field | Value |
|---|---|
| **Test Case ID** | TC_VAL_005 |
| **Module** | Form Validations |
| **Test Scenario** | Verify postal code within 5-10 characters is accepted |
| **Preconditions** | 1. Postal code field in checkout form |
| **Test Steps** | 1. Enter postal code "10001" (5 characters) 2. Tab out of field 3. Observe validation |
| **Test Data** | Postal Code: 10001 |
| **Expected Result** | 1. Postal code is accepted 2. No error message 3. Field is clean 4. Can proceed with form submission |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P2 |
| **Severity** | Medium |

### TC_VAL_006: Verify Postal Code Validation - Too Short
| Field | Value |
|---|---|
| **Test Case ID** | TC_VAL_006 |
| **Module** | Form Validations |
| **Test Scenario** | Verify postal code with less than 5 characters is rejected |
| **Preconditions** | 1. Postal code field in checkout form |
| **Test Steps** | 1. Enter postal code "123" (only 3 characters) 2. Tab out or submit 3. Observe error |
| **Test Data** | Postal Code: 123 |
| **Expected Result** | 1. Error message displayed 2. Field highlighted in red 3. Error: "Valid postal code is required (5-10 characters)" 4. Submit prevented |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P1 |
| **Severity** | High |

### TC_VAL_007: Verify Card Number Luhn Validation
| Field | Value |
|---|---|
| **Test Case ID** | TC_VAL_007 |
| **Module** | Form Validations |
| **Test Scenario** | Verify credit card passes Luhn algorithm validation |
| **Preconditions** | 1. Card number field in payment form |
| **Test Steps** | 1. Enter valid test card "4532015112830366" 2. Tab out 3. Observe validation |
| **Test Data** | Card: 4532015112830366 |
| **Expected Result** | 1. Card is accepted without error 2. No validation message 3. Field is clean 4. Can proceed to order submission |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P1 |
| **Severity** | High |

### TC_VAL_008: Verify Card Number Luhn Validation - Invalid
| Field | Value |
|---|---|
| **Test Case ID** | TC_VAL_008 |
| **Module** | Form Validations |
| **Test Scenario** | Verify invalid card number fails Luhn check |
| **Preconditions** | 1. Card number field in payment form |
| **Test Steps** | 1. Enter invalid card "1234567890123456" 2. Tab out or submit 3. Observe validation error |
| **Test Data** | Card: 1234567890123456 |
| **Expected Result** | 1. Validation error displayed 2. Field highlighted in red 3. Error: "Valid card number is required" 4. Submit prevented |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P1 |
| **Severity** | High |

### TC_VAL_009: Verify Expiry Date Format Validation
| Field | Value |
|---|---|
| **Test Case ID** | TC_VAL_009 |
| **Module** | Form Validations |
| **Test Scenario** | Verify expiry date with valid MM/YY format is accepted |
| **Preconditions** | 1. Expiry date field in payment form |
| **Test Steps** | 1. Enter expiry date "12/25" 2. Tab out 3. Observe validation |
| **Test Data** | Expiry: 12/25 |
| **Expected Result** | 1. Expiry date is accepted 2. No error message 3. Field is clean 4. Can proceed with form |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P1 |
| **Severity** | High |

### TC_VAL_010: Verify CVV Format Validation
| Field | Value |
|---|---|
| **Test Case ID** | TC_VAL_010 |
| **Module** | Form Validations |
| **Test Scenario** | Verify CVV with 3-4 digits is accepted |
| **Preconditions** | 1. CVV field in payment form |
| **Test Steps** | 1. Enter CVV "123" (3 digits) 2. Tab out 3. Observe validation |
| **Test Data** | CVV: 123 |
| **Expected Result** | 1. CVV is accepted 2. No error message 3. Field is clean 4. Can proceed with form |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P1 |
| **Severity** | High |

---

## MODULE 11: SMOKE TESTS

### TC_SMOKE_001: Complete Purchase Flow
| Field | Value |
|---|---|
| **Test Case ID** | TC_SMOKE_001 |
| **Module** | Smoke Test |
| **Test Scenario** | Execute complete end-to-end purchase workflow |
| **Preconditions** | 1. Application is running 2. Cart is empty |
| **Test Steps** | 1. Browse products on home page 2. Click on product to view details 3. Add product to cart 4. Navigate to cart 5. Click Proceed to Checkout 6. Fill shipping form 7. Proceed to payment 8. Fill payment form 9. Click Place Order 10. Verify order confirmation |
| **Test Data** | Product: Any product with stock, Valid shipping and payment data |
| **Expected Result** | 1. All pages load without errors 2. All forms accept input 3. All validations pass 4. Order is created successfully 5. Order confirmation page displays order details 6. Order ID is generated |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P0 |
| **Severity** | Critical |

### TC_SMOKE_002: Add to Cart and View Cart
| Field | Value |
|---|---|
| **Test Case ID** | TC_SMOKE_002 |
| **Module** | Smoke Test |
| **Test Scenario** | Add products to cart and verify they appear on cart page |
| **Preconditions** | 1. Application running 2. Cart empty |
| **Test Steps** | 1. Navigate to products 2. Add 2 products to cart 3. Navigate to cart page 4. Verify both products are shown |
| **Test Data** | 2 products with different prices |
| **Expected Result** | 1. Products added without error 2. Cart icon shows count 3. Cart page displays both items 4. Totals are calculated correctly |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P0 |
| **Severity** | Critical |

### TC_SMOKE_003: Search and Filter Products
| Field | Value |
|---|---|
| **Test Case ID** | TC_SMOKE_003 |
| **Module** | Smoke Test |
| **Test Scenario** | Search for products and apply filters |
| **Preconditions** | 1. Product listing page accessible |
| **Test Steps** | 1. Use search bar to find "headphones" 2. Verify search results 3. Filter by Electronics category 4. Filter by price range $100-$200 5. Verify combined filters work |
| **Test Data** | Search: "headphones", Category: Electronics, Price: $100-$200 |
| **Expected Result** | 1. Search returns relevant results 2. Filters apply correctly 3. Products match search and filters 4. Results update dynamically |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P0 |
| **Severity** | Critical |

### TC_SMOKE_004: Wishlist Operations
| Field | Value |
|---|---|
| **Test Case ID** | TC_SMOKE_004 |
| **Module** | Smoke Test |
| **Test Scenario** | Add products to wishlist and manage wishlist |
| **Preconditions** | 1. Product details page accessible 2. Wishlist empty |
| **Test Steps** | 1. Navigate to product 2. Click Add to Wishlist 3. Navigate to wishlist page 4. Verify product in wishlist 5. Remove product from wishlist 6. Verify wishlist is empty |
| **Test Data** | 1 product |
| **Expected Result** | 1. Product added to wishlist 2. Heart icon changes state 3. Wishlist page displays product 4. Product can be removed 5. Wishlist empties correctly |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P1 |
| **Severity** | High |

### TC_SMOKE_005: Update Profile
| Field | Value |
|---|---|
| **Test Case ID** | TC_SMOKE_005 |
| **Module** | Smoke Test |
| **Test Scenario** | Navigate to profile and update user information |
| **Preconditions** | 1. Profile page accessible |
| **Test Steps** | 1. Navigate to /profile 2. Click Edit Profile 3. Update name, email, phone 4. Click Save 5. Verify changes are saved |
| **Test Data** | New name, email, phone |
| **Expected Result** | 1. Edit mode activates 2. Fields are editable 3. Changes saved successfully 4. Success message displayed 5. Changes persist after refresh |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P2 |
| **Severity** | Medium |

---

## MODULE 12: DATA PERSISTENCE

### TC_DP_001: Cart Persistence - localStorage
| Field | Value |
|---|---|
| **Test Case ID** | TC_DP_001 |
| **Module** | Data Persistence |
| **Test Scenario** | Verify cart data is saved and loaded from localStorage |
| **Preconditions** | 1. Cart contains items |
| **Test Steps** | 1. Add products to cart 2. Open browser DevTools 3. Check localStorage for 'cart' key 4. Verify cart data is serialized 5. Refresh page 6. Verify cart items remain |
| **Test Data** | 2 products with quantities |
| **Expected Result** | 1. localStorage contains 'cart' key 2. Data is properly JSON formatted 3. After refresh, cart items restore 4. Quantities and product IDs preserved 5. Cart functionality intact |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P1 |
| **Severity** | High |

### TC_DP_002: Wishlist Persistence - localStorage
| Field | Value |
|---|---|
| **Test Case ID** | TC_DP_002 |
| **Module** | Data Persistence |
| **Test Scenario** | Verify wishlist data is saved and loaded from localStorage |
| **Preconditions** | 1. Wishlist contains items |
| **Test Steps** | 1. Add products to wishlist 2. Check localStorage for 'wishlist' key 3. Verify data format 4. Refresh page 5. Verify wishlist items persist |
| **Test Data** | 3 products in wishlist |
| **Expected Result** | 1. localStorage contains 'wishlist' key 2. Data is properly JSON formatted 3. After refresh, wishlist items load 4. Product IDs and timestamps preserved 5. Wishlist UI updates correctly |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P1 |
| **Severity** | High |

### TC_DP_003: User Profile Persistence - localStorage
| Field | Value |
|---|---|
| **Test Case ID** | TC_DP_003 |
| **Module** | Data Persistence |
| **Test Scenario** | Verify user profile data is saved and loaded from localStorage |
| **Preconditions** | 1. Profile has been updated with custom data |
| **Test Steps** | 1. Update user profile with new name/email 2. Check localStorage for 'user_profile' key 3. Verify data structure 4. Refresh page 5. Verify profile data persists |
| **Test Data** | Updated profile: name, email, phone |
| **Expected Result** | 1. localStorage contains 'user_profile' key 2. Profile object includes all fields 3. After refresh, profile loads with updated data 4. Order history is preserved 5. User can continue where they left off |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P1 |
| **Severity** | High |

### TC_DP_004: Order History Storage
| Field | Value |
|---|---|
| **Test Case ID** | TC_DP_004 |
| **Module** | Data Persistence |
| **Test Scenario** | Verify completed orders are stored in user profile |
| **Preconditions** | 1. Order has been placed successfully |
| **Test Steps** | 1. Place an order 2. Navigate to profile 3. Check order history in profile 4. Verify all order details are present |
| **Test Data** | 1 completed order |
| **Expected Result** | 1. Order appears in profile orders array 2. Order contains all details (ID, date, items, total) 3. Order status is "processing" 4. Shipping info is saved 5. Order persists after refresh |
| **Actual Result** | _________________ |
| **Status** | _________________ |
| **Priority** | P1 |
| **Severity** | High |

---

**END OF TEST CASES**

**Document Summary:**
- Total Test Cases: 125
- Module Coverage: 12 modules
- Test Types: Functional, UI, Validation, Negative, Navigation, Smoke, Regression, Data Persistence
- Priority Distribution: P0 (15 tests), P1 (70 tests), P2 (35 tests), P3 (5 tests)
