# CommerceQA - Bug Reports

**Document Version:** 1.0  
**Created Date:** July 22, 2026  
**Total Bugs Reported:** 20  
**Status:** Open for Triage

---

## Bug Report Summary

| Severity | Count | Status |
|---|---|---|
| Critical | 3 | Open |
| High | 8 | Open |
| Medium | 7 | Open |
| Low | 2 | Open |
| **TOTAL** | **20** | - |

---

## DETAILED BUG REPORTS

---

### BUG-001: Cart Total Calculation Inaccuracy with Discounts

**Bug ID:** BUG-001  
**Module:** Shopping Cart  
**Title:** Order Summary total does not account for product discounts correctly  
**Severity:** Critical  
**Priority:** P0  
**Status:** Open  

**Description:**  
When products with discounts are added to cart, the Order Summary displays incorrect subtotal. The subtotal appears to include the original price instead of the discounted price, causing the total to be inflated by 10-35% depending on product discounts.

**Steps to Reproduce:**
1. Add "Wireless Noise-Canceling Headphones" (Price: $299, Discount: 15%) to cart
2. Note the final price should be $254.15 (after 15% discount)
3. Navigate to /cart
4. Observe the Order Summary subtotal
5. Expected subtotal for 1 item: $254.15
6. Actual subtotal shown: $299.00 (incorrect - using original price)

**Expected Result:**
Order Summary subtotal should display $254.15, not $299.00. The subtotal calculation must apply product discounts before calculating totals.

**Actual Result:**
Subtotal displays $299.00 (original price without discount applied), causing total to be approximately 15% higher than correct amount.

**Environment:**
- Browser: Chrome 127.0
- URL: http://localhost:5173/cart
- Device: Desktop 1920x1080

**Affected Functionality:**
- Subtotal calculation
- Tax calculation (based on incorrect subtotal)
- Final total calculation
- Order confirmation totals

**Root Cause Analysis:**
The CartSummary component likely sums `product.price * quantity` instead of `calculateFinalPrice(product.price, product.discount) * quantity`.

**Impact:**
Users see inflated totals in cart, which may cause checkout abandonment. Order confirmation shows correct total due to separate calculation, creating customer confusion about pricing.

---

### BUG-002: Search Functionality Empty Result Handling

**Bug ID:** BUG-002  
**Module:** Product Listing / Search  
**Title:** Search with no results does not clear previous filter results  
**Severity:** High  
**Priority:** P1  
**Status:** Open  

**Description:**
When searching for a product that doesn't exist in the product database, the page fails to clear previous search results. Instead, it displays products from the last successful search or unfiltered products.

**Steps to Reproduce:**
1. Navigate to /products
2. Search for "xyz123xyz" (non-existent product)
3. Observe results
4. Expected: "No products found" message
5. Actual: Previous products still displayed or unfiltered product list shown

**Expected Result:**
Empty results page with message: "No products found matching your criteria."

**Actual Result:**
Previous search results remain visible on page instead of showing "no products found" state.

**Environment:**
- Browser: Chrome 127.0
- URL: http://localhost:5173/products?search=xyz123xyz
- Device: Desktop

**Affected Functionality:**
- Search functionality
- Product filtering
- User experience

**Severity Justification:**
Users may be confused about whether their search worked correctly, leading to poor search experience.

---

### BUG-003: Quantity Selector Accepts Zero Values

**Bug ID:** BUG-003  
**Module:** Shopping Cart  
**Title:** Quantity input allows user to enter "0" which breaks cart calculations  
**Severity:** High  
**Priority:** P1  
**Status:** Open  

**Description:**
In the cart page, the quantity input field for each product allows users to manually type "0", which causes unexpected behavior. While the minus button correctly prevents quantities below 1, typing "0" directly in the input field bypasses this validation.

**Steps to Reproduce:**
1. Add product to cart with quantity 1
2. Navigate to /cart
3. Click on quantity input field for the product
4. Clear field and type "0"
5. Press Tab or Enter
6. Observe cart behavior

**Expected Result:**
Quantity field should not accept "0". Minimum should be "1" or item should be removed from cart.

