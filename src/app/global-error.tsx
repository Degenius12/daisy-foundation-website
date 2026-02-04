"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <div style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FAF8F3",
          fontFamily: "system-ui, sans-serif"
        }}>
          <div style={{ textAlign: "center", padding: "2rem" }}>
            <h2 style={{ color: "#5A4637", marginBottom: "1rem" }}>
              Something went wrong
            </h2>
            <button
              onClick={() => reset()}
              style={{
                backgroundColor: "#C9A961",
                color: "white",
                padding: "0.75rem 1.5rem",
                border: "none",
                borderRadius: "9999px",
                cursor: "pointer"
              }}
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
