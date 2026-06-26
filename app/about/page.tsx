import Container from '@/components/Container'
import Hero from '@/components/Hero'
import Button from '@/components/Button'

export default function About() {
  return (
    <div>
      <Hero
        title="About Me"
        subtitle="I'm a web developer passionate about building quality digital experiences."
        ctaText="Let's Work Together"
        ctaHref="/contact"
        ctaSecondaryText="View My Work"
        ctaSecondaryHref="/projects"
      />

      <Container className="py-20">
        {/* Bio Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-8">Who I Am</h2>
          <div className="max-w-3xl">
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              Hi, I'm a full-stack web developer with a passion for creating clean, modern web experiences. 
              I specialize in building custom websites and applications for clients who value quality and attention to detail.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              With expertise in React, Next.js, TypeScript, and modern web technologies, I deliver fast, scalable solutions 
              that solve real business problems.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open source, or writing about web development.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-8">Skills & Experience</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Frontend */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Frontend</h3>
              <div className="flex flex-wrap gap-3">
                {['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML/CSS'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Backend & Tools</h3>
              <div className="flex flex-wrap gap-3">
                {['Node.js', 'PostgreSQL', 'Supabase', 'Git', 'Vercel', 'APIs'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-8">Experience</h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-2xl font-semibold">Freelance Web Developer</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">2022 - Present</p>
              <p className="text-slate-600 dark:text-slate-400">
                Building custom websites and web applications for clients across various industries. 
                Focus on performance, user experience, and clean code.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-2xl font-semibold">Full-Stack Developer</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">2021 - 2022</p>
              <p className="text-slate-600 dark:text-slate-400">
                Developed web applications using React, Node.js, and PostgreSQL. 
                Collaborated with designers and product managers on feature development.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16 bg-slate-50 dark:bg-slate-900 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <Button href="/contact" variant="primary">
            Get in Touch
          </Button>
        </section>
      </Container>
    </div>
  )
}