const About = ({ data }: { data: any }) => {
  return (
    <div className="w-full h-full p-2 flex flex-col justify-center relative lg:bottom-10">
      <h2 className="text-2xl md:text-3xl lg:text-4xl px-5 font-bold">
        {data.title}
      </h2>
      <p className="py-4 md:py-6 lg:py-10 px-5 text-justify">{data.desc}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 px-5 gap-4">
        {data.info.map((info: any, index: number) => (
          // @ts-ignore
          <div key={index} className="flex items-center gap-1">
            <p className="text-sm md:text-md text-[#ccc]">{info.field}</p>
            <p className="text-md md:text-lg">{info.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
