import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Dialog, PopoverGroup, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import "../styles/navbar.css"; // Ensure this file includes the custom CSS below

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Listen to scroll events to toggle header background
  useEffect(() => {
    const handleScroll = () => {
      console.log("scrollY:", window.scrollY);
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeSideBar = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white-10 shadow-lg" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        {/* Logo & Text */}
        <div className="flex lg:flex-1 -m-1.5 p-1.5 text-green-500 font-bold navbar-logo items-end">
          <img
            className="h-10 w-auto"
            src={require("../assets/LOGOVision-removebg.png")}
            alt=""
          />
          VISION KWANDA GROUP.
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `menu-link text-[1rem] font-semibold leading-6 ${
                isActive ? "active" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/aboutus"
            className={({ isActive }) =>
              `menu-link text-[1rem] font-semibold leading-6 ${
                isActive ? "active" : ""
              }`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `menu-link text-[1rem] font-semibold leading-6 ${
                isActive ? "active" : ""
              }`
            }
          >
            Services
          </NavLink>

          <NavLink
            to="/gemstones"
            className={({ isActive }) =>
              `menu-link text-[1rem] font-semibold leading-6 ${
                isActive ? "active" : ""
              }`
            }
          >
            Gemstones
          </NavLink>
        </PopoverGroup>

        {/* Right-most Button replacing "Kinyarwanda" */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-12">
          <NavLink
            to="/contactus"
            className={({ isActive }) =>
              `rounded-md py-2 px-4 font-semibold transition duration-200 ${
                isActive
                  ? "bg-white-10 text-green-500"
                  : "bg-green-500 text-white-10"
              } hover:bg-white-10 hover:text-green-500`
            }
          >
            Contact Us
          </NavLink>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white-10 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="-m-1.5 p-1.5 text-green-500 font-bold navbar-logo"
            >
              <img
                className="h-8 w-auto absolute left-16"
                src={require("../assets/LOGOVision-removebg.png")}
                alt=""
              />
              VISION KWANDA GROUP.
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <NavLink
                  onClick={closeSideBar}
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Home
                </NavLink>
                <NavLink
                  onClick={closeSideBar}
                  to="/aboutus"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About Us
                </NavLink>
                <NavLink
                  onClick={closeSideBar}
                  to="/services"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Services
                </NavLink>
              </div>
              <div className="py-6">
                <NavLink
                  onClick={closeSideBar}
                  to="/contactus"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact Us
                </NavLink>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}