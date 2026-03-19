import Container from "@/components/Container";
import Reveal from "@/components/Reveal";

const services = [
  {
    t: "Fixed‑Departure Series Support",
    d: "Full‑season operational consistency with repeatable, well‑structured daily touring flows."
  },
  {
    t: "Multi‑Region UK Touring",
    d: "Seamless, balanced itineraries across England, Scotland and Wales."
  },
  {
    t: "UK–Ireland Integrated Itineraries",
    d: "Unified British Isles transport with coordinated ferry timings and cross‑country continuity."
  },
  {
    t: "Large Group Coordination",
    d: "Professional management for high‑volume and multi‑coach operations."
  },
  {
    t: "Long‑Haul Market Alignment",
    d: "Tailored transport solutions for USA, India, China and Europe inbound markets."
  },
];

export default function ServicesPage() {
  return (
    <section className="py-20 bg-paper">
      <Container>
        <Reveal>
          <h1 className="text-4xl font-semibold tracking-tight text-ink">
            Services
          </h1>
          <p className="mt-5 max-w-3xl text-muted leading-relaxed">
            We provide corporate‑grade touring logistics built for clarity, consistency and professional 
            delivery. Our services support long‑haul markets and high‑volume touring programmes across the UK & Ireland.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <Reveal key={s.t}>
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                <p className="font-semibold text-steel text-lg">{s.t}</p>
                <p className="mt-2 text-sm text-muted">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

