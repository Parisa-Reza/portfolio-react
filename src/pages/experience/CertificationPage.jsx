import { Link } from "react-router";
import { Certifications } from "../../components/certificate";

export const Certificationss = () => {
  return (
    <div>
      <li className="hover:text-gray-300 transition">
        <Link to={"certifications"}><Certifications/></Link>
      </li>
    </div>
  );
};