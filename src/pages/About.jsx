import headshot from '../assets/personal/headshot.webp'
import familyPhoto from '../assets/personal/family.webp'

function About() {
  return (
    <section className="relative max-w-5xl mx-auto px-6 py-24 overflow-hidden">
      <div className="orb orb-indigo orb-drift w-[600px] h-[600px] -left-40 -top-20" />
      <div className="orb orb-violet orb-drift-slow w-[400px] h-[400px] right-0 top-1/3" />
      <div className="orb orb-cyan orb-drift w-[500px] h-[500px] -left-20 bottom-20" />
      {/* Hero area */}
      <div className="relative rounded-2xl overflow-hidden mb-16">
        <img
          src={familyPhoto}
          alt="James with his family outdoors"
          className="w-full h-72 md:h-[420px] object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 flex items-end gap-6">
          <img
            src={headshot}
            alt="James Ward"
            className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-2 border-white/10 shadow-xl shrink-0"
          />
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-1">James Ward</h1>
            <p className="text-slate-300">Software Engineer, Game Designer, Author</p>
            <p className="text-sm text-slate-500 mt-1">Salt Lake City, UT</p>
          </div>
        </div>
      </div>

      {/* Bio */}
      <div className="max-w-3xl mb-20 space-y-5 text-slate-300 leading-relaxed text-lg">
        <p>
          I'm a software developer with 6+ years of professional experience,
          an indie game studio founder, and a published author. I build things
          for the web, design games, and write about the outdoors.
        </p>
        <p>
          In 2018 I thru-hiked the Appalachian Trail — 2,190 miles from Georgia
          to Maine over six months. That experience became the foundation of my
          book <em className="text-white not-italic">Trail Family</em>, and it changed the trajectory of my life.
          After the trail, I took a risk: got a title loan on my car, enrolled
          in a software development program, graduated early, and moved to Utah
          to start a career in tech.
        </p>
        <p>
          I run two indie studios — Fracctal Labs and Watashi Games — and
          currently work as a Software Engineer II at GoEngineer. When I'm not
          coding, I'm snowboarding, skateboarding, or out on a trail with my
          family.
        </p>
      </div>

      <div className="gradient-divider mb-12" />
      <div className="grid md:grid-cols-2 gap-6 relative">
        {/* Achievements */}
        <div className="glass-card rounded-2xl p-8">
          <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-[0.15em] mb-8">
            Highlights
          </h3>
          <ul className="space-y-5 text-slate-300">
            {[
              { title: 'Published Author', sub: 'Trail Family — #1 Bestseller in Walking' },
              { title: 'AT 2000-Miler', sub: 'Appalachian Trail Conservancy, Class of 2018' },
              { title: '1M+ Game Downloads', sub: 'Across iOS, Android, and Steam' },
              { title: '$600K+ Revenue Generated', sub: 'From indie game studios and digital products' },
              { title: 'Company Valued at $2.5M', sub: 'Fracctal Labs, last funding round' },
              { title: 'Conference Speaker', sub: 'Decipher Barcelona 2024' },
            ].map(({ title, sub }) => (
              <li key={title} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
                <div>
                  <span className="font-medium text-white">{title}</span>
                  <p className="text-sm text-slate-500">{sub}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect + Tech */}
        <div className="space-y-6">
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-[0.15em] mb-6">
              Connect
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'GitHub', href: 'https://github.com/Fraccas' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jamesdaltonward/' },
                { label: 'Watashi Games', href: 'https://watashigames.com/' },
                { label: 'Fracctal TCG', href: 'https://fracctaltcg.com/' },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.05] text-sm text-slate-300 hover:text-white hover:bg-white/[0.06] hover:border-white/[0.1] transition-all text-center"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-[0.15em] mb-6">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {['C#', '.NET', 'ASP.NET', 'Unity', 'React', 'Angular', 'Node.js', 'TypeScript', 'SQL Server', 'Git', 'Azure'].map((s) => (
                <span
                  key={s}
                  className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white/[0.04] text-slate-400 border border-white/[0.04]"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
