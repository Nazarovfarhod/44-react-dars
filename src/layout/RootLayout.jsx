import { NavLink, Outlet } from "react-router-dom";
import BreadClumps from "../components/BreadClumps";

function RootLayout() {
  return (
    <>
      <header>
        <nav className="flex pt-10 justify-between items-center shadow-md rounded-xl px-10 mt-0 mb-16 w-full mx-auto">
          <NavLink to={"/"} className="mr-auto mb-5 font-bold  text-3xl">
            My Articles
          </NavLink>
          <div className="flex gap-5">
            <NavLink
              className="hover:underline active:text-white active:bg-[#333] active:no-underline"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className="hover:underline active:text-white active:bg-[#333] active:no-underline"
              to="/articles"
            >
              Articles
            </NavLink>
            <NavLink
              className="hover:underline active:text-white active:bg-[#333] active:no-underline"
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className="hover:underline active:text-white active:bg-[#333] active:no-underline"
              to="/contact"
            >
              Contact
            </NavLink>
          </div>
        </nav>
        <BreadClumps />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}

export default RootLayout;
