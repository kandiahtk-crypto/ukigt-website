import "./globals.css";

export const metadata = {
  title: "UK Inbound Ground Transport",
  description:
    "Reliable UK and Ireland ground-transport solutions for international tour operators and destination management companies.",
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
        {/* NAVBAR */}
        <header
          style={{
            position: "fixed",
            top: 0,
            width: "100%",
            background: "#0a0a0a",
            borderBottom: "1px solid #222",
            zIndex: 1000,
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
            {/* LOGO */}
            <a
              href="/"
              style={{
                color: "#d4af37",
                fontWeight: 700,
                textDecoration: "none",
                fontSize: "14px",
                letterSpacing: "0.05em",
              }}
            >
              UK Inbound Ground Transport
            </a>

            {/* MENU */}
            <nav style={{ display: "flex", gap: "24px" }}>
              <a href="/" style={link}>Home</a>
              <a href="/about" style={link}>About</a>
              <a href="/services" style={link}>Services</a>
              <a href="/programmes" style={link}>Programmes</a>
              <a href="/how-we-work" style={link}>How We Work</a>

              <a
                href="/contact"
                style={{
                  background: "#d4af37",
                  color: "#111",
                  padding: "8px 14px",
                  borderRadius: "6px",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                Contact
              </a>
            </nav>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main style={{ paddingTop: "80px", minHeight: "100vh" }}>
          {children}
        </main>

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

const link = {
  color: "white",
  textDecoration: "none",
  fontSize: "14px",
};
