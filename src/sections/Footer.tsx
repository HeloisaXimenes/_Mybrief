import Logo from '../components/Logo'

const contactLinks = [
  {
    label: 'Email',
    href: 'mailto:contato@percepta.com.br',
    path: 'M4 6h16v12H4z M4 7l8 6 8-6',
  },
  {
    label: 'Telefone',
    href: 'tel:+5500000000000',
    path: 'M6 3c1 3 2 5 4 7s4 3 7 4c1-1 2-2 3-2 1 1 2 2 2 3-1 2-3 3-5 3-6 0-13-7-13-13 0-2 1-4 3-5 1 0 2 1 3 2 0 1-1 2-2 3z',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/5500000000000',
    path: 'M7 17l-1 4 4-1a8 8 0 1 0-3-3z M9 9c0 3 3 6 6 6',
  },
  {
    label: 'Site da Precisio',
    href: 'https://precisio.com.br',
    path: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z M3 12h18 M12 3c2.5 2.5 2.5 15.5 0 18 M12 3c-2.5 2.5-2.5 15.5 0 18',
  },
]

export default function Footer() {
  return (
    <footer className="bg-black px-6 py-14 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-center md:gap-14">
        <div className="flex flex-col gap-6 md:border-r md:border-white/20 md:pr-14">
          <Logo />
          <div className="flex flex-col gap-3">
            <div className="flex gap-3">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  aria-label={link.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand text-white transition hover:bg-action"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                    <path
                      d={link.path}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              ))}
            </div>
            <a href="#" className="text-sm text-gray-400 underline-offset-2 hover:underline">
              Termos e políticas de privacidade
            </a>
            <p className="text-xs text-gray-500">Precisio © 2025 - Todos os direitos reservados</p>
          </div>
        </div>

        <div className="md:pl-14">
          <p className="font-heading text-xl font-bold text-brand sm:text-2xl">
            Percepta é uma solução da Precisio,
          </p>
          <p className="mt-2 text-gray-300">
            especializada em transformar câmeras comuns em inteligência real para gestão e
            controle.
          </p>
        </div>
      </div>
    </footer>
  )
}
