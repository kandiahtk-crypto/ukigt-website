export default function ProgrammesPage() {
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
        Programmes
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
        Our programme support is tailored to the needs of international inbound
        markets, ensuring smooth, consistent and professional touring across the
        United Kingdom &amp; Ireland.
      </p>

      {/* PROGRAMMES GRID */}
      <div
        style={{
          display: "grid",
          gap: "24px",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        }}
      >
        <ProgrammeCard
          title="United States"
          description="Extended multi-region itineraries with balanced pacing and dependable daily delivery."
          bullets={[
            "Long-haul alignment",
            "UK & Ireland multi-region circuits",
            "Season-wide consistency",
          ]}
        />

        <ProgrammeCard
          title="India"
          description="High-energy, multi-destination itineraries with efficient timings and routing."
          bullets={[
            "Multi-city programmes",
            "Peak-season coordination",
            "Large group optimisation",
          ]}
        />

        <ProgrammeCard
          title="China"
          description="Precise schedules with photo-friendly pacing and structured operational control."
          bullets={[
            "Daily precision",
            "Consistent execution",
            "Coordinated transitions",
          ]}
        />

        <ProgrammeCard
          title="Europe"
          description="Short-stay touring with flexible routing and fast regional connections."
          bullets={[
            "Regional circuits",
            "Efficient transfers",
            "Shoulder-season adaptability",
          ]}
        />
      </div>
    </main>
  );
}

function ProgrammeCard({
  title,
  description,
  bullets,
}: {
  title: string;
  description: string;
  bullets: string[];
}) {
  return (
    <div
      style={{
        background: "#111",
        padding: "28px",
        borderRadius: "14px",
        border: "1px solid #222",
      }}
    >
      <h2
        style={{
          color: "#d4af37",
          marginBottom: "10px",
          fontSize: "22px",
        }}
      >
        {title}
      </h2>

      <p
        style={{
          color: "#bbb",
          lineHeight: 1.7,
          marginBottom: "18px",
        }}
      >
        {description}
      </p>

      <ul
        style={{
          paddingLeft: "18px",
          margin: 0,
          color: "#ddd",
          lineHeight: 1.8,
        }}
      >
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
}
