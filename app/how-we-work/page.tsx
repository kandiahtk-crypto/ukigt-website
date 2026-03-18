export default function HowWeWorkPage() {
  return (
    <main
      style={{
        padding: "80px 24px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <h1 style={{ fontSize: "42px", marginBottom: "20px", color: "#d4af37" }}>
        How We Work
      </h1>

      <p
        style={{
          fontSize: "18px",
          lineHeight: 1.7,
          marginBottom: "40px",
          color: "rgba(255,255,255,0.8)",
        }}
      >
        Our approach is built around structured planning, operational clarity
        and consistent delivery across every touring programme.
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
          <h3 style={{ color: "#d4af37" }}>1. Programme Review</h3>
          <p>
            We assess your itinerary, routing and operational feasibility to
            ensure smooth delivery before the programme begins.
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
          <h3 style={{ color: "#d4af37" }}>2. Transport Planning</h3>
          <p>
            We align transport logistics with your schedule, ensuring efficient
            movement and realistic travel timings.
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
          <h3 style={{ color: "#d4af37" }}>3. Operational Delivery</h3>
          <p>
            Consistent, professional execution across every departure — from the
            first movement to the final drop-off.
          </p>
        </div>
      </div>
    </main>
  );
}
