"use client";
import "../../styles/services/intro.css";

export default function Intro() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-white-10">
      {/* Hero Text */}
      <div className="absolute top-1/3 w-full text-center px-4">
        <h1 className="text-5xl sm:text-7xl font-bold text-gray-900 tracking-tight">
        Want top tier service?
        </h1>
        <h1 className="text-5xl sm:text-7xl font-bold text-gray-900 tracking-tight mt-6">
          Get In.
        </h1>
      </div>

      {/* Car image anchored slightly above bottom */}
      <img
        src="/car.png"
        alt="Vintage Car"
        className="absolute bottom-6 left-1/2 w-[380px] sm:w-[500px] transform -translate-x-1/2 animate-[drive_4s_infinite]"
      />
    </div>
  );
}
