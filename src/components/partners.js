export default function Partners() {
    return (
      <div className="bg-white py-12 sm:py-20 border-t-[5px]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold text-gray-900">
          Our Partners
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              alt="Transistor"
              src={require("../assets/RMB-logo.png")}
              width={316}
              height={96}
              className="col-span-2 max-h-40 w-full object-contain lg:col-span-1"
            />
            <img
              alt="Reform"
              src={require("../assets/RAPEP  logo.png")}
              width={316}
              height={96}
              className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
            />
            <img
              alt="Tuple"
              src={require("../assets/urlogo.webp")}
              width={316}
              height={96}
              className="col-span-2 max-h-40 w-full object-contain lg:col-span-1"
            />
            <img
              alt="SavvyCal"
              src={require("../assets/matec-logo-oro.jpg")}
              width={316}
              height={96}
              className="col-span-2 max-h-40 w-full object-contain sm:col-start-2 lg:col-span-1"
            />
            {/* <img
              alt="Statamic"
              src={require("../../assets")}
              width={158}
              height={48}
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            /> */}
          </div>
        </div>
      </div>
    )
  }
  