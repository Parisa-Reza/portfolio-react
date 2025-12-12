import { Link } from "react-router";
import { IndustrialAttachments } from "../../components/indusrtialAttachments";
export const Attachmentss = () => {
  return (
    <div>
      <li className="hover:text-gray-300 transition">
        <Link to={"attachments"}><IndustrialAttachments/></Link>
      </li>
    </div>
  );
};