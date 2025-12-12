import { Outlet } from "react-router";
import { Footer, Header } from "../components/nav";
import { ProjectProvider } from "../Contexts/ProjectContext";

export const RootLayout = () => {
  return (
    <ProjectProvider>
      <div className="">
        <Header />

        <main className="">
          <Outlet />{" "}
        </main>

        <Footer />
      </div>
    </ProjectProvider>
  );
};
