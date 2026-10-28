import { ImageResponse } from "next/og";

export const alt = "EstarMed — logística de atención médica domiciliaria";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background: "linear-gradient(145deg, #0A1640 0%, #071124 55%, #007DFF 140%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 800,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#7eb6ff",
          }}
        >
          EstarMed · Estárter
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -1.5,
              maxWidth: 980,
            }}
          >
            La logística domiciliaria, en una sola pantalla.
          </div>
          <div style={{ fontSize: 28, color: "#cbd5e1", maxWidth: 860 }}>
            Profesionales, conductores, CIS y pacientes — de la agenda a la
            liquidación.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 22, color: "#94a3b8" }}>
          estarmed.co
        </div>
      </div>
    ),
    { ...size }
  );
}
