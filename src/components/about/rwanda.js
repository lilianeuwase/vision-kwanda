import React, { useEffect, useRef, useState } from 'react';

const features = [
  { name: "Historical Background", description: "The sector began in the 1930s with a focus on tin, laying the foundation for decades of development." },
  { name: "Economic Contribution", description: "Mining is a major source of export revenue and supports Rwanda’s broader economic growth." },
  { name: "Job Creation", description: "The industry provides employment opportunities, benefiting both urban and rural communities." },
  { name: "Modernization", description: "Rwanda has shifted from manual methods to mechanized and semi-industrial mining operations." },
  { name: "Government & Private Support", description: "Ongoing policy reforms, investments, and government backing continue to drive the sector forward." },
  { name: "Focus on Sustainability", description: "Emphasis is placed on responsible mining practices, value addition, and leveraging technology for long-term impact." },
];

export default function Rwanda() {
  const [inView, setInView] = useState(false);
  const gridRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(gridRef.current);
    return () => obs.disconnect();
  }, []);

  const images = [
    require("../../assets/Rwanda11.jpg"),
    require("../../assets/Rwanda12.jpg"),
    require("../../assets/Rwanda13.jpg"),
    require("../../assets/Rwanda14.jpg"),
  ];

  return (
    <div className="bg-gray-200">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        {/* text side stays identical */}
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Mining Sector of Rwanda
          </h2>
          <p className="mt-4 text-gray-500">
            Rwanda’s mining sector has evolved from small-scale tin extraction
            in the 1930s to a major contributor to the national economy,
            supporting export revenue, employment, and sustainable development
            through modernization reforms.
          </p>
          <dl className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((f) => (
              <div key={f.name} className="border-t border-green-200 pt-4">
                <dt className="font-medium text-gray-900">{f.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">{f.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* image side with ref and stagger */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8"
        >
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Rwanda mining ${idx + 1}`}
              className={`rounded-lg bg-gray-100 opacity-0 transition-opacity duration-500`}
              style={{ transitionDelay: `${idx * 0.5}s`, opacity: inView ? 1 : 0 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}