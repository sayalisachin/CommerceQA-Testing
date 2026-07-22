# CommerceQA - Smoke Test Suite

**Document Version:** 1.0  
**Created Date:** July 22, 2026  
**Test Execution Date:** ________________  
**Status:** Ready for Execution

---

## Smoke Testing Overview

**Objective:** Verify critical workflows are functional after build deployment. Smoke tests validate the most important user journeys that indicate basic application health.

**Scope:** 5 core workflows covering:
- Application startup and basic page loads
- Product browsing and filtering
- Shopping cart operations  
- Checkout flow
- Order completion

**Acceptance Criteria:** All 5 smoke tests must PASS to declare build as stable for full QA testing.

---

## SMOKE TEST SUITE

---

### ST-001: Application Startup & Home Page Load

**Test ID:** ST-001  
**Category:** Smoke Test - Critical Path  
**Priority:** P0  

**Objective:** Verify application starts and home page loads without critical errors.

| Aspect | Details |
|---|---|
| **Preconditions** | Application server running at http://localhost:5173 |
| **Test Steps** | 1. Open browser 2. Navigate to http://localhost:5173 3. Wait for page load 4. Observe page rendering |
| **Expected Result** | 1. Home page loads within 3 seconds 2. Hero banner displays correctly 3. Featured products section visible 4. No JavaScript console errors 5. All images loaded |
| **Pass Criteria** | Home page fully rendered, no critical errors |
| **Test Data** | URL: http://localhost:5173 |
| **Test Execution** | |
| **Steps Completed** | ☐ All steps passed ☐ Test blocked ☐ Test failed |
| **Actual Result** | _________________ |
| **Status** | ☐ PASS ☐ FAIL ☐ BLOCKED |
| **Notes** | _________________ |

---

### ST-002: Product Search & Filtering Workflow

**Test ID:** ST-002  
**Category:** Smoke Test - Core Feature  
**Priority:** P0  

**Objective:** Verify basic product search and filtering functionality.

| Aspect | Details |
|---|---|
| **Preconditions** | Home page loaded successfully |
| **Test Steps** | 1. Click "Products" in navigation 2. Wait for products to load 3. Search for "headphones" using search bar 4. Verify results displayed 5. Apply price filter ($0-$200) 6. Verify filtered results 7. Change sort to "Price: Low to High" 8. Verify sort applied |
| **Expected Result** | 1. Product listing page loads 2. Search returns results matching "headphones" 3. Price filter reduces product count 4. Sort order changes correctly 5. All operations work without errors |
| **Pass Criteria** | Search, filter, and sort all functional |
| **Test Data** | Search: "headphones", Price: $0-$200, Sort: Price ascending |
| **Test Execution** | |
| **Steps Completed** | ☐ All steps passed ☐ Test blocked ☐ Test failed |
| **Actual Result** | _________________ |
| **Status** | ☐ PASS ☐ FAIL ☐ BLOCKED |
| **Notes** | _________________ |

---

### ST-003: Add to Cart & Cart Management

**Test ID:** ST-003  
**Category:** Smoke Test - Core Feature  
**Priority:** P0  

**Objective:** Verify shopping cart operations.

| Aspect | Details |
|---|---|
| **Preconditions** | Product listing page displayed |
| **Test Steps** | 1. Click on any product to view details 2. Set quantity to 2 3. Click "Add to Cart" 4. Verify success message 5. Verify cart icon shows count 6. Navigate to /cart 7. Verify product in cart 8. Verify quantity is 2 9. Update quantity to 1 10. Verify total recalculates |
| **Expected Result** | 1. Product added to cart successfully 2. Success message displays 3. Cart icon updates 4. Cart page shows product 5. Quantity updates work 6. Totals calculate correctly |
| **Pass Criteria** | All cart operations functional |
| **Test Data** | Product: Any available product, Quantity: 2 then 1 |
| **Test Execution** | |
| **Steps Completed** | ☐ All steps passed ☐ Test blocked ☐ Test failed |
| **Actual Result** | _________________ |
| **Status** | ☐ PASS ☐ FAIL ☐ BLOCKED |
| **Notes** | _________________ |

---

### ST-004: Checkout Process - Shipping & Payment

**Test ID:** ST-004  
**Category:** Smoke Test - Critical Path  
**Priority:** P0  

**Objective:** Verify checkout form submission and basic payment flow.

