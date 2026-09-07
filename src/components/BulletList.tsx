import type { ReactNode } from 'react'

export default function BulletList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((item, index) => (
        <li key={index} className="flex gap-2.5 text-gray-200">
          <span className="mt-1 text-brand" aria-hidden="true">
            ▸
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
