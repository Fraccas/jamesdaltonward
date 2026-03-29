import fracctalTcgVert from '../assets/games/fracctal-tcg-vert.webp'
import fracctalMonstersVert from '../assets/games/fracctal-monsters-vert.webp'
import fracctalMonstersHero from '../assets/games/fracctal-monsters-hero.webp'
import damashiLogo from '../assets/games/damashi-logo.webp'
import damashiPanel from '../assets/games/damashi-panel.webp'
import watashiLogo from '../assets/games/watashi-logo.webp'
import naomiSplit from '../assets/games/naomi-split.webp'
import suikaCapsule from '../assets/games/suika-capsule.webp'
import suikaScreenshot from '../assets/games/suika-screenshot.webp'

const studios = [
  {
    name: 'Watashi Games',
    link: 'https://watashigames.com/',
    projects: [
      {
        title: 'My Suika',
        subtitle: "Kyo's Fruit Merge",
        status: 'Released Dec 2023',
        desc: 'A fruit-merging puzzle game where you drop and combine fruits to create bigger ones. Became a viral hit across all platforms.',
        stats: [
          '1M+ downloads across iOS, Android, and Steam',
          '$350K+ revenue through Steam sales, mobile ads, and in-app purchases',
          '1,730+ Steam reviews (Mostly Positive)',
          '2,740+ App Store reviews (4.6/5 rating)',
        ],
        image: suikaCapsule,
        secondaryImage: suikaScreenshot,
        trailer: '4SgL0k870mg',
        storeLinks: [
          { label: 'Steam', href: 'https://store.steampowered.com/app/2671970/My_Suika__Kyos_Fruit_Merge/' },
          { label: 'App Store', href: 'https://apps.apple.com/us/app/my-suika-kyos-fruit-merge/id6470134069' },
        ],
        tags: ['Unity', 'C#', 'Steam', 'iOS', 'Android'],
      },
      {
        title: 'Damashi Game',
        status: 'Webtoon Released / Game In Development',
        desc: 'A dark survival thriller — part webtoon, part video game. The webtoon is published across Webtoons, Tapas, and GlobalComix. The companion video game is in development for Steam.',
        stats: [
          'Webtoon published on 3 platforms (Webtoons, Tapas, GlobalComix)',
          'Companion video game in development for Steam',
          'Features AI-powered colorization pipeline built in-house',
        ],
        image: damashiLogo,
        secondaryImage: damashiPanel,
        trailer: 'RCMx9Xnnx0E',
        storeLinks: [
          { label: 'Steam', href: 'https://store.steampowered.com/app/3248500/Damashi_Game/' },
        ],
        tags: ['Unity', 'C#', 'Steam', 'Webtoons'],
      },
      {
        title: 'Watashi Colorizer',
        status: 'In Development',
        desc: 'An AI-powered manga and webtoon colorization tool for artists and publishers. Work in progress.',
        stats: [
          'AI colorization pipeline for black-and-white manga/webtoon art',
          'Built as a standalone tool, not a game',
        ],
        image: watashiLogo,
        secondaryImage: naomiSplit,
        storeLinks: [
          { label: 'Website', href: 'https://watashicolorizer.com/' },
        ],
        tags: ['React', 'Node.js', 'AI'],
      },
      {
        title: 'Watashi Marketing',
        status: 'In Development',
        desc: 'An AI-powered marketing automation platform for creators. Automates social media, SEO audits, content generation, and analytics.',
        stats: [
          'AI-driven social media post generation and scheduling',
          'Automated Lighthouse and Schema.org audits',
          'Built with React, Node.js, and Google Gemini AI',
        ],
        image: watashiLogo,
        storeLinks: [
          { label: 'Website', href: 'https://watashimarketing.com/' },
        ],
        tags: ['React', 'Node.js', 'AI', 'Tailwind CSS'],
      },
    ],
  },
  {
    name: 'Fracctal Labs',
    link: 'https://fracctaltcg.com/',
    projects: [
      {
        title: 'Fracctal Monsters',
        status: 'Released',
        desc: 'An NFT-based blockchain game built on Algorand. Pioneered digital asset ownership for collectible game creatures with a full marketplace ecosystem.',
        stats: [
          '$250K+ USD in revenue from game assets, marketplace fees, and in-app purchases',
          '$600K+ total transaction volume for digital assets',
          'Company valued at $2.5M in last funding round',
          'Led multidisciplinary team of artists, developers, and community moderators',
        ],
        image: fracctalMonstersVert,
        secondaryImage: fracctalMonstersHero,
        tags: ['Node.js', 'Angular', 'SQL', 'Algorand', 'Blockchain'],
      },
      {
        title: 'Fracctal TCG',
        status: 'Released on Steam, iOS, Android',
        desc: 'A digital trading card game with real-time multiplayer battles, deck building, and collectible card mechanics. The evolution of the Fracctal Monsters ecosystem into a full TCG experience.',
        stats: [
          'Released on Steam, Apple App Store, and Google Play',
          'Real-time multiplayer with deck building and card collection',
          'Built with Unity (C#/.NET) and full-stack web backend',
        ],
        image: fracctalTcgVert,
        trailer: 'kpWsfmRJOVw',
        tags: ['Unity', 'C#', 'Node.js', 'Angular', 'SQL', 'Steam', 'iOS', 'Android'],
      },
    ],
  },
]

