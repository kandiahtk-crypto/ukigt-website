export default function AboutPage() {
  return (
    <main
      style={{
        padding: "120px 24px 60px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <h1
        style={{
          fontSize: "42px",
          color: "#d4af37",
          marginBottom: "20px",
        }}
      >
        About UK Inbound Ground Transport
      </h1>

      <p
        style={{
          fontSize: "18px",
          lineHeight: 1.8,
          color: "#bbb",
          marginBottom: "30px",
          maxWidth: "950px",
        }}
      >
        UK Inbound Ground Transport is a specialist provider of premium
        ground-transport solutions for international tour operators, DMCs and
        global travel partners operating across the United Kingdom and Ireland.
        We deliver structured, reliable and corporate-grade touring logistics
        designed for multi-day programmes, fixed-departure series and
        high-volume group travel.
      </p>

      <p
        style={{
          fontSize: "18px",
          lineHeight: 1.8,
          color: "#bbb",
          marginBottom: "50px",
          maxWidth: "950px",
        }}
      >
        Our mission is simple: to provide first-class transport operations that
        international operators can trust for every departure, every season.
      </p>

      <section style={section}>
        <h2 style={heading}>Our Mission</h2>
        <p style={text}>
          To deliver professional, dependable and precisely structured touring
          logistics for inbound groups travelling across England, Scotland,
          Wales and Ireland. We exist to strengthen your touring programmes with
          operational clarity, consistency and premium service delivery.
        </p>
      </section>

      <section style={section}>
        <h2 style={heading}>Our Touring Approach</h2>

        <div style={grid}>
          <Card
            title="1. Structured Planning"
            text="Every programme begins with well-organised routing, balanced pacing and clear day-to-day flow."
          />
          <Card
            title="2. Operational Reliability"
            text="Our teams focus on punctuality, accuracy and seamless daily execution from start to finish."
          />
          <Card
            title="3. Clear Communication"
            text="We keep operators updated with concise, transparent communication — before, during and after each departure."
          />
          <Card
            title="4. Season-Wide Consistency"
            text="Whether it’s the first or last departure of the season, your guests receive the same high delivery standard."
          />
          <Card
            title="5. International Market Alignment"
            text="Our touring style is tailored to the expectations of key inbound markets including the USA, India, China and Europe."
          />
        </div>
      </section>

      <section style={section}>
        <h2 style={heading}>Where We Operate</h2>
        <p style={text}>
          We provide coverage across the entire United Kingdom:
        </p>

        <ul style={list}>
          <li>England</li>
          <li>Scotland</li>
          <li>Wales</li>
          <li>Ireland (integrated UK–Ireland touring flows)</li>
        </ul>

        <p style={text}>
          This allows operators to run full British Isles touring programmes
          with unified standards and smooth cross-country continuity.
        </p>
      </section>

      <section style={section}>
        <h2 style={heading}>Who We Serve</h2>

        <ul style={list}>
          <li>International tour operators</li>
          <li>Destination management companies</li>
          <li>Group travel specialists</li>
          <li>Wholesalers and consolidators</li>
          <li>Educational, cultural and special-interest travel providers</li>
        </ul>

        <p style={text}>
          We understand the operational expectations of long-haul markets and
          deliver programmes that match global standards of timing, comfort,
          efficiency and customer experience.
        </p>
      </section>

      <section style={section}>
        <h2 style={heading}>Why Operators Choose Us</h2>

        <ul style={list}>
          <li>Reliable touring logistics for multi-day programmes</li>
          <li>Structured operations across the UK &amp; Ireland</li>
          <li>Experience with long-haul and high-volume group travel</li>
          <li>Flexible support for series departures and seasonal programmes</li>
          <li>Premium brand presentation and professional communication</li>
        </ul>

        <p style={text}>
          We don’t just move passengers — we elevate your touring programme with
          a dependable, premium-quality transport foundation.
        </p>
      </section>

      <section
        style={{
          marginTop: "40px",
          padding: "32px",
          background: "#111",
          border: "1px solid #222",
          borderRadius: "14px",
        }}
      >
        <h2 style={heading}>Get in Touch</h2>

        <p style={text}>
          For operator enquiries or programme planning:
        </p>

        <p style={contactLine}>📧 info@ukinboundgroundtransport.com</p>
        <p style={contactLine}>☎️ 020 8629 2776</p>
        <p style={contactLine}>📱 +44 7957 776 778</p>

        <p style={{ ...text, marginTop: "20px", marginBottom: 0 }}>
          We provide fast responses, structured operational planning and full
          support for inbound touring programmes.
        </p>
      </section>
    </main>
  );
}

function Card({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div
      style={{
        background: "#111",
        padding: "24px",
        borderRadius: "12px",
        border: "1px solid #222",
      }}
    >
      <h3 style={{ color: "#d4af37", marginBottom: "10px" }}>{title}</h3>
      <p style={{ color: "#bbb", lineHeight: 1.8, margin: 0 }}>{text}</p>
    </div>
  );
}

const section: React.CSSProperties = {
  marginBottom: "50px",
};

const heading: React.CSSProperties = {
  color: "#d4af37",
  fontSize: "30px",
  marginBottom: "20px",
};

const text: React.CSSProperties = {
  color: "#bbb",
  lineHeight: 1.8,
  marginBottom: "18px",
};

const list: React.CSSProperties = {
  color: "#ddd",
  lineHeight: 1.9,
  paddingLeft: "22px",
  marginBottom: "20px",
};

const grid: React.CSSProperties = {
  display: "grid",
  gap: "20px",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
};

const contactLine: React.CSSProperties = {
  color: "#ddd",
  margin: "0 0 8px",
};
