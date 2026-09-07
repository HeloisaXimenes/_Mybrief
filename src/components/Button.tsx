import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react'

const baseClasses =
  'inline-flex items-center justify-center rounded-md bg-action px-6 py-3.5 text-center font-body text-base font-semibold text-white shadow-[0_0_18px_rgba(86,197,15,0.55)] transition hover:bg-action-dark hover:shadow-[0_0_24px_rgba(86,197,15,0.75)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'

type ButtonAsButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: 'button'
  children: ReactNode
}

type ButtonAsAnchor = AnchorHTMLAttributes<HTMLAnchorElement> & {
  as: 'a'
  children: ReactNode
}

type ButtonProps = ButtonAsButton | ButtonAsAnchor

export default function Button({ className = '', children, ...props }: ButtonProps) {
  if (props.as === 'a') {
    const { as: _as, ...anchorProps } = props
    return (
      <a className={`${baseClasses} ${className}`} {...anchorProps}>
        {children}
      </a>
    )
  }

  const { as: _as, type = 'button', ...buttonProps } = props as ButtonAsButton
  return (
    <button type={type} className={`${baseClasses} ${className}`} {...buttonProps}>
      {children}
    </button>
  )
}
