import "./globals.css";

export const metadata = {
  title: "UK Inbound Ground Transport",
  description:
    "Reliable UK and Ireland ground-transport solutions for international tour operators.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header
          style={{
            position: "fixed",
            top: 0,
            width: "100%",
            background: "#0a0a0a",
            borderBottom: "1px solid #222",
            padding: "20px",
            zIndex: 1000,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ color: "#d4af37" }}>
              UK Inbound Ground Transport
            </span>

            <nav style={{ display: "flex", gap: "20px" }}>
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/services">Services</a>
              <a href="/programmes">Programmes</a>
              <a href="/contact">Contact</a>
            </nav>
          </div>
        </header>

        <main style={{ paddingTop: "80px" }}>{children}</main>
      </body>
    </html>
  );
}
