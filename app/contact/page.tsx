export default function ContactPage() {
  return (
    <main
      style={{
        padding: "80px 24px",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <h1 style={{ fontSize: "42px", marginBottom: "20px", color: "#d4af37" }}>
        Contact Operations
      </h1>

      <p
        style={{
          fontSize: "18px",
          lineHeight: 1.7,
          marginBottom: "40px",
          color: "rgba(255,255,255,0.8)",
        }}
      >
        Speak with our operations team regarding your UK and Ireland touring
        programme requirements.
      </p>

      <div style={{ marginBottom: "30px" }}>
        <p>
          <strong>Email:</strong> info@ukinboundgroundtransport.com
        </p>
        <p>
          <strong>Phone:</strong> +44 20 8629 2776
        </p>
      </div>

      <form style={{ display: "grid", gap: "16px" }}>
        <input
          type="text"
          placeholder="Your Name"
          style={{
            padding: "14px",
            border: "1px solid #333",
            borderRadius: "8px",
            background: "#111",
            color: "white",
          }}
        />

        <input
          type="email"
          placeholder="Your Email"
          style={{
            padding: "14px",
            border: "1px solid #333",
            borderRadius: "8px",
            background: "#111",
            color: "white",
          }}
        />

        <textarea
          placeholder="Tell us about your programme"
          rows={6}
          style={{
            padding: "14px",
            border: "1px solid #333",
            borderRadius: "8px",
            background: "#111",
            color: "white",
          }}
        />

        <button
          style={{
            background: "#d4af37",
            color: "#111",
            padding: "14px",
            border: "none",
            borderRadius: "8px",
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          Send Enquiry
        </button>
      </form>
    </main>
  );
}
