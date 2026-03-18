export default function ServicesPage() {
  return (
    <main
      style={{
        padding: "120px 24px 60px",
        maxWidth: "1000px",
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
        Our Services – UK & Ireland Touring Logistics
      </h1>

      {/* INTRO */}
      <p
        style={{
          fontSize: "18px",
          lineHeight: 1.8,
          color: "#bbb",
          marginBottom: "40px",
        }}
      >
        UK Inbound Ground Transport delivers a complete range of professional
        inbound touring services across the United Kingdom and Ireland. Our
        service offering is designed for operators who require dependable,
        structured and scalable ground-transport solutions for international guests.
      </p>

      {/* SERVICE BLOCK */}
      <Service
        title="Fixed-Departure Series Support"
        text="We provide fully structured transport solutions for fixed-departure touring series with consistent, repeatable delivery across the season. Our team coordinates daily timings, routing, driver allocation and programme flow to ensure every departure matches brochure schedules and market expectations."
        keywords="SEO: fixed departure tours UK, series touring logistics, UK inbound transport"
      />

      <Service
        title="Multi-Region UK Touring"
        text="Our multi-region UK touring service supports seamless travel across England, Scotland and Wales, with balanced pacing and efficient itinerary structure. We ensure each regional segment flows naturally into the next, creating a unified touring experience for your passengers."
        keywords="SEO: multi region UK tours, UK touring logistics, England Scotland Wales tours"
      />

      <Service
        title="UK–Ireland Integrated Itineraries"
        text="We offer integrated support for UK and Ireland touring, managing ferries, timings and cross-country continuity. This service is ideal for operators offering British Isles itineraries, where seamless movement between both countries is essential."
        keywords="SEO: UK Ireland tours, British Isles tours, cross-country touring"
      />

      <Service
        title="Large Group & Multi-Coach Coordination"
        text="Our team manages large group movements, multi-coach programmes and high-volume itineraries with clear operational discipline. We coordinate timings, sequencing, grouped pick-ups and efficient daily movement patterns."
        keywords="SEO: UK group transport, multi-coach coordination, large group touring"
      />

      <Service
        title="Long-Haul Market Alignment"
        text="We tailor our logistics to the needs of long-haul markets including the USA, India, China and Europe. This includes balanced daily pacing, photo-friendly scheduling, efficient arrival-day movements and timing suited for long-haul guests."
        keywords="SEO: USA UK tours, India UK tours, China UK group travel, European inbound tours"
      />

      {/* CTA */}
      <section
        style={{
          marginTop: "60px",
          padding: "40px",
          textAlign: "center",
          background: "#050505",
          borderRadius: "12px",
        }}
      >
        <h2 style={{ color: "#d4af37", marginBottom: "10px" }}>
          Discuss Your Touring Programme
        </h2>

        <p style={{ color: "#bbb", marginBottom: "20px" }}>
          Contact us to discuss your UK & Ireland operational requirements.
        </p>

        <a
          href="/contact"
          style={{
            background: "#d4af37",
            color: "#111",
            padding: "14px 24px",
            borderRadius: "8px",
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          Contact Us
        </a>
      </section>
    </main>
  );
}

/* COMPONENT */

function Service({
  title,
  text,
  keywords,
}: {
  title: string;
  text: string;
  keywords: string;
}) {
  return (
    <div
      style={{
        marginBottom: "40px",
        padding: "24px",
        background: "#111",
        borderRadius: "12px",
        border: "1px solid #222",
      }}
    >
      <h2 style={{ color: "#d4af37", marginBottom: "10px" }}>{title}</h2>

      <p style={{ color: "#bbb", lineHeight: 1.8 }}>{text}</p>

      <p
        style={{
          marginTop: "10px",
          fontSize: "13px",
          color: "#666",
        }}
      >
        {keywords}
      </p>
    </div>
  );
}
