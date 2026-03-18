export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", background: "#0a0a0a", color: "white" }}>
      
      {/* NAVBAR */}
      <header
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          background: "#0a0a0a",
          padding: "20px 30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #222",
          zIndex: 1000,
        }}
      >
        <strong style={{ color: "#d4af37" }}>
          UK Inbound Ground Transport
        </strong>

        <nav style={{ display: "flex", gap: "20px" }}>
          <a href="#services" style={{ color: "white", textDecoration: "none" }}>Services</a>
          <a href="#partners" style={{ color: "white", textDecoration: "none" }}>Partners</a>
          <a href="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section
        style={{
          height: "100vh",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.75)), url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          padding: "0 30px",
        }}
      >
        <div style={{ maxWidth: "800px", marginTop: "60px" }}>
          <h1 style={{ fontSize: "48px", color: "#d4af37" }}>
            UK Inbound Ground Transport Specialists
          </h1>

          <p style={{ fontSize: "20px", marginTop: "20px", lineHeight: 1.6 }}>
            We deliver structured, reliable ground transport solutions across the UK and Ireland, 
            supporting international tour operators and destination management companies with 
            seamless touring programmes.
          </p>

          <div style={{ marginTop: "30px" }}>
            <a
              href="#contact"
              style={{
                background: "#d4af37",
                color: "black",
                padding: "12px 24px",
                textDecoration: "none",
                borderRadius: "6px",
                fontWeight: "bold",
              }}
            >
              Plan Your Programme
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: "100px 30px" }}>
        <h2 style={{ color: "#d4af37", marginBottom: "40px" }}>Our Services</h2>

        <div style={{ display: "grid", gap: "30px" }}>
          <div>
            <h3>Inbound Tour Operations Support</h3>
            <p>Full transport coordination for international tour operators across the UK and Ireland.</p>
          </div>

          <div>
            <h3>UK & Ireland Touring Logistics</h3>
            <p>Seamless transport planning across multi-destination itineraries.</p>
          </div>

          <div>
            <h3>DMC & Trade Partnerships</h3>
            <p>Reliable ground handling solutions for destination management companies.</p>
          </div>

          <div>
            <h3>Luxury & Group Transport</h3>
            <p>High-quality vehicles and professional service for premium touring experiences.</p>
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section id="partners" style={{ background: "#111", padding: "100px 30px" }}>
        <h2 style={{ color: "#d4af37", marginBottom: "40px" }}>
          Who We Work With
        </h2>

        <div style={{ display: "grid", gap: "20px" }}>
          <p>• International Tour Operators</p>
          <p>• Destination Management Companies (DMCs)</p>
          <p>• Group Travel Specialists</p>
          <p>• Educational & Cultural Tour Providers</p>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" style={{ padding: "100px 30px", textAlign: "center" }}>
        <h2 style={{ color: "#d4af37" }}>Plan Your Next Touring Programme</h2>

        <p style={{ marginTop: "20px", fontSize: "18px" }}>
          Speak with our operations team to build a reliable and structured transport solution.
        </p>

        <a
          href="/contact"
          style={{
            marginTop: "30px",
            display: "inline-block",
            background: "#d4af37",
            color: "black",
            padding: "14px 28px",
            textDecoration: "none",
            borderRadius: "6px",
            fontWeight: "bold",
          }}
        >
          Contact Us
        </a>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "#000",
          padding: "40px 30px",
          borderTop: "1px solid #222",
          textAlign: "center",
        }}
      >
        <p style={{ marginBottom: "10px", color: "#d4af37" }}>
          UK Inbound Ground Transport
        </p>

        <p style={{ fontSize: "14px", color: "#aaa" }}>
          Supporting international tour operators & DMCs across the UK and Ireland
        </p>

        <p style={{ fontSize: "12px", marginTop: "20px", color: "#666" }}>
          © {new Date().getFullYear()} UK Inbound Ground Transport
        </p>
      </footer>
    </main>
  );
}
