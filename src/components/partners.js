export default function Partners() {
  return (
    <div className="bg-white py-12 sm:py-20 border-t-[5px]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold text-gray-900">
          Our Partners
        </h2>
        <div className="mt-10 flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-10 gap-y-10 items-center">
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
          </div>
        </div>
      </div>
    </div>
  );
}
