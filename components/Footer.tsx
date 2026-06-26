import React from 'react'
import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">Your Name</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Building custom web solutions for clients.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary">Home</Link></li>
              <li><Link href="/about" className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary">About</Link></li>
              <li><Link href="/projects" className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary">Projects</Link></li>
              <li><Link href="/contact" className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">LinkedIn</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Twitter</a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 text-center text-sm text-slate-600 dark:text-slate-400">
          <p>© {year} Your Name. Built with Next.js</p>
        </div>
      </div>
    </footer>
  )
}