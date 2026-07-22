/**
 * User Profile Page Component
 */

import { useState } from 'react'
import { User, Mail, Phone, Package } from 'lucide-react'
import { useUserProfile } from '../hooks/useUserProfile'
import { formatDate, formatPrice } from '../utils/helpers'
import { Alert } from '../components/common/Alert'

export const ProfilePage = () => {
  const { profile, updateProfile } = useUserProfile()
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    fullName: profile?.fullName || '',
    email: profile?.email || '',
    phone: profile?.phone || ''
  })
  const [showAlert, setShowAlert] = useState(false)

  if (!profile) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">Loading profile...</p>
      </div>
    )
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSaveProfile = () => {
    updateProfile(formData)
    setIsEditing(false)
    setShowAlert(true)
    setTimeout(() => setShowAlert(false), 3000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Alerts */}
        {showAlert && (
          <div className="mb-6">
            <Alert
              type="success"
              message="Profile updated successfully!"
              onClose={() => setShowAlert(false)}
            />
          </div>
        )}

        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="bg-primary-100 rounded-full p-4">
                <User className="text-primary-600" size={32} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{profile.fullName || 'Customer'}</h1>
                <p className="text-gray-600">Member since {formatDate(profile.createdAt)}</p>
              </div>
            </div>
            {!isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className="text-primary-600 hover:text-primary-700 font-semibold"
              >
                Edit Profile
              </button>
            )}
          </div>

          {/* Profile Info */}
          {!isEditing ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <Mail className="text-gray-400" size={20} />
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-semibold text-gray-900">{profile.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-gray-400" size={20} />
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="font-semibold text-gray-900">{profile.phone || 'Not added'}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Package className="text-gray-400" size={20} />
                <div>
                  <p className="text-sm text-gray-600">Orders</p>
                  <p className="font-semibold text-gray-900">{profile.orders.length}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  onClick={handleSaveProfile}
                  className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-2 rounded-lg font-bold transition"
                >
                  Save Changes
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-900 py-2 rounded-lg font-bold transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Orders History */}
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Order History</h2>

          {profile.orders.length === 0 ? (
            <div className="text-center py-12">
              <Package className="mx-auto mb-4 text-gray-400" size={48} />
              <p className="text-gray-600">No orders yet</p>
            </div>
          ) : (
            <div className="space-y-4">
              {profile.orders.map((order) => (
                <div key={order.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Order ID</p>
                      <p className="font-bold text-gray-900">{order.id}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Date</p>
                      <p className="font-semibold text-gray-900">{formatDate(order.date)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Status</p>
                      <p className={`font-semibold capitalize ${
                        order.status === 'delivered' ? 'text-green-600' : 'text-orange-600'
                      }`}>
                        {order.status}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Total</p>
                      <p className="font-bold text-primary-600">{formatPrice(order.total)}</p>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t">
                    <p className="text-sm text-gray-600">
                      {order.items.length} item(s) - {order.shippingInfo.address}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
