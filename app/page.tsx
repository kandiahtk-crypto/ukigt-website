export default function Home() {
  return (
    <main style={{ background: "#f5f5f7", color: "#111827", minHeight: "100vh" }}>
      <section
        style={{
          minHeight: "100vh",
          backgroundImage:
            "linear-gradient(rgba(15,23,42,0.45), rgba(15,23,42,0.55)), url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "80px 24px",
          }}
        >
          <div
            style={{
              maxWidth: "720px",
              background: "rgba(255,255,255,0.10)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.18)",
              borderRadius: "24px",
              padding: "48px",
              color: "white",
              boxShadow: "0 20px 60px rgba(0,0,0,0.22)",
            }}
          >
            <div
              style={{
                fontSize: "13px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                marginBottom: "18px",
                opacity: 0.9,
              }}
            >
              UK Inbound Ground Transport
            </div>

            <h1
              style={{
                fontSize: "clamp(42px, 7vw, 72px)",
                lineHeight: 1.02,
                margin: "0 0 20px",
                fontFamily: "Georgia, 'Times New Roman', serif",
              }}
            >
              Reliable Ground-Transport Solutions for UK &amp; Ireland Touring
            </h1>

            <p
              style={{
                fontSize: "20px",
                lineHeight: 1.7,
                margin: "0 0 30px",
                maxWidth: "620px",
                color: "rgba(255,255,255,0.9)",
              }}
            >
              Premium ground-transport solutions for international tour operators,
              built on reliability, precision and professional delivery.
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a
                href="#contact"
                style={{
                  background: "#243b67",
                  color: "white",
                  padding: "14px 24px",
                  borderRadius: "10px",
                  textDecoration: "none",
                  fontWeight: 600,
                  display: "inline-block",
                }}
              >
                Plan Your Programme
              </a>

              <a
                href="#services"
                style={{
                  background: "rgba(255,255,255,0.9)",
                  color: "#111827",
                  padding: "14px 24px",
                  borderRadius: "10px",
                  textDecoration: "none",
                  fontWeight: 600,
                  display: "inline-block",
                }}
              >
                Speak With Operations
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        style={{
          maxWidth: "1200px",
          margin: "-60px auto 0",
          padding: "0 24px 80px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            background: "white",
            borderRadius: "24px",
            boxShadow: "0 24px 80px rgba(15,23,42,0.10)",
            overflow: "hidden",
            border: "1px solid rgba(17,24,39,0.06)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0",
            }}
          >
            <div style={{ padding: "48px" }}>
              <div
                style={{
                  fontSize: "13px",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                  color: "#475569",
                }}
              >
                Who We Are
              </div>

              <h2
                style={{
                  fontSize: "clamp(30px, 4vw, 48px)",
                  lineHeight: 1.05,
                  margin: "0 0 18px",
                  fontFamily: "Georgia, 'Times New Roman', serif",
                }}
              >
                Professional. Structured. Reliable.
              </h2>

              <p style={{ fontSize: "18px", lineHeight: 1.8, color: "#475569", margin: 0 }}>
                UK Inbound Ground Transport provides corporate-grade touring
                logistics across England, Scotland, Wales, and integrated flows
                with Ireland. We support high-volume, long-haul markets with
                consistency across every departure.
              </p>
            </div>

            <div
              style={{
                padding: "48px",
                borderLeft: "1px solid rgba(17,24,39,0.06)",
                background: "#fbfbfc",
              }}
            >
              <div
                style={{
                  fontSize: "13px",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                  color: "#475569",
                }}
              >
                Our Core Services
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "24px 28px",
                }}
              >
                <div>
                  <h3 style={{ margin: "0 0 8px", fontSize: "20px" }}>Fixed-Departure Series</h3>
                  <p style={{ margin: 0, color: "#64748b", lineHeight: 1.7 }}>
                    Operationally reliable programme support for repeat departures.
                  </p>
                </div>

                <div>
                  <h3 style={{ margin: "0 0 8px", fontSize: "20px" }}>UK–Ireland Integration</h3>
                  <p style={{ margin: 0, color: "#64748b", lineHeight: 1.7 }}>
                    Coordinated transport planning across multi-country itineraries.
                  </p>
                </div>

                <div>
                  <h3 style={{ margin: "0 0 8px", fontSize: "20px" }}>Multi-Region UK Touring</h3>
                  <p style={{ margin: 0, color: "#64748b", lineHeight: 1.7 }}>
                    Structured route support for touring programmes across Britain.
                  </p>
                </div>

                <div>
                  <h3 style={{ margin: "0 0 8px", fontSize: "20px" }}>Long-Haul Market Alignment</h3>
                  <p style={{ margin: 0, color: "#64748b", lineHeight: 1.7 }}>
                    Programme delivery aligned with international operator needs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            id="contact"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "24px",
              padding: "36px 48px",
              background: "#eef2f7",
              borderTop: "1px solid rgba(17,24,39,0.06)",
              flexWrap: "wrap",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "13px",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                  color: "#475569",
                }}
              >
                Markets We Serve
              </div>
              <h2
                style={{
                  margin: 0,
                  fontSize: "clamp(28px, 3.5vw, 42px)",
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  lineHeight: 1.08,
                }}
              >
                Ready to plan your next touring programme?
              </h2>
            </div>

            <a
              href="/contact"
              style={{
                background: "#243b67",
                color: "white",
                padding: "16px 24px",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: 600,
                whiteSpace: "nowrap",
              }}
            >
              Contact Us →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
