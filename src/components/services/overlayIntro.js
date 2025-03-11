import React, { useState } from "react";
import "../../styles/homepage/overlayIntro.css";
import { Link, NavLink } from "react-router-dom";
import { Dialog, PopoverGroup, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function OverlayIntro() {
  const [animate, setAnimate] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeSideBar = () => {
    setMobileMenuOpen(false);
  };

  // When the h1 slide-in animation finishes, trigger the overlay and color transition.
  const handleAnimationEnd = () => {
    if (!animate) {
      setAnimate(true);
      // Wait until the overlay and hi color transition complete before showing hero content.
      setTimeout(() => {
        setShowContent(true);
      }, 3500); // 3s overlay animation + 0.5s extra delay = 3500ms total after slide-in
    }
  };

  return (

    <div className={`homepage ${animate ? "animate" : ""}`}>
      <div className="hero">
        {/* The hi text always stays rendered and is set to slide in from the top.
            It uses a gradient background (clipped to text) to animate from white to black. */}
        <h1 onAnimationEnd={handleAnimationEnd}>ENVIRONMENTAL EMPOWERS</h1>
        {/* The hero content remains in place (to avoid layout shift) and fades in only after the animations complete */}
        <div className={`hero-content ${showContent ? "visible" : ""}`}>
          <h2>Mining, Quarry, Environmental, Health and Safety </h2>
          <p>
            Empowering Mining Engineering, Environmental, Health and Safety
            Services; A Benchmark to the Sustainable Development of the Rwandan
            mining Sector
          </p>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default OverlayIntro;
