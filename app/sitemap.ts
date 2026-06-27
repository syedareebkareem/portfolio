import { MetadataRoute } from 'next'
import { getAllProjects } from '@/lib/projects'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await getAllProjects()

  const projectUrls = projects.map((project) => ({
    url: `https://yourname.dev/projects/${project.slug}`,
    lastModified: new Date(project.created_at),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: 'https://yourname.dev',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://yourname.dev/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://yourname.dev/projects',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://yourname.dev/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...projectUrls,
  ]
}