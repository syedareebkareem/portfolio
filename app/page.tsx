import Container from '@/components/Container'
import Hero from '@/components/Hero'
import Card from '@/components/Card'
import Button from '@/components/Button'
import { getFeaturedProjects } from '@/lib/projects'

export default async function Home() {
  const featuredProjects = await getFeaturedProjects()

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

      {/* Services Section */}
      <Container className="py-20">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Services</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Offering custom web development tailored to your needs.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-lg">
            <div className="w-10 h-10 bg-primary rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold mb-3">Frontend Development</h3>
            <p className="text-slate-600 dark:text-slate-400">
              React, Next.js, TypeScript. Modern, fast, responsive UIs.
            </p>
          </div>

          <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-lg">
            <div className="w-10 h-10 bg-primary rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold mb-3">Full-Stack Solutions</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Database, backend, frontend. Complete web applications.
            </p>
          </div>

          <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-lg">
            <div className="w-10 h-10 bg-primary rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold mb-3">Custom Development</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Tailored solutions for your unique business needs.
            </p>
          </div>
        </div>

        {/* Featured Projects Section */}
        {featuredProjects.length > 0 && (
          <section>
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-4xl font-bold">Featured Work</h2>
              <Button href="/projects" variant="secondary">
                View All →
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {featuredProjects.map((project) => (
                <Card
                  key={project.id}
                  title={project.title}
                  description={project.excerpt}
                  image={project.image_url}
                  tags={project.tech_stack}
                  href={`/projects/${project.slug}`}
                />
              ))}
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="text-center py-20 bg-slate-50 dark:bg-slate-900 rounded-lg mt-20">
          <h2 className="text-4xl font-bold mb-6">
            Ready to start your project?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto">
            Let's build something great together. Get in touch and let's discuss your idea.
          </p>
          <Button href="/contact" variant="primary">
            Get in Touch
          </Button>
        </section>
      </Container>
    </div>
  )
}