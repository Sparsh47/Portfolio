"use client";

import { useLayoutEffect, useRef } from "react";
import ContactForm from "@/components/ContactForm";
import { IconType } from "react-icons";
import { IoCall, IoMail, IoLocation } from "react-icons/io5";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Contact = () => {
    const contactRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (!contactRef.current) return;

        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.from(".contact-card", {
                scrollTrigger: {
                    trigger: contactRef.current,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out",
            });
        }, contactRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={contactRef}
            className="bg-background w-full min-h-screen flex flex-col items-center justify-center gap-10 lg:gap-20 p-5 py-20 text-white"
        >
            <ContactForm />
            <div className="w-full hidden lg:flex justify-center gap-8">
                <ContactCard Icon={IoCall} value="(+91) 92895 97139" />
                <ContactCard Icon={IoMail} value="sparshshandilya123@gmail.com" />
                <ContactCard Icon={IoLocation} value="Delhi, India" />
            </div>
        </div>
    );
};

const ContactCard = ({ Icon, value }: { Icon: IconType; value: string }) => {
    return (
        <div className="contact-card flex items-center gap-4">
            <div className="w-12 h-12 md:w-16 md:h-16 p-3 md:p-4 bg-secondary rounded-lg shadow-xl">
                <Icon className="w-full h-full text-accent" />
            </div>
            <p className="text-base md:text-lg">{value}</p>
        </div>
    );
};

export default Contact;
