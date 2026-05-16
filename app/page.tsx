// @ts-nocheck
"use client";

import { Playfair_Display, Inter } from "next/font/google";
import content from "../data/content.json";

const display = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "700", "900"] });
const body = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600"] });

const ACCENT = "#B45D55";
const ACCENT_DEEP = "#7A2E2A";
const ACCENT_LIGHT = "#E8A89F";
const BG = "#F8EFE8";
const BG_CARD = "#FBF5EE";
const TEXT = "#3D2620";
const TEXT_MUTED = "#7A584D";

export default function Page() {
  const phoneTel = "tel:" + content.contact.phone.replace(/[^0-9]/g, "");
  const mapUrl =
    "https://maps.google.com/maps?output=embed&q=" +
    encodeURIComponent(content.contact.mapEmbedQuery);

  return (
    <main className={body.className} style={{ backgroundColor: BG, color: TEXT, minHeight: "100vh" }}>
      <style jsx global>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        .fade-up { animation: fadeUp 0.85s ease-out forwards; }
        .fade-up-d1 { animation: fadeUp 0.85s 0.2s ease-out both; }
        .fade-up-d2 { animation: fadeUp 0.85s 0.4s ease-out both; }
      `}</style>

      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md" style={{ backgroundColor: "rgba(248,239,232,0.9)", borderBottom: `1px solid ${ACCENT}22` }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className={display.className} style={{ fontSize: "1.3rem", fontWeight: 700, color: ACCENT_DEEP, fontStyle: "italic" }}>Nueva Buenos Aires</span>
          <div className="flex items-center gap-6 md:gap-7">
            <a href="#menu" className="hidden md:inline text-sm hover:opacity-70">Menu</a>
            <a href="#reviews" className="hidden md:inline text-sm hover:opacity-70">Reviews</a>
            <a href="#visit" className="hidden md:inline text-sm hover:opacity-70">Visit</a>
            <a href={phoneTel} className="px-5 py-2.5 rounded-full text-sm font-medium text-white transition-transform hover:scale-105" style={{ backgroundColor: ACCENT }}>Call to Order</a>
          </div>
        </div>
      </nav>

      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="absolute top-0 left-0 right-0 h-96 opacity-10" style={{ background: `radial-gradient(circle at 50% 0%, ${ACCENT} 0%, transparent 60%)` }} />
        <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7 fade-up">
            <p className="uppercase tracking-[0.35em] text-xs font-medium mb-6" style={{ color: ACCENT }}>Family bakery • Since the doors opened</p>
            <h1 className={display.className} style={{ fontSize: "clamp(2.75rem, 7.5vw, 5.5rem)", color: ACCENT_DEEP, fontWeight: 700, lineHeight: 1.0, fontStyle: "italic", letterSpacing: "-0.02em" }}>{content.hero.heading}</h1>
            <p className="text-lg mt-7 max-w-xl fade-up-d1" style={{ color: TEXT_MUTED, lineHeight: 1.6 }}>{content.hero.subheading}</p>
            <div className="mt-10 flex flex-wrap gap-4 fade-up-d2">
              <a href={content.hero.ctaLink} className="px-9 py-4 rounded-full text-white font-medium transition-transform hover:scale-105 shadow-lg" style={{ backgroundColor: ACCENT }}>{content.hero.ctaText}</a>
              <a href="#menu" className="px-9 py-4 rounded-full font-medium hover:bg-white/40 transition-all" style={{ border: `1.5px solid ${ACCENT_DEEP}`, color: ACCENT_DEEP }}>See the Menu</a>
            </div>
          </div>
          <div className="md:col-span-5 fade-up-d1">
            <div className="aspect-square rounded-full overflow-hidden shadow-2xl ring-8" style={{ ringColor: BG_CARD, backgroundImage: `url("${content.hero.image}")`, backgroundSize: "cover", backgroundPosition: "center" }} />
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-24 md:py-32 text-center">
        <p className="uppercase tracking-[0.35em] text-xs font-medium mb-5" style={{ color: ACCENT }}>The family</p>
        <h2 className={display.className} style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, color: ACCENT_DEEP, lineHeight: 1.1, fontStyle: "italic" }}>{content.about.heading}</h2>
        <div className="mt-10 space-y-6 text-lg leading-relaxed" style={{ color: TEXT_MUTED }}>
          {content.about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </section>

      <section id="menu" className="py-24 md:py-32" style={{ backgroundColor: BG_CARD }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.35em] text-xs font-medium mb-5" style={{ color: ACCENT }}>The Bakery</p>
            <h2 className={display.className} style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, color: ACCENT_DEEP, fontStyle: "italic" }}>Baked fresh. Every morning.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.services.map((s, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white transition-shadow hover:shadow-xl" style={{ border: `1px solid ${ACCENT}22` }}>
                <h3 className={display.className} style={{ fontWeight: 700, fontSize: "1.4rem", color: ACCENT_DEEP, fontStyle: "italic" }}>{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: TEXT_MUTED }}>{s.description}</p>
                {s.price && <p className="mt-5 font-semibold" style={{ color: ACCENT }}>{s.price}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.35em] text-xs font-medium mb-5" style={{ color: ACCENT }}>Word of mouth</p>
          <h2 className={display.className} style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, color: ACCENT_DEEP, fontStyle: "italic" }}>From our regulars.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {content.reviews.map((r, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white" style={{ border: `1px solid ${ACCENT}22` }}>
              <div className="flex gap-1 mb-4" style={{ color: ACCENT }}>
                {Array.from({ length: r.rating || 5 }).map((_, j) => <span key={j}>★</span>)}
              </div>
              <p className="text-base leading-relaxed" style={{ color: TEXT, fontStyle: "italic" }}>"{r.text}"</p>
              <p className="mt-6 text-sm font-semibold uppercase tracking-wider" style={{ color: ACCENT_DEEP }}>— {r.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="visit" className="py-24 md:py-32" style={{ backgroundColor: ACCENT_DEEP, color: BG }}>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="uppercase tracking-[0.35em] text-xs font-medium mb-5" style={{ color: ACCENT_LIGHT }}>Encuentranos</p>
            <h2 className={display.className} style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, color: BG, lineHeight: 1.05, fontStyle: "italic" }}>Visit us in Burbank.</h2>
            <p className="mt-7 text-lg" style={{ color: "rgba(248,239,232,0.85)" }}>{content.contact.address}</p>
            <a href={phoneTel} className="block mt-1 text-3xl font-bold transition-opacity hover:opacity-80" style={{ color: ACCENT_LIGHT }}>{content.contact.phone}</a>
            <table className="mt-10 w-full text-base">
              <tbody>
                {Object.entries(content.contact.hours).map(([day, time]) => (
                  <tr key={day} style={{ borderBottom: `1px solid rgba(248,239,232,0.15)` }}>
                    <td className="py-3.5 font-semibold">{day}</td>
                    <td className="py-3.5 text-right" style={{ color: "rgba(248,239,232,0.85)" }}>{String(time)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ minHeight: "480px" }}>
            <iframe title="New Buenos Aires Bakery Location" width="100%" height="100%" loading="lazy" style={{ border: 0, minHeight: "480px" }} referrerPolicy="no-referrer-when-downgrade" src={mapUrl} />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="rounded-3xl p-12 md:p-20 text-center" style={{ backgroundColor: ACCENT, color: BG }}>
          <h3 className={display.className} style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, fontStyle: "italic", lineHeight: 1.1 }}>Buen provecho.</h3>
          <p className="mt-5 text-xl" style={{ color: "rgba(248,239,232,0.9)" }}>Call ahead, walk in, or stop by for a coffee. We're glad you're here.</p>
          <a href={phoneTel} className="inline-block mt-10 px-12 py-5 rounded-full bg-white font-bold text-lg transition-transform hover:scale-105" style={{ color: ACCENT_DEEP }}>{content.contact.phone}</a>
        </div>
      </section>

      <footer style={{ borderTop: `1px solid ${ACCENT}22`, backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-sm" style={{ color: TEXT_MUTED }}>
          <div>
            <p className={display.className} style={{ fontSize: "1.4rem", fontWeight: 700, color: ACCENT_DEEP, fontStyle: "italic" }}>New Buenos Aires Bakery & Cafe</p>
            <p className="mt-3">{content.contact.address}</p>
            <p className="mt-1"><a href={phoneTel} className="hover:text-black">{content.contact.phone}</a></p>
          </div>
          <div className="text-xs">© {new Date().getFullYear()} New Buenos Aires Bakery & Cafe</div>
        </div>
      </footer>
    </main>
  );
}