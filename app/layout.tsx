import "./globals.css";

export const metadata = {
  title: "UK Inbound Ground Transport",
  description:
    "Reliable UK and Ireland ground transport solutions for international tour operators and destination management companies.",
};

const navLink: React.CSSProperties = {
  color: "rgba(255,255,255,0.82)",
  textDecoration: "none",
  fontSize: "14px",
  whiteSpace: "nowrap",
};

const contactBtn: React.CSSProperties = {
  background: "#d4af37",
  color: "#111",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: 700,
  padding: "10px 16px",
  borderRadius: "8px",
  whiteSpace: "nowrap",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          background: "#0a0a0a",
          color: "white",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <header
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 1000,
            background: "rgba(10,10,10,0.92)",
            backdropFilter: "blur(10px)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "16px 24px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "24px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="/"
              style={{
                color: "#d4af37",
                fontWeight: 700,
                fontSize: "14px",
                letterSpacing: "0.04em",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              UK Inbound Ground Transport
            </a>

            <nav
              style={{
                display: "flex",
                alignItems: "center",
                gap: "22px",
                flexWrap: "wrap",
                justifyContent: "flex-end",
              }}
            >
              <a href="/" style={navLink}>
                Home
              </a>
              <a href="/about" style={navLink}>
                About
              </a>
              <a href="/services" style={navLink}>
                Services
              </a>
              <a href="/programmes" style={navLink}>
                Programmes
              </a>
              <a href="/how-we-work" style={navLink}>
                How We Work
              </a>
              <a href="/contact" style={contactBtn}>
                Contact
              </a>
            </nav>
          </div>
        </header>

        <main style={{ paddingTop: "88px", minHeight: "100vh" }}>{children}</main>

        <footer
          style={{
            borderTop: "1px solid #1f1f1f",
            marginTop: "60px",
            padding: "48px 24px",
            background: "#050505",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "28px",
            }}
          >
            <div>
              <h3
                style={{
                  color: "#d4af37",
                  marginTop: 0,
                  marginBottom: "12px",
                  fontSize: "18px",
                }}
              >
                UK Inbound Ground Transport
              </h3>

              <p
                style={{
                  color: "#aaa",
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                Supporting international tour operators and destination
                management companies across the UK and Ireland.
              </p>
            </div>

            <div>
              <h4
                style={{
                  color: "#d4af37",
                  marginTop: 0,
                  marginBottom: "12px",
                  fontSize: "15px",
                }}
              >
                Navigation
              </h4>

              <div style={{ display: "grid", gap: "10px" }}>
                <a href="/" style={navLink}>
                  Home
                </a>
                <a href="/about" style={navLink}>
                  About
                </a>
                <a href="/services" style={navLink}>
                  Services
                </a>
                <a href="/programmes" style={navLink}>
                  Programmes
                </a>
                <a href="/how-we-work" style={navLink}>
                  How We Work
                </a>
                <a href="/contact" style={navLink}>
                  Contact
                </a>
              </div>
            </div>

            <div>
              <h4
                style={{
                  color: "#d4af37",
                  marginTop: 0,
                  marginBottom: "12px",
                  fontSize: "15px",
                }}
              >
                Contact
              </h4>

              <p style={{ color: "#bbb", margin: "0 0 8px" }}>
                info@ukinboundgroundtransport.com
              </p>
              <p style={{ color: "#bbb", margin: "0 0 8px" }}>
                020 8629 2776
              </p>
              <p style={{ color: "#bbb", margin: 0 }}>
                +44 7957 776 778
              </p>
            </div>
          </div>

          <div
            style={{
              maxWidth: "1200px",
              margin: "28px auto 0",
              paddingTop: "20px",
              borderTop: "1px solid #1a1a1a",
              color: "#666",
              fontSize: "14px",
              textAlign: "center",
            }}
          >
            © 2026 UK Inbound Ground Transport. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
