import React from 'react'
import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  className?: string
  disabled?: boolean
  target?: string
  rel?: string
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  disabled = false,
  target,
  rel,
}: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-lg font-medium transition-all duration-200 cursor-pointer inline-block'

  const variants = {
    primary: 'bg-primary text-white hover:bg-opacity-90 active:scale-95',
    secondary: 'border border-slate-300 dark:border-slate-700 text-black dark:text-white hover:bg-slate-50 dark:hover:bg-slate-900',
  }

  const styles = `${baseStyles} ${variants[variant]} ${className}`

  // If it's a link
  if (href) {
    return (
      <Link href={href} className={styles} target={target} rel={rel}>
        {children}
      </Link>
    )
  }

  // If it's a button
  return (
    <button onClick={onClick} className={styles} disabled={disabled}>
      {children}
    </button>
  )
}