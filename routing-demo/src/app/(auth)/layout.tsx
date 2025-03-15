import { NavLink } from "./NavLink";
import "../globals.css";

const navLinks = [
  { href: "/forgot-password", label: "Forgot Password" },
  { href: "/login", label: "Login" },
  { href: "/sign-up", label: "Sign Up" },
];

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav>
        {navLinks.map((link) => (
          <NavLink key={link.href} link={link} />
        ))}
      </nav>

      {children}

      <footer style={{ backgroundColor: "ghostwhite", padding: "10px" }}>
        <p>Footer</p>
      </footer>
    </>
  );
}
