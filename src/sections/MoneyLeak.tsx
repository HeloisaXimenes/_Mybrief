import { useState } from 'react'
import testimonial from '../assets/photos/testimonial.jpg'
import cardFluxo from '../assets/photos/card-fluxo.jpg'
import cardEstrutura from '../assets/photos/card-estrutura.jpg'
import cardEnergia from '../assets/photos/card-energia.jpg'

const tabs = [
  {
    id: 'tempo',
    label: 'Tempo improdutivo',
    title: 'Tempo improdutivo',
    subtitle: 'Funcionários parados em horário de pico.',
    bullets: [
      <>
        Três pessoas paradas por <strong>28 minutos</strong>.
      </>,
    ],
    closing: 'Loja aberta. Venda escapando.',
    photo: testimonial,
    alt: 'Três funcionários parados conversando no meio da loja em horário de pico',
  },
  {
    id: 'fluxo',
    label: 'Fluxo quebrado',
    title: 'Fluxo quebrado',
    subtitle: 'Cliente circula sem abordagem.',
    bullets: ['Cliente entra.', 'Circula 4 minutos.', 'Sai sem contato.'],
    photo: cardFluxo,
    alt: 'Sequência de quatro câmeras mostrando cliente circulando pela loja sem ser abordado',
  },
  {
    id: 'estrutura',
    label: 'Estrutura mal utilizada',
    title: 'Estrutura mal utilizada',
    subtitle: 'Recepção vazia em horário comercial.',
    bullets: [
      <>
        Recepção vazia por <strong>22 minutos</strong>.
      </>,
      'Cliente aguardou. Foi embora.',
    ],
    photo: cardEstrutura,
    alt: 'Câmera de recepção vazia em horário comercial, com cliente esperando ao lado',
  },
  {
    id: 'energia',
    label: 'Energia + disciplina',
    title: 'Energia + disciplina',
    subtitle: 'Luz, ar e TV ligados sem presença.',
    bullets: ['Loja vazia.', 'Tudo ligado.', 'Dinheiro queimando.'],
    photo: cardEnergia,
    alt: 'Câmera de loja vazia com luzes, ar-condicionado e TVs ligados sem necessidade',
  },
]

export default function MoneyLeak() {
  const [active, setActive] = useState(0)
  const current = tabs[active]

  return (
    <section className="bg-black px-6 py-20 md:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl">
          O dinheiro não some de uma vez.
          <br />
          <span className="text-brand">Ele vaza todos os dias.</span>
        </h2>

        <div
          role="tablist"
          aria-label="Formas de perda de dinheiro"
          className="mt-12 flex flex-col divide-y divide-white/15 border-y border-white/15 text-left sm:flex-row sm:divide-x sm:divide-y-0 sm:border-none sm:text-center"
        >
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={active === index}
              aria-controls={`panel-${tab.id}`}
              onClick={() => setActive(index)}
              className={`flex-1 px-4 py-4 text-sm font-medium transition sm:border-b-2 ${
                active === index
                  ? 'text-white sm:border-brand'
                  : 'text-gray-400 sm:border-transparent hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div
          key={current.id}
          role="tabpanel"
          id={`panel-${current.id}`}
          aria-labelledby={`tab-${current.id}`}
          className="mt-8 overflow-hidden rounded-2xl bg-white text-left text-black shadow-xl md:grid md:grid-cols-2 md:items-center"
        >
          <div className="px-8 py-10">
            <h3 className="font-heading text-2xl font-extrabold text-brand">{current.title}</h3>
            <p className="mt-3 font-semibold">{current.subtitle}</p>
            <div className="mt-3">
              <ul className="flex flex-col gap-2">
                {current.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-2 text-black">
                    <span className="mt-1 text-brand" aria-hidden="true">
                      ▸
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
            {current.closing && <p className="mt-4 font-semibold">{current.closing}</p>}
          </div>
          <img src={current.photo} alt={current.alt} className="h-full w-full object-cover" />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 text-lg font-semibold text-white sm:grid-cols-3">
          <p>Menos desperdício.</p>
          <p>Mais disciplina.</p>
          <p>Mais dinheiro na empresa.</p>
        </div>
      </div>
    </section>
  )
}
