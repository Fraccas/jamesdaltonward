import bookCover from '../assets/book/cover.webp'

const chapters = [
  'Prologue - Vermont',
  'Before the Trail',
  'Springer Mountain',
  'The Line Between States',
  'The First Fire Circle',
  'Franklin',
  'Drift',
  'Riverfire',
  'The Smokies',
  'Hot Springs, NC',
  'Erwin',
  'Balds and Booty Shorts',
  'Trail Days',
  'New Energy, Old Tension',
  'Trouble',
  'Whisky, Knob, and Chopstix',
  'Ducks Fly Together',
  'Easy Mode Ends',
  'The Roller Coaster',
  'Red, White, and Blisters',
  'Rocksylvania and the Ramp Tramps',
  'Half a Gallon, Wholehearted',
  'Cold Water and Goodbyes',
  'Blurred Line and Boardwalks',
  'The Breaking Point',
  'Speaking Up',
  'Apples, Laughter, and Unexpected Bonds',
  'Marathon to the Yellow Deli',
  'The Bridge Before the Mountains',
  'The Whites',
  'Wilderness',
  'Maine',
  'The Final Push',
  'All Together Now',
  'The Road Home',
  'Epilogue - From One Trail to the Next',
]

function TrailFamily() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/40 via-slate-950 to-slate-950" />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_bottom,_var(--color-trail)_0%,_transparent_60%)]" />
        <div className="relative z-10 max-w-5xl flex flex-col md:flex-row items-center gap-12">
          {/* Book cover */}
          <div className="shrink-0">
            <img
              src={bookCover}
              alt="Trail Family book cover"
              className="w-56 md:w-72 rounded-lg shadow-2xl shadow-black/50"
            />
          </div>
          <div className="text-center md:text-left">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <p className="text-sm uppercase tracking-widest text-indigo-400 font-medium">
                An Appalachian Trail Memoir
              </p>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30">
                #1 Bestseller in Walking
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">
              Trail Family
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-2">
              A Journey of Friendship and Transformation on the Appalachian Trail
            </p>
            <p className="text-sm text-slate-400 mb-8">by James Dalton Ward</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="https://www.amazon.com/Trail-Family-Transformation-Appalachian-Friendships-ebook/dp/B0FM1GTNMW"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-trail text-white font-semibold rounded-lg hover:bg-trail-light transition-colors text-lg"
              >
                Kindle & Paperback
              </a>
              <a
                href="https://www.audible.com/pd/Trail-Family-A-Journey-of-Friendship-and-Transformation-on-the-Appalachian-Trail-Audiobook/B0GPPCL8CF"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-slate-600 text-slate-300 font-semibold rounded-lg hover:border-slate-400 hover:text-white transition-colors text-lg"
              >
                Audiobook
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Opening excerpt */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <blockquote className="border-l-2 border-indigo-500/50 pl-6 md:pl-10 space-y-4 text-slate-300 italic leading-relaxed text-lg">
          <p>I told them I'd catch up later that day.</p>
          <p>
            It wasn't a lie, not exactly. I just didn't want to keep up anymore.
            My body was wrecked, my shoes were barely holding together, and every
            step felt like sandpaper rubbing against open blisters. But more than
            that — I was tired of being around people. Even people I cared about.
            Even the trail family that had kept me going for hundreds of miles.
          </p>
          <p>So I let them go.</p>
        </blockquote>
        <p className="text-sm text-slate-500 mt-4 pl-6 md:pl-10">
          — from the Prologue
        </p>
      </section>

      {/* About the book */}
      <section className="relative overflow-hidden section-glow">
        <div className="orb orb-indigo orb-drift w-[500px] h-[500px] -right-40 top-10" />
        <div className="orb orb-violet orb-drift-slow w-[400px] h-[400px] -left-40 bottom-0" />
        <div className="max-w-5xl mx-auto px-6 py-24 relative">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">About the Book</h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  In 2018, a depressed guy in his late twenties walked into the
                  woods, unsure if he'd ever feel whole again. 2,190 miles later,
                  he walked out a different person — not because of the trail
                  itself, but because of the people he met along the way.
                </p>
                <p>
                  Trail Family isn't a how-to guide. It's not about gear lists,
                  mileage charts, or the best hostels on the trail. It's a story
                  about friendships forged in mud, sweat, blisters, and laughter.
                  About the quiet mornings. The late-night campfires. The
                  stumbles, the breakthroughs, the moments of joy so pure they
                  still echo years later.
                </p>
                <p>
                  It's a story about human connection. About belonging. And about
                  the trail that somehow brought all of that into a life when it
                  was needed most.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-lg font-semibold text-white mb-4">Details</h3>
                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-slate-400">Author</dt>
                    <dd className="text-slate-200">James Dalton Ward</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-slate-400">Genre</dt>
                    <dd className="text-slate-200">Memoir / Adventure</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-slate-400">Trail</dt>
                    <dd className="text-slate-200">Appalachian Trail (GA to ME)</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-slate-400">Distance</dt>
                    <dd className="text-slate-200">2,190 miles</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-slate-400">Year</dt>
                    <dd className="text-slate-200">2018 thru-hike</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-slate-400">Formats</dt>
                    <dd className="text-slate-200">Kindle, Paperback, Audiobook</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key quote */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="gradient-divider mb-20" />
        <div className="orb orb-amber orb-drift w-[400px] h-[400px] left-1/2 top-0 -translate-x-1/2" />
        <blockquote className="max-w-3xl mx-auto text-center relative">
          <p className="text-xl md:text-2xl text-slate-200 italic leading-relaxed">
            "If you're ever feeling lost, unsure, or stuck in place — maybe take
            a walk. You never know who you'll meet. Or who you'll become."
          </p>
          <footer className="mt-6 text-sm text-indigo-400 font-medium">
            — D1, Trail Family
          </footer>
        </blockquote>
      </section>

      {/* Chapters */}
      <section className="relative max-w-5xl mx-auto px-6 py-24 overflow-hidden">
        <div className="orb orb-indigo orb-drift-slow w-[500px] h-[500px] -left-40 top-20" />
        <div className="gradient-divider mb-16" />
        <h2 className="text-3xl font-bold text-white mb-10 relative">The Journey</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
          {chapters.map((ch, i) => (
            <div key={i} className="flex items-baseline gap-3 py-2 border-b border-white/[0.03]">
              <span className="text-xs text-slate-500 font-mono w-6 shrink-0 text-right">
                {i === 0 ? '' : i === chapters.length - 1 ? '' : String(i).padStart(2, '0')}
              </span>
              <span className="text-sm text-slate-300">{ch}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Second excerpt */}
      <section className="relative section-glow">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <blockquote className="border-l-2 border-trail pl-6 md:pl-10 space-y-4 text-slate-300 italic leading-relaxed">
            <p>
              We had made it to Baxter State Park — the final gate, the doorstep
              of Katahdin. After 2,000 miles of highs and lows, we were standing
              at the entrance to the last climb.
            </p>
            <p>
              We checked in at the ranger station, signed our names into the
              register like those before us. It was surreal. This wasn't just
              another trailhead. This was the end.
            </p>
          </blockquote>
          <p className="text-sm text-slate-500 mt-4 pl-6 md:pl-10">
            — from Chapter 34: All Together Now
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-b from-slate-950 to-indigo-950/30 py-24 px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to hit the trail?</h2>
        <p className="text-slate-400 mb-10 max-w-lg mx-auto">
          Available now on Amazon and Audible. Walk 2,190 miles from Georgia to
          Maine with the Ramp Tramps.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://www.amazon.com/Trail-Family-Transformation-Appalachian-Friendships-ebook/dp/B0FM1GTNMW"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-500 transition-colors"
          >
            Get on Amazon
          </a>
          <a
            href="https://www.audible.com/pd/Trail-Family-A-Journey-of-Friendship-and-Transformation-on-the-Appalachian-Trail-Audiobook/B0GPPCL8CF"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-slate-600 text-slate-300 font-semibold rounded-lg hover:border-slate-400 hover:text-white transition-colors"
          >
            Listen on Audible
          </a>
        </div>
      </section>
    </>
  )
}

export default TrailFamily
