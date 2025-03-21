"use client";

import { ChangeEvent, useCallback, useState } from "react";

export const NavSearch = () => {
  console.log("NavSearch rendered");

  const [search, setSearch] = useState("");

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }, []);

  return (
    <div>
      <div className="bg-blue-100 w-100">
        <input
          type="text"
          className="w-full text-black"
          value={search}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
