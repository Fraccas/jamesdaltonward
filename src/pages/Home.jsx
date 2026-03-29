import { Link } from 'react-router-dom'
import bookCover from '../assets/book/cover.webp'
import fracctalCapsule from '../assets/games/fracctal-capsule.webp'
import damashiLogo from '../assets/games/damashi-logo.webp'
import watashiLogo from '../assets/games/watashi-logo.webp'
import suikaCapsule from '../assets/games/suika-capsule.webp'
import naomiSplit from '../assets/games/naomi-split.webp'
import headshot from '../assets/personal/headshot.webp'
import heroBackground from '../assets/games/fracctal-monsters-hero.webp'

const highlights = [
  {
    title: 'Trail Family',
    desc: 'A memoir about walking 2,190 miles, finding yourself broken in Vermont, and discovering that the people beside you are the whole point.',
    to: '/trail-family',
    image: bookCover,
    color: 'from-indigo-500 to-violet-500',
  },
  {
    title: 'Games',
    desc: '1M+ downloads, $600K+ revenue. Two indie studios — Watashi Games and Fracctal Labs — shipping real products.',
    to: '/games',
    image: fracctalCapsule,
    color: 'from-violet-500 to-purple-500',
  },
  {
    title: 'Experience',
    desc: '6+ years of professional software development. Full-stack .NET, React, Node.js, and more.',
    to: '/experience',
    image: naomiSplit,
    color: 'from-cyan-500 to-blue-500',
  },
]

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center px-6 overflow-hidden">
        {/* Background hero image */}
        <div className="absolute inset-0">
          <img src={heroBackground} alt="" fetchPriority="high" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-slate-950/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/40 to-slate-950/90" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,_rgba(99,102,241,0.15),_transparent)]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center py-24">
          <div className="fade-up">
            <h1 className="hero-name text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              James&nbsp;Ward
            </h1>
            <div className="flex gap-3 mb-8 stagger">
              {['Developer', 'Creator', 'Author'].map((word, i) => (
                <span
                  key={word}
                  className={`fade-up text-sm md:text-base font-medium px-4 py-1.5 rounded-full border backdrop-blur-sm ${
                    i === 0
                      ? 'border-cyan-500/20 text-cyan-300 bg-cyan-500/[0.05]'
                      : i === 1
                      ? 'border-indigo-500/20 text-indigo-300 bg-indigo-500/[0.05]'
                      : 'border-violet-500/20 text-violet-300 bg-violet-500/[0.05]'
                  }`}
                >
                  {word}
                </span>
              ))}
            </div>
            <p className="text-slate-400 mb-10 max-w-lg leading-relaxed text-lg drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
              Software engineer by trade. Indie game studio founder.
              Published author. AT thru-hiker.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/trail-family"
                className="group px-7 py-3.5 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-500 transition-all hover:shadow-lg hover:shadow-indigo-500/20"
              >
                Read Trail Family
              </Link>
              <Link
                to="/games"
                className="px-7 py-3.5 bg-white/[0.05] border border-white/[0.08] text-slate-200 font-medium rounded-xl hover:bg-white/[0.08] hover:border-white/[0.12] transition-all"
              >
                View Games
              </Link>
            </div>
          </div>

          {/* Floating project collage */}
          <div className="hidden md:flex justify-center items-center relative h-[520px]">
            <img
              src={bookCover}
              alt="Trail Family"
              loading="lazy"
              className="float-1 absolute w-44 top-0 left-8 rounded-xl shadow-2xl shadow-black/60 border border-white/[0.06]"
            />
            <img
              src={suikaCapsule}
              alt="My Suika"
              loading="lazy"
              className="float-2 absolute w-40 top-12 right-4 rounded-xl shadow-2xl shadow-black/60 border border-white/[0.06]"
            />
            <img
              src={damashiLogo}
              alt="Damashi Game"
              loading="lazy"
              className="float-3 absolute w-36 bottom-20 left-12 rounded-xl shadow-2xl shadow-black/60 border border-white/[0.06]"
            />
            <img
              src={fracctalCapsule}
              alt="Fracctal TCG"
              loading="lazy"
              className="float-4 absolute w-52 bottom-0 right-0 rounded-xl shadow-2xl shadow-black/60 border border-white/[0.06]"
            />
            <img
              src={headshot}
              alt="James Ward"
              loading="lazy"
              className="pulse-glow absolute w-28 h-28 rounded-full object-cover border-2 border-indigo-400/30 z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
      </section>

      {/* Stats */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="gradient-divider mb-20" />
        <div className="orb orb-indigo orb-drift w-[500px] h-[500px] -left-40 top-0" />
        <div className="orb orb-violet orb-drift-slow w-[400px] h-[400px] right-0 -top-20" />
        <div className="relative max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center stagger">
          {[
            { value: '1M+', label: 'Game Downloads' },
            { value: '$600K+', label: 'Revenue Generated' },
            { value: '6+', label: 'Years in Software' },
            { value: '2,190', label: 'Miles Hiked' },
          ].map(({ value, label }) => (
            <div key={label} className="fade-up">
              <div className="stat-value text-4xl md:text-5xl font-bold mb-2">{value}</div>
              <div className="text-sm text-slate-500 uppercase tracking-wider">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section className="relative max-w-6xl mx-auto px-6 py-20 overflow-hidden">
        <div className="orb orb-cyan orb-drift-slow w-[600px] h-[600px] -right-60 top-0" />
        <div className="gradient-divider mb-16" />
        <div className="grid md:grid-cols-3 gap-6 stagger relative">
          {highlights.map(({ title, desc, to, image, color }) => (
            <Link
              key={to}
              to={to}
              className="fade-up group glass-card glow-border rounded-2xl overflow-hidden"
            >
              <div className="h-52 overflow-hidden relative">
                <img
                  src={image}
                  alt={title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              </div>
              <div className="p-7">
                <div className={`h-0.5 w-10 rounded bg-gradient-to-r ${color} mb-5`} />
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  {title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Projects & Studios */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="orb orb-violet orb-drift w-[500px] h-[500px] left-1/4 top-10" />
        <div className="orb orb-indigo orb-drift-slow w-[400px] h-[400px] right-10 bottom-0" />
        <div className="relative max-w-5xl mx-auto">
          <h2 className="gradient-title text-center text-2xl md:text-3xl font-bold mb-4">
            Projects & Studios
          </h2>
          <p className="text-center text-slate-400 mb-12 max-w-lg mx-auto">
            Indie studios and products I've built from the ground up.
          </p>
          <div className="gradient-divider mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { src: watashiLogo, name: 'Watashi Games', href: 'https://watashigames.com/', desc: 'Indie game studio — My Suika, Damashi Game, Watashi Colorizer' },
              { src: damashiLogo, name: 'Damashi Game', href: 'https://store.steampowered.com/app/3248500/Damashi_Game/', desc: 'Dark survival thriller webtoon and video game' },
              { src: fracctalCapsule, name: 'Fracctal Labs', href: 'https://fracctaltcg.com/', desc: 'Fracctal Monsters, Fracctal TCG — blockchain gaming studio' },
              { src: watashiLogo, name: 'Watashi Marketing', href: 'https://watashimarketing.com/', desc: 'AI-powered marketing automation platform for creators' },
              { src: watashiLogo, name: 'Watashi Colorizer', href: 'https://watashicolorizer.com/', desc: 'AI manga & webtoon colorization tool' },
            ].map(({ src, name, href, desc }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card glow-border rounded-2xl p-6 flex flex-col items-center text-center gap-4 group"
              >
                <div className="h-24 flex items-center">
                  <img src={src} alt={name} loading="lazy" className="max-h-full max-w-[160px] object-contain rounded-lg" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white mb-1.5 group-hover:text-indigo-300 transition-colors">{name}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
