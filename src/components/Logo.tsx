import percepta from '../assets/photos/Percepta.png'

type LogoProps = {
  className?: string
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <img
      src={percepta}
      alt="Percepta"
      className={`h-9 w-auto shrink-0 object-contain ${className}`}
    />
  )
}
