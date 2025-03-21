"use client";

import { PropsWithChildren, useState } from "react";

export const ClientComponentOne = ({ children }: PropsWithChildren) => {
  const [name] = useState("Batman");

  return (
    <div>
      <p>Client component one</p>

      <p>{name}</p>

      {children}
    </div>
  );
};