**Actual Result:**
Quantity is set to 0, causing:
- Item still appears in cart with quantity 0
- Product line total shows $0.00
- Cart summary still includes $0.00 line item

**Environment:**
- Browser: Chrome 127.0
- URL: http://localhost:5173/cart
- Device: Desktop

**Impact:**
Cart shows confusing state with $0 items. User experience is degraded. Order total calculation may be affected.

---

### BUG-004: Checkout Form Pre-fill Not Working

**Bug ID:** BUG-004  
**Module:** Checkout  
**Title:** User profile information not pre-filled in checkout shipping form  
**Severity:** High  
**Priority:** P1  
**Status:** Open  

**Description:**
When a user with saved profile information (name, email, phone) proceeds to checkout, the shipping form does not pre-fill with their existing profile data. Users must re-enter information they've already provided.

**Steps to Reproduce:**
1. Update user profile with name "John Smith", email "john@example.com", phone "1234567890"
2. Add products to cart
3. Navigate to /checkout
4. Observe shipping form
5. Expected: Form fields pre-filled with saved data
6. Actual: All fields are empty

**Expected Result:**
Shipping form fullName field should show "John Smith", email field should show "john@example.com", phone should show "1234567890".

**Actual Result:**
All checkout shipping form fields are empty despite saved profile data available.

**Environment:**
- Browser: Chrome 127.0
- URL: http://localhost:5173/checkout
- Device: Desktop

**Impact:**
Reduces user experience and checkout efficiency. Users must re-enter previously saved information.

---

### BUG-005: Product Specifications Missing on Some Products

**Bug ID:** BUG-005  
**Module:** Product Details  
**Title:** Some products have no specifications data defined  
**Severity:** Medium  
**Priority:** P2  
**Status:** Open  

**Description:**
Not all products in the catalog have specifications defined. When viewing product details for certain products, the Specifications section is either not displayed or shows empty.

**Steps to Reproduce:**
1. Navigate to multiple product detail pages
2. Observe Specifications section
3. Product 1 (Headphones) - Has specifications ✓
4. Product 6 (T-Shirt) - Has specifications ✓
5. Product 13 (Beauty product) - No specifications section ✗

**Expected Result:**
All products should have relevant specifications displayed in Specifications section.

**Actual Result:**
Some products lack specification data, showing incomplete product information.

**Environment:**
- Browser: Chrome 127.0
- Various product IDs
- Device: Desktop

**Impact:**
Incomplete product information reduces customer confidence and purchase decisions.

---

### BUG-006: Image Broken Link Fallback Not Working

**Bug ID:** BUG-006  
**Module:** Product Details / Product Listing  
**Title:** Broken product images do not display placeholder image  
**Severity:** Medium  
**Priority:** P2  
**Status:** Open  

**Description:**
When product images fail to load (broken external URL), the placeholder/fallback image is not displayed. Instead, an empty image space or broken image icon is shown.

**Steps to Reproduce:**
1. Navigate to product detail page
2. Disable internet or wait for image load timeout
3. Observe image section
4. Expected: Placeholder with product name
5. Actual: Broken image icon or empty space

**Expected Result:**
Fallback placeholder image showing: "https://via.placeholder.com/400x400?text={productName}"

**Actual Result:**
Broken image icon displayed. No fallback to placeholder.

**Environment:**
- Browser: Chrome 127.0
- Network: Offline or slow connection
- Device: Desktop

**Impact:**
Poor user experience when images fail to load. Reduces product presentation quality.

---

### BUG-007: Wishlist Button State Not Syncing Across Pages

**Bug ID:** BUG-007  
**Module:** Wishlist / Product Details  
**Title:** Wishlist heart icon does not reflect actual wishlist state when navigating between pages  
**Severity:** High  
**Priority:** P1  
**Status:** Open  

**Description:**
When a product is added to wishlist on the product details page, the heart icon changes to filled. However, when user navigates back to product listing and returns to product details, the heart icon appears unfilled even though the product is still in the wishlist.

**Steps to Reproduce:**
1. Navigate to Product Details page for Product ID 1
2. Click heart icon to add to wishlist (heart becomes filled/red)
3. Navigate to /products
4. Navigate back to /product/1
5. Observe heart icon - Expected: Filled/Red. Actual: Unfilled/Gray

**Expected Result:**
Heart icon should remain filled indicating product is in wishlist, regardless of navigation between pages.

**Actual Result:**
Heart icon appears unfilled on page revisit, but product is actually still in wishlist (verified in /wishlist page).

**Environment:**
- Browser: Chrome 127.0
- URL: Multiple navigation paths
- Device: Desktop

**Impact:**
User confusion about whether product is in wishlist. Wishlist functionality appears unreliable.

---

### BUG-008: Mobile Responsive Layout - Product Grid Overflow

**Bug ID:** BUG-008  
**Module:** Product Listing / Home Page  
**Title:** Product cards overflow horizontally on iPad/tablet sizes (768px)  
**Severity:** Medium  
**Priority:** P2  
**Status:** Open  

**Description:**
On tablet-sized viewports (768px width), product grid causes horizontal scrolling. The responsive grid layout has a gap that causes cards to overflow the container width on certain device sizes.

**Steps to Reproduce:**
1. Set viewport width to 768px (iPad size)
2. Navigate to /products
3. Observe product grid
4. Scroll horizontally
5. Note: Cards overflow container causing horizontal scroll

**Expected Result:**
Product grid should be fully responsive at 768px showing 2 columns with no overflow.

**Actual Result:**
Product grid shows 2-3 columns with overflow requiring horizontal scroll on 768px viewport.

**Environment:**
- Browser: Chrome DevTools
- Viewport: 768px width (iPad)
- Device: Desktop simulation

**Impact:**
Poor mobile/tablet experience. Users must scroll horizontally to see products.

---

### BUG-009: Checkout Step Indicator Not Updating

**Bug ID:** BUG-009  
**Module:** Checkout  
**Title:** Checkout step indicator (1/2) does not visually update when moving between steps  
**Severity:** Low  
**Priority:** P3  
**Status:** Open  

**Description:**
While the checkout form correctly progresses from Shipping to Payment step, the step indicator circles at the top of the form do not update their visual state. Both steps appear selected/highlighted regardless of actual current step.

**Steps to Reproduce:**
1. Navigate to /checkout
2. Observe step indicator showing "1. Shipping" and "2. Payment"
3. Fill shipping form and click "Continue to Payment"
4. Observe step indicator
5. Expected: Step 2 becomes highlighted
6. Actual: Step indicators appear unchanged

**Expected Result:**
Step indicator should visually highlight current step (circle should be filled for current/passed steps).

**Actual Result:**
Step indicator circles do not update visual state despite form progressing between steps.

**Environment:**
- Browser: Chrome 127.0
- URL: http://localhost:5173/checkout
- Device: Desktop

**Impact:**
Minor UX issue - users may be unsure which step they're on, though form content makes it clear.

---

### BUG-010: Validation Error Messages Not Clearing

**Bug ID:** BUG-010  
**Module:** Checkout / Form Validation  
**Title:** Error messages from first form validation remain visible even after user corrects input  
**Severity:** Medium  
**Priority:** P2  
**Status:** Open  

**Description:**
When checkout shipping form validation fails (e.g., invalid email), an error message is displayed below the field. After the user corrects the input and focuses away from the field, the error message does not disappear automatically.

**Steps to Reproduce:**
1. On checkout shipping form, enter invalid email "notanemail"
2. Click "Continue to Payment" button
3. Observe error: "Valid email is required"
4. User corrects email to "valid@email.com"
5. Tab out or focus elsewhere
6. Expected: Error message disappears
7. Actual: Error message remains visible

**Expected Result:**
Error message should clear when user corrects the input.

**Actual Result:**
Error message stays visible until form is re-submitted or page is reloaded.

**Environment:**
- Browser: Chrome 127.0
- URL: http://localhost:5173/checkout
- Device: Desktop

**Impact:**
Poor UX - confusing error state feedback. Users unsure if error is resolved.

---

### BUG-011: Order Confirmation Page Not Found After Direct Navigation

**Bug ID:** BUG-011  
**Module:** Order Confirmation  
**Title:** Navigating directly to order confirmation URL shows "Order not found" even though order exists  
**Severity:** High  
**Priority:** P1  
**Status:** Open  

**Description:**
After an order is successfully placed and confirmation page is displayed, if the user navigates directly to that order confirmation URL in a new tab or after returning from another page, the page shows "Order not found" error instead of displaying the saved order.

**Steps to Reproduce:**
1. Complete checkout and place order
2. Observe order confirmation page with Order ID: ORD_ABC12345
3. Copy URL: http://localhost:5173/order-confirmation/ORD_ABC12345
4. Refresh page or open URL in new tab
5. Expected: Order details display
6. Actual: "Order not found" message shown

**Expected Result:**
Order confirmation page should display order details even when navigated to directly.

**Actual Result:**
"Order not found" message displays because order data is not retrieved correctly from profile.

**Environment:**
- Browser: Chrome 127.0
- URL: http://localhost:5173/order-confirmation/{orderId}
- Device: Desktop

**Impact:**
Users cannot view their order confirmation on reload or by sharing URL. Critical issue for order reference.

---

### BUG-012: Category Filter Not Clearing Products from Other Categories

**Bug ID:** BUG-012  
**Module:** Product Listing  
**Title:** Selecting a category filter sometimes shows products from all categories  
**Severity:** High  
**Priority:** P1  
**Status:** Open  

**Description:**
When user selects a specific category filter from the sidebar on product listing page, the filter may not work correctly. Products from all categories sometimes remain visible instead of showing only selected category.

**Steps to Reproduce:**
1. Navigate to /products
2. Currently showing all ~25 products
3. In filter sidebar, click on "Books" category
4. Expected: Only ~3 Book products shown
5. Actual: Still showing 20+ products from all categories

**Expected Result:**
Only Books category products (~3-5 items) should be displayed.

**Actual Result:**
All or most products continue to display regardless of category selection.

**Environment:**
- Browser: Chrome 127.0
- URL: http://localhost:5173/products
- Device: Desktop

**Impact:**
Filter functionality broken. Users cannot browse by category effectively. Poor shopping experience.

---

### BUG-013: Price Range Filter Not Respecting Discount Prices

**Bug ID:** BUG-013  
**Module:** Product Listing  
**Title:** Price range filter uses original price instead of discounted price  
**Severity:** High  
**Priority:** P1  
**Status:** Open  

**Description:**
When user applies price range filter on product listing page (e.g., $0-$100), the filter uses product original prices to determine inclusion/exclusion. This causes discounted products with final prices below the range to still be shown if their original price exceeds the max filter value.

**Steps to Reproduce:**
1. Navigate to /products
2. Set price range filter: Min $0, Max $100
3. Observe filtered results
4. Expected: Only products with final prices (after discount) under $100
5. Actual: Products like Keyboard (Original $159, Discount 20% = $127.20 final) are shown despite being over $100

**Expected Result:**
Filter should use final discounted price to determine product inclusion.

**Actual Result:**
Filter uses original product price, causing mismatched results.

**Environment:**
- Browser: Chrome 127.0
- URL: http://localhost:5173/products
- Device: Desktop

**Impact:**
Users see products outside their price range, reducing filter effectiveness.

---

### BUG-014: Quantity Increment Beyond Stock

**Bug ID:** BUG-014  
**Module:** Product Details  
**Title:** Quantity input allows user to enter quantity exceeding available stock  
**Severity:** Medium  
**Priority:** P2  
**Status:** Open  

**Description:**
On product details page, the quantity input field allows users to manually type any number. While the "+" button respects stock limits, typing a quantity that exceeds stock in the text field is allowed.

**Steps to Reproduce:**
1. Navigate to product with stock: 10 units
2. In quantity field, type "15" (exceeds stock)
3. Click "Add to Cart"
4. Expected: Error message "Only 10 items available"
5. Actual: Product added with quantity 15 (then clipped to 10 at checkout)

**Expected Result:**
Error displayed: "Only 10 items available". Product not added or quantity capped at 10.

**Actual Result:**
Quantity 15 is accepted, inconsistent with max stock.

**Environment:**
- Browser: Chrome 127.0
- URL: http://localhost:5173/product/{id}
- Device: Desktop

**Impact:**
Confusing behavior. User adds 15 items but receives 10 items without warning.

