import { useEffect } from 'react'
import Logo from '../components/Logo'
import Button from '../components/Button'

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  return (
    <div
      className={`fixed inset-0 z-50 bg-black transition-transform duration-300 md:hidden ${
        open ? 'translate-x-0' : 'translate-x-full'
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      aria-hidden={!open}
    >
      <div className="flex justify-end p-6">
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar menu"
          tabIndex={open ? 0 : -1}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      <div className="flex flex-col items-center gap-10 px-8 pt-10">
        <Button as="a" href="#contato" onClick={onClose} tabIndex={open ? 0 : -1} className="w-full max-w-xs">
          Entrar em contato
        </Button>
        <Logo />
      </div>
    </div>
  )
}
