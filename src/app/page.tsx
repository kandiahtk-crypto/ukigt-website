(This is the fully correct, fixed version.)
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-paper">
        <div className="absolute inset-0 bg-grid opacity-[0.25]" />

        <Container>
          <div className="py-20">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.28em] text-muted">
                UK Inbound Ground Transport
              </p>

              <h1 className="mt-3 text-4xl md:text-6xl font-semibold text-ink max-w-3xl">
                Reliable Ground‑Transport Solutions for UK & Ireland Touring
              </h1>

              <p className="mt-5 max-w-2xl text-muted text-lg leading-relaxed">
                Professional, structured and dependable touring logistics for international operators.
              </p>

              <div className="mt-8 flex gap-4 flex-col sm:flex-row">
                /contact
                  Plan Your Programme
                </Button>
                /contact
                  Speak With Operations
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}

