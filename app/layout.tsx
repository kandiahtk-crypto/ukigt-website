import "./globals.css";

export const metadata = {
  title: "UK Inbound Ground Transport",
  description:
    "Reliable UK and Ireland ground-transport solutions for international tour operators and destination management companies.",
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
  borderRadius: "999px",
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
            background: "rgba(10,10,10,0.88)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
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
                letterSpacing: "0.06em",
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
                gap: "20px",
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

        <main style={{ paddingTop: "84px", minHeight: "100vh" }}>
          {children}
        </main>

        <footer
          style={{
            borderTop: "1px solid #1f1f1f",
            marginTop: "60px",
            padding: "40px 20px",
            textAlign: "center",
            background: "#050505",
          }}
        >
          <h3 style={{ color: "#d4af37", marginBottom: "10px" }}>
            UK Inbound Ground Transport
          </h3>

          <p style={{ color: "#aaa", maxWidth: "500px", margin: "0 auto" }}>
            Supporting international tour operators and destination management
            companies across the UK and Ireland.
          </p>

          <div style={{ marginTop: "20px", color: "#bbb" }}>
            <p style={{ margin: "4px 0" }}>
              info@ukinboundgroundtransport.com
            </p>
            <p style={{ margin: "4px 0" }}>020 8629 2776</p>
            <p style={{ margin: "4px 0" }}>+44 7957 776 778</p>
          </div>

          <p style={{ marginTop: "20px", color: "#666", fontSize: "14px" }}>
            © 2026 All rights reserved
          </p>
        </footer>
      </body>
    </html>
  );
}
