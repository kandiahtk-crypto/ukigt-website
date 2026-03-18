export default function ServicesPage() {
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
        Services
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
        Our services are designed for professional inbound tour operators and
        destination management companies who require clarity, structure and
        reliability throughout the touring season.
      </p>

      {/* SERVICES GRID */}
      <div
        style={{
          display: "grid",
          gap: "24px",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        }}
      >
        {/* SERVICE 1 */}
        <div style={card}>
          <h3 style={title}>Fixed-Departure Series Support</h3>
          <p style={text}>
            Season-long touring delivery with consistent, repeatable daily
            execution.
          </p>
        </div>

        {/* SERVICE 2 */}
        <div style={card}>
          <h3 style={title}>Multi-Region UK Touring</h3>
          <p style={text}>
            Structured touring flows across England, Scotland and Wales with
            efficient routing.
          </p>
        </div>

        {/* SERVICE 3 */}
        <div style={card}>
          <h3 style={title}>UK–Ireland Integrated Itineraries</h3>
          <p style={text}>
            Seamless cross-country operations with coordinated timings and
            single-point operational control.
          </p>
        </div>

        {/* SERVICE 4 */}
        <div style={card}>
          <h3 style={title}>Large Group Coordination</h3>
          <p style={text}>
            Professional handling for high-volume groups, multiple coaches or
            peak-season programmes.
          </p>
        </div>

        {/* SERVICE 5 */}
        <div style={card}>
          <h3 style={title}>Long-Haul Market Alignment</h3>
          <p style={text}>
            Built to meet the expectations of USA, India, China and Europe
            markets, matching arrival times, pacing, and touring standards.
          </p>
        </div>
      </div>
    </main>
  );
}

/* STYLES */

const card = {
  background: "#111",
  padding: "28px",
  borderRadius: "14px",
  border: "1px solid #222",
};

const title = {
  color: "#d4af37",
  marginBottom: "10px",
  fontSize: "18px",
};

const text = {
  color: "#bbb",
  lineHeight: 1.7,
};
