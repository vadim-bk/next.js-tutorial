"use client";

import { useState } from "react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [value, setValue] = useState("");

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      {children}

      <footer style={{ backgroundColor: "ghostwhite", padding: "10px" }}>
        <p>Footer</p>
      </footer>
    </>
  );
}
