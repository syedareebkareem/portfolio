import { supabase } from './supabase'

export interface Project {
  id: string
  title: string
  slug: string
  description: string
  excerpt: string
  image_url: string
  tech_stack: string[]
  live_url: string
  github_url: string
  featured: boolean
  sort_order: number
  created_at: string
}

// Get all projects
export async function getAllProjects(): Promise<Project[]> {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('sort_order', { ascending: true })

  if (error) {
    console.error('Error fetching projects:', error)
    return []
  }

  return data || []
}

// Get featured projects only (for homepage)
export async function getFeaturedProjects(): Promise<Project[]> {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('featured', true)
    .order('sort_order', { ascending: true })

  if (error) {
    console.error('Error fetching featured projects:', error)
    return []
  }

  return data || []
}

// Get single project by slug (for detail page)
export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('slug', slug)
    .maybeSingle()

  if (error) {
    console.error('Error fetching project:', error)
    return null
  }

  return data
}