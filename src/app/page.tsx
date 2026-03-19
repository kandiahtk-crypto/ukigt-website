import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-paper">
        <div className="absolute inset-0 bg-grid opacity-[0.25]" />
        <div className="absolute right-0 top-0 h-[520px] w-[520px] rounded-full bg-black/5 blur-3xl" />

        <Container>
          <div className="relative py-20 md:py-28">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.28em] text-muted">
                UK Inbound Ground Transport
              </p>

              <h1 className="mt-4 max-w-3xl text-4xl md:text-6xl font-semibold tracking-tight text-ink">
                Reliable Ground‑Transport Solutions for UK & Ireland Touring
              </h1>

              <p className="mt-6 max-w-2xl text-lg text-muted leading-relaxed">
                Professional, structured and dependable touring logistics for international tour operators. 
                We deliver high‑quality transport solutions across England, Scotland, Wales and Ireland.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                /contactPlan Your Programme</Button>
                /contactSpeak With Operations</Button>
              </div>
            </Reveal>

            {/* HERO VISUAL */}
            <div className="mt-14 md:mt-0 md:absolute md:right-0 md:top-24 md:w-[42%]">
              <Reveal>
                <div className="rounded-2xl border border-black/10 bg-white p-8 shadow-md">
                  <div className="h-64 md:h-80 rounded-xl bg-cloud grid place-items-center text-muted">
                    UK & Ireland Map / Coach Image
                  </div>
                  <p className="mt-3 text-xs text-muted">
                    Replace this placeholder with a professional hero image.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* WHO WE ARE + SERVICES */}
      <section className="py-20 bg-paper">
        <Container>
          <div className="grid gap-16 md:grid-cols-2 md:items-start">
            {/* WHO WE ARE */}
            <Reveal>
              <p className="text-xs uppercase tracking-[0.28em] text-muted">
                Who We Are
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-ink">
                Professional. Structured. Reliable.
              </h2>
              <p className="mt-5 text-muted leading-relaxed">
                UK Inbound Ground Transport provides corporate‑grade touring logistics for 
                international operators. Our operations deliver reliability, consistency and 
                smooth daily flow across the entire UK & Ireland.
              </p>
              <div className="mt-6">
                /aboutLearn more</Button>
              </div>
            </Reveal>

            {/* CORE SERVICES PREVIEW */}
            <Reveal>
              <p className="text-xs uppercase tracking-[0.28em] text-muted">
                Our Core Services
              </p>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    t: "Fixed‑Departure Series",
                    d: "Season‑long touring support with reliable, repeatable operations."
                  },
                  {
                    t: "Multi‑Region UK Touring",
                    d: "Balanced and structured touring flows across England, Scotland & Wales."
                  },
                  {
                    t: "UK–Ireland Integration",
                    d: "Seamless British Isles touring with cross‑country continuity."
                  },
                  {
                    t: "Large Group Coordination",
                    d: "Professional management for high‑volume and multi‑coach programmes."
                  }
                ].map((x) => (
                  <div
                    key={x.t}
                    className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm hover:shadow-md transition"
                  >
                    <p className="font-semibold text-steel">{x.t}</p>
                    <p className="mt-2 text-sm text-muted">{x.d}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                /servicesExplore services</Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* MARKETS WE SERVE */}
      <section className="py-20 bg-cloud border-y border-black/5">
        <Container>
          <Reveal>
            <p className="text-xs uppercase tracking-[0.28em] text-muted">
              Markets We Serve
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-ink">
              Built Around International Operator Requirements
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              { t: "United States", d: "Extended pacing, smooth regional transitions and comfort-first touring." },
              { t: "India", d: "High‑energy itineraries with efficient timings and coordinated movement." },
              { t: "China", d: "Precise daily structure, photo‑friendly pacing and consistent delivery." },
              { t: "Europe", d: "Flexible routing, short‑stay touring and rapid regional connections." }
            ].map((x) => (
              <Reveal key={x.t}>
                <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm hover:shadow-md transition">
                  <p className="font-semibold text-steel">{x.t}</p>
                  <p className="mt-2 text-sm text-muted">{x.d}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* CONTACT CTA */}
          <Reveal className="mt-14">
            <div className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <p className="text-lg font-semibold text-ink">
                Ready to plan your next touring programme?
              </p>
              /contactContact us</Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
