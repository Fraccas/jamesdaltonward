const experience = [
  {
    role: 'Software Engineer II',
    company: 'GoEngineer',
    period: 'Dec 2025 - Present',
    location: 'Midvale, UT (Hybrid)',
    bullets: [
      'Full-stack development with .NET 8 (C#), ASP.NET, Entity Framework, SQL Server, Git, and Visual Studio',
      'Azure DevOps environment using task boards, PRs/code reviews, and Agile sprint workflows',
      'Optimizing API endpoints for performance, reliability, and UX',
      'Monitoring application health via Azure Portal — logs, performance, and production reliability',
    ],
    tags: ['.NET 8', 'C#', 'ASP.NET', 'Entity Framework', 'SQL Server', 'Azure'],
  },
  {
    role: 'Full Stack Software Developer',
    company: 'Fracctal Labs',
    period: 'Mar 2022 - Dec 2025',
    location: 'Salt Lake City, UT',
    bullets: [
      'Full-stack development with Node.js, Angular, SQL, Git, Algorand JS SDK, and Unity/C#/.NET',
      'Generated $250K+ in revenue from game assets, in-app purchases, marketplace fees, and mobile ads',
      '$600K+ total transaction volume for digital assets',
      'Led multidisciplinary team of artists, developers, community moderators, and a music designer',
      'Company valued at $2.5M in last funding round',
    ],
    tags: ['Node.js', 'Angular', 'SQL', 'Unity', 'C#', 'Algorand'],
  },
  {
    role: 'Game Developer',
    company: 'Watashi Games',
    period: 'Nov 2023 - Nov 2025',
    location: 'Remote',
    bullets: [
      'Developed gaming software in Unity (C#/.NET) released on App Store, Google Play, and Steam',
      '$300K+ revenue through mobile ads, in-app purchases, and Steam sales',
      '1M+ downloads across iOS, Android, and Steam',
      'Led creative team including artist and music designer',
    ],
    tags: ['Unity', 'C#', 'iOS', 'Android', 'Steam'],
  },
  {
    role: 'Full Stack Software Developer',
    company: 'Anglepoint',
    period: 'Apr 2021 - Mar 2022',
    location: 'Lindon, UT (Hybrid)',
    bullets: [
      'Full-stack environment using ASP.NET (C#), Entity Framework, MS SQL, Git, and Angular (TS)',
      'Built API endpoints and managed project workflows',
    ],
    tags: ['ASP.NET', 'C#', 'Angular', 'MS SQL'],
  },
  {
    role: 'Web Developer Tier II',
    company: 'Impartner Software',
    period: 'Nov 2019 - Apr 2021',
    location: 'South Jordan, UT',
    bullets: [
      'ASP.NET development using C#, JavaScript, and HTML/CSS',
      'Managed client accounts with high-level technical support',
      'Rapid resolution of complex coding challenges escalated from Tier I team',
    ],
    tags: ['ASP.NET', 'C#', 'JavaScript'],
  },
]

const skills = {
  'Backend': ['.NET / C#', 'ASP.NET Core', 'Entity Framework', 'Node.js', 'Express.js', 'PHP'],
  'Frontend': ['Angular', 'React', 'React Native', 'TypeScript', 'HTML / CSS'],
  'Data': ['SQL Server', 'MySQL', 'LINQ'],
  'Game Dev': ['Unity (C#)', 'Photon Fusion', 'NGO (Netcode)'],
  'Tools': ['Git', 'Azure DevOps', 'Visual Studio', 'Docker'],
}

function Tools() {
  return (
    <section className="relative max-w-5xl mx-auto px-6 py-24 overflow-hidden">
      <div className="orb orb-cyan orb-drift w-[500px] h-[500px] -right-40 -top-10" />
      <div className="orb orb-indigo orb-drift-slow w-[500px] h-[500px] -left-40 top-1/2" />
      <div className="orb orb-violet orb-drift w-[350px] h-[350px] right-0 bottom-40" />
      <h1 className="gradient-title text-4xl md:text-5xl font-bold tracking-tight mb-4 relative">
        Experience
      </h1>
      <p className="text-slate-400 mb-6 text-lg relative">
        6+ years of professional software development across enterprise, startups, and indie studios.
      </p>
      <div className="gradient-divider mb-16" />

      {/* Skills grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="glass-card rounded-2xl p-6">
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="text-xs font-medium px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/10"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Experience timeline */}
      <div className="gradient-divider mb-16" />
      <h2 className="text-2xl font-bold text-white mb-10 relative">Experience</h2>
      <div className="space-y-10">
        {experience.map(({ role, company, period, location, bullets, tags }) => (
          <div
            key={`${company}-${role}`}
            className="relative pl-8 border-l border-white/[0.06]"
          >
            <div className="absolute -left-[4px] top-2 w-2 h-2 rounded-full bg-indigo-500 shadow-sm shadow-indigo-500/50" />
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-1">
              <h3 className="text-lg font-semibold text-white">{role}</h3>
              <span className="text-sm text-indigo-400">{company}</span>
            </div>
            <p className="text-xs text-slate-500 mb-3">
              {period} &middot; {location}
            </p>
            <ul className="space-y-1.5 mb-4">
              {bullets.map((b, i) => (
                <li key={i} className="text-sm text-slate-400 flex items-start gap-2">
                  <span className="text-slate-600 mt-1 shrink-0">-</span>
                  {b}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-2.5 py-0.5 rounded-lg bg-white/[0.04] text-slate-500 border border-white/[0.04]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Education */}
      <div className="gradient-divider mt-16 mb-16" />
      <h2 className="text-2xl font-bold text-white mb-6 relative">Education</h2>
      <div className="space-y-4">
        <div className="glass-card rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white">Auburn University</h3>
          <p className="text-sm text-slate-400">Computer Science</p>
        </div>
        <div className="glass-card rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white">Covalence</h3>
          <p className="text-sm text-slate-400">Full Stack Web Development Certificate &middot; Oct 2019</p>
        </div>
      </div>
    </section>
  )
}

export default Tools
