/**
 * Cart Item Component
 * Individual cart item with quantity controls
 */

import { Trash2, Plus, Minus } from 'lucide-react'
import { CartItem as CartItemType } from '../../types'
import { formatPrice, calculateFinalPrice } from '../../utils/helpers'
import { useCart } from '../../context/CartContext'
import { useProductById } from '../../hooks/useProducts'

interface CartItemProps {
  cartItem: CartItemType
}

export const CartItem = ({ cartItem }: CartItemProps) => {
  const { removeFromCart, updateQuantity } = useCart()
  const product = useProductById(cartItem.productId)

  if (!product) return null

  const finalPrice = calculateFinalPrice(product.price, product.discount)
  const itemTotal = finalPrice * cartItem.quantity

  const handleIncrement = () => {
    if (cartItem.quantity < product.stock) {
      updateQuantity(product.id, cartItem.quantity + 1)
    }
  }

  const handleDecrement = () => {
    if (cartItem.quantity > 1) {
      updateQuantity(product.id, cartItem.quantity - 1)
    } else {
      removeFromCart(product.id)
    }
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 flex gap-4">
      {/* Product Image */}
      <div className="flex-shrink-0 w-24 h-24 bg-gray-100 rounded">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover rounded"
          onError={(e) => {
            e.currentTarget.src = 'https://via.placeholder.com/100?text=' + encodeURIComponent(product.title)
          }}
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-gray-900 truncate">{product.title}</h3>
        <p className="text-sm text-gray-500 mb-2">{product.category}</p>
        
        {/* Price */}
        <div className="flex items-baseline gap-2 mb-3">
          <span className="font-bold text-gray-900">{formatPrice(finalPrice)}</span>
          {product.discount > 0 && (
            <span className="text-sm text-gray-500 line-through">
              {formatPrice(product.price)}
            </span>
          )}
        </div>

        {/* Quantity Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleDecrement}
            className="p-1 border border-gray-300 rounded hover:bg-gray-100 transition"
            aria-label="Decrease quantity"
          >
            <Minus size={16} />
          </button>
          <input
            type="number"
            min="1"
            max={product.stock}
            value={cartItem.quantity}
            onChange={(e) => {
              const qty = parseInt(e.target.value, 10)
              if (qty > 0 && qty <= product.stock) {
                updateQuantity(product.id, qty)
              }
            }}
            className="w-12 border border-gray-300 rounded text-center py-1"
          />
          <button
            onClick={handleIncrement}
            disabled={cartItem.quantity >= product.stock}
            className="p-1 border border-gray-300 rounded hover:bg-gray-100 transition disabled:opacity-50"
            aria-label="Increase quantity"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>

      {/* Item Total and Remove */}
      <div className="flex flex-col items-end justify-between">
        <span className="font-bold text-lg text-gray-900">
          {formatPrice(itemTotal)}
        </span>
        <button
          onClick={() => removeFromCart(product.id)}
          className="text-red-500 hover:text-red-700 transition p-2"
          aria-label="Remove item"
        >
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  )
}
