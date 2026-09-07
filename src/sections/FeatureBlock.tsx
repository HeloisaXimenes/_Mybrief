import type { ReactNode } from 'react'

export default function FeatureBlock({
  text,
  media,
}: {
  text: ReactNode
  media: ReactNode
}) {
  return (
    <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
      <div>{text}</div>
      <div>{media}</div>
    </div>
  )
}
