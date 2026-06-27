import Container from '@/components/Container'
import Hero from '@/components/Hero'
import Card from '@/components/Card'
import { getAllProjects } from '@/lib/projects'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects - Your Name',
  description: 'Browse my portfolio of web development projects. Custom websites, full-stack apps, and more.',
  openGraph: {
    title: 'Projects - Your Name',
    description: 'Browse my portfolio of web development projects.',
    url: 'https://yourname.dev/projects',
    type: 'website',
  },
}

export default async function Projects() {
  const projects = await getAllProjects()

  return (
    <div>
      <Hero
        title="My Projects"
        subtitle="Here are some of my recent works. Each project showcases my ability to build quality web solutions."
        ctaText="Discuss Your Project"
        ctaHref="/contact"
      />

      <Container className="py-20">
        {projects.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              No projects yet. Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
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
        )}
      </Container>
    </div>
  )
}