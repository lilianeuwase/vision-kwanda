import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";

export default function ContactForm() {
  const formRef = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gxmghtm", // ⬅️ replace with your real Service ID
        "template_j8ioi7o", // ⬅️ replace with your real Template ID
        formRef.current,
        "GerX4-biGLWSnEEGE" // ⬅️ replace with your EmailJS Public Key
      )
      .then(
        () => {
          setIsSent(true);
          formRef.current.reset();
        },
        (error) => {
          console.error("Email sending failed:", error);
        }
      );
  };

  return (
    <main className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none">
          <div className="max-w-lg space-y-3">
            <h3 className="text-green-500 font-semibold">Contact Us</h3>
            <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Let us know how we can help
            </p>
            <p>
              We’re here to help and answer any question you might have. Please
              fill out the form or use the contact info below.
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-6 items-start text-sm text-gray-700">
              <li className="flex items-center gap-x-3">
                <EnvelopeIcon className="w-5 h-5 text-green-500" />
                <p>rwandaminingaccesswindow@gmail.com</p>
              </li>
              <li className="flex items-center gap-x-3">
                <PhoneIcon className="w-5 h-5 text-green-500" />
                <p>+250788910095</p>
              </li>
              <li className="flex items-start gap-x-3">
                <MapPinIcon className="w-5 h-5 text-green-500 mt-1" />
                <div>
                  <p>Kicukiro - Zinia, Kigali, Rwanda</p>
                </div>
              </li>
              <li className="flex items-start gap-x-3">
                <CalendarDaysIcon className="w-5 h-5 text-green-500 mt-1" />
                <div>
                  <p>Monday to Friday: 8:00 AM – 5:00 PM</p>
                  <p>Saturday: Closed</p>
                  <p>Sunday: By Appointment</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="flex-1 mt-12 sm:max-w-lg lg:max-w-md">
            <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
              <div>
                <label className="font-medium">Full name</label>
                <input
                  name="user_name"
                  type="text"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-green-600 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Email</label>
                <input
                  name="user_email"
                  type="email"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-green-600 shadow-sm rounded-lg"
                />
              </div>
              {/* <div>
                <label className="font-medium">Company</label>
                <input
                  name="user_company"
                  type="text"
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-green-600 shadow-sm rounded-lg"
                />
              </div> */}
              <div>
                <label className="font-medium">Message</label>
                <textarea
                  name="message"
                  required
                  className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-green-600 shadow-sm rounded-lg"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white-10 font-medium bg-green-500 hover:bg-green-600 active:bg-green-500 rounded-lg duration-150"
              >
                Submit
              </button>
              {isSent && (
                <p className="text-green-600 mt-2">
                  ✅ Message sent successfully! We will get back to you
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