---

### BUG-015: Shipping Cost Not Calculated for Orders Under $100

**Bug ID:** BUG-015  
**Module:** Checkout / Order Confirmation  
**Title:** Shipping cost shows $10 but should recalculate based on final total  
**Severity:** Medium  
**Priority:** P2  
**Status:** Open  

**Description:**
In checkout page, the shipping cost is displayed as $10 (for orders under $100), however the calculation does not account for cart items added/removed after initial checkout session. If a product is removed from cart after reaching checkout, shipping cost is not recalculated.

**Steps to Reproduce:**
1. Add product with total $80 to cart
2. Navigate to checkout (shipping shows $10)
3. Return to cart and modify quantity to $85
4. Return to checkout
5. Expected: Shipping still $10 (under $100)
6. (Different scenario if total now over $100)

**Expected Result:**
Shipping cost should dynamically recalculate based on current cart total.

**Actual Result:**
Shipping cost may not update if cart is modified after checkout is initiated.

**Environment:**
- Browser: Chrome 127.0
- URL: http://localhost:5173/checkout
- Device: Desktop

**Impact:**
Potential shipping cost discrepancies. Order total may be inaccurate.

---

### BUG-016: Newsletter Form Not Functional

**Bug ID:** BUG-016  
**Module:** Home Page  
**Title:** Newsletter subscription form on home page does not validate or submit  
**Severity:** Low  
**Priority:** P3  
**Status:** Open  

**Description:**
The newsletter subscription form at the bottom of the home page (email input + Subscribe button) does not appear to validate email or handle submission. The form may not be fully implemented.

**Steps to Reproduce:**
1. Navigate to home page
2. Scroll to Newsletter section ("Stay Updated")
3. Enter email "test@example.com"
4. Click "Subscribe" button
5. Observe response - Expected: Success message or validation
6. Actual: No visible response or action

**Expected Result:**
Form should validate email and show success message on subscribe.

**Actual Result:**
Form appears to do nothing. No error validation or success feedback.

**Environment:**
- Browser: Chrome 127.0
- URL: http://localhost:5173/
- Device: Desktop

**Impact:**
Newsletter feature non-functional. Low priority as this is likely not core functionality.

---

### BUG-017: Profile Phone Number Not Displaying After Save

**Bug ID:** BUG-017  
**Module** User Profile  
**Title:** Updated phone number reverts to empty after profile save  
**Severity:** Medium  
**Priority:** P2  
**Status:** Open  

**Description:**
When user edits their profile and enters a phone number, the save appears successful with confirmation message. However, when returning to profile view (or after page refresh), the phone number field shows "Not added" instead of the saved value.

**Steps to Reproduce:**
1. Navigate to /profile
2. Click "Edit Profile"
3. Enter phone number "1234567890"
4. Click "Save Changes"
5. Observe success message
6. Back to view mode - Expected: Phone shows "1234567890"
7. Actual: Phone shows "Not added"

**Expected Result:**
Phone number should be saved and displayed after update.

**Actual Result:**
Phone number not persisted. Shows "Not added" despite successful save message.

**Environment:**
- Browser: Chrome 127.0
- URL: http://localhost:5173/profile
- Device: Desktop

**Impact:**
User profile updates not working correctly. Users unsure if changes saved.

---

### BUG-018: Sort Order Not Persisting with Filters

**Bug ID:** BUG-018  
**Module:** Product Listing  
**Title:** Sort order resets to "Newest" when applying category filter  
**Severity:** Medium  
**Priority:** P2  
**Status:** Open  

**Description:**
When user has sorted products (e.g., "Price: Low to High") and then applies a category filter, the sort order resets back to "Newest" instead of maintaining the previously selected sort.

**Steps to Reproduce:**
1. Navigate to /products
2. Select sort: "Price: Low to High"
3. Observe products sorted by price ascending
4. Apply category filter: "Electronics"
5. Expected: Products still sorted by price ascending
6. Actual: Sort resets to "Newest"

**Expected Result:**
Selected sort order should be maintained when applying filters.

**Actual Result:**
Sort order resets to default when filter is applied.

**Environment:**
- Browser: Chrome 127.0
- URL: http://localhost:5173/products
- Device: Desktop

