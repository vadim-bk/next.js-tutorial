import { NavLinks } from "./NavLinks";
import { NavSearch } from "./NavSearch";

export const Navbar = () => {
  console.log("Navbar rendered");

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-500">
      <NavLinks />

      <NavSearch />
    </nav>
  );
};
