import "./globals.css";

const linkStyle: React.CSSProperties = {
  color: "rgba(255,255,255,0.85)",
  textDecoration: "none",
  fontSize: "15px",
};

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
            background: "rgba(10,10,10,0.95)",
            borderBottom: "1px solid #1f1f1f",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "18px 24px",
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
                fontSize: "18px",
                textDecoration: "none",
              }}
            >
              UK Inbound Ground Transport
            </a>

            <nav style={{ display: "flex", gap: "24px" }}>
              <a href="/" style={linkStyle}>Home</a>
              <a href="/services" style={linkStyle}>Services</a>
              <a href="/how-we-work" style={linkStyle}>How We Work</a>
              <a href="/contact" style={linkStyle}>Contact</a>
            </nav>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <div style={{ paddingTop: "90px" }}>{children}</div>

        {/* FOOTER */}
        <footer
          style={{
            marginTop: "80px",
            borderTop: "1px solid #1f1f1f",
            padding: "50px 24px",
            background: "#050505",
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            
            <h3 style={{ color: "#d4af37", marginBottom: "10px" }}>
              UK Inbound Ground Transport
            </h3>

            <p style={{ color: "rgba(255,255,255,0.7)", maxWidth: "600px" }}>
              Supporting international tour operators and destination management
              companies with reliable UK and Ireland ground transport solutions.
            </p>

            <div style={{ marginTop: "20px", color: "rgba(255,255,255,0.5)" }}>
              © 2026 All rights reserved
            </div>

          </div>
        </footer>

      </body>
    </html>
  );
}
