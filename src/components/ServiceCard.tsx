import { IoIosArrowRoundForward } from "react-icons/io";

interface ServiceCardProps {
  service: {
    title: string;
    desc: string;
  };
  number: number;
}

const ServiceCard = ({ service, number }: ServiceCardProps) => {
  return (
    <div className="w-full h-full flex flex-col justify-evenly border-b-[0.5px] border-[#aaa] p-5">
      <div className="w-full flex items-center justify-between">
        <h3
          className="text-4xl md:text-5xl font-bold text-background"
          style={{
            textShadow:
              "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff",
          }}
        >
          0{number}
        </h3>
        <IoIosArrowRoundForward className="w-10 h-10 md:w-14 md:h-14 text-black bg-white rounded-full p-2 font-light cursor-pointer transition-all duration-200 ease-in-out rotate-45 hover:rotate-0" />
      </div>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
        {service.title}
      </h2>
      <p className="font-thin text-[#ccc] text-justify text-sm md:text-base lg:text-lg">
        {service.desc}
      </p>
    </div>
  );
};

export default ServiceCard;
