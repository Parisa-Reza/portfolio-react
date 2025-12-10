import { Outlet } from "react-router";
import { Footer, Header } from "../components/nav";
export const RootLayout = () => {
  return (
    <div className="">
      <Header />

      <main className="">
        <Outlet />{" "}
      </main>

      <Footer />
    </div>
  );
};
