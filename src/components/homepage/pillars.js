import {
  LockClosedIcon,
  BuildingLibraryIcon,
  SparklesIcon,
  UserGroupIcon,
  CubeTransparentIcon,
  QueueListIcon
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Client-Focused Solutions",
    description:
      "Customizing services to address the dynamic needs of our clients, government regulators, and other key stakeholders.",
    icon: SparklesIcon,
  },
  {
    name: "Sustainable Development",
    description:
      "Ensuring all projects align with both national and international environmental standards and contribute to the achievement of Sustainable Development Goals (SDGs).",
    icon: LockClosedIcon,
  },
  {
    name: "Innovation & Technology",
    description:
      "Harnessing cutting-edge technologies in mining, quarrying, environmental monitoring, and analysis to drive progress.",
    icon: BuildingLibraryIcon,
  },
  {
    name: "Capacity Building",
    description:
      "Empowering local communities and stakeholders through targeted training and development initiatives.",
    icon: CubeTransparentIcon,
  },
  {
    name: "Regulatory Leadership",
    description:
      "Keeping clients ahead of evolving compliance trends and regulatory changes.",
    icon: QueueListIcon,
  },
  {
    name: "Collaboration & Partnerships",
    description:
      "Building strong, strategic partnerships with industry leaders, stakeholders, and local communities to create shared value and drive mutual success.",
    icon: UserGroupIcon,
  },
];

export default function Pillars() {
  return (
    <div className="bg-white py-0 sm:py-0">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-green-500 uppercase">
            We Strategize
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            Key Strategic Pillars
          </p>
          {/* <p className="mt-6 text-lg/8 text-gray-600">
            Mining, Quarry, Environmental, Health and Safety Consultancy
            Services Provider
          </p> */}
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-green-500">
                    <feature.icon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
