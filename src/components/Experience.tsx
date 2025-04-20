import {WorkItem} from "@/types/firebaseTypes";

const Experience = ({ data, title, desc }: {data: WorkItem[], title: string, desc: string}) => {

    console.log("DATA: ", data);

  return (
    <div className="w-full h-full p-2 flex flex-col justify-center">
      <h2 className="text-2xl md:text-3xl lg:text-4xl px-5 font-bold">
        {title}
      </h2>
      <p className="py-4 md:py-6 lg:py-10 px-5 text-justify">{desc}</p>
      <div className="w-full h-[20rem] overflow-auto gap-5 grid grid-cols-1 md:grid-cols-2 pl-5">
        {data && data?.map((exp: WorkItem) => (
          <div
            className="h-[12rem] w-full md:w-[95%] flex flex-col justify-between p-4 md:p-7 rounded-lg bg-secondary transition-shadow duration-200 ease-in-out hover:shadow-xl"
            key={exp.id}
          >
            <div>
              <h3 className="text-md md:text-lg font-light text-accent">
                {exp.date}
              </h3>
              <h2 className="text-xl md:text-2xl font-medium pt-1">
                {exp.role}
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-accent rounded-full"></div>
              <p className="text-[#ddd] text-sm md:text-md">{exp.company}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
