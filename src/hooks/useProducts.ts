/**
 * Custom Hook: useProducts
 * Manages product filtering, searching, and sorting
 */

import { useMemo, useState } from 'react'
import { Product } from '../types'
import { PRODUCTS } from '../data/products'

interface UseProductsOptions {
  category?: string
  searchQuery?: string
  sortBy?: 'price-asc' | 'price-desc' | 'rating' | 'newest'
}

export const useProducts = (options: UseProductsOptions = {}) => {
  const [products] = useState<Product[]>(PRODUCTS)

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products]

    // Filter by category
    if (options.category && options.category !== 'all') {
      result = result.filter((product) => product.category === options.category)
    }

    // Filter by search query
    if (options.searchQuery) {
      const query = options.searchQuery.toLowerCase()
      result = result.filter(
        (product) =>
          product.title.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
      )
    }

    // Sort
    if (options.sortBy) {
      switch (options.sortBy) {
        case 'price-asc':
          result.sort((a, b) => a.price - b.price)
          break
        case 'price-desc':
          result.sort((a, b) => b.price - a.price)
          break
        case 'rating':
          result.sort((a, b) => b.rating - a.rating)
          break
        case 'newest':
          // Assuming newer products have higher IDs
          result.sort((a, b) => parseInt(b.id) - parseInt(a.id))
          break
      }
    }

    return result
  }, [products, options.category, options.searchQuery, options.sortBy])

  return {
    products: filteredAndSortedProducts,
    allProducts: products,
    total: filteredAndSortedProducts.length
  }
}

/**
 * Custom Hook: useProductById
 * Get a specific product by ID
 */
export const useProductById = (productId: string) => {
  const [products] = useState<Product[]>(PRODUCTS)

  return useMemo(() => {
    return products.find((product) => product.id === productId)
  }, [productId, products])
}

/**
 * Custom Hook: useCategories
 * Get all unique categories
 */
export const useCategories = () => {
  const [products] = useState<Product[]>(PRODUCTS)

  return useMemo(() => {
    const categories = Array.from(new Set(products.map((p) => p.category)))
    return categories.sort()
  }, [products])
}
