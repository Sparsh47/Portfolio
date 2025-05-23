"use client";

import React, { FC, useEffect, useState, useLayoutEffect, useRef } from "react";
import ServiceCard from "@/components/ServiceCard";
import { ServiceItem } from "@/types/firebaseTypes";
import { fetchServices } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Service: FC = () => {
    const [services, setServices] = useState<ServiceItem[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        (async () => {
            const items = await fetchServices();
            setServices(items);
        })();
    }, []);

    useLayoutEffect(() => {
        if (!containerRef.current || services.length === 0) return;

        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray<HTMLElement>(".service-card");

            gsap.from(cards, {
                scrollTrigger: {
                    trigger: containerRef.current!,
                    start: "top 85%",
                    toggleActions: "play play play play",
                },
                y: 40,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out",
                stagger: 0.2,
            });
        }, containerRef);

        return () => ctx.revert();
    }, [services]);

    return (
        <div
            ref={containerRef}
            className="bg-background w-full min-h-screen flex flex-col items-center justify-center gap-10 text-white px-14"
        >
            <h1 className="text-4xl mt-20 md:mt-0 md:text-5xl lg:text-6xl font-bold text-center">
                What I Do<span className="text-accent">?</span>
            </h1>

            <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10">
                {services.length > 0 &&
                    services
                        .sort((a, b) => a.rank - b.rank)
                        .map((service) => (
                            <div key={service.id} className="service-card">
                                <ServiceCard service={service} number={service.rank} />
                            </div>
                        ))}
            </div>
        </div>
    );
};

export default Service;
