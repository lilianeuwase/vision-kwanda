export const Health = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            HEALTH AND SAFETY SERVICES
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-green-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="2feffae2-9edf-414e-ab8c-f0e6396a0fc1"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#2feffae2-9edf-414e-ab8c-f0e6396a0fc1)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">The</span>
          </span>{" "}
          Protecting People. Powering Progress.
        </h2>
        {/* <p className="text-base text-gray-700 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </p> */}
      </div>
      <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
        <div className="grid grid-cols-2 gap-5">
          <img
            className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
            src={require("../../assets/Trinity employees.jpg")}
            alt=""
          />
          <img
            className="object-cover w-full h-48 rounded shadow-lg"
            src={require("../../assets/Rutongo Drilling.jpg")}
            alt=""
          />
          <img
            className="object-cover w-full h-48 rounded shadow-lg"
            src={require("../../assets/DSC_4133.jpg")}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="pb-4 mb-4 border-b">
            <h6 className="mb-2 font-semibold leading-5 text-lg">
              Targeted Safety Training & Medical Support
            </h6>
            <p className="text-md text-gray-900">
              We deliver certified safety training and on-site medical checkups
              to ensure your workforce stays healthy, alert, and compliant.
            </p>
          </div>
          <div className="pb-4 mb-4 border-b">
            <h6 className="mb-2 font-semibold leading-5 text-lg">
              Procedure Documentation & Compliance
            </h6>
            <p className="text-md text-gray-900">
              From safety manuals to PPE enforcement, we help you embed a
              culture of accountability through clear documentation and routine
              audits.
            </p>
          </div>
          <div>
            <h6 className="mb-2 font-semibold leading-5 text-lg">
              Community Engagement & CSR
            </h6>
            <p className="text-md text-gray-900">
              We support strong local relationships through responsible mining
              practices and socially driven initiatives that build trust and
              sustainability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
