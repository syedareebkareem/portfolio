import Container from '@/components/Container'
import Button from '@/components/Button'
import { getProjectBySlug } from '@/lib/projects'
import { notFound } from 'next/navigation'

interface ProjectDetailProps {
  params: Promise<{
    slug: string
  }>
}

export default async function ProjectDetail({ params }: ProjectDetailProps) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <div>
      <div className="bg-slate-100 dark:bg-slate-900 py-20">
        <Container>
          <p className="text-primary font-medium mb-4">Project Case Study</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{project.title}</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl">{project.excerpt}</p>
        </Container>
      </div>

      <Container className="py-20">
        {project.image_url && (
          <div className="mb-16 rounded-lg overflow-hidden">
            <img src={project.image_url} alt={project.title} className="w-full h-96 object-cover" />
          </div>
        )}

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Overview</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">{project.description}</p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.tech_stack.map((tech) => (
              <span key={tech} className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium">{tech}</span>
            ))}
          </div>
        </section>

        <section className="p-8 bg-slate-50 dark:bg-slate-900 rounded-lg mb-16">
          <h2 className="text-2xl font-bold mb-6">View Project</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            {project.live_url && (
              <Button href={project.live_url} variant="primary" target="_blank" rel="noopener noreferrer">
                View Live Site
              </Button>
            )}
            {project.github_url && (
              <Button href={project.github_url} variant="secondary" target="_blank" rel="noopener noreferrer">
                View on GitHub
              </Button>
            )}
          </div>
        </section>

        <Button href="/projects" variant="secondary">← Back to Projects</Button>
      </Container>
    </div>
  )
}