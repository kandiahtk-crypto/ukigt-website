export default function HomePage() {
  return (
    <main>
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "120px 24px 80px",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.9)), url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h1
            style={{
              fontSize: "clamp(36px, 7vw, 64px)",
              color: "#d4af37",
              marginBottom: "20px",
              lineHeight: 1.1,
              maxWidth: "900px",
            }}
          >
            Reliable Ground-Transport Solutions for UK & Ireland Touring
          </h1>

          <p
            style={{
              fontSize: "20px",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.9)",
              maxWidth: "700px",
              marginBottom: "30px",
            }}
          >
            Premium touring logistics for international operators, built on
            reliability, precision, and a professional delivery standard.
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a
              href="/contact"
              style={{
                background: "#d4af37",
                color: "#111",
                padding: "14px 24px",
                borderRadius: "8px",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Plan Your Programme
            </a>

            <a
              href="/contact"
              style={{
                border: "1px solid white",
                color: "white",
                padding: "14px 24px",
                borderRadius: "8px",
                textDecoration: "none",
              }}
            >
              Speak With Operations
            </a>
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "80px 24px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <p style={{ fontSize: "18px", lineHeight: 1.8, color: "#ccc" }}>
          UK Inbound Ground Transport provides structured ground-transport
          solutions for international tour operators across England, Scotland,
          Wales and integrated flows with Ireland. We deliver consistent,
          dependable touring operations designed for long-haul markets and
          high-volume group programmes.
        </p>
      </section>

      <section style={{ padding: "80px 24px", background: "#050505" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2
            style={{
              color: "#d4af37",
              fontSize: "32px",
              marginBottom: "20px",
            }}
          >
            Professional. Structured. Reliable.
          </h2>

          <p style={{ color: "#bbb", lineHeight: 1.8 }}>
            UK Inbound Ground Transport delivers corporate-grade touring
            logistics built around precision, clear communication and reliable
            daily execution. Our operations support multi-region touring across
            the United Kingdom with seamless transitions into Ireland.
          </p>
        </div>
      </section>

      <section
        style={{
          padding: "80px 24px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            color: "#d4af37",
            fontSize: "32px",
            marginBottom: "40px",
          }}
        >
          Core Services
        </h2>

        <div
          style={{
            display: "grid",
            gap: "24px",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          }}
        >
          {[
            {
              title: "Fixed-Departure Series",
              desc: "Structured support for season-long programme delivery.",
            },
            {
              title: "Multi-Region UK Touring",
              desc: "Efficient routing across England, Scotland and Wales.",
            },
            {
              title: "UK–Ireland Integrated Itineraries",
              desc: "Seamless cross-country operations and coordinated timings.",
            },
            {
              title: "Long-Haul Market Alignment",
              desc: "Built specifically for USA, India, China and Europe group expectations.",
            },
          ].map((s) => (
            <div
              key={s.title}
              style={{
                background: "#111",
                padding: "24px",
                borderRadius: "12px",
                border: "1px solid #222",
                transition: "0.2s",
              }}
            >
              <h3 style={{ color: "#d4af37" }}>{s.title}</h3>
              <p style={{ color: "#bbb", marginTop: "8px" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "80px 24px", background: "#050505" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2
            style={{
              color: "#d4af37",
              fontSize: "32px",
              marginBottom: "40px",
            }}
          >
            Markets We Serve
          </h2>

          <div
            style={{
              display: "grid",
              gap: "24px",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            }}
          >
            {[
              {
                title: "United States",
                desc: "Extended touring with balanced pacing and consistent daily flow.",
              },
              {
                title: "India",
                desc: "Multi-destination touring with efficient timings and high-energy structures.",
              },
              {
                title: "China",
                desc: "Precise schedules, photo-friendly pacing and smooth daily transitions.",
              },
              {
                title: "Europe",
                desc: "Short-stay touring, flexible routing and fast regional connections.",
              },
            ].map((m) => (
              <div
                key={m.title}
                style={{
                  background: "#111",
                  padding: "24px",
                  borderRadius: "12px",
                  border: "1px solid #222",
                  transition: "0.2s",
                }}
              >
                <h3 style={{ color: "#d4af37" }}>{m.title}</h3>
                <p style={{ color: "#bbb", marginTop: "8px" }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "100px 24px", textAlign: "center" }}>
        <h2
          style={{
            color: "#d4af37",
            fontSize: "32px",
            marginBottom: "20px",
          }}
        >
          Ready to plan your next touring programme?
        </h2>

        <p style={{ color: "#bbb", marginBottom: "30px" }}>
          Contact us to discuss your UK & Ireland operational requirements.
        </p>

        <a
          href="/contact"
          style={{
            background: "#d4af37",
            color: "#111",
            padding: "16px 28px",
            borderRadius: "8px",
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          Contact Us
        </a>
      </section>
    </main>
  );
}
