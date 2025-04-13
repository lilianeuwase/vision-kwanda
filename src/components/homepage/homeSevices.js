import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon, BuildingLibraryIcon, CogIcon, SparklesIcon, UserGroupIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Our Long-Term Vision',
    description:
      'To provide the innovative solutions for Mining, Geology, Environment, Health and Safety, Real Estate and Constructions Supporting Services in Rwanda, Regional area and extend our services to the global scale level.',
    icon: SparklesIcon,
  },
  {
    name: 'Our Mission Statement',
    description:
      'To build long term relationships with our clients and provide an exceptional quality service by pursuing our business through innovations and optimum technology.',
    icon: LockClosedIcon,
  },
  {
    name: 'Our Goal',
    description:
      'Regional expansion and professionalizing our services to their best quality along with developing strong base collaboration with our customers.',
    icon: BuildingLibraryIcon,
  },
  {
    name: 'Our Motto',
    description:
      'Empowering Mining Engineering, Environmental, Health and Safety Services; A Benchmark to the Sustainable Development of the Rwandan mining Sector.',
    icon: UserGroupIcon,
  },
]

export default function HomeSevices() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-green-500 uppercase">We Strategize</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            Our Company Strategy
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
          Mining, Quarry, Environmental, Health and Safety Consultancy Services Provider
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-green-500">
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
