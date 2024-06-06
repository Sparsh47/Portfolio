import ServiceCard from "@/components/ServiceCard";
import { services } from "@/constants/constants";

const page = () => {
  return (
    <div className="bg-background w-full min-h-screen flex flex-col items-center justify-center gap-10 text-white px-5 md:px-10 py-10">
      <h1 className="text-4xl mt-20 md:mt-0 md:text-5xl lg:text-6xl font-bold text-center">
        What I Do<span className="text-accent">?</span>
      </h1>
      <div className="w-full md:w-[80%] lg:w-[60%] h-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} number={index + 1} />
        ))}
      </div>
    </div>
  );
};

export default page;