| Aspect | Details |
|---|---|
| **Preconditions** | Cart contains at least 1 product |
| **Test Steps** | 1. Navigate to /cart 2. Click "Proceed to Checkout" 3. Verify checkout page loads 4. Fill shipping form: Full Name, Email, Phone, Address, City, State, Postal Code 5. Click "Continue to Payment" 6. Verify payment form displays 7. Fill payment form: Name, Card, Expiry, CVV 8. Click "Place Order" 9. Wait for processing (2-3 seconds) 10. Verify order confirmation page displays |
| **Expected Result** | 1. Checkout page loads 2. Shipping form accepts input without validation errors 3. Payment form displays after shipping 4. Payment form accepts input 5. Order is created successfully 6. Confirmation page displays with order ID |
| **Pass Criteria** | Complete checkout flow works without errors |
| **Test Data** | Shipping: Complete valid data, Payment: Test card 4532015112830366 |
| **Test Execution** | |
| **Steps Completed** | ☐ All steps passed ☐ Test blocked ☐ Test failed |
| **Actual Result** | _________________ |
| **Status** | ☐ PASS ☐ FAIL ☐ BLOCKED |
| **Notes** | _________________ |

---

### ST-005: Order Confirmation & Profile Order History

**Test ID:** ST-005  
**Category:** Smoke Test - Post-Purchase  
**Priority:** P0  

**Objective:** Verify order confirmation page and order history in profile.

| Aspect | Details |
|---|---|
| **Preconditions** | Order just completed from ST-004 |
| **Test Steps** | 1. Verify on order confirmation page 2. Confirm order ID is displayed (format: ORD + 10 characters) 3. Verify order items listed 4. Verify order total is displayed 5. Verify shipping address shown 6. Navigate to /profile 7. Verify order appears in order history 8. Verify order ID, date, and total match confirmation page |
| **Expected Result** | 1. Order confirmation page displays all details 2. Order ID follows correct format 3. Order summary accurate 4. Cart is cleared 5. Profile shows order in history 6. Order data persisted correctly |
| **Pass Criteria** | Order confirmation page functional and order stored in profile |
| **Test Data** | Order from ST-004 |
| **Test Execution** | |
| **Steps Completed** | ☐ All steps passed ☐ Test blocked ☐ Test failed |
| **Actual Result** | _________________ |
| **Status** | ☐ PASS ☐ FAIL ☐ BLOCKED |
| **Notes** | _________________ |

---

## SMOKE TEST EXECUTION LOG

**Test Execution Date:** ________________  
**Executed By:** ________________  
**Environment:** Local (http://localhost:5173)  
**Browser:** ________________  
**Browser Version:** ________________  
**Device:** ________________  

### Test Results Summary

| Test ID | Test Name | Result | Notes |
|---|---|---|---|
| ST-001 | Application Startup & Home Page Load | ☐ PASS ☐ FAIL ☐ BLOCKED | _________________ |
| ST-002 | Product Search & Filtering | ☐ PASS ☐ FAIL ☐ BLOCKED | _________________ |
| ST-003 | Add to Cart & Cart Management | ☐ PASS ☐ FAIL ☐ BLOCKED | _________________ |
| ST-004 | Checkout Process | ☐ PASS ☐ FAIL ☐ BLOCKED | _________________ |
| ST-005 | Order Confirmation & Profile | ☐ PASS ☐ FAIL ☐ BLOCKED | _________________ |

### Overall Result

**Total Tests:** 5  
**Passed:** ___  
**Failed:** ___  
**Blocked:** ___  
**Pass Rate:** ____%  

**Build Status:** ☐ STABLE ☐ UNSTABLE ☐ BLOCKED

---

## Smoke Test Failures - Issue Log

| Failure # | Test ID | Issue | Severity | Notes |
|---|---|---|---|---|
| F1 | _________________ | _________________ | _________________ | _________________ |
| F2 | _________________ | _________________ | _________________ | _________________ |
| F3 | _________________ | _________________ | _________________ | _________________ |

---

## Smoke Test Sign-Off

**Executed By:** _________________ (QA Tester)  
**Date:** _________________  
**Status:** ☐ PASSED - Build approved for full QA ☐ FAILED - Build requires fixes ☐ BLOCKED - Cannot test  

**Sign-Off:** _________________ Date: _________________

---

**END OF SMOKE TEST SUITE**

---

## Quick Reference: What Each Smoke Test Validates

| Test | Validates | Blocks If Failed |
|---|---|---|
| ST-001 | Basic app functionality, static content rendering | Entire application |
| ST-002 | Search/filter engine, product data loading | Product discovery features |
| ST-003 | State management (cart context), localStorage | Shopping functionality |
| ST-004 | Form validation, navigation flow, order creation | Checkout process |
| ST-005 | Data persistence, order history, profile functionality | Order management |

