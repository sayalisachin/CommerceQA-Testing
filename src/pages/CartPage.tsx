/**
 * Shopping Cart Page Component
 */

import { Link } from 'react-router-dom'
import { ShoppingCart, ChevronLeft } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { CartItem } from '../components/cart/CartItem'
import { CartSummary } from '../components/cart/CartSummary'
import { useProducts } from '../hooks/useProducts'
import { calculateFinalPrice } from '../utils/helpers'

export const CartPage = () => {
  const { items, clearCart } = useCart()
  const { allProducts } = useProducts()

  // Calculate subtotal
  const subtotal = items.reduce((sum, item) => {
    const product = allProducts.find((p) => p.id === item.productId)
    if (!product) return sum
    const finalPrice = calculateFinalPrice(product.price, product.discount)
    return sum + finalPrice * item.quantity
  }, 0)

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <ShoppingCart className="mx-auto mb-4 text-gray-400" size={64} />
            <h1 className="text-3xl font-bold text-gray-900 mb-3">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-8">Looks like you haven't added any products yet.</p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-bold transition"
            >
              <ChevronLeft size={20} />
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {items.map((item) => (
                <CartItem key={item.productId} cartItem={item} />
              ))}
            </div>

            <button
              onClick={clearCart}
              className="mt-6 text-red-600 hover:text-red-700 font-semibold transition"
            >
              Clear Cart
            </button>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-sm p-6 h-fit sticky top-24">
            <h2 className="text-lg font-bold text-gray-900 mb-6">Order Summary</h2>
            
            <CartSummary subtotal={subtotal} showBreakdown />

            <Link
              to="/checkout"
              className="w-full mt-6 bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-lg font-bold transition block text-center"
            >
              Proceed to Checkout
            </Link>

            <Link
              to="/products"
              className="w-full mt-3 bg-gray-100 hover:bg-gray-200 text-gray-900 py-3 rounded-lg font-bold transition block text-center"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
