"use client";

import { useEffect } from "react";

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          background: "#000",
          color: "#fff",
          fontFamily: "sans-serif",
          gap: "1rem",
        }}
      >
        <h2>Something went wrong</h2>
        <button
          onClick={() => reset()}
          style={{
            padding: "0.5rem 1.5rem",
            background: "#7c3aed",
            color: "#fff",
            border: "none",
            borderRadius: "0.5rem",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
