"use client";

import ServiceCard from "@/components/ServiceCard";
import {useEffect, useState} from "react";
import {ServiceItem} from "@/types/firebaseTypes";
import {fetchServices} from "@/lib/utils";

const Service = () => {

    const [services,setServices] = useState<ServiceItem[]>([]);

    useEffect(() => {
        (async ()=>{
            const services = await fetchServices();
            setServices(services);
        })();
    }, []);

  return (
    <div className="bg-background w-full min-h-screen flex flex-col items-center justify-center gap-10 text-white px-5">
      <h1 className="text-4xl mt-20 md:mt-0 md:text-5xl lg:text-6xl font-bold text-center">
        What I Do<span className="text-accent">?</span>
      </h1>
      <div className="w-full md:w-[80%] xl:w-[60%] h-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {services.length && services.sort((a, b)=>(a.rank-b.rank)).map((service, index) => (
          <ServiceCard key={service.id} service={service} number={service.rank} />
        ))}
      </div>
    </div>
  );
};

export default Service;
