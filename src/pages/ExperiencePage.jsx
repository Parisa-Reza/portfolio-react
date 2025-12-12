import { Outlet, Link } from "react-router";
export const Experience = () => {
  return (
    <div className=" bg-gradient-to-r from-[rgb(25,26,25)] to-[rgb(92,121,118)]">
      <ul className="flex ml-[60px] gap-10 text-lg font-medium ">
      
        <li className="text-[rgb(10,228,217)] font-normal hover:text-gray-200">
          <Link to={"certifications"}>Certifications</Link>
        </li>
    

        <li className="text-[rgb(10,228,217)] font-normal hover:text-gray-200">
          <Link to={"attachments"}>Industrial Attachments</Link>
        </li>
        <Outlet />
      </ul>
    </div>
  );
};
