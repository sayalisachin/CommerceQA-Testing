/**
 * Checkout Page Component
 */

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { useUserProfile } from '../hooks/useUserProfile'
import { useProducts } from '../hooks/useProducts'
import { CartSummary } from '../components/cart/CartSummary'
import {
  validateEmail,
  validatePhoneNumber,
  validatePostalCode,
  validateCardNumber,
  validateExpiryDate,
  validateCVV,
  calculateFinalPrice,
  generateOrderId
} from '../utils/helpers'
import { ShippingInfo, Order, OrderItem } from '../types'

export const CheckoutPage = () => {
  const navigate = useNavigate()
  const { items, clearCart } = useCart()
  const { profile, addOrder } = useUserProfile()
  const { allProducts } = useProducts()

  const [step, setStep] = useState<'shipping' | 'payment'>('shipping')
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
    fullName: profile?.fullName || '',
    email: profile?.email || '',
    phone: profile?.phone || '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    country: 'United States'
  })
  const [paymentInfo, setPaymentInfo] = useState({
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isProcessing, setIsProcessing] = useState(false)

  // Calculate subtotal
  const subtotal = items.reduce((sum, item) => {
    const product = allProducts.find((p) => p.id === item.productId)
    if (!product) return sum
    const finalPrice = calculateFinalPrice(product.price, product.discount)
    return sum + finalPrice * item.quantity
  }, 0)

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-4">Your cart is empty</p>
          <button
            onClick={() => navigate('/cart')}
            className="text-primary-600 hover:text-primary-700 font-semibold"
          >
            Back to Cart
          </button>
        </div>
      </div>
    )
  }

  const validateShippingInfo = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!shippingInfo.fullName.trim()) newErrors.fullName = 'Full name is required'
    if (!validateEmail(shippingInfo.email)) newErrors.email = 'Valid email is required'
    if (!validatePhoneNumber(shippingInfo.phone)) newErrors.phone = 'Valid phone number is required'
    if (!shippingInfo.address.trim()) newErrors.address = 'Address is required'
    if (!shippingInfo.city.trim()) newErrors.city = 'City is required'
    if (!shippingInfo.state.trim()) newErrors.state = 'State is required'
    if (!validatePostalCode(shippingInfo.postalCode)) newErrors.postalCode = 'Valid postal code is required (5-10 characters)'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validatePaymentInfo = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!paymentInfo.cardName.trim()) newErrors.cardName = 'Cardholder name is required'
    if (!validateCardNumber(paymentInfo.cardNumber)) newErrors.cardNumber = 'Valid card number is required'
    if (!validateExpiryDate(paymentInfo.expiryDate)) newErrors.expiryDate = 'Valid expiry date (MM/YY) is required'
    if (!validateCVV(paymentInfo.cvv)) newErrors.cvv = 'Valid CVV (3-4 digits) is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setShippingInfo((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPaymentInfo((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleShippingSubmit = () => {
    if (validateShippingInfo()) {
      setStep('payment')
      window.scrollTo(0, 0)
    }
  }

  const handlePaymentSubmit = async () => {
    if (!validatePaymentInfo()) return

    setIsProcessing(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Create order
    const orderItems: OrderItem[] = items.map((item) => {
      const product = allProducts.find((p) => p.id === item.productId)!
      const finalPrice = calculateFinalPrice(product.price, product.discount)
      return {
        productId: product.id,
        title: product.title,
        quantity: item.quantity,
        price: finalPrice
      }
    })

    const order: Order = {
      id: generateOrderId(),
      date: new Date().toISOString(),
      items: orderItems,
      subtotal,
      tax: Math.round(subtotal * 0.1),
      discount: 0,
      shipping: subtotal > 200 ? 0 : subtotal > 100 ? 5 : 10,
      total: subtotal + Math.round(subtotal * 0.1) + (subtotal > 200 ? 0 : subtotal > 100 ? 5 : 10),
      shippingInfo,
      paymentMethod: `Card ending in ${paymentInfo.cardNumber.slice(-4)}`,
      status: 'processing'
    }

    if (profile) {
      addOrder(order)
    }

    clearCart()
    setIsProcessing(false)
    navigate(`/order-confirmation/${order.id}`)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-8 font-semibold"
        >
          <ChevronLeft size={20} />
          Back
        </button>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            {/* Step Indicator */}
            <div className="mb-8 flex items-center gap-4">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold ${step === 'shipping' || step === 'payment' ? 'bg-primary-600 text-white' : 'bg-gray-300 text-gray-600'}`}>
                1
              </div>
              <span className="font-semibold text-gray-900">Shipping</span>
              <div className="flex-1 h-1 bg-gray-300" />
              <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold ${step === 'payment' ? 'bg-primary-600 text-white' : 'bg-gray-300 text-gray-600'}`}>
                2
              </div>
              <span className="font-semibold text-gray-900">Payment</span>
            </div>



            {/* Shipping Form */}
            {step === 'shipping' && (
              <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Shipping Information</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={shippingInfo.fullName}
                      onChange={handleShippingChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                        errors.fullName ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.fullName && <p className="text-red-600 text-sm mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={shippingInfo.email}
                      onChange={handleShippingChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={shippingInfo.phone}
                    onChange={handleShippingChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={shippingInfo.address}
                    onChange={handleShippingChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                      errors.address ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.address && <p className="text-red-600 text-sm mt-1">{errors.address}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={shippingInfo.city}
                      onChange={handleShippingChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                        errors.city ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.city && <p className="text-red-600 text-sm mt-1">{errors.city}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      State *
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={shippingInfo.state}
                      onChange={handleShippingChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                        errors.state ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.state && <p className="text-red-600 text-sm mt-1">{errors.state}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Postal Code *
                    </label>
                    <input
                      type="text"
                      name="postalCode"
                      value={shippingInfo.postalCode}
                      onChange={handleShippingChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                        errors.postalCode ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.postalCode && <p className="text-red-600 text-sm mt-1">{errors.postalCode}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Country
                    </label>
                    <select
                      name="country"
                      value={shippingInfo.country}
                      onChange={handleShippingChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>United Kingdom</option>
                      <option>Australia</option>
                    </select>
                  </div>
                </div>

                <button
                  onClick={handleShippingSubmit}
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-lg font-bold transition mt-6"
                >
                  Continue to Payment
                </button>
              </div>
            )}

            {/* Payment Form */}
            {step === 'payment' && (
              <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Payment Information</h2>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Cardholder Name *
                  </label>
                  <input
                    type="text"
                    name="cardName"
                    value={paymentInfo.cardName}
                    onChange={handlePaymentChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                      errors.cardName ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.cardName && <p className="text-red-600 text-sm mt-1">{errors.cardName}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Card Number *
                  </label>
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    value={paymentInfo.cardNumber}
                    onChange={handlePaymentChange}
                    maxLength={19}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                      errors.cardNumber ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.cardNumber && <p className="text-red-600 text-sm mt-1">{errors.cardNumber}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Expiry Date (MM/YY) *
                    </label>
                    <input
                      type="text"
                      name="expiryDate"
                      placeholder="MM/YY"
                      value={paymentInfo.expiryDate}
                      onChange={handlePaymentChange}
                      maxLength={5}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                        errors.expiryDate ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.expiryDate && <p className="text-red-600 text-sm mt-1">{errors.expiryDate}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      CVV *
                    </label>
                    <input
                      type="text"
                      name="cvv"
                      placeholder="123"
                      value={paymentInfo.cvv}
                      onChange={handlePaymentChange}
                      maxLength={4}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                        errors.cvv ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.cvv && <p className="text-red-600 text-sm mt-1">{errors.cvv}</p>}
                  </div>
                </div>

                <div className="flex gap-3 pt-6">
                  <button
                    onClick={() => setStep('shipping')}
                    className="flex-1 border border-gray-300 text-gray-900 py-3 rounded-lg font-bold hover:bg-gray-50 transition"
                  >
                    Back
                  </button>
                  <button
                    onClick={handlePaymentSubmit}
                    disabled={isProcessing}
                    className="flex-1 bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white py-3 rounded-lg font-bold transition"
                  >
                    {isProcessing ? 'Processing...' : 'Place Order'}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-sm p-6 h-fit sticky top-24">
            <h2 className="text-lg font-bold text-gray-900 mb-6">Order Summary</h2>
            
            <CartSummary subtotal={subtotal} showBreakdown />
          </div>
        </div>
      </div>
    </div>
  )
}
