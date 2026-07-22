/**
 * Core Type Definitions for CommerceQA
 */

export interface Product {
  id: string
  title: string
  description: string
  category: 'Electronics' | 'Fashion' | 'Books' | 'Shoes' | 'Beauty' | 'Accessories' | 'Home Appliances'
  price: number
  discount: number
  stock: number
  rating: number
  reviews: number
  image: string
  specifications?: Record<string, string>
  tags?: string[]
}

export interface CartItem {
  productId: string
  quantity: number
  addedAt: number
}

export interface WishlistItem {
  productId: string
  addedAt: number
}

export interface Order {
  id: string
  date: string
  items: OrderItem[]
  subtotal: number
  tax: number
  discount: number
  shipping: number
  total: number
  shippingInfo: ShippingInfo
  paymentMethod: string
  status: 'pending' | 'processing' | 'shipped' | 'delivered'
}

export interface OrderItem {
  productId: string
  title: string
  quantity: number
  price: number
}

export interface ShippingInfo {
  fullName: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  postalCode: string
  country: string
}

export interface UserProfile {
  id: string
  email: string
  phone: string
  fullName: string
  createdAt: string
  orders: Order[]
}
