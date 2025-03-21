import fs from "fs";

export const ServerComponentTwo = () => {
  fs.readFileSync("src/components/ServerComponentTwo/index.tsx", "utf-8");

  return <div>Server component two</div>;
};
