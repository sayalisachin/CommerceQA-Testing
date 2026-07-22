/**
 * ProductCard Component
 * Displays a product in card format
 */

import { Link } from 'react-router-dom'
import { ShoppingCart, Heart } from 'lucide-react'
import { Product } from '../../types'
import { formatPrice, calculateFinalPrice } from '../../utils/helpers'
import { useCart } from '../../context/CartContext'
import { useWishlist } from '../../context/WishlistContext'
import { useState } from 'react'

interface ProductCardProps {
  product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
  const [showAddedMessage, setShowAddedMessage] = useState(false)

  const isFavorited = isInWishlist(product.id)
  const finalPrice = calculateFinalPrice(product.price, product.discount)

  const handleAddToCart = () => {
    addToCart(product.id, 1)
    setShowAddedMessage(true)
    setTimeout(() => setShowAddedMessage(false), 2000)
  }

  const handleToggleWishlist = () => {
    if (isFavorited) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product.id)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden flex flex-col h-full">
      {/* Image Container */}
      <Link to={`/product/${product.id}`} className="relative overflow-hidden bg-gray-200 h-56">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover hover:scale-110 transition duration-300"
          onError={(e) => {
            e.currentTarget.src = 'https://via.placeholder.com/300x200?text=' + encodeURIComponent(product.title)
          }}
        />
        {product.discount > 0 && (
          <div className="absolute top-3 right-3 bg-orange-500 text-white px-3 py-1 rounded text-sm font-bold">
            -{product.discount}%
          </div>
        )}
        {product.stock === 0 && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <p className="text-white font-bold text-lg">Out of Stock</p>
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col">
        {/* Category Badge */}
        <span className="text-xs font-semibold text-primary-600 mb-2 uppercase">
          {product.category}
        </span>

        {/* Title */}
        <Link
          to={`/product/${product.id}`}
          className="font-semibold text-gray-800 hover:text-primary-600 transition line-clamp-2 mb-2"
        >
          {product.title}
        </Link>

        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400">
            {'★'.repeat(Math.round(product.rating))}
            {'☆'.repeat(5 - Math.round(product.rating))}
          </div>
          <span className="text-xs text-gray-500 ml-2">
            ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="mb-4 flex-1">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-gray-900">
              {formatPrice(finalPrice)}
            </span>
            {product.discount > 0 && (
              <span className="text-sm text-gray-500 line-through">
                {formatPrice(product.price)}
              </span>
            )}
          </div>
        </div>

        {/* Stock Status */}
        <div className="mb-3 text-sm">
          {product.stock > 10 ? (
            <span className="text-green-600 font-semibold">In Stock</span>
          ) : product.stock > 0 ? (
            <span className="text-orange-600 font-semibold">Only {product.stock} left</span>
          ) : (
            <span className="text-red-600 font-semibold">Out of Stock</span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className="flex-1 bg-primary-600 hover:bg-primary-700 disabled:bg-gray-300 text-white py-2 rounded-lg font-semibold transition flex items-center justify-center gap-2"
          >
            <ShoppingCart size={18} />
            <span className="hidden sm:inline">Add to Cart</span>
          </button>
          <button
            onClick={handleToggleWishlist}
            className={`p-2 rounded-lg border transition ${
              isFavorited
                ? 'bg-red-50 border-red-300 text-red-600'
                : 'border-gray-300 text-gray-400 hover:text-red-600'
            }`}
          >
            <Heart size={20} fill={isFavorited ? 'currentColor' : 'none'} />
          </button>
        </div>

        {/* Added Message */}
        {showAddedMessage && (
          <div className="mt-2 text-center text-sm text-green-600 font-semibold">
            ✓ Added to cart
          </div>
        )}
      </div>
    </div>
  )
}
