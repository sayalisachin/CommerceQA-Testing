/**
 * Product Details Page Component
 */

import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ChevronLeft, ShoppingCart, Heart, Share2, Truck, RotateCcw } from 'lucide-react'
import { useProductById } from '../hooks/useProducts'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'
import { formatPrice, calculateFinalPrice } from '../utils/helpers'
import { Alert } from '../components/common/Alert'

export const ProductDetailsPage = () => {
  const { productId } = useParams<{ productId: string }>()
  const navigate = useNavigate()
  const product = useProductById(productId || '')
  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
  const [quantity, setQuantity] = useState(1)
  const [showAddedAlert, setShowAddedAlert] = useState(false)
  const [alertType, setAlertType] = useState<'success' | 'error'>('success')
  const [alertMessage, setAlertMessage] = useState('')

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-4">Product not found</p>
          <button
            onClick={() => navigate('/products')}
            className="text-primary-600 hover:text-primary-700 font-semibold"
          >
            Back to Products
          </button>
        </div>
      </div>
    )
  }

  const finalPrice = calculateFinalPrice(product.price, product.discount)
  const isFavorited = isInWishlist(product.id)

  const handleAddToCart = () => {
    if (quantity > product.stock) {
      setAlertType('error')
      setAlertMessage(`Only ${product.stock} items available`)
      setShowAddedAlert(true)
      setTimeout(() => setShowAddedAlert(false), 3000)
      return
    }

    addToCart(product.id, quantity)
    setAlertType('success')
    setAlertMessage(`Added ${quantity} item(s) to cart`)
    setShowAddedAlert(true)
    setTimeout(() => setShowAddedAlert(false), 3000)
  }

  const handleToggleWishlist = () => {
    if (isFavorited) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product.id)
    }
  }

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity <= product.stock) {
      setQuantity(newQuantity)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-8 font-semibold"
        >
          <ChevronLeft size={20} />
          Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-lg p-6 md:p-8">
          {/* Product Image */}
          <div className="flex items-center justify-center bg-gray-100 rounded-lg p-6 min-h-96 lg:min-h-full">
            <img
              src={product.image}
              alt={product.title}
              className="max-w-full max-h-96"
              onError={(e) => {
                e.currentTarget.src = 'https://via.placeholder.com/400x400?text=' + encodeURIComponent(product.title)
              }}
            />
          </div>

          {/* Product Details */}
          <div>
            {/* Category Badge */}
            <span className="text-xs font-bold text-primary-600 uppercase mb-3 inline-block">
              {product.category}
            </span>

            {/* Title and Rating */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {product.title}
            </h1>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex text-yellow-400 text-lg">
                {'★'.repeat(Math.round(product.rating))}
                {'☆'.repeat(5 - Math.round(product.rating))}
              </div>
              <span className="text-gray-600">
                ({product.reviews} reviews)
              </span>
            </div>

            {/* Price Section */}
            <div className="mb-6 pb-6 border-b">
              <div className="flex items-baseline gap-3 mb-3">
                <span className="text-3xl font-bold text-gray-900">
                  {formatPrice(finalPrice)}
                </span>
                {product.discount > 0 && (
                  <>
                    <span className="text-lg text-gray-500 line-through">
                      {formatPrice(product.price)}
                    </span>
                    <span className="text-lg font-bold text-green-600">
                      Save {product.discount}%
                    </span>
                  </>
                )}
              </div>
              <p className="text-sm text-gray-600">Inclusive of all taxes</p>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h2 className="font-bold text-gray-900 mb-2">Description</h2>
              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Specifications */}
            {product.specifications && (
              <div className="mb-6 pb-6 border-b">
                <h2 className="font-bold text-gray-900 mb-3">Specifications</h2>
                <div className="space-y-2">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between text-sm">
                      <span className="text-gray-600">{key}:</span>
                      <span className="text-gray-900 font-semibold">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Stock Status */}
            <div className="mb-6 pb-6 border-b">
              <p className={`font-semibold ${
                product.stock > 10
                  ? 'text-green-600'
                  : product.stock > 0
                  ? 'text-orange-600'
                  : 'text-red-600'
              }`}>
                {product.stock > 10
                  ? 'In Stock'
                  : product.stock > 0
                  ? `Only ${product.stock} left`
                  : 'Out of Stock'}
              </p>
            </div>

            {/* Quantity Selector */}
            {product.stock > 0 && (
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Quantity
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg w-fit">
                  <button
                    onClick={() => handleQuantityChange(quantity - 1)}
                    className="px-3 py-2 hover:bg-gray-100 transition"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    min="1"
                    max={product.stock}
                    value={quantity}
                    onChange={(e) => handleQuantityChange(parseInt(e.target.value, 10))}
                    className="w-16 text-center py-2 border-0 focus:outline-none"
                  />
                  <button
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className="px-3 py-2 hover:bg-gray-100 transition"
                  >
                    +
                  </button>
                </div>
              </div>
            )}

            {/* Alerts */}
            {showAddedAlert && (
              <div className="mb-6">
                <Alert
                  type={alertType}
                  message={alertMessage}
                  onClose={() => setShowAddedAlert(false)}
                />
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-3 mb-6">
              <button
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className="flex-1 bg-primary-600 hover:bg-primary-700 disabled:bg-gray-300 text-white py-3 rounded-lg font-bold transition flex items-center justify-center gap-2"
              >
                <ShoppingCart size={20} />
                Add to Cart
              </button>
              <button
                onClick={handleToggleWishlist}
                className={`px-4 py-3 rounded-lg border transition ${
                  isFavorited
                    ? 'bg-red-50 border-red-300 text-red-600'
                    : 'border-gray-300 text-gray-600 hover:text-red-600'
                }`}
              >
                <Heart size={20} fill={isFavorited ? 'currentColor' : 'none'} />
              </button>
              <button className="px-4 py-3 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 transition">
                <Share2 size={20} />
              </button>
            </div>

            {/* Info Boxes */}
            <div className="space-y-3">
              <div className="flex gap-3 text-sm text-gray-700">
                <Truck className="flex-shrink-0 text-primary-600" size={20} />
                <div>
                  <p className="font-semibold">Free Shipping</p>
                  <p className="text-gray-600">On orders over $200</p>
                </div>
              </div>
              <div className="flex gap-3 text-sm text-gray-700">
                <RotateCcw className="flex-shrink-0 text-primary-600" size={20} />
                <div>
                  <p className="font-semibold">30-Day Returns</p>
                  <p className="text-gray-600">No questions asked</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
