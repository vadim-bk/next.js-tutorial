"use client";

import { useState } from "react";

export const ClientComponentTwo = () => {
  const [name] = useState("Batman");

  return (
    <div>
      <p>Client component two</p>

      <p>{name}</p>
    </div>
  );
};
