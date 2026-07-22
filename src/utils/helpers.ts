/**
 * Utility Functions for CommerceQA
 */

/**
 * Format price to currency
 */
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price)
}

/**
 * Calculate discount amount
 */
export const calculateDiscount = (price: number, discountPercent: number): number => {
  return Math.round((price * discountPercent) / 100)
}

/**
 * Calculate final price after discount
 */
export const calculateFinalPrice = (price: number, discountPercent: number): number => {
  return price - calculateDiscount(price, discountPercent)
}

/**
 * Calculate tax (10% GST)
 */
export const calculateTax = (amount: number): number => {
  return Math.round(amount * 0.1)
}

/**
 * Calculate shipping charges based on total
 */
export const calculateShipping = (subtotal: number): number => {
  if (subtotal === 0) return 0
  if (subtotal > 200) return 0 // Free shipping over $200
  if (subtotal > 100) return 5
  return 10
}

/**
 * Generate random order ID
 */
export const generateOrderId = (): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let orderId = 'ORD'
  for (let i = 0; i < 10; i++) {
    orderId += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return orderId
}

/**
 * Validate email address
 */
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Validate phone number (10-15 digits)
 */
export const validatePhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^[0-9]{10,15}$/
  return phoneRegex.test(phone.replace(/\D/g, ''))
}

/**
 * Validate postal code (5-10 alphanumeric characters)
 */
export const validatePostalCode = (code: string): boolean => {
  const postalRegex = /^[A-Z0-9]{5,10}$/i
  return postalRegex.test(code)
}

/**
 * Validate credit card number (Luhn algorithm)
 */
export const validateCardNumber = (cardNumber: string): boolean => {
  const digits = cardNumber.replace(/\D/g, '')
  if (digits.length < 13 || digits.length > 19) return false
  
  let sum = 0
  let isEven = false
  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = parseInt(digits[i], 10)
    if (isEven) {
      digit *= 2
      if (digit > 9) {
        digit -= 9
      }
    }
    sum += digit
    isEven = !isEven
  }
  return sum % 10 === 0
}

/**
 * Validate expiry date (MM/YY format)
 */
export const validateExpiryDate = (expiryDate: string): boolean => {
  const [month, year] = expiryDate.split('/')
  if (!month || !year) return false
  
  const monthNum = parseInt(month, 10)
  const yearNum = parseInt(year, 10)
  
  if (monthNum < 1 || monthNum > 12) return false
  if (yearNum < 24) return false // Assuming current year is 2024 or later
  
  return true
}

/**
 * Validate CVV (3-4 digits)
 */
export const validateCVV = (cvv: string): boolean => {
  return /^\d{3,4}$/.test(cvv)
}

/**
 * Truncate text to specific length with ellipsis
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + '...'
}

/**
 * Format date to readable format
 */
export const formatDate = (date: string | Date): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  return dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
