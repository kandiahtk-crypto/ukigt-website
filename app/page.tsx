export default function HomePage() {
  return (
    <main>

      {/* HERO */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "120px 24px 80px",
          background: "#0a0a0a",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h1
            style={{
              fontSize: "clamp(36px, 7vw, 60px)",
              color: "#d4af37",
              marginBottom: "20px",
              lineHeight: 1.1,
            }}
          >
            Reliable UK & Ireland Ground-Transport Solutions for International Tour Operators
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.8,
              color: "#bbb",
              maxWidth: "800px",
              marginBottom: "30px",
            }}
          >
            UK Inbound Ground Transport provides professional, structured
            ground-transport services for inbound tour operators, destination
            management companies and global travel brands. We deliver reliable,
            high-quality touring logistics throughout England, Scotland, Wales
            and Ireland, ensuring smooth, consistent and well-coordinated
            operations for your programmes.
          </p>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.8,
              color: "#bbb",
              maxWidth: "800px",
              marginBottom: "40px",
            }}
          >
            Our expertise supports fixed-departure series, multi-region UK tours,
            British Isles itineraries and large group programmes designed for the
            USA, India, China and Europe inbound markets.
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href="/contact" style={primaryBtn}>
              Plan Your Programme
            </a>

            <a href="/contact" style={secondaryBtn}>
              Speak With Operations
            </a>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section style={sectionDark}>
        <div style={container}>
          <h2 style={heading}>Who We Are</h2>

          <p style={text}>
            At UK Inbound Ground Transport, we specialise in delivering
            corporate-grade touring logistics across the United Kingdom and
            Ireland.
          </p>

          <ul style={list}>
            <li>Operational reliability</li>
            <li>Structured touring flows</li>
            <li>Clear communication</li>
            <li>Consistent daily execution</li>
          </ul>

          <p style={text}>
            We provide the transport foundation that international tour operators
            depend on to maintain programme quality, efficiency and brand
            standards.
          </p>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section style={section}>
        <div style={container}>
          <h2 style={heading}>Our Core Services</h2>

          <ServiceCard
            title="Fixed-Departure Series"
            text="We offer full-season support for fixed-departure series, providing consistent, repeatable delivery across every departure. Ideal for brochure-based itineraries and high-volume touring programmes."
          />

          <ServiceCard
            title="Multi-Region UK Touring"
            text="Structured touring across England, Scotland and Wales with balanced pacing and efficient routing, ensuring a seamless travel experience."
          />

          <ServiceCard
            title="UK–Ireland Integrated Touring"
            text="British Isles touring with coordinated ferry timings and unified operational control for seamless cross-country itineraries."
          />

          <ServiceCard
            title="Large Group Coordination"
            text="High-volume group logistics, multi-coach operations and precise coordination of movements, timings and routing."
          />

          <ServiceCard
            title="Long-Haul Market Alignment"
            text="Touring designed for USA, India, China and Europe markets, aligning with arrival patterns, pacing and global expectations."
          />
        </div>
      </section>

      {/* MARKETS */}
      <section style={sectionDark}>
        <div style={container}>
          <h2 style={heading}>Markets We Serve</h2>

          <MarketCard
            title="United States"
            text="Extended UK & Ireland tours with balanced pacing and high consistency."
          />
          <MarketCard
            title="India"
            text="High-energy touring with efficient timings and large group coordination."
          />
          <MarketCard
            title="China"
            text="Precise scheduling, structured touring and consistent delivery."
          />
          <MarketCard
            title="Europe"
            text="Short-stay touring with flexible routing and strong regional connectivity."
          />
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "100px 24px", textAlign: "center" }}>
        <h2 style={{ color: "#d4af37", fontSize: "32px" }}>
          Ready to plan your next touring programme?
        </h2>

        <p style={{ color: "#bbb", margin: "20px 0 30px" }}>
          Contact us to discuss your UK & Ireland operational requirements.
        </p>

        <a href="/contact" style={primaryBtn}>
          Contact Us
        </a>
      </section>

    </main>
  );
}

/* COMPONENTS */

function ServiceCard({ title, text }: any) {
  return (
    <div style={card}>
      <h3 style={cardTitle}>{title}</h3>
      <p style={textStyle}>{text}</p>
    </div>
  );
}

function MarketCard({ title, text }: any) {
  return (
    <div style={card}>
      <h3 style={cardTitle}>{title}</h3>
      <p style={textStyle}>{text}</p>
    </div>
  );
}

/* STYLES */

const container = { maxWidth: "1100px", margin: "0 auto" };

const section = { padding: "80px 24px" };

const sectionDark = { padding: "80px 24px", background: "#050505" };

const heading = {
  color: "#d4af37",
  fontSize: "32px",
  marginBottom: "30px",
};

const text = { color: "#bbb", lineHeight: 1.8, marginBottom: "20px" };

const list = {
  color: "#ddd",
  lineHeight: 1.8,
  marginBottom: "20px",
};

const card = {
  background: "#111",
  padding: "24px",
  borderRadius: "12px",
  border: "1px solid #222",
  marginBottom: "20px",
};

const cardTitle = { color: "#d4af37", marginBottom: "10px" };

const textStyle = { color: "#bbb", lineHeight: 1.7 };

const primaryBtn = {
  background: "#d4af37",
  color: "#111",
  padding: "14px 24px",
  borderRadius: "8px",
  fontWeight: 700,
  textDecoration: "none",
};

const secondaryBtn = {
  border: "1px solid white",
  color: "white",
  padding: "14px 24px",
  borderRadius: "8px",
  textDecoration: "none",
};
