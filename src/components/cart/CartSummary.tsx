/**
 * Cart Summary Component
 * Shows subtotal, tax, shipping, and total
 */

import { formatPrice, calculateTax, calculateShipping } from '../../utils/helpers'

interface CartSummaryProps {
  subtotal: number
  discount?: number
  showBreakdown?: boolean
}

export const CartSummary = ({ subtotal, discount = 0, showBreakdown = true }: CartSummaryProps) => {
  const tax = calculateTax(subtotal - discount)
  const shipping = calculateShipping(subtotal - discount)
  const total = subtotal - discount + tax + shipping

  if (!showBreakdown) {
    return (
      <div className="text-2xl font-bold text-gray-900">
        {formatPrice(total)}
      </div>
    )
  }

  return (
    <div className="space-y-3">
      <div className="flex justify-between">
        <span className="text-gray-600">Subtotal:</span>
        <span className="font-semibold text-gray-900">{formatPrice(subtotal)}</span>
      </div>
      
      {discount > 0 && (
        <div className="flex justify-between text-green-600">
          <span>Discount:</span>
          <span className="font-semibold">-{formatPrice(discount)}</span>
        </div>
      )}

      <div className="flex justify-between">
        <span className="text-gray-600">Tax (10%):</span>
        <span className="font-semibold text-gray-900">{formatPrice(tax)}</span>
      </div>

      <div className="flex justify-between">
        <span className="text-gray-600">Shipping:</span>
        <span className="font-semibold text-gray-900">
          {shipping === 0 ? 'Free' : formatPrice(shipping)}
        </span>
      </div>

      <div className="border-t pt-3 flex justify-between bg-gray-50 -mx-4 px-4 py-3">
        <span className="font-bold text-gray-900">Total:</span>
        <span className="font-bold text-lg text-primary-600">{formatPrice(total)}</span>
      </div>
    </div>
  )
}
