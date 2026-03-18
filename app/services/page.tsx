export default function ServicesPage() {
  return (
    <main
      style={{
        padding: "80px 24px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <h1 style={{ fontSize: "42px", marginBottom: "20px", color: "#d4af37" }}>
        UK & Ireland Transport Services
      </h1>

      <p
        style={{
          fontSize: "18px",
          lineHeight: 1.7,
          marginBottom: "40px",
          color: "rgba(255,255,255,0.8)",
        }}
      >
        We provide structured, reliable ground transport solutions for tour
        operators and destination management companies delivering inbound travel
        programmes across the United Kingdom and Ireland.
      </p>

      <div style={{ display: "grid", gap: "24px" }}>
        <div
          style={{
            background: "#111",
            border: "1px solid #222",
            borderRadius: "12px",
            padding: "24px",
          }}
        >
          <h3 style={{ color: "#d4af37" }}>Multi-Day Touring Transport</h3>
          <p>
            Reliable hotel-to-hotel touring operations across England,
            Scotland, Wales and Ireland, supporting structured itineraries.
          </p>
        </div>

        <div
          style={{
            background: "#111",
            border: "1px solid #222",
            borderRadius: "12px",
            padding: "24px",
          }}
        >
          <h3 style={{ color: "#d4af37" }}>Airport Transfers</h3>
          <p>
            Coordinated airport arrivals and departures from Heathrow, Gatwick,
            Manchester, Edinburgh, Dublin and other major gateways.
          </p>
        </div>

        <div
          style={{
            background: "#111",
            border: "1px solid #222",
            borderRadius: "12px",
            padding: "24px",
          }}
        >
          <h3 style={{ color: "#d4af37" }}>Cruise & Shore Excursions</h3>
          <p>
            Transport support for cruise arrivals, shore excursions and onward
            touring programmes across the UK and Ireland.
          </p>
        </div>

        <div
          style={{
            background: "#111",
            border: "1px solid #222",
            borderRadius: "12px",
            padding: "24px",
          }}
        >
          <h3 style={{ color: "#d4af37" }}>Tour Operator Programmes</h3>
          <p>
            Structured support for fixed departures, series tours and seasonal
            programmes requiring consistency and operational precision.
          </p>
        </div>
      </div>
    </main>
  );
}
