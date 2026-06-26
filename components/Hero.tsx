import React from 'react'
import Button from './Button'

interface HeroProps {
  title: string
  subtitle: string
  ctaText?: string
  ctaHref?: string
  ctaSecondaryText?: string
  ctaSecondaryHref?: string
}

export default function Hero({
  title,
  subtitle,
  ctaText = 'Get Started',
  ctaHref = '/contact',
  ctaSecondaryText = 'Learn More',
  ctaSecondaryHref = '/about',
}: HeroProps) {
  return (
    <section className="py-32 md:py-40 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black dark:text-white">
          {title}
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href={ctaHref} variant="primary">
            {ctaText}
          </Button>
          <Button href={ctaSecondaryHref} variant="secondary">
            {ctaSecondaryText}
          </Button>
        </div>
      </div>
    </section>
  )
}