# CommerceQA - Regression Test Suite

**Document Version:** 1.0  
**Created Date:** July 22, 2026  
**Last Executed:** ________________  
**Purpose:** Verify previously identified bugs remain fixed after code changes

---

## Regression Test Overview

**Objective:** Ensure defects reported in bug reports and fixed issues remain resolved after development changes. Regression tests validate that bug fixes haven't introduced new issues.

**Scope:** Tests derived from bugs in bug report document (BUG-001 through BUG-020).

**Execution Frequency:** Before each release, after critical bug fixes, before deploying to production.

---

## REGRESSION TEST SUITE

---

### RG-001: Verify Cart Total Calculation with Discounts (BUG-001)

**Test ID:** RG-001  
**Related Bug:** BUG-001  
**Module:** Shopping Cart  
**Priority:** P0  

**Test Description:** Verify order summary correctly applies product discounts in subtotal calculation.

| Aspect | Details |
|---|---|
| **Bug Summary** | Order total displayed original price instead of discounted price |
| **Test Objective** | Verify subtotal calculation accounts for all product discounts |
| **Preconditions** | 1. Cart is empty 2. Product with discount available |
| **Test Steps** | 1. Add "Wireless Headphones" (Price: $299, Discount: 15%) to cart 2. Quantity: 1 3. Final price should be: $299 - $44.85 = $254.15 4. Navigate to /cart 5. Observe Order Summary subtotal 6. Verify subtotal shows $254.15 (not $299) 7. Add another product "Premium T-Shirt" (Price: $39, Discount: 30%) 8. Final price: $39 - $11.70 = $27.30 9. Verify new subtotal: $254.15 + $27.30 = $281.45 |
| **Expected Result** | 1. Subtotal correctly reflects discounted prices 2. Each product's line total = (Price - Discount) × Quantity 3. Order summary total = sum of all discounted line totals |
| **Pass Criteria** | Subtotal equals sum of all discounted item totals |
| **Test Data** | Product 1: $299 - 15% = $254.15, Product 2: $39 - 30% = $27.30 |
| **Test Execution** | |
| **Expected:** | $281.45 |
| **Actual:** | _________________ |
| **Status** | ☐ PASS ☐ FAIL |

---

### RG-002: Verify Empty Search Results Display (BUG-002)

**Test ID:** RG-002  
**Related Bug:** BUG-002  
**Module:** Product Listing  
**Priority:** P1  

**Test Description:** Verify no-results message displays when search returns no products.

| Aspect | Details |
|---|---|
| **Bug Summary** | Search with no matching products didn't clear previous results |
| **Test Objective** | Verify search properly handles empty result sets |
| **Preconditions** | 1. User on /products page |
| **Test Steps** | 1. Search for existing product "headphones" 2. Verify results shown 3. Search for non-existent product "xyz123abc" 4. Observe result area 5. Expected: "No products found matching your criteria" message 6. Verify previous results are cleared |
| **Expected Result** | 1. Empty search displays appropriate no-results message 2. Previous search results are cleared 3. Product grid is empty 4. User can modify search or return to browse |
| **Pass Criteria** | No-results message displays, previous results cleared |
| **Test Data** | Non-existent search: "xyz123abc" |
| **Test Execution** | |
| **Result:** | _________________ |
| **Status** | ☐ PASS ☐ FAIL |

---

### RG-003: Verify Quantity Validation - Minimum Value (BUG-003)

**Test ID:** RG-003  
**Related Bug:** BUG-003  
**Module:** Shopping Cart  
**Priority:** P1  

**Test Description:** Verify quantity cannot be set to zero via direct input.

| Aspect | Details |
|---|---|
| **Bug Summary** | Quantity input accepted "0" value, breaking cart calculations |
| **Test Objective** | Verify minimum quantity of 1 is enforced |
| **Preconditions** | 1. Product in cart with quantity 1 2. User on /cart page |
| **Test Steps** | 1. Locate quantity field for cart item 2. Try to set quantity to "0" 3. Observe validation behavior 4. Either: Prevent input OR Auto-remove item 5. Verify no item with quantity 0 displays |
| **Expected Result** | 1. Quantity cannot be set below 1 2. Input either prevented or auto-corrected 3. Item does not display with quantity 0 4. Cart total not affected negatively |
| **Pass Criteria** | Minimum quantity of 1 enforced |
| **Test Data** | Attempt: Quantity = 0 |
| **Test Execution** | |
| **Result:** | _________________ |
| **Status** | ☐ PASS ☐ FAIL |

---

### RG-004: Verify Checkout Form Pre-fill (BUG-004)

**Test ID:** RG-004  
**Related Bug:** BUG-004  
**Module:** Checkout  
**Priority:** P1  

**Test Description:** Verify user profile information pre-fills checkout form.

| Aspect | Details |
|---|---|
| **Bug Summary** | Checkout form didn't pre-fill with saved user profile data |
| **Test Objective** | Verify checkout form auto-populates from user profile |
| **Preconditions** | 1. User profile updated with: Name: "John Smith", Email: "john@example.com", Phone: "1234567890" 2. Products in cart |
| **Test Steps** | 1. Navigate to /checkout 2. Observe shipping form 3. Verify Full Name field shows "John Smith" 4. Verify Email field shows "john@example.com" 5. Verify Phone field shows "1234567890" |
| **Expected Result** | 1. Shipping form fields pre-populated from user profile 2. User can edit pre-filled data 3. Other fields (Address, City, etc.) may be empty |
| **Pass Criteria** | User profile data pre-fills checkout form |
| **Test Data** | Profile: John Smith, john@example.com, 1234567890 |
| **Test Execution** | |
| **Result:** | _________________ |
| **Status** | ☐ PASS ☐ FAIL |

---

### RG-005: Verify Wishlist State Consistency (BUG-007)

**Test ID:** RG-005  
**Related Bug:** BUG-007  
**Module:** Wishlist / Product Details  
**Priority:** P1  

**Test Description:** Verify wishlist heart icon state reflects actual wishlist status.

| Aspect | Details |
|---|---|
| **Bug Summary** | Heart icon didn't show correct wishlist state after navigation |
| **Test Objective** | Verify wishlist status syncs across page navigation |
| **Preconditions** | 1. Product details page accessible |
| **Test Steps** | 1. Navigate to Product Details page (Product ID: 1) 2. Click heart icon to add to wishlist 3. Verify heart becomes filled/red 4. Navigate to /products 5. Navigate back to /product/1 6. Observe heart icon 7. Expected: Heart still filled/red 8. Verify product in /wishlist page |
| **Expected Result** | 1. Heart icon remains filled after navigation 2. Product confirmed in wishlist 3. State is consistent across pages 4. localStorage reflects correct state |
| **Pass Criteria** | Wishlist state consistent across page navigation |
| **Test Data** | Product ID: 1 (Headphones) |
| **Test Execution** | |
| **Result:** | _________________ |
| **Status** | ☐ PASS ☐ FAIL |

---

### RG-006: Verify Category Filter Functionality (BUG-012)

**Test ID:** RG-006  
**Related Bug:** BUG-012  
**Module:** Product Listing  
**Priority:** P1  

**Test Description:** Verify category filter correctly displays only selected category products.

| Aspect | Details |
|---|---|
| **Bug Summary** | Category filter sometimes showed products from all categories |
| **Test Objective** | Verify category filter properly isolates products |
| **Preconditions** | 1. Product listing page loaded 2. All products visible |
| **Test Steps** | 1. In filter sidebar, select "Electronics" category 2. Wait for filter to apply 3. Count displayed products 4. Expected: ~5 Electronics products 5. Verify all displayed products are Electronics category 6. Check no Fashion, Books, Shoes products visible 7. Select different category "Fashion" 8. Expected: ~5 Fashion products 9. Verify filter switching works correctly |
| **Expected Result** | 1. Only selected category products display 2. No products from other categories shown 3. Product count reflects category size 4. Can switch categories without issues |
| **Pass Criteria** | Category filter correctly isolates products |
| **Test Data** | Categories: Electronics, Fashion |
| **Test Execution** | |
| **Result:** | _________________ |
| **Status** | ☐ PASS ☐ FAIL |

