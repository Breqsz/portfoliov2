import { ImageResponse } from "next/og";

export const alt = "BREQ — Software Engineer Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #0a0a0a 0%, #111 50%, #0a0a0a 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 80,
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "white",
            marginBottom: 16,
          }}
        >
          BREQ
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#a3a3a3",
            marginBottom: 24,
          }}
        >
          Software Engineer
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#737373",
            maxWidth: 600,
            textAlign: "center",
          }}
        >
          Full-stack development · Cloud infrastructure · Cybersecurity
        </div>
        <div
          style={{
            position: "absolute",
            top: 40,
            right: 80,
            fontSize: 18,
            color: "#3b82f6",
            fontWeight: 600,
          }}
        >
          breq.dev
        </div>
      </div>
    ),
    { ...size }
  );
}
