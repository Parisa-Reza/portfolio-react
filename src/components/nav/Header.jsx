import { Link } from "react-router";

export const Header = () => {
  return (
 
    <header className="bg-gradient-to-r from-[rgb(25,26,25)] to-[rgb(92,121,118)] text-white px-16 py-6 flex items-center justify-between">
      <h1 className="text-3xl font-light">
         <Link to={"/"}>Parisa Reza</Link>
      </h1>

      <nav>
        <ul className="flex gap-20 text-xl font-light">
          <li className="hover:text-[rgb(10,228,217)]  transition">
            <Link to={"/"}>Home</Link>
          </li>

            <li className="hover:text-[rgb(10,228,217)]  transition">
            <Link to={"/experience"}>Experience</Link>
          </li>


          <li className="hover:text-[rgb(10,228,217)]  transition">
            <Link to={"/about"}>About</Link>
          </li>

          <li className="hover:text-[rgb(10,228,217)]  transition">
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
