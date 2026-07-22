/**
 * Wishlist Page Component
 */

import { Link } from 'react-router-dom'
import { Heart, ChevronLeft } from 'lucide-react'
import { useWishlist } from '../context/WishlistContext'
import { ProductCard } from '../components/common/ProductCard'
import { useProducts } from '../hooks/useProducts'

export const WishlistPage = () => {
  const { items } = useWishlist()
  const { allProducts } = useProducts()

  const wishlistProducts = items
    .map((item) => allProducts.find((p) => p.id === item.productId))
    .filter(Boolean)

  if (wishlistProducts.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <Heart className="mx-auto mb-4 text-gray-400" size={64} />
            <h1 className="text-3xl font-bold text-gray-900 mb-3">Your Wishlist is Empty</h1>
            <p className="text-gray-600 mb-8">Add products to your wishlist to save them for later.</p>
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
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Wishlist</h1>
        <p className="text-gray-600 mb-8">{wishlistProducts.length} items saved</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {wishlistProducts.map((product) => product && (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
