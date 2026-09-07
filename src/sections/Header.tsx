import { useState } from 'react'
import Logo from '../components/Logo'
import Button from '../components/Button'
import MobileMenu from './MobileMenu'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="relative z-30 border-b border-white/10 bg-black">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Logo />

        <div className="hidden md:block">
          <Button as="a" href="#contato">
            Entrar em contato
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white md:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
            <path
              d="M12 5v14M5 12h14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  )
}
