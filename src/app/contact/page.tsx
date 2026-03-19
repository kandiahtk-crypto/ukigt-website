import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";

export default function ContactPage() {
  const email = "info@ukinboundgroundtransport.com";
  const phone1 = "02086292776";
  const phone2 = "+447957776778";

  return (
    <section className="py-20 bg-paper">
      <Container>
        <Reveal>
          <h1 className="text-4xl font-semibold tracking-tight text-ink">
            Contact
          </h1>
          <p className="mt-5 max-w-3xl text-muted leading-relaxed">
            Contact our operations team to plan your touring programme. We respond quickly with 
            structured support and clear planning guidance.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {/* DIRECT CONTACT */}
          <Reveal>
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <p className="font-semibold text-steel text-lg">Direct Contact</p>

              <p className="mt-4 text-sm text-muted">
                Email: <span className="text-steel font-medium">{email}</span><br />
                Landline: <span className="text-steel font-medium">{phone1}</span><br />
                Mobile / WhatsApp: <span className="text-steel font-medium">{phone2}</span>
              </p>

              <div className="mt-6 flex gap-3">
                {`mailto:${email}`}Email Us</Button>
                {`tel:${phone2}`}Call Us</Button>
              </div>
            </div>
          </Reveal>

          {/* FORM */}
          <Reveal>
            {`mailto:${email}`}
              <p className="font-semibold text-steel text-lg">Enquiry Form</p>

              <div className="mt-4 grid gap-4">
                <input
                  name="Name"
                  type="text"
                  placeholder="Name"
                  required
                  className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm"
                />
                <input
                  name="Company"
                  type="text"
                  placeholder="Company"
                  className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm"
                />
                <input
                  name="Email"
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm"
                />
                <textarea
                  name="Message"
                  placeholder="Programme details (dates, group size, routing)"
                  required
                  className="min-h-[120px] w-full rounded-xl border border-black/10 px-4 py-3 text-sm"
                />
              </div>

              <div className="mt-6">
                <Button type="submit">Send Enquiry</Button>
              </div>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
