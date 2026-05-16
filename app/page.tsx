// @ts-nocheck
"use client";

import { Inter } from "next/font/google";
import content from "../data/content.json";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800", "900"] });

// Warm brown + cream white (Vibrant & Block-based for a bakery)
const BROWN = "#6B4226";
const BROWN_DEEP = "#3D2415";
const CREAM = "#FAF3E7";
const CREAM_DARK = "#F0E5D2";
const RUST = "#C5523B";
const HONEY = "#E8A04F";

export default function Page() {
  const phoneTel = "tel:" + content.contact.phone.replace(/[^0-9]/g, "");
  const mapUrl = "https://maps.google.com/maps?output=embed&q=" + encodeURIComponent(content.contact.mapEmbedQuery);

  return (
    <main className={inter.className} style={{ backgroundColor: CREAM, color: BROWN_DEEP, minHeight: "100vh" }}>
      <style jsx global>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }
        .fade-up { animation: fadeUp 0.85s cubic-bezier(.2,.9,.2,1) forwards; }
        .fade-up-d1 { animation: fadeUp 0.85s 0.2s cubic-bezier(.2,.9,.2,1) both; }
        .fade-up-d2 { animation: fadeUp 0.85s 0.4s cubic-bezier(.2,.9,.2,1) both; }
      `}</style>

      <nav className="sticky top-0 z-50" style={{ backgroundColor: CREAM, borderBottom: `2px solid ${BROWN_DEEP}` }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
          <span style={{ fontWeight: 900, color: BROWN_DEEP, letterSpacing: "-0.03em", fontSize: "1.15rem" }}>
            NUEVA <span style={{ color: RUST }}>BUENOS AIRES</span>
          </span>
          <div className="flex items-center gap-6">
            <a href="#empanadas" className="hidden md:inline text-sm font-semibold hover:text-[#C5523B]">Empanadas</a>
            <a href="#bakery" className="hidden md:inline text-sm font-semibold hover:text-[#C5523B]">Bakery</a>
            <a href="#visit" className="hidden md:inline text-sm font-semibold hover:text-[#C5523B]">Visit</a>
            <a href={phoneTel} className="px-5 py-2.5 text-sm font-bold uppercase tracking-wider transition-transform hover:scale-105" style={{ backgroundColor: BROWN_DEEP, color: CREAM, borderRadius: "999px" }}>Llamar</a>
          </div>
        </div>
      </nav>

      {/* HERO — big block hero with food photo */}
      <section className="relative">
        <div className="grid md:grid-cols-2 min-h-[80vh]">
          <div className="p-8 md:p-16 flex items-center" style={{ backgroundColor: CREAM }}>
            <div className="fade-up">
              <p className="text-xs font-bold uppercase tracking-[0.4em] mb-7" style={{ color: RUST }}>★ Argentina · Burbank · Familia</p>
              <h1 style={{ fontSize: "clamp(3rem, 8vw, 6rem)", fontWeight: 900, color: BROWN_DEEP, lineHeight: 0.88, letterSpacing: "-0.04em" }}>
                Fresh from<br />the oven.<br /><span style={{ color: RUST }}>Every day.</span>
              </h1>
              <p className="mt-9 text-xl max-w-md fade-up-d1" style={{ color: BROWN, lineHeight: 1.55 }}>{content.hero.subheading}</p>
              <div className="mt-10 flex flex-wrap gap-3 fade-up-d2">
                <a href={content.hero.ctaLink} className="px-9 py-4 text-sm font-bold uppercase tracking-widest transition-all hover:scale-105" style={{ backgroundColor: BROWN_DEEP, color: CREAM, borderRadius: "999px" }}>Call to Order</a>
                <a href="#bakery" className="px-9 py-4 text-sm font-bold uppercase tracking-widest border-2 transition-all hover:bg-brown hover:text-cream" style={{ borderColor: BROWN_DEEP, color: BROWN_DEEP, borderRadius: "999px" }}>See What We Bake</a>
              </div>
              <p className="mt-12 text-sm font-bold uppercase tracking-widest" style={{ color: HONEY }}>★ 4.5 · 220 reviews · 6 days a week</p>
            </div>
          </div>
          <div className="bg-cover bg-center" style={{ backgroundImage: `url("${content.hero.image}")`, minHeight: "500px" }} />
        </div>
      </section>

      {/* STAT BAND */}
      <section style={{ backgroundColor: BROWN_DEEP, color: CREAM }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { n: "220+", l: "Reviews" },
            { n: "4.5★", l: "Rating" },
            { n: "100%", l: "Hand-folded" },
            { n: "Mon-Sat", l: "Open" },
          ].map((s, i) => (
            <div key={i}>
              <p style={{ fontWeight: 900, fontSize: "clamp(2rem, 4vw, 3.5rem)", color: HONEY, letterSpacing: "-0.03em", lineHeight: 1 }}>{s.n}</p>
              <p className="text-xs uppercase tracking-widest mt-2 font-bold" style={{ color: `${CREAM}99` }}>{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <p className="text-xs font-bold uppercase tracking-[0.4em] mb-6" style={{ color: RUST }}>La Historia</p>
            <h2 style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 900, color: BROWN_DEEP, lineHeight: 0.95, letterSpacing: "-0.03em" }}>Como en casa.</h2>
          </div>
          <div className="md:col-span-7 space-y-6 text-xl" style={{ color: BROWN, lineHeight: 1.6 }}>
            {content.about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </section>

      {/* BAKERY — big block grid */}
      <section id="bakery" style={{ backgroundColor: CREAM_DARK }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-24 md:pt-32 pb-10">
          <p className="text-xs font-bold uppercase tracking-[0.4em]" style={{ color: RUST }}>La Panadería</p>
          <h2 style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", fontWeight: 900, color: BROWN_DEEP, lineHeight: 0.92, letterSpacing: "-0.04em", marginTop: "1.5rem" }}>
            Baked fresh.<br /><span style={{ color: RUST }}>Every morning.</span>
          </h2>
        </div>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 pb-24 md:pb-32 grid md:grid-cols-3 gap-5">
          {content.services.map((s, i) => {
            const palette = [
              { bg: BROWN_DEEP, fg: CREAM, accent: HONEY },
              { bg: CREAM, fg: BROWN_DEEP, accent: RUST },
              { bg: RUST, fg: CREAM, accent: HONEY },
              { bg: HONEY, fg: BROWN_DEEP, accent: BROWN_DEEP },
              { bg: BROWN, fg: CREAM, accent: HONEY },
              { bg: CREAM, fg: BROWN_DEEP, accent: RUST },
            ][i % 6];
            return (
              <div key={i} className="p-10 transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl" style={{ backgroundColor: palette.bg, color: palette.fg, minHeight: "320px", borderRadius: "24px" }}>
                <p className="text-xs font-bold uppercase tracking-widest" style={{ color: palette.accent }}>0{i + 1} / 06</p>
                <h3 style={{ fontWeight: 800, fontSize: "1.85rem", lineHeight: 1.05, letterSpacing: "-0.02em", marginTop: "1.25rem" }}>{s.title}</h3>
                <p className="mt-3 text-base leading-relaxed" style={{ opacity: 0.88 }}>{s.description}</p>
                {s.price && <p className="mt-5 font-extrabold text-xl" style={{ color: palette.accent, letterSpacing: "-0.01em" }}>{s.price}</p>}
              </div>
            );
          })}
        </div>
      </section>

      {/* REVIEWS — large pull quotes */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <p className="text-xs font-bold uppercase tracking-[0.4em] mb-6" style={{ color: RUST }}>Los Clientes Dicen</p>
        <h2 style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 900, color: BROWN_DEEP, lineHeight: 0.95, letterSpacing: "-0.03em", marginBottom: "3.5rem" }}>
          From <span style={{ color: RUST }}>our regulars.</span>
        </h2>
        <div className="space-y-5">
          {content.reviews.map((r, i) => (
            <div key={i} className="p-8 md:p-12 grid md:grid-cols-12 gap-8 items-center" style={{ backgroundColor: i === 0 ? RUST : i === 1 ? CREAM_DARK : BROWN_DEEP, color: (i === 0 || i === 2) ? CREAM : BROWN_DEEP, borderRadius: "20px" }}>
              <div className="md:col-span-9">
                <div className="flex gap-1 mb-4 text-xl" style={{ color: HONEY }}>{Array.from({ length: r.rating || 5 }).map((_, j) => <span key={j}>★</span>)}</div>
                <p style={{ fontSize: "clamp(1.2rem, 2.2vw, 1.75rem)", fontWeight: 500, lineHeight: 1.4, letterSpacing: "-0.01em" }}>&ldquo;{r.text}&rdquo;</p>
              </div>
              <div className="md:col-span-3 md:text-right">
                <p className="text-sm font-extrabold uppercase tracking-widest" style={{ color: HONEY }}>{r.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" style={{ backgroundColor: BROWN_DEEP, color: CREAM }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32 grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <p className="text-xs font-bold uppercase tracking-[0.4em] mb-6" style={{ color: HONEY }}>Visitanos</p>
            <h2 style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", fontWeight: 900, color: CREAM, lineHeight: 0.95, letterSpacing: "-0.04em" }}>1723 W<br />Verdugo Ave.</h2>
            <p className="mt-7 text-lg" style={{ color: `${CREAM}cc` }}>{content.contact.address}</p>
            <a href={phoneTel} className="block mt-2 font-black transition-opacity hover:opacity-70" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: HONEY, letterSpacing: "-0.03em", lineHeight: 1 }}>{content.contact.phone}</a>
            <div className="mt-10" style={{ backgroundColor: CREAM, color: BROWN_DEEP, padding: "1.5rem 2rem", borderRadius: "16px" }}>
              <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: RUST }}>Horario</p>
              {Object.entries(content.contact.hours).map(([day, time]) => (
                <div key={day} className="flex justify-between py-2.5 text-sm border-b" style={{ borderColor: `${BROWN_DEEP}15` }}>
                  <span className="font-bold uppercase tracking-wide text-xs">{day}</span>
                  <span style={{ color: time === "Closed" ? RUST : BROWN }}>{String(time)}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-7 overflow-hidden" style={{ borderRadius: "20px", minHeight: "560px" }}>
            <iframe title="Buenos Aires Bakery" width="100%" height="100%" loading="lazy" style={{ border: 0, minHeight: "560px" }} referrerPolicy="no-referrer-when-downgrade" src={mapUrl} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: HONEY }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32 text-center">
          <h3 style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)", fontWeight: 900, color: BROWN_DEEP, lineHeight: 0.9, letterSpacing: "-0.04em" }}>
            ¿Hambre?<br /><span style={{ color: RUST }}>Llámanos.</span>
          </h3>
          <a href={phoneTel} className="inline-block mt-12 px-12 py-5 text-xl font-black transition-transform hover:scale-105" style={{ backgroundColor: BROWN_DEEP, color: CREAM, borderRadius: "999px", letterSpacing: "-0.01em" }}>{content.contact.phone}</a>
        </div>
      </section>

      <footer style={{ backgroundColor: CREAM, color: BROWN_DEEP, borderTop: `2px solid ${BROWN_DEEP}` }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm">
          <p style={{ fontWeight: 900, fontSize: "1.1rem" }}>NUEVA <span style={{ color: RUST }}>BUENOS AIRES</span></p>
          <p style={{ color: BROWN }}>{content.contact.address}</p>
          <p className="text-xs uppercase tracking-widest" style={{ color: `${BROWN}99` }}>© {new Date().getFullYear()}</p>
        </div>
      </footer>
    </main>
  );
}
