import { Link } from "react-router";

export const Header = () => {
  return (
 
    <header className="w-full bg-[#1a1a1a] text-white px-16 py-6 flex items-center justify-between">
      <h1 className="text-xl font-medium">Parisa Reza</h1>

      <nav>
        <ul className="flex gap-6 text-sm font-medium">
          <li className="hover:text-gray-300 transition">
            <Link to={"/"}>Home</Link>
          </li>

            <li className="hover:text-gray-300 transition">
            <Link to={"/experience"}>Experience</Link>
          </li>


          <li className="hover:text-gray-300 transition">
            <Link to={"/about"}>About</Link>
          </li>

          <li className="hover:text-gray-300 transition">
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
