import { useState } from 'react'
import type { FormEvent } from 'react'

type FormErrors = {
  nome?: string
  email?: string
  telefone?: string
  termos?: string
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function ContactForm({ title = 'Entre em contato' }: { title?: string }) {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [aceite, setAceite] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})
  const [enviado, setEnviado] = useState(false)

  function validate(): FormErrors {
    const next: FormErrors = {}
    if (!nome.trim()) next.nome = 'Informe seu nome.'
    if (!email.trim()) next.email = 'Informe seu email.'
    else if (!EMAIL_PATTERN.test(email)) next.email = 'Informe um email válido.'
    if (!telefone.trim()) next.telefone = 'Informe seu telefone.'
    if (!aceite) next.termos = 'É preciso aceitar os termos para continuar.'
    return next
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) {
      setEnviado(true)
    }
  }

  const formId = title.replace(/\s+/g, '-').toLowerCase()

  if (enviado) {
    return (
      <div className="w-full max-w-md overflow-hidden rounded-lg bg-white text-black shadow-xl">
        <div className="bg-brand px-6 py-3 text-center font-semibold text-white">{title}</div>
        <div className="px-6 py-10 text-center">
          <p className="font-heading text-lg font-bold text-brand">Recebemos seu contato.</p>
          <p className="mt-2 text-sm text-gray-600">
            Nosso time vai falar com você em breve.
          </p>
        </div>
      </div>
    )
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="w-full max-w-md overflow-hidden rounded-lg bg-white text-black shadow-xl"
    >
      <div className="bg-brand px-6 py-3 text-center font-semibold text-white">{title}</div>
      <div className="flex flex-col gap-4 px-6 py-6">
        <div>
          <label htmlFor={`${formId}-nome`} className="sr-only">
            Nome
          </label>
          <input
            id={`${formId}-nome`}
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            aria-invalid={Boolean(errors.nome)}
            aria-describedby={errors.nome ? `${formId}-nome-error` : undefined}
            className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm placeholder:text-gray-500 focus-visible:outline-2 focus-visible:outline-action"
          />
          {errors.nome && (
            <p id={`${formId}-nome-error`} className="mt-1 text-xs text-danger">
              {errors.nome}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={`${formId}-email`} className="sr-only">
            Email
          </label>
          <input
            id={`${formId}-email`}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${formId}-email-error` : undefined}
            className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm placeholder:text-gray-500 focus-visible:outline-2 focus-visible:outline-action"
          />
          {errors.email && (
            <p id={`${formId}-email-error`} className="mt-1 text-xs text-danger">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={`${formId}-telefone`} className="sr-only">
            Telefone
          </label>
          <input
            id={`${formId}-telefone`}
            type="tel"
            placeholder="Telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            aria-invalid={Boolean(errors.telefone)}
            aria-describedby={errors.telefone ? `${formId}-telefone-error` : undefined}
            className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm placeholder:text-gray-500 focus-visible:outline-2 focus-visible:outline-action"
          />
          {errors.telefone && (
            <p id={`${formId}-telefone-error`} className="mt-1 text-xs text-danger">
              {errors.telefone}
            </p>
          )}
        </div>

        <div>
          <label className="flex items-start gap-2 text-xs text-gray-600">
            <input
              type="checkbox"
              checked={aceite}
              onChange={(e) => setAceite(e.target.checked)}
              aria-invalid={Boolean(errors.termos)}
              className="mt-0.5 h-4 w-4 shrink-0 accent-action"
            />
            Ao clicar, concordo com os termos de uso e politica de privacidade da Precisio
          </label>
          {errors.termos && <p className="mt-1 text-xs text-danger">{errors.termos}</p>}
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-action px-6 py-3.5 font-semibold text-white shadow-[0_0_18px_rgba(86,197,15,0.55)] transition hover:bg-action-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Enviar
        </button>
      </div>
    </form>
  )
}
