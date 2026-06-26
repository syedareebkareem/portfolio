import Container from '@/components/Container'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <div>
      <Hero
        title="Custom Web Solutions"
        subtitle="I build fast, modern websites for clients who care about quality."
        ctaText="View My Work"
        ctaHref="/projects"
        ctaSecondaryText="Let's Talk"
        ctaSecondaryHref="/contact"
      />

      <Container className="py-16">
        <section className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-6">Services</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Offering custom web development tailored to your needs.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Frontend Development</h3>
            <p className="text-slate-600 dark:text-slate-400">
              React, Next.js, TypeScript. Modern, fast, responsive UIs.
            </p>
          </div>

          <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Full-Stack Solutions</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Database, backend, frontend. Complete web applications.
            </p>
          </div>

          <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Custom Development</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Tailored solutions for your unique business needs.
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}