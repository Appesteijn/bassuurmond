import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Suurmond Technical Solutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const GREEN = "#4FB23C";
const NAVY = "#1B3556";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: NAVY,
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Grid backdrop */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Green accent blob */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            backgroundColor: `${GREEN}33`,
            filter: "blur(80px)",
          }}
        />

        {/* Chevron mark */}
        <svg
          width="80"
          height="80"
          viewBox="0 0 100 100"
          style={{ marginBottom: 32 }}
        >
          <polygon
            points="50,8 90,46 75,46 50,26 25,46 10,46"
            fill={GREEN}
          />
          <polygon
            points="50,48 90,86 75,86 50,66 25,86 10,86"
            fill={GREEN}
          />
        </svg>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 64, fontWeight: 800, color: "#ffffff", lineHeight: 1.1 }}>
            Suurmond Technical Solutions
          </div>
          <div style={{ fontSize: 28, color: "#94a3b8", fontWeight: 400 }}>
            Technische dienstverlening & advies · Zeeland, Nederland
          </div>
        </div>

        {/* Bottom tag */}
        <div
          style={{
            position: "absolute",
            bottom: 60,
            left: 80,
            fontSize: 18,
            color: GREEN,
            fontWeight: 600,
            letterSpacing: 2,
          }}
        >
          bassuurmond.nl
        </div>
      </div>
    ),
    { ...size }
  );
}
