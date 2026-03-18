export default function AboutPage() {
  return (
    <main
      style={{
        padding: "120px 24px 60px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      {/* TITLE */}
      <h1
        style={{
          fontSize: "42px",
          color: "#d4af37",
          marginBottom: "20px",
        }}
      >
        About Us
      </h1>

      {/* INTRO */}
      <p
        style={{
          fontSize: "18px",
          lineHeight: 1.8,
          color: "#bbb",
          marginBottom: "50px",
          maxWidth: "900px",
        }}
      >
        UK Inbound Ground Transport provides structured touring logistics for
        international tour operators across England, Scotland, Wales and
        integrated flows with Ireland. Our operations are built around
        reliability, consistency and clear communication, ensuring every touring
        programme runs smoothly from start to finish.
      </p>

      {/* GRID SECTIONS */}
      <div
        style={{
          display: "grid",
          gap: "24px",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        }}
      >
        {/* MISSION */}
        <div
          style={{
            background: "#111",
            padding: "28px",
            borderRadius: "14px",
            border: "1px solid #222",
          }}
        >
          <h2 style={{ color: "#d4af37", marginBottom: "12px" }}>
            Our Mission
          </h2>
          <p style={{ color: "#bbb", lineHeight: 1.8 }}>
            To deliver dependable, corporate-grade touring logistics that
            strengthen operator confidence and improve the traveller experience.
          </p>
        </div>

        {/* APPROACH */}
        <div
          style={{
            background: "#111",
            padding: "28px",
            borderRadius: "14px",
            border: "1px solid #222",
          }}
        >
          <h2 style={{ color: "#d4af37", marginBottom: "12px" }}>
            Our Approach
          </h2>
          <p style={{ color: "#bbb", lineHeight: 1.8 }}>
            We focus on structured planning, clear communication and consistent
            execution. Our processes ensure operational efficiency across
            regions and seamless day-to-day delivery.
          </p>
        </div>

        {/* COVERAGE */}
        <div
          style={{
            background: "#111",
            padding: "28px",
            borderRadius: "14px",
            border: "1px solid #222",
          }}
        >
          <h2 style={{ color: "#d4af37", marginBottom: "12px" }}>
            Coverage
          </h2>
          <p style={{ color: "#bbb", lineHeight: 1.8 }}>
            We operate nationwide across the UK with integrated support for
            Ireland, allowing full multi-country touring continuity.
          </p>
        </div>
      </div>
    </main>
  );
}
