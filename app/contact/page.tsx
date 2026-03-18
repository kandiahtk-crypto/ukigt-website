export default function ContactPage() {
  return (
    <main style={{ padding: "120px 24px 60px", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "42px", color: "#d4af37" }}>
        Contact Operations
      </h1>

      <div style={{ marginTop: "30px" }}>
        <p><strong>Email:</strong> info@ukinboundgroundtransport.com</p>
        <p><strong>Phone:</strong> +44 20 8629 2776</p>
      </div>

      <form style={{ display: "grid", gap: "16px", marginTop: "30px" }}>
        <input placeholder="Your Name" style={input} />
        <input placeholder="Your Email" style={input} />
        <textarea placeholder="Your Message" rows={5} style={input} />
        <button style={button}>Send Message</button>
      </form>
    </main>
  );
}

const input = {
  padding: "16px",
  border: "1px solid #333",
  borderRadius: "10px",
  background: "#0f0f0f",
  color: "white",
};

const button = {
  background: "#d4af37",
  color: "#111",
  padding: "14px",
  borderRadius: "8px",
  fontWeight: 700,
};
