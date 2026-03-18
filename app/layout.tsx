import "./globals.css";

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
        {/* NAVBAR */}
        <header
          style={{
            position: "fixed",
            top: 0,
            width: "100%",
            zIndex: 1000,
            background: "#0a0a0a",
            borderBottom: "1px solid #1f1f1f",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "16px 20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "20px",
            }}
          >
            {/* LOGO */}
            <a
              href="/"
              style={{
                color: "#d4af37",
                fontWeight: 700,
                fontSize: "13px",
                textDecoration: "none",
                maxWidth: "140px",
                lineHeight: 1.2,
              }}
            >
              UK Inbound Ground Transport
            </a>

            {/* NAV */}
            <nav
              style={{
                display: "flex",
                gap: "14px",
                fontSize: "13px",
                flexWrap: "nowrap",
                overflowX: "auto",
              }}
            >
              <a href="/" style={{ color: "white" }}>Home</a>
<a href="/about" style={{ color: "white", textDecoration: "none", whiteSpace: "nowrap" }}>
  About
</a>
              <a href="/programmes" style={{ color: "white", textDecoration: "none", whiteSpace: "nowrap" }}>
  Programmes
</a>
              <a href="/services" style={{ color: "white" }}>Services</a>
              <a href="/how-we-work" style={{ color: "white" }}>How We Work</a>
              <a href="/contact" style={{ color: "white" }}>Contact</a>
            </nav>
          </div>
        </header>

        {/* PAGE */}
        <main style={{ paddingTop: "80px" }}>{children}</main>

        {/* FOOTER */}
        <footer
          style={{
            borderTop: "1px solid #1f1f1f",
            marginTop: "60px",
            padding: "40px 20px",
            textAlign: "center",
            background: "#050505",
          }}
        >
          <h3 style={{ color: "#d4af37" }}>
            UK Inbound Ground Transport
          </h3>

          <p style={{ color: "#aaa", maxWidth: "500px", margin: "10px auto" }}>
            Supporting international tour operators and destination management
            companies across the UK and Ireland.
          </p>

          <p style={{ color: "#666", fontSize: "14px" }}>
            © 2026 All rights reserved
          </p>
        </footer>
      </body>
    </html>
  );
}
