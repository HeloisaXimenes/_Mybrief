import Button from '../components/Button'
import ContactForm from '../components/ContactForm'

export default function FinalCta() {
  return (
    <section id="fale-conosco" className="scroll-mt-20 bg-white px-6 py-20 text-black md:py-28">
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-12 md:flex-row md:items-center md:justify-between">
        <div className="max-w-md">
          <h2 className="font-heading text-3xl font-extrabold leading-tight text-brand sm:text-4xl">
            Quer parar de depender de desculpas?
          </h2>
          <p className="mt-4 text-gray-700">Fale com quem entrega controle real.</p>
          <Button as="a" href="#contato-final" className="mt-6">
            Falar com o time do Percepta
          </Button>
          <p className="mt-4 text-sm text-gray-500">
            Conversa direta.
            <br />
            Sem apresentação genérica.
          </p>
        </div>

        <div id="contato-final" className="scroll-mt-24">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
