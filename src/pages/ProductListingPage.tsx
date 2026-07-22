/**
 * Product Listing Page Component
 * Browse and filter products
 */

import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Filter, ChevronDown } from 'lucide-react'
import { ProductCard } from '../components/common/ProductCard'
import { useProducts, useCategories } from '../hooks/useProducts'

export const ProductListingPage = () => {
  const [searchParams] = useSearchParams()
  const [showFilters, setShowFilters] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all')
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'rating' | 'newest'>('newest')
  const [priceRange, setPriceRange] = useState([0, 500])

  const searchQuery = searchParams.get('search') || ''
  const categories = useCategories()

  const { products, total } = useProducts({
    category: selectedCategory === 'all' ? undefined : selectedCategory,
    searchQuery,
    sortBy
  })

  const filteredByPrice = useMemo(() => {
    return products.filter(
      (p) => calculateFinalPrice(p.price, p.discount) >= priceRange[0] &&
             calculateFinalPrice(p.price, p.discount) <= priceRange[1]
    )
  }, [products, priceRange])

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
  }

  const handleSortChange = (newSort: typeof sortBy) => {
    setSortBy(newSort)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Products</h1>
          <p className="text-gray-600">
            {searchQuery && `Results for "${searchQuery}" `}
            {selectedCategory !== 'all' && `in ${selectedCategory}`}
            {total > 0 && ` (${filteredByPrice.length} products found)`}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className={`lg:block ${showFilters ? 'block' : 'hidden'}`}>
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Filter size={20} /> Filters
              </h2>

              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="font-bold mb-3 text-gray-900">Category</h3>
                <div className="space-y-2">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      value="all"
                      checked={selectedCategory === 'all'}
                      onChange={(e) => handleCategoryChange(e.target.value)}
                      className="w-4 h-4 text-primary-600"
                    />
                    <span className="ml-3 text-gray-700">All Categories</span>
                  </label>
                  {categories.map((category) => (
                    <label key={category} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        value={category}
                        checked={selectedCategory === category}
                        onChange={(e) => handleCategoryChange(e.target.value)}
                        className="w-4 h-4 text-primary-600"
                      />
                      <span className="ml-3 text-gray-700">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="mb-6">
                <h3 className="font-bold mb-3 text-gray-900">Price Range</h3>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm text-gray-600">Min: ${priceRange[0]}</label>
                    <input
                      type="range"
                      min="0"
                      max="500"
                      step="10"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">Max: ${priceRange[1]}</label>
                    <input
                      type="range"
                      min="0"
                      max="500"
                      step="10"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>

              {/* Sort By */}
              <div>
                <h3 className="font-bold mb-3 text-gray-900">Sort By</h3>
                <select
                  value={sortBy}
                  onChange={(e) => handleSortChange(e.target.value as typeof sortBy)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="newest">Newest</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 mb-6 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
            >
              <Filter size={20} />
              Filters
              <ChevronDown size={16} className={`ml-auto transition ${showFilters ? 'rotate-180' : ''}`} />
            </button>

            {/* Results */}
            {filteredByPrice.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredByPrice.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg">
                <p className="text-lg text-gray-600">No products found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// Import helper function at the top
import { calculateFinalPrice } from '../utils/helpers'
