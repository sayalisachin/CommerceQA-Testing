/**
 * Custom Hook: useUserProfile
 * Manages user profile and order history
 */

import { useState, useEffect } from 'react'
import { UserProfile, Order } from '../types'

const DEFAULT_USER_ID = 'user_123'
const USER_PROFILE_KEY = 'user_profile'

export const useUserProfile = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)

  // Initialize profile from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(USER_PROFILE_KEY)
    if (saved) {
      setProfile(JSON.parse(saved))
    } else {
      const newProfile: UserProfile = {
        id: DEFAULT_USER_ID,
        email: 'user@example.com',
        phone: '',
        fullName: '',
        createdAt: new Date().toISOString(),
        orders: []
      }
      localStorage.setItem(USER_PROFILE_KEY, JSON.stringify(newProfile))
      setProfile(newProfile)
    }
    setLoading(false)
  }, [])

  const updateProfile = (updates: Partial<UserProfile>) => {
    if (!profile) return
    const updated = { ...profile, ...updates }
    setProfile(updated)
    localStorage.setItem(USER_PROFILE_KEY, JSON.stringify(updated))
  }

  const addOrder = (order: Order) => {
    if (!profile) return
    const updated = { ...profile, orders: [...profile.orders, order] }
    setProfile(updated)
    localStorage.setItem(USER_PROFILE_KEY, JSON.stringify(updated))
  }

  return { profile, loading, updateProfile, addOrder }
}
