import Container from "@/components/Container";
import Reveal from "@/components/Reveal";

export default function AboutPage() {
  return (
    <section className="py-20 bg-paper">
      <Container>
        <Reveal>
          <h1 className="text-4xl font-semibold tracking-tight text-ink">
            About Us
          </h1>
          <p className="mt-5 max-w-3xl text-muted leading-relaxed">
            UK Inbound Ground Transport delivers structured, reliable and corporate‑grade touring logistics 
            for international tour operators, DMCs and global travel partners. We support multi‑day programmes, 
            fixed‑departure series and large group movements across England, Scotland, Wales and Ireland.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              t: "Our Mission",
              d: "To provide dependable, professional and precisely structured transport operations for inbound touring."
            },
            {
              t: "Our Approach",
              d: "Consistent communication, balanced pacing, structured routing and reliable programme delivery."
            },
            {
              t: "Coverage",
              d: "Full UK operations with integrated support for Ireland, enabling seamless British Isles touring."
            },
          ].map((x) => (
            <Reveal key={x.t}>
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                <p className="font-semibold text-steel text-lg">{x.t}</p>
                <p className="mt-2 text-sm text-muted">{x.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

