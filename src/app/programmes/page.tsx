import Container from "@/components/Container";
import Reveal from "@/components/Reveal";

const markets = [
  {
    t: "United States",
    d: "Extended, balanced touring programmes designed for comfort and smooth regional movement.",
  },
  {
    t: "India",
    d: "High‑energy multi‑destination touring with efficient timings and strong group support.",
  },
  {
    t: "China",
    d: "Precise daily pacing, photo‑friendly scheduling and structured regional transitions.",
  },
  {
    t: "Europe",
    d: "Short‑stay, flexible touring designed for fast regional connectivity.",
  },
];

export default function ProgrammesPage() {
  return (
    <section className="py-20 bg-paper">
      <Container>
        <Reveal>
          <h1 className="text-4xl font-semibold tracking-tight text-ink">
            Programmes
          </h1>
          <p className="mt-5 max-w-3xl text-muted leading-relaxed">
            Our touring programmes are designed for the expectations of USA, India, China and Europe 
            inbound markets. We provide structured, reliable and comfortable transport across the UK & Ireland.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {markets.map((m) => (
            <Reveal key={m.t}>
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                <p className="font-semibold text-steel text-lg">{m.t}</p>
                <p className="mt-2 text-sm text-muted">{m.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
