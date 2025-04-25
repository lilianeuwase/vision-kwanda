import React, { useRef, useEffect } from 'react';

export default function Team() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onWheel = (e) => {
      const topThreshold = window.innerHeight * 0.5;
      const bottomThreshold = window.innerHeight * 0.5;
      const rect = container.getBoundingClientRect();
      const withinYRange = rect.top < bottomThreshold && rect.bottom > topThreshold;
      if (!withinYRange) return;

      const hitLeft  = container.scrollLeft === 0 && e.deltaY < 0;
      const hitRight = container.scrollLeft + container.clientWidth >= container.scrollWidth && e.deltaY > 0;
      if (hitLeft || hitRight) return;

      e.preventDefault();
      container.scrollLeft += e.deltaY;
    };

    container.addEventListener('wheel', onWheel, { passive: false });
    return () => container.removeEventListener('wheel', onWheel);
  }, []);

  return (
    <div className="bg-gray-200">
      <div
        ref={containerRef}
        className="overflow-x-auto no-scrollbar w-full
                   grid grid-cols-1 items-center gap-x-8 gap-y-16
                   py-24 sm:py-32 lg:grid-cols-2"
      >
        <div className="flex">
          {/* Column 1: Header */}
          <div className="flex-none w-full max-w-md py-16 ml-20">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-4">
              Meet Our Team
            </h1>
            <p className="text-xl text-gray-500">
              Experienced, dedicated, and industry-driven.
              <br />
              Our management team guides the company <br />
              with a strong focus on safety, sustainability, <br />
              and operational excellence.
            </p>
          </div>

          {/* Column 2: Member 1 Info */}
          <div className="flex-none w-full max-w-md py-16">
            <img
              alt="Placide Habinema"
              src={require("../../assets/CEO - Placide HABINEMA.jpg")}
              className="rounded-lg bg-gray-100 w-[370px] h-[500px] object-cover"
            />
            <h3 className="mt-4 text-lg text-green-600">
              Chief Executive Officer
            </h3>
            <p className="mt-1 text-2xl font-medium text-gray-900">
              Placide Habinema
            </p>
          </div>

          {/* Column 3: Member 1 Bio */}
          <div className="flex-none w-[350px] max-w-md py-16 mr-32">
            <div className="border-t border-green-400 pt-4">
              <dd className="text-lg text-gray-700">
                <strong>Placide</strong> holds a Bachelor's degree in Mining Engineering from the
                University of Rwanda and a Master's in Environmental Economics
                and Natural Resource Management from the University of Lay
                Adventist of Kigali. He has served as a Mining Engineer and
                Operations Manager for various mining companies in Rwanda and
                has contributed to several mining and environmental consultancy
                projects. Placide also coordinated the research project “Women,
                Conflicts, and Modern Mining Practices in Rwanda” and
                collaborated with international researchers on artisanal mining
                studies. He currently works as a Mining Engineer at the Rwanda
                Mines, Petroleum, and Gas Board.
              </dd>
            </div>
          </div>

          {/* Column 4: Member 2 Info */}
          <div className="flex-none w-full max-w-md py-16">
            <img
              alt="Joseph Iranzi"
              src={require("../../assets/COO - Dr IRANZI Joseph.jpg")}
              className="rounded-lg bg-gray-100 w-[370px] h-[500px] object-cover"
            />
            <h3 className="mt-4 text-lg text-green-600">
              Chief Operating Officer
            </h3>
            <p className="mt-1 text-2xl font-medium text-gray-900">
              Dr. Joseph Iranzi
            </p>
          </div>

          {/* Column 5: Member 2 Bio */}
          <div className="flex-none w-[350px] max-w-md py-16 mr-32">
            <div className="border-t border-green-400 pt-4">
              <dd className="text-lg text-gray-700">
                <strong>Dr. Joseph</strong> holds a Bachelor's in Mining Engineering from the
                University of Rwanda, and both a Master's and PhD in Energy
                Resources Engineering from Pukyong National University in South
                Korea. He has contributed to key consultancy and research
                projects, including glass and cement manufacturing in Rwanda.
                His expertise spans geotechnical analysis, mine planning, and
                quarry design, with strong skills in ArcGIS and remote sensing.
                He currently serves as an Assistant Lecturer at the University
                of Rwanda, School of Mining and Geology.
              </dd>
            </div>
          </div>

          {/* Column 6: Member 3 Info */}
          <div className="flex-none w-full max-w-md py-16">
            <img
              alt="Claude Ishimwe"
              src={require("../../assets/CFO - Jean Claude ISHIMWE.jpg")}
              className="rounded-lg bg-gray-100 w-[370px] h-[500px] object-cover"
            />
            <h3 className="mt-4 text-lg text-green-600">
              Chief Financial Officer
            </h3>
            <p className="mt-1 text-2xl font-medium text-gray-900">
              Claude Ishimwe
            </p>
          </div>

          {/* Column 7: Member 3 Bio */}
          <div className="flex-none w-[350px] max-w-md py-16 px-4">
            <div className="border-t border-green-400 pt-4">
              <dd className="text-lg text-gray-700">
                <strong>Claude</strong> holds a Bachelor's degree in Mining Engineering from the
                University of Rwanda and a Master's in Mineral Economics from
                the University of Dar es Salaam, Tanzania. With experience in
                both mining engineering and economics, his focus areas include
                project evaluation, cost management, underground operations, and
                environmental monitoring. He is skilled in tools such as
                Microsoft Project, STATA, and Dip software. Claude currently
                serves as Senior Processing Plant Manager at Trinity Metals,
                Rutongo Mine.
              </dd>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
