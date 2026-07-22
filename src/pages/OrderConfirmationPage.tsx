/**
 * Order Confirmation Page Component
 */

import { useParams, Link } from 'react-router-dom'
import { CheckCircle, Package, Truck, Home } from 'lucide-react'
import { useUserProfile } from '../hooks/useUserProfile'
import { formatPrice, formatDate } from '../utils/helpers'

export const OrderConfirmationPage = () => {
  const { orderId } = useParams<{ orderId: string }>()
  const { profile } = useUserProfile()

  // Find the order in user profile
  const order = profile?.orders.find((o) => o.id === orderId)

  if (!order) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-4">Order not found</p>
          <Link to="/" className="text-primary-600 hover:text-primary-700 font-semibold">
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Success Message */}
        <div className="text-center mb-12">
          <CheckCircle className="mx-auto mb-4 text-green-600" size={64} />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
          <p className="text-gray-600 text-lg">
            Thank you for your purchase. Your order has been placed successfully.
          </p>
        </div>

        {/* Order Details Card */}
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-6">
          <div className="border-b pb-6 mb-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Order ID</p>
                <p className="text-lg font-bold text-gray-900">{order.id}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Order Date</p>
                <p className="text-lg font-bold text-gray-900">{formatDate(order.date)}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Order Total</p>
                <p className="text-lg font-bold text-primary-600">{formatPrice(order.total)}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Status</p>
                <p className="text-lg font-bold text-orange-600 capitalize">{order.status}</p>
              </div>
            </div>
          </div>

          {/* Items */}
          <div className="mb-6">
            <h2 className="font-bold text-gray-900 mb-3">Order Items</h2>
            <div className="space-y-3">
              {order.items.map((item) => (
                <div key={item.productId} className="flex justify-between items-center py-2 border-b">
                  <div>
                    <p className="font-semibold text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                  <p className="font-semibold text-gray-900">{formatPrice(item.price * item.quantity)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-gray-50 rounded p-4 mb-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal:</span>
                <span className="font-semibold">{formatPrice(order.subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax (10%):</span>
                <span className="font-semibold">{formatPrice(order.tax)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping:</span>
                <span className="font-semibold">{order.shipping === 0 ? 'Free' : formatPrice(order.shipping)}</span>
              </div>
              <div className="border-t pt-2 flex justify-between text-lg">
                <span className="font-bold">Total:</span>
                <span className="font-bold text-primary-600">{formatPrice(order.total)}</span>
              </div>
            </div>
          </div>

          {/* Shipping Info */}
          <div className="mb-6">
            <h2 className="font-bold text-gray-900 mb-3">Shipping Address</h2>
            <div className="bg-blue-50 border border-blue-200 rounded p-4">
              <p className="font-semibold text-gray-900">{order.shippingInfo.fullName}</p>
              <p className="text-gray-600">{order.shippingInfo.address}</p>
              <p className="text-gray-600">
                {order.shippingInfo.city}, {order.shippingInfo.state} {order.shippingInfo.postalCode}
              </p>
              <p className="text-gray-600">{order.shippingInfo.country}</p>
              <p className="text-sm text-gray-500 mt-2">Phone: {order.shippingInfo.phone}</p>
              <p className="text-sm text-gray-500">Email: {order.shippingInfo.email}</p>
            </div>
          </div>

          {/* What's Next */}
          <div className="bg-green-50 border border-green-200 rounded p-4 mb-6">
            <h3 className="font-bold text-gray-900 mb-3">What's Next?</h3>
            <div className="space-y-3">
              <div className="flex gap-3">
                <Package className="text-green-600 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-gray-900">Order Processing</p>
                  <p className="text-sm text-gray-600">Your order is being prepared for shipment.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Truck className="text-green-600 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-gray-900">Shipment</p>
                  <p className="text-sm text-gray-600">We'll send you tracking information via email.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Home className="text-green-600 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-gray-900">Delivery</p>
                  <p className="text-sm text-gray-600">Expected delivery within 5-7 business days.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Link
            to="/products"
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-900 py-3 rounded-lg font-bold transition block text-center"
          >
            Continue Shopping
          </Link>
          <Link
            to="/profile"
            className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-lg font-bold transition block text-center"
          >
            View Orders
          </Link>
        </div>
      </div>
    </div>
  )
}
