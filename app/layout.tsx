import "./globals.css";
import SiteHeader from "./components/SiteHeader";

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
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <SiteHeader />

        <main style={{ paddingTop: "84px", minHeight: "100vh" }}>
          {children}
        </main>

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
