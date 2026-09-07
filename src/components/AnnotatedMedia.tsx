import type { ReactNode } from 'react'
import NotificationToast from './NotificationToast'

type AnnotatedMediaProps = {
  src: string
  alt: string
  alert: ReactNode
  recap?: ReactNode
}

export default function AnnotatedMedia({ src, alt, alert, recap }: AnnotatedMediaProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="overflow-hidden rounded-2xl shadow-xl">
        <img src={src} alt={alt} className="w-full object-cover" loading="lazy" />
      </div>
      <NotificationToast className="-mt-10 ml-auto mr-4 sm:mr-8">{alert}</NotificationToast>
      {recap && (
        <div className="rounded-lg bg-brand px-5 py-4 text-sm leading-relaxed text-black">
          {recap}
        </div>
      )}
    </div>
  )
}
