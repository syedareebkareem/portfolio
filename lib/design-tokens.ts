// Design Tokens - Centralized design system values
// Import and use these throughout your components

export const colors = {
  primary: '#10b981',
  'bg-dark': '#0f0f0f',
  'bg-light': '#f9f9f9',
  'text-muted': '#888888',
  'border-dark': '#1a1a1a',
  'border-light': '#e5e5e5',
  white: '#ffffff',
  black: '#000000',
}

export const spacing = {
  xs: '0.25rem',    // 4px
  sm: '0.5rem',     // 8px
  md: '1rem',       // 16px
  lg: '1.5rem',     // 24px (gutter)
  xl: '2rem',       // 32px
  '2xl': '3rem',    // 48px
  '3xl': '4rem',    // 64px (section)
  '4xl': '6rem',    // 96px
}

export const typography = {
  fontSans: "'Inter', system-ui, sans-serif",
  fontMono: "'Fira Code', monospace",
}

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
}

export const borderRadius = {
  sm: '0.375rem',   // 3px
  md: '0.5rem',     // 4px
  lg: '0.75rem',    // 6px (medium)
  xl: '1rem',       // 8px
}

export const transitions = {
  fast: '150ms',
  base: '200ms',
  slow: '300ms',
}

// Tailwind class utilities for common patterns
export const layoutClasses = {
  containerMax: 'max-w-6xl mx-auto px-6',
  gridCols: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
  flexCenter: 'flex items-center justify-center',
  flexBetween: 'flex items-center justify-between',
  section: 'py-16 md:py-24',
}