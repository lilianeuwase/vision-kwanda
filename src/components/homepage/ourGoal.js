export default () => {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 blur-xl h-[480px]"
        style={{
          background:
            "linear-gradient(143.6deg, rgba(208, 233, 66, 0) 10%, rgba(225, 185, 24, 0.26) 50%, rgba(76, 227, 65, 0) 100%)",
        }}
      ></div>
      <div className="relative">
        <section>
          <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex">
            <div className="flex-none space-y-5 max-w-xl">
              <a
                href="/gemstones"
                className="inline-flex gap-x-6 items-center rounded-full p-1 pr-6 border text-sm font-medium duration-150 hover:bg-white-10"
              >
                <span className="inline-block rounded-full px-3 py-1 bg-green-600 text-white-10">
                  Learn
                </span>
                <p className="flex items-center">
                  Read more about Gemstones
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </p>
              </a>
              <h1 className="text-4xl text-gray-800 font-extrabold sm:text-5xl">
                Our Goal
              </h1>
              <p>
                To expand regionally while continuously enhancing the quality of
                our services. We are committed to building strong, long-lasting
                partnerships with our clients through professional excellence
                and collaborative growth.
              </p>
            </div>
            <div className="flex-1 hidden md:block">
              {/* Replace with your image */}
              <img
                src={require("../../assets/ourgoal.png")}
                className="max-w-xl"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
