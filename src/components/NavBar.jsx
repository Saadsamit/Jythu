import { FaXmark } from "react-icons/fa6";
import navImg from "../assets/logo.png";
const NavBar = ({ children }) => {
  return (
    <div className="drawer font-medium">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="relative w-full navbar justify-between">
          <div className="absolute inset-0 primary-color opacity-25"></div>
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className=" px-2 mx-2 opacity-100">
            <img src={navImg} className="w-20" alt="logo" />
          </div>
          <div className="hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <li>
                <div className="dropdown dropdown-hover">
                  <div tabIndex={0} role="button" className="m-1">
                  Home
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a>Home 1</a>
                    </li>
                    <li>
                      <a>Home 2</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <details className="dropdown">
                  <summary className="m-1">Home</summary>
                  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li>
                      <a>Home 1</a>
                    </li>
                    <li>
                      <a>Home 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details className="dropdown">
                  <summary className="m-1">Home</summary>
                  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li>
                      <a>Home 1</a>
                    </li>
                    <li>
                      <a>Home 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details className="dropdown">
                  <summary className="m-1">Home</summary>
                  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li>
                      <a>Home 1</a>
                    </li>
                    <li>
                      <a>Home 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details className="dropdown">
                  <summary className="m-1">Home</summary>
                  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li>
                      <a>Home 1</a>
                    </li>
                    <li>
                      <a>Home 2</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          <div className="hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <li>
                <a>Navbar Item 1</a>
              </li>
              <li>
                <a>Navbar Item 2</a>
              </li>
            </ul>
          </div>
        </div>
        {/* Page content here */}
        {children}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          <li>
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="btn btn-square btn-ghost block flex justify-center items-center ml-auto"
            >
              <FaXmark className="text-xl" />
            </label>
          </li>
          <li>
            <img src={navImg} className="w-36 mx-auto text-center" alt="logo" />
          </li>
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
