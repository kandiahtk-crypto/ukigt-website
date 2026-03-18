export default function Contact() {
  return (
    <main style={{ padding: "80px 24px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "42px", marginBottom: "20px" }}>
          Contact Us
        </h1>

        <p style={{ fontSize: "18px", marginBottom: "40px", color: "#555" }}>
          Get in touch with our operations team to plan your next touring programme.
        </p>

        <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <input
            type="text"
            placeholder="Your Name"
            style={{ padding: "14px", fontSize: "16px" }}
          />

          <input
            type="email"
            placeholder="Your Email"
            style={{ padding: "14px", fontSize: "16px" }}
          />

          <textarea
            placeholder="Your Message"
            rows={6}
            style={{ padding: "14px", fontSize: "16px" }}
          />

          <button
            style={{
              padding: "14px",
              background: "#243b67",
              color: "white",
              border: "none",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
