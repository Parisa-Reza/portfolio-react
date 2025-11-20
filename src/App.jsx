import "./App.css";
import Image from "./components/Image";
import Bio from "./components/Bio";
import SocialLink from "./components/SocialLinks";

export function App() {
  return (
    <div className="flex gap-5 items-center justify-center h-screen">
      {/* image */}
      <Image />
      <div className="flex flex-col ">
        {/* bio */}
        <Bio />
        {/* social links */}
        <SocialLink />
      </div>
    </div>
  );
}
