import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Dialog, PopoverGroup, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import "../styles/navbar.css";
import ContactFormLong from "./contact/contactLong";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

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
        <div className="flex lg:flex-1 -m-1.5 p-1.5 text-green-500 font-bold navbar-logo items-center">
          <img
            className="h-16 w-auto"
            src={require("../assets/LogoNBG.png")}
            alt=""
          />
          <span className="ml-2">MINING ACCESS WINDOW RWANDA.</span>
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
            to="/team"
            className={({ isActive }) =>
              `menu-link text-[1rem] font-semibold leading-6 ${
                isActive ? "active" : ""
              }`
            }
          >
            Our Team
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
            to="/minerals"
            className={({ isActive }) =>
              `menu-link text-[1rem] font-semibold leading-6 ${
                isActive ? "active" : ""
              }`
            }
          >
            Minerals
          </NavLink>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-12">
          <button
            onClick={() => setIsContactOpen(true)}
            className="rounded-md py-2 px-4 font-semibold transition duration-200 bg-yellow-500 text-white-10 hover:bg-yellow-600"
          >
            Contact Us
          </button>
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
              className="-m-1.5 p-1.5 text-green-500 font-bold navbar-logo flex items-center gap-2"
            >
              <img
                className="h-8 w-auto"
                src={require("../assets/LogoNBG.png")}
                alt="Logo"
              />
              <span className="text-base font-bold">
                MINING ACCESS WINDOW RWANDA.
              </span>
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
                <NavLink
                  onClick={closeSideBar}
                  to="/minerals"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Minerals
                </NavLink>
              </div>
              <div className="py-6">
                <button
                  onClick={() => {
                    closeSideBar();
                    setIsContactOpen(true);
                  }}
                  className="-mx-3 block w-full text-left rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
      <Dialog
        open={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        className="z-50"
      >
        {/* Background dimmer */}
        <div className="fixed inset-0 bg-black/60 z-40" aria-hidden="true" />
        {/* Modal content wrapper */}
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <DialogPanel className="w-full max-w-xl bg-white-10 rounded-lg shadow-xl p-6 relative">
            {/* Close button and ContactForm */}
            <div className="flex justify-end mb-4">
              <button onClick={() => setIsContactOpen(false)}>
                <XMarkIcon className="w-6 h-6 text-gray-500 hover:text-black" />
              </button>
            </div>
            <ContactFormLong />
          </DialogPanel>
        </div>
      </Dialog>
    </header>
  );
}
