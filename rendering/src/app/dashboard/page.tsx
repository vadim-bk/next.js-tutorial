"use client";

import { useState } from "react";

export default function DashboardPage() {
  const [name, setName] = useState("");

  console.log("Dashboard client page");

  return (
    <div>
      <h1>Hello {name}</h1>

      <div className="bg-blue-100 w-100">
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 text-black"
        />
      </div>
    </div>
  );
}
