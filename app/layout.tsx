import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#0a0a0a", color: "white" }}>
        
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
            }}
          >
            <a
              href="/"
              style={{
                color: "#d4af37",
                fontWeight: 700,
                fontSize: "16px",
                textDecoration: "none",
              }}
            >
              UK Inbound Ground Transport
            </a>

            <nav style={{ display: "flex", gap: "20px" }}>
              <a href="/" style={{ color: "white", textDecoration: "none" }}>Home</a>
              <a href="/services" style={{ color: "white", textDecoration: "none" }}>Services</a>
              <a href="/how-we-work" style={{ color: "white", textDecoration: "none" }}>How We Work</a>
              <a href="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</a>
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
          }}
        >
          <h3 style={{ color: "#d4af37" }}>
            UK Inbound Ground Transport
          </h3>
          <p style={{ color: "#aaa" }}>
            Supporting international tour operators & DMCs across the UK and Ireland
          </p>
        </footer>

      </body>
    </html>
  );
}
