"use client";
import "../../styles/services/intro.css";

export default function Intro() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-white">
      {/* Hero Text - Responsive + High z-index */}
      <div className="absolute top-1/3 left-[10%] sm:left-[15%] md:left-[20%] max-w-[600px] z-20 px-4 text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
       Want Our Exceptional Service?
        </h1>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mt-4">
          Get In.
        </h1>
      </div>

      {/* Car image - Responsive + Animated */}
      <img
        src="/car.png"
        alt="Vintage Car"
        className="absolute bottom-6 right-[5%] w-[260px] sm:w-[360px] md:w-[460px] lg:w-[500px] animate-[drive_4s_infinite] z-10"
      />
    </div>
  );
}