import { servicesData } from "../data/utils";

const Services = () => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 ">
      {servicesData.map((service) => (
        <div
          key={service.title}
          className="p-4 rounded-lg overflow-hidden border-2 border-gray-600 shadow-md flex items-center relative"
        >
          <div className="absolute inset-0 flex items-center justify-end">
            <service.icon className="text-acc opacity-20 w-40 h-40" />
          </div>
          <div className="z-10">
            <h3 className="text-lg font-medium text-gray-800 dark:text-white">
              {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {service.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
