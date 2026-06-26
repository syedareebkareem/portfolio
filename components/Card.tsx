import React from 'react'
import Link from 'next/link'

interface CardProps {
  title: string
  description: string
  image?: string
  tags?: string[]
  href?: string
  onClick?: () => void
  className?: string
}

export default function Card({
  title,
  description,
  image,
  tags,
  href,
  onClick,
  className = '',
}: CardProps) {
  const cardContent = (
    <div className={`bg-slate-50 dark:bg-slate-900 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col ${className}`}>
      {/* Image Section */}
      {image && (
        <div className="w-full h-48 bg-slate-200 dark:bg-slate-800 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-semibold mb-2 text-black dark:text-white hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 flex-1">
          {description}
        </p>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex gap-2 flex-wrap mt-auto">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )

  // If clickable as a link
  if (href) {
    return (
      <Link href={href} className="group">
        {cardContent}
      </Link>
    )
  }

  // If clickable as a button
  if (onClick) {
    return (
      <div onClick={onClick} className="group cursor-pointer">
        {cardContent}
      </div>
    )
  }

  // Static card
  return cardContent
}