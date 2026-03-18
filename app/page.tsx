export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", background: "#0b0b0b", color: "white" }}>

      {/* NAVBAR */}
      <header
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          background: "rgba(0,0,0,0.9)",
          padding: "16px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #222",
          zIndex: 1000,
        }}
      >
        <strong style={{ color: "#d4af37" }}>UK Inbound Ground Transport</strong>

        <nav style={{ display: "flex", gap: "24px" }}>
          <a href="#services" style={{ color: "white", textDecoration: "none" }}>Services</a>
          <a href="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section
        style={{
          height: "100vh",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 20px",
        }}
      >
        <div>
          <h1 style={{ fontSize: "48px", marginBottom: "20px", color: "#d4af37" }}>
            UK & Ireland Ground Transport Specialists
          </h1>

          <p style={{ maxWidth: "700px", margin: "0 auto", fontSize: "18px", lineHeight: 1.6 }}>
            We provide reliable, professional ground transport solutions across the UK and Ireland,
            working closely with international tour operators and DMCs to deliver seamless touring programmes.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: "80px 24px", maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ color: "#d4af37", marginBottom: "20px" }}>Our Services</h2>

        <div style={{ display: "grid", gap: "20px" }}>
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

    </main>
  );
}