---

### RG-007: Verify Price Filter Uses Discounted Prices (BUG-013)

**Test ID:** RG-007  
**Related Bug:** BUG-013  
**Module:** Product Listing  
**Priority:** P1  

**Test Description:** Verify price range filter considers discounted prices, not original prices.

| Aspect | Details |
|---|---|
| **Bug Summary** | Price filter used original prices instead of discounted final prices |
| **Test Objective** | Verify price range filter applies to final/discounted prices |
| **Preconditions** | 1. Product listing page loaded |
| **Test Steps** | 1. Set price filter: Min $0, Max $100 2. Observe filtered products 3. Check "Mechanical Gaming Keyboard": Original $159, Discount 20%, Final: $127.20 4. Expected: Product should NOT appear (final price $127.20 > $100) 5. Actually shows: Verify behavior 6. Set price filter: Min $100, Max $200 7. Expected: Keyboard ($127.20 final) should appear |
| **Expected Result** | 1. Filter uses final/discounted prices 2. Products excluded if final price outside range 3. Products included if final price within range |
| **Pass Criteria** | Price filter correctly applies to discounted prices |
| **Test Data** | Filter: $0-$100, Product: Keyboard ($159 orig, -20% = $127.20 final) |
| **Test Execution** | |
| **Result:** | _________________ |
| **Status** | ☐ PASS ☐ FAIL |

---

### RG-008: Verify Order Confirmation Page Accessibility (BUG-011)

**Test ID:** RG-008  
**Related Bug:** BUG-011  
**Module:** Order Confirmation  
**Priority:** P1  

**Test Description:** Verify order confirmation page loads when navigated to directly.

| Aspect | Details |
|---|---|
| **Bug Summary** | Direct navigation to order confirmation showed "Order not found" |
| **Test Objective** | Verify order data persists and can be accessed directly |
| **Preconditions** | 1. Order successfully placed 2. Order ID noted: e.g., ORD_ABC12345 |
| **Test Steps** | 1. After order placement, note the Order ID 2. Refresh page or open new tab 3. Navigate directly to /order-confirmation/{orderID} 4. Expected: Order details display 5. Verify all order information shown 6. Confirm items, totals, shipping address match |
| **Expected Result** | 1. Order confirmation page loads successfully 2. Order details display correctly 3. No "Order not found" error 4. Order data retrieved from localStorage/profile |
| **Pass Criteria** | Order confirmation accessible via direct URL |
| **Test Data** | Order ID from recent order placement |
| **Test Execution** | |
| **Result:** | _________________ |
| **Status** | ☐ PASS ☐ FAIL |

---

### RG-009: Verify Form Validation Error Clearing (BUG-010)

**Test ID:** RG-009  
**Related Bug:** BUG-010  
**Module:** Checkout / Form Validation  
**Priority:** P2  

**Test Description:** Verify validation error messages clear when user corrects input.

| Aspect | Details |
|---|---|
| **Bug Summary** | Validation error messages remained visible after correcting input |
| **Test Objective** | Verify error messages clear on field correction |
| **Preconditions** | 1. Checkout shipping form displayed |
| **Test Steps** | 1. Enter invalid email "notanemail" 2. Click "Continue to Payment" 3. Observe error: "Valid email is required" 4. Correct email to "valid@example.com" 5. Tab out of field or focus elsewhere 6. Expected: Error message disappears 7. Verify field shows no error styling |
| **Expected Result** | 1. Error message appears on validation failure 2. Error clears when user corrects input 3. Field styling returns to normal 4. Form can proceed without re-submission |
| **Pass Criteria** | Error messages clear when field corrected |
| **Test Data** | Invalid email: "notanemail", Valid email: "valid@example.com" |
| **Test Execution** | |
| **Result:** | _________________ |
| **Status** | ☐ PASS ☐ FAIL |

