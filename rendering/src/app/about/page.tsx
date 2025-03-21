import { cookies } from "next/headers";

export default async function AboutPage() {
  const cookieStore = await cookies();

  const theme = cookieStore.get("theme");
  console.log("theme", theme);

  console.log("About server page");

  return <div>About page {new Date().toLocaleTimeString()}</div>;
}