function Games() {
  return (
    <section className="relative max-w-5xl mx-auto px-6 py-24 overflow-hidden">
      <div className="orb orb-indigo orb-drift w-[600px] h-[600px] -right-40 -top-20" />
      <div className="orb orb-violet orb-drift-slow w-[500px] h-[500px] -left-40 top-1/3" />
      <div className="orb orb-cyan orb-drift w-[400px] h-[400px] right-20 bottom-1/4" />
      <h1 className="gradient-title text-4xl md:text-5xl font-bold tracking-tight mb-4 relative">
        Games & Studios
      </h1>
      <p className="text-slate-400 mb-6 text-lg max-w-2xl relative">
        Two indie studios. Multiple released titles. 1M+ downloads and $600K+ in combined revenue.
      </p>
      <div className="gradient-divider mb-16" />

      <div className="space-y-24">
        {studios.map((studio) => (
          <div key={studio.name}>
            {/* Studio header */}
            <div className="flex items-baseline gap-4 mb-10">
              <h2 className="text-2xl font-bold text-white">{studio.name}</h2>
              <a
                href={studio.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                {studio.link.replace('https://', '').replace(/\/$/, '')} &rarr;
              </a>
            </div>

            <div className="space-y-10">
              {studio.projects.map(({ title, subtitle, status, desc, stats, image, secondaryImage, trailer, storeLinks, tags }) => (
                <div
                  key={title}
                  className="glass-card glow-border rounded-2xl overflow-hidden"
                >
                  {/* Image header */}
                  {(image || secondaryImage || trailer) && (
                    <div className={`grid ${(secondaryImage || trailer) ? 'md:grid-cols-2' : ''}`}>
                      {image && (
                        <div className="h-56 md:h-72 overflow-hidden bg-slate-900 flex items-center justify-center p-6">
                          <img
                            src={image}
                            alt={title}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>
                      )}
                      {trailer ? (
                        <div className={`${image ? 'hidden md:block' : ''} h-56 md:h-72 overflow-hidden bg-slate-900 relative`}>
                          <iframe
                            className="absolute inset-0 w-full h-full"
                            src={`https://www.youtube-nocookie.com/embed/${trailer}`}
                            title={`${title} Trailer`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            loading="lazy"
                          />
                        </div>
                      ) : secondaryImage ? (
                        <div className={`${image ? 'hidden md:block' : ''} h-56 md:h-72 overflow-hidden bg-slate-900`}>
                          <img
                            src={secondaryImage}
                            alt={`${title} preview`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : null}
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex flex-wrap items-baseline gap-3 mb-1">
                      <h3 className="text-xl font-semibold text-white">{title}</h3>
                      {subtitle && <span className="text-sm text-slate-500">— {subtitle}</span>}
                      <span className="text-xs font-medium px-2.5 py-0.5 rounded-lg bg-white/[0.05] text-slate-400 border border-white/[0.05]">
                        {status}
                      </span>
                    </div>
                    <p className="text-slate-300 leading-relaxed mb-5 mt-2">{desc}</p>

                    <ul className="space-y-2 mb-6">
                      {stats.map((stat, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                          <span className="text-indigo-400 mt-0.5 shrink-0">-</span>
                          {stat}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap items-center gap-4">
                      <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-medium px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      {storeLinks && storeLinks.length > 0 && (
                        <div className="flex gap-4 ml-auto">
                          {storeLinks.map(({ label, href }) => (
                            <a
                              key={label}
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
                            >
                              {label} &rarr;
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Games
