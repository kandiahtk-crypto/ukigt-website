export default function ServicesPage() {
  return (
    <main style={{ padding: "120px 24px 60px", maxWidth: "1100px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "42px", color: "#d4af37" }}>
        Services
      </h1>

      <div style={{ display: "grid", gap: "20px", marginTop: "30px" }}>
        {[
          "Multi-Day Touring Transport",
          "Airport Transfers",
          "Cruise & Shore Excursions",
          "Tour Operator Programmes",
        ].map((item) => (
          <div
            key={item}
            style={{
              background: "#111",
              padding: "20px",
              borderRadius: "10px",
              border: "1px solid #222",
            }}
          >
            <h3 style={{ color: "#d4af37" }}>{item}</h3>
          </div>
        ))}
      </div>
    </main>
  );
}