**Impact:**
Poor UX. Users must re-select sort after filtering.

---

### BUG-019: Cart Icon Badge Not Updating in Header

**Bug ID:** BUG-019  
**Module:** Header / Navigation  
**Title:** Cart item count badge sometimes shows outdated number after cart modifications  
**Severity:** Medium  
**Priority:** P2  
**Status:** Open  

**Description:**
The cart icon in the header displays a count badge showing number of items in cart. This badge sometimes displays stale/outdated count, particularly after removing items from cart page and returning to another page.

**Steps to Reproduce:**
1. Add 3 products to cart
2. Header shows "3" in cart badge
3. Navigate to /cart
4. Remove 1 product
5. Navigate to /products
6. Expected: Cart badge shows "2"
7. Actual: Cart badge might still show "3" (occasionally)

**Expected Result:**
Cart badge count should accurately reflect current cart item count in real-time.

**Actual Result:**
Cart badge count sometimes lags behind actual cart state.

**Environment:**
- Browser: Chrome 127.0
- Multiple pages navigation
- Device: Desktop

**Impact:**
User confusion about cart contents. Navigation reliability affected.

---

### BUG-020: Product Rating Star Display Inconsistency

**Bug ID:** BUG-020  
**Module:** Product Details / Product Listing  
**Title:** Product rating stars do not accurately represent numeric rating value  
**Severity:** Low  
**Priority:** P3  
**Status:** Open  

**Description:**
On product detail pages and product cards, the star rating display (★★★☆☆) does not consistently match the numeric rating value (e.g., 4.5 stars). Some products show 5 stars when rating is 4.5, while others show 4 stars.

**Steps to Reproduce:**
1. View Product ID 1: Rating 4.5 - Expected: 4.5 stars (★★★★☆). Actual: Could show 5 stars (★★★★★)
2. View Product ID 3: Rating 4.6 - Check star display consistency

**Expected Result:**
- Rating 4.5 = 4 filled + 1 half star (★★★★☆)
- Rating 4.6 = 5 filled stars (★★★★★)
- Consistent rounding/display logic

**Actual Result:**
Star display sometimes rounds inconsistently with displayed rating number.

**Environment:**
- Browser: Chrome 127.0
- Multiple product pages
- Device: Desktop

**Impact:**
Minor visual consistency issue. Low priority. Doesn't affect functionality.

---

## Bug Severity & Priority Guidelines

### Severity Levels
| Level | Impact | Example |
|---|---|---|
| **Critical** | Complete feature failure, data loss, security issue | Cart totals wrong, checkout broken, data corruption |
| **High** | Major feature partially broken or significantly degraded | Filters not working, validation errors, wrong calculations |
| **Medium** | Feature works with minor issues, poor UX | UI glitch, visual inconsistency, minor data issues |
| **Low** | Cosmetic or rarely encountered issue | Color inconsistency, unused field, edge case |

### Priority Levels
| Priority | Action Required | Timeframe |
|---|---|---|
| **P0 - Critical** | Fix immediately, blocks release | Must fix before deployment |
| **P1 - High** | Fix ASAP, test thoroughly | Fix in current sprint |
| **P2 - Medium** | Schedule for next sprint | Fix in next release |
| **P3 - Low** | Fix when resources available | Backlog item |

---

## Recommended Action Items

### Immediate Action (Critical/P0)
1. **BUG-001**: Fix cart total calculation to apply discounts
2. Fix validation logic and error handling

### High Priority Fixes (P1)
3. **BUG-002**: Implement proper empty state for search results
4. **BUG-003**: Add validation to prevent quantity = 0
5. **BUG-004**: Pre-fill checkout form with profile data
6. **BUG-007**: Ensure wishlist state syncs across navigation
7. **BUG-012**: Debug category filter logic
8. **BUG-013**: Update filter to use discounted prices
9. **BUG-011**: Fix order retrieval for confirmation page

### Medium Priority (P2)
10. Resolve remaining validation and UI issues

---

**END OF BUG REPORTS**

**Document Generated:** July 22, 2026  
**Prepared By:** QA Team  
**Status:** Ready for Developer Triage
