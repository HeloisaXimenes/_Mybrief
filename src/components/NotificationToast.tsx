import type { ReactNode } from 'react'

export default function NotificationToast({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={`flex w-72 gap-3 rounded-2xl bg-card-dark p-4 shadow-2xl sm:w-80 ${className}`}
      role="status"
    >
      <svg viewBox="0 0 64 64" aria-hidden="true" className="h-11 w-11 shrink-0 rounded-xl bg-white p-1.5">
        <circle cx="32" cy="32" r="20" fill="#73B84E" />
        <circle cx="32" cy="32" r="10" fill="#0A0A0A" />
      </svg>
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <p className="font-semibold text-white">Alerta! 🚨</p>
          <span className="shrink-0 text-xs text-gray-400">agora</span>
        </div>
        <p className="mt-0.5 text-sm text-gray-200">{children}</p>
      </div>
    </div>
  )
}
