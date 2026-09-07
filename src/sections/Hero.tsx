import Button from '../components/Button'
import ContactForm from '../components/ContactForm'

const alerts = ['Sem controle.', 'Sem evidência.', 'Sem ação.']

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, #ffffff 0, #ffffff 1px, transparent 1px, transparent 120px), repeating-linear-gradient(90deg, #ffffff 0, #ffffff 1px, transparent 1px, transparent 120px)',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-16 text-center md:pb-24 md:pt-20">
        <h1 className="font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
          Pare de ser passado para trás.
        </h1>
        <p className="mt-6 font-heading text-2xl font-semibold italic text-brand sm:text-3xl">
          Você já pagou por câmeras.
        </p>
        <p className="mt-2 text-lg text-gray-300">Hoje elas só gravam prejuízo.</p>
      </div>

      <div className="relative bg-danger">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 py-5 text-center sm:flex-row sm:justify-center sm:gap-12">
          {alerts.map((item) => (
            <span key={item} className="font-heading text-lg font-bold text-white sm:text-xl">
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-16 px-6 py-16">
        <Button as="a" href="#solucao">
          Quero o controle da minha empresa
        </Button>

        <div id="contato" className="scroll-mt-24">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