---

### RG-010: Verify Sort Order Persistence with Filters (BUG-018)

**Test ID:** RG-010  
**Related Bug:** BUG-018  
**Module:** Product Listing  
**Priority:** P2  

**Test Description:** Verify sort selection persists when applying category filters.

| Aspect | Details |
|---|---|
| **Bug Summary** | Sort order reset to default when applying category filter |
| **Test Objective** | Verify filter operations maintain selected sort order |
| **Preconditions** | 1. Product listing page loaded |
| **Test Steps** | 1. Select sort: "Price: Low to High" 2. Observe products sorted by price ascending 3. Apply category filter: "Electronics" 4. Expected: Products still sorted by price ascending 5. Verify first product has lowest price 6. Switch to "Highest Rated" sort 7. Apply "Fashion" category filter 8. Expected: Still sorted by rating (highest first) |
| **Expected Result** | 1. Sort order maintained when filters applied 2. Sort persists across filter changes 3. User doesn't need to re-select sort |
| **Pass Criteria** | Sort order persists with filter application |
| **Test Data** | Sort: Price ascending, Filter: Electronics category |
| **Test Execution** | |
| **Result:** | _________________ |
| **Status** | ☐ PASS ☐ FAIL |

---

## REGRESSION TEST EXECUTION SUMMARY

**Test Execution Date:** ________________  
**Executed By:** ________________  
**Environment:** Production / Staging / Development  
**Fixes Verified:** ________________  

### Results Overview

| Test ID | Bug ID | Test Name | Result | Notes |
|---|---|---|---|---|
| RG-001 | BUG-001 | Cart Total Calculation | ☐ PASS ☐ FAIL | _________________ |
| RG-002 | BUG-002 | Empty Search Results | ☐ PASS ☐ FAIL | _________________ |
| RG-003 | BUG-003 | Quantity Validation | ☐ PASS ☐ FAIL | _________________ |
| RG-004 | BUG-004 | Checkout Form Pre-fill | ☐ PASS ☐ FAIL | _________________ |
| RG-005 | BUG-007 | Wishlist State Sync | ☐ PASS ☐ FAIL | _________________ |
| RG-006 | BUG-012 | Category Filter | ☐ PASS ☐ FAIL | _________________ |
| RG-007 | BUG-013 | Price Filter Discounts | ☐ PASS ☐ FAIL | _________________ |
| RG-008 | BUG-011 | Order Confirmation Access | ☐ PASS ☐ FAIL | _________________ |
| RG-009 | BUG-010 | Validation Error Clearing | ☐ PASS ☐ FAIL | _________________ |
| RG-010 | BUG-018 | Sort with Filters | ☐ PASS ☐ FAIL | _________________ |

### Metrics

**Total Regression Tests:** 10  
**Passed:** ___  
**Failed:** ___  
**Blocked:** ___  
**Pass Rate:** ____%  

**Status:** ☐ ALL PASSED ☐ REGRESSIONS DETECTED ☐ BLOCKED

---

## Regression Failures (if any)

| Test ID | Bug ID | Issue | Status | Action |
|---|---|---|---|---|
| _________________ | _________________ | _________________ | _________________ | _________________ |
| _________________ | _________________ | _________________ | _________________ | _________________ |

---

## Sign-Off

**QA Lead:** _________________ Date: _________________  
**Status:** ☐ Ready for Release ☐ Requires Fixes ☐ Blocked

---

**END OF REGRESSION TEST SUITE**

---

## Regression Testing Best Practices

1. **Run Before Each Release** - Execute regression suite before deploying to production
2. **Document All Results** - Keep records of test execution for audit trail
3. **Update on New Bugs** - Add new regression tests for each bug found
4. **Automate When Possible** - Consider automating regression tests for faster execution
5. **Prioritize Critical** - Focus on critical bugs first
6. **Track Coverage** - Maintain list of bugs under regression testing
7. **Communicate Results** - Inform stakeholders of regression test status

