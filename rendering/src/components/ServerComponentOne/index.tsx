import fs from "fs";
import { ClientComponentOne } from "../ClientComponentOne";

export const ServerComponentOne = () => {
  fs.readFileSync("src/components/ServerComponentOne/index.tsx", "utf-8");

  return (
    <>
      <h2>Server component one</h2>

      <ClientComponentOne />
    </>
  );
};
