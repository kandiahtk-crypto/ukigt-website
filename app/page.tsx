export default function HomePage() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "120px 24px 60px",
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.88)), url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h1
          style={{
            fontSize: "clamp(36px, 7vw, 64px)",
            color: "#d4af37",
            marginBottom: "20px",
          }}
        >
          UK Inbound Ground Transport Specialists
        </h1>

        <p
          style={{
            fontSize: "20px",
            lineHeight: 1.7,
            marginBottom: "20px",
            maxWidth: "700px",
          }}
        >
          Structured, reliable UK & Ireland transport solutions for tour
          operators and DMCs.
        </p>

        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <a
            href="/contact"
            style={{
              background: "#d4af37",
              color: "#111",
              padding: "14px 22px",
              borderRadius: "8px",
              fontWeight: 700,
            }}
          >
            Speak to Operations
          </a>

          <a
            href="/services"
            style={{
              border: "1px solid #fff",
              padding: "14px 22px",
              borderRadius: "8px",
            }}
          >
            View Services
          </a>
        </div>
      </div>
    </section>
  );
}
