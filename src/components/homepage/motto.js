import React from "react";

const Motto = () => {
  return (
    <section className="bg-green-500 py-[70px] dark:bg-dark">
      <div className="mx-auto px-4 sm:container">
        <div className="mx-auto max-w-3xl border-l-[5px] border-yellow-400 pl-10 pr-5 border-r-[5px]">
          <h2 className="mb-4 text-4xl font-semibold text-dark dark:text-white">
            Our Motto
          </h2>
          <p className="text-medium text-body-color dark:text-dark-6">
            We are committed to powering mining engineering, environmental,
            health, and safety services as a cornerstone for
            progress—establishing a benchmark for the sustainable development of
            Rwanda’s mining sector. Through innovation, capacity building, and
            regulatory excellence, we aim to drive responsible growth that
            balances economic advancement with environmental and social
            responsibility.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Motto;
