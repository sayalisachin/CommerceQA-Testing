/**
 * Home Page Component
 * Displays featured products, categories, and promotional content
 */

import { Link } from 'react-router-dom'
import { ChevronRight, Zap, TrendingUp, Award } from 'lucide-react'
import { ProductCard } from '../components/common/ProductCard'
import { useProducts } from '../hooks/useProducts'

export const HomePage = () => {
  const { allProducts } = useProducts()
  const featuredProducts = allProducts.slice(0, 8)
  const categories = Array.from(new Set(allProducts.map((p) => p.category)))

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to CommerceQA</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            Discover premium products across electronics, fashion, books, and more. Shop with confidence and enjoy hassle-free returns.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
          >
            Shop Now <ChevronRight size={20} />
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <Zap className="text-primary-600 mx-auto mb-4" size={32} />
            <h3 className="font-bold text-lg mb-2">Fast Shipping</h3>
            <p className="text-gray-600">Free shipping on orders over $200</p>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <Award className="text-primary-600 mx-auto mb-4" size={32} />
            <h3 className="font-bold text-lg mb-2">Quality Guaranteed</h3>
            <p className="text-gray-600">100% authentic products with warranty</p>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <TrendingUp className="text-primary-600 mx-auto mb-4" size={32} />
            <h3 className="font-bold text-lg mb-2">Best Prices</h3>
            <p className="text-gray-600">Competitive pricing and regular discounts</p>
          </div>
        </div>

        {/* Categories Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Link
                key={category}
                to={`/products?category=${category}`}
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition hover:scale-105 transform"
              >
                <div className="text-4xl mb-3">
                  {category === 'Electronics' && '🔌'}
                  {category === 'Fashion' && '👔'}
                  {category === 'Books' && '📚'}
                  {category === 'Shoes' && '👟'}
                  {category === 'Beauty' && '💄'}
                  {category === 'Accessories' && '⌚'}
                  {category === 'Home Appliances' && '🏠'}
                </div>
                <h3 className="font-bold text-gray-900">{category}</h3>
              </Link>
            ))}
          </div>
        </div>

        {/* Featured Products */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <Link
              to="/products"
              className="text-primary-600 hover:text-primary-700 font-semibold flex items-center gap-1"
            >
              View All <ChevronRight size={20} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-primary-50 py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to get exclusive deals and product updates.
          </p>
          <form className="flex max-w-md mx-auto gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <button
              type="submit"
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-semibold transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
