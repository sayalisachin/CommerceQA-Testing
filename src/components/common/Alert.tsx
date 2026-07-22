/**
 * Alert Component for displaying messages
 */

import { AlertCircle, CheckCircle, Info, X } from 'lucide-react'

type AlertType = 'success' | 'error' | 'warning' | 'info'

interface AlertProps {
  type: AlertType
  title?: string
  message: string
  onClose?: () => void
}

export const Alert = ({ type, title, message, onClose }: AlertProps) => {
  const colors: Record<AlertType, { bg: string; border: string; icon: string; text: string }> = {
    success: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      icon: 'text-green-600',
      text: 'text-green-800'
    },
    error: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      icon: 'text-red-600',
      text: 'text-red-800'
    },
    warning: {
      bg: 'bg-yellow-50',
      border: 'border-yellow-200',
      icon: 'text-yellow-600',
      text: 'text-yellow-800'
    },
    info: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      icon: 'text-blue-600',
      text: 'text-blue-800'
    }
  }

  const color = colors[type]
  const Icon = type === 'success' ? CheckCircle : type === 'error' ? AlertCircle : Info

  return (
    <div className={`${color.bg} border ${color.border} rounded-lg p-4 flex items-start gap-3`}>
      <Icon className={`${color.icon} flex-shrink-0 mt-0.5`} size={20} />
      <div className="flex-1">
        {title && <h3 className={`${color.text} font-semibold`}>{title}</h3>}
        <p className={`${color.text} ${title ? 'text-sm mt-1' : ''}`}>{message}</p>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className={`${color.icon} flex-shrink-0 hover:opacity-70 transition`}
        >
          <X size={20} />
        </button>
      )}
    </div>
  )
}
