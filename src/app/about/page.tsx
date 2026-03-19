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
            UK Inbound Ground Transport delivers structured, reliable and corporate‑grade touring logistics.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
