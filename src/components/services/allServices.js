export const AllServices = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-2xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-2xl mb-10 md:mx-auto sm:text-center lg:max-w-3xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Our Services
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-yellow-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="fdca20a0-aeb4-4caf-ba1b-4351eee42363"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#fdca20a0-aeb4-4caf-ba1b-4351eee42363)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Your</span>
          </span>{" "}
          Partners in Mining, Geology & Environmental Consulting
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          We provide end-to-end consulting services across mining, geology, and
          environmental domains — helping clients achieve compliance,
          sustainability, and success.
        </p>
      </div>
      <div className="grid max-w-md gap-8 row-gap-10 sm:mx-auto lg:max-w-full lg:grid-cols-3">
        {/* Mining & Quarry Services */}
        <div className="flex flex-col sm:flex-row">
          <div className="sm:mr-4">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-yellow-200">
              <span className="text-3xl">⛏️</span>
            </div>
          </div>
          <div>
            <h6 className="mb-2 font-semibold leading-5 text-lg">Mining & Quarry Services</h6>
            <p className="mb-3 text-md text-gray-900">
              From permits to plant design — we cover it all for successful mining operations.
            </p>
            <ul className="mb-4 -ml-1 space-y-2 text-md text-gray-800">
              {[
                "Licensing & permit assistance",
                "Business plans for projects",
                "Mineral processing plant design",
                "Feasibility studies & construction oversight",
                "Mapping, surveying & bornage",
                "Bankable project studies",
                "Mining contract support"
              ].map((text, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="mr-2">
                    <svg
                      className="w-5 h-5 text-yellow-400 mt-px"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Exploration & Geological Survey */}
        <div className="flex flex-col sm:flex-row">
          <div className="sm:mr-4">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-green-200">
              <span className="text-3xl">🧭</span>
            </div>
          </div>
          <div>
            <h6 className="mb-2 font-semibold leading-5 text-lg">Exploration & Geological Survey</h6>
            <p className="mb-3 text-md text-gray-900">
              Geological expertise for accurate modeling and resource estimation.
            </p>
            <ul className="mb-4 -ml-1 space-y-2 text-md text-gray-800">
              {[
                "Geological mapping & modeling",
                "Resource estimation",
                "Field & drilling program support",
                "Economic feasibility studies"
              ].map((text, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="mr-2">
                    <svg
                      className="w-5 h-5 text-green-500 mt-px"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Environmental & Safety Services */}
        <div className="flex flex-col sm:flex-row">
          <div className="sm:mr-4">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-orange-400">
              <span className="text-3xl">🌿</span>
            </div>
          </div>
          <div>
            <h6 className="mb-2 font-semibold leading-5 text-lg">Environmental & Safety Services</h6>
            <p className="mb-3 text-md text-gray-900">
              Protecting people and planet with impactful safety and sustainability solutions.
            </p>
            <ul className="mb-4 -ml-1 space-y-2 text-md text-gray-800">
              {[
                "Environmental & social impact assessments",
                "Mining audit reports",
                "Tailings & waste management planning",
                "Land restoration & rehabilitation",
                "Safety training & emergency response"
              ].map((text, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="mr-2">
                    <svg
                      className="w-5 h-5 text-orange-500 mt-px"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};