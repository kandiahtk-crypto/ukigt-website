"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/programmes", label: "Programmes" },
  { href: "/how-we-work", label: "How We Work" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => pathname === href;

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        background: "rgba(10,10,10,0.78)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          padding: "16px 24px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          {/* BRAND */}
          <Link
            href="/"
            style={{
              textDecoration: "none",
              color: "#d4af37",
              fontWeight: 700,
              fontSize: "14px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              lineHeight: 1.2,
            }}
          >
            UK Inbound Ground Transport
          </Link>

          {/* DESKTOP NAV */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
            }}
            className="desktop-nav"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  textDecoration: "none",
                  color: isActive(link.href) ? "#ffffff" : "rgba(255,255,255,0.76)",
                  fontSize: "14px",
                  fontWeight: isActive(link.href) ? 600 : 500,
                  whiteSpace: "nowrap",
                  position: "relative",
                  paddingBottom: "4px",
                  borderBottom: isActive(link.href)
                    ? "2px solid #d4af37"
                    : "2px solid transparent",
                  transition: "all 0.25s ease",
                }}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              style={{
                textDecoration: "none",
                background: "#d4af37",
                color: "#111",
                padding: "10px 16px",
                borderRadius: "999px",
                fontSize: "14px",
                fontWeight: 700,
                whiteSpace: "nowrap",
                boxShadow: "0 8px 24px rgba(212,175,55,0.18)",
              }}
            >
              Contact
            </Link>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            style={{
              background: "transparent",
              color: "white",
              border: "1px solid rgba(255,255,255,0.18)",
              borderRadius: "10px",
              padding: "10px 12px",
              cursor: "pointer",
              fontSize: "14px",
              display: "none",
            }}
            className="mobile-menu-btn"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        {/* MOBILE PANEL */}
        {open && (
          <div
            style={{
              marginTop: "14px",
              padding: "14px",
              borderRadius: "16px",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              display: "grid",
              gap: "12px",
            }}
            className="mobile-nav-panel"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                style={{
                  textDecoration: "none",
                  color: isActive(link.href) ? "#ffffff" : "rgba(255,255,255,0.78)",
                  fontSize: "15px",
                  fontWeight: isActive(link.href) ? 700 : 500,
                  padding: "10px 4px",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              style={{
                textDecoration: "none",
                background: "#d4af37",
                color: "#111",
                padding: "12px 16px",
                borderRadius: "999px",
                fontSize: "14px",
                fontWeight: 700,
                textAlign: "center",
                marginTop: "4px",
              }}
            >
              Contact
            </Link>
          </div>
        )}
      </div>

      <style jsx>{`
        @media (max-width: 980px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: inline-flex !important;
            align-items: center;
            justify-content: center;
          }
        }
      `}</style>
    </header>
  );
}
