export default function Home() {
  return (
    <main style={{ background: "#f5f5f7", minHeight: "100vh" }}>
      
      {/* NAVBAR */}
      <header style={{
        position: "fixed",
        top: 0,
        width: "100%",
        background: "white",
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1px solid #eee",
        zIndex: 1000
      }}>
        <strong>UK Transport</strong>

        <nav style={{ display: "flex", gap: "20px" }}>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section style={{
        height: "100vh",
        background: "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470') center/cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        marginTop: "80px"
      }}>
        <div>
          <h1 style={{ fontSize: "50px" }}>Luxury UK Transport</h1>
          <p>Premium tours across UK & Ireland</p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: "80px", textAlign: "center" }}>
        <h2>Services</h2>
        <p>Private tours • Chauffeur • Airport transfers</p>
      </section>

      {/* CTA */}
      <section id="contact" style={{ padding: "80px", textAlign: "center" }}>
        <h2>Plan Your Programme</h2>
        <a href="/contact">Contact Us →</a>
      </section>

    </main>
  );
}
