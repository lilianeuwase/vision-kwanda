export default function HeroDark() {
  return (
    <div className="mx-auto">
      <div className="relative isolate overflow-hidden bg-[#0F4D0F] px-6 pt-16 shadow-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
        <svg
          viewBox="0 0 1024 1024"
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
        >
          <circle
            r={512}
            cx={512}
            cy={512}
            fill="url(#gradient-bg)"
            fillOpacity="0.7"
          />
          <defs>
            <radialGradient id="gradient-bg">
              <stop stopColor="#0F4D0F" />
              <stop offset={1} stopColor="#CCFFCC" />
            </radialGradient>
          </defs>
        </svg>
        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
          <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
            Boost your productivity. Start using our services TODAY
          </h2>
          <p className="mt-6 text-lg/8 text-pretty text-gray-300">
            Our business model is based on providing mining engineering,
            environmental management and conservation, health and safety
            services, real estates and construction services in line with our
            country’s sustainable economic development journey.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <a
              href="#"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Our Team
            </a>
            <a href="#" className="text-sm/6 font-semibold text-white">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="relative mt-16 h-80 lg:mt-8">
          <img
            alt="App screenshot"
            src={require("../../assets/miningfields.jpg")}
            width={1824}
            height={1080}
            className="absolute top-0 left-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
          />
        </div>
      </div>
    </div>
  );
}
