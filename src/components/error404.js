import React, { useState } from "react";
import ContactFormLong from "./contact/contactLong";
import Navbar from "./navbar";

export default function Error404() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <Navbar />
      <main className="grid min-h-full place-items-center bg-white-10 px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-green-600 mt-12">404</p>
          <h1 className="mt-12 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
            Page not found
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-24 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-white-10 shadow-xs hover:bg-green-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </a>
            <button
              onClick={() => setIsContactOpen(true)}
              className="rounded-md py-2 px-4 font-semibold transition duration-200 bg-yellow-500 text-white-10 hover:bg-yellow-600"
            >
              Contact Us
            </button>
          </div>
        </div>
      </main>

      {/* Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-auto">
          <div className="relative bg-white-10 w-full max-w-3xl max-h-[90vh] min-h-[75vh] p-8 rounded-lg shadow-xl overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setIsContactOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl"
            >
              ✕
            </button>
            <ContactFormLong />
          </div>
        </div>
      )}
    </>
  );
}