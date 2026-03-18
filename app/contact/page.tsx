export default function ContactPage() {
  return (
    <main
      style={{
        padding: "120px 24px 60px",
        maxWidth: "900px",
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
        Contact Us
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
        Tell us about your touring programme — dates, group size, routing and key
        requirements. We’ll respond with a structured operational plan and next steps.
      </p>

      {/* CONTACT DETAILS */}
      <div
        style={{
          marginBottom: "40px",
          background: "#111",
          padding: "24px",
          borderRadius: "12px",
          border: "1px solid #222",
        }}
      >
        <h2 style={{ color: "#d4af37", marginBottom: "12px" }}>
          Direct Contact
        </h2>

        <p style={{ color: "#ccc", marginBottom: "6px" }}>
          Email: info@ukinboundgroundtransport.com
        </p>

        <p style={{ color: "#ccc", marginBottom: "6px" }}>
          UK Landline: 020 8629 2776
        </p>

        <p style={{ color: "#ccc" }}>
          Mobile / WhatsApp: +44 7957 776 778
        </p>
      </div>

      {/* FORM */}
      <form style={{ display: "grid", gap: "16px" }}>
        <input type="text" placeholder="Name" style={input} />
        <input type="text" placeholder="Company" style={input} />
        <input type="email" placeholder="Email" style={input} />
        <input type="text" placeholder="Phone number" style={input} />

        <textarea
          placeholder="Programme details (dates, group size, routing, requirements)"
          rows={6}
          style={input}
        />

        <button style={button}>
          Submit Enquiry
        </button>
      </form>

      {/* FOOT NOTE */}
      <p
        style={{
          marginTop: "30px",
          color: "#888",
          fontSize: "14px",
          lineHeight: 1.6,
        }}
      >
        We offer fast response times and clear, reliable communication for all programme enquiries.
      </p>
    </main>
  );
}

/* STYLES */

const input = {
  padding: "16px",
  border: "1px solid #333",
  borderRadius: "10px",
  background: "#0f0f0f",
  color: "white",
  fontSize: "15px",
};

const button = {
  background: "#d4af37",
  color: "#111",
  padding: "14px",
  border: "none",
  borderRadius: "8px",
  fontWeight: 700,
  cursor: "pointer",
};
