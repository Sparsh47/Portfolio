"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { toast } from "sonner";
import { cn, fetchServices } from "@/lib/utils";
import { ServiceItem } from "@/types/firebaseTypes";

const ContactForm = () => {
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [isSending, setIsSending] = useState(false);
  const [needsConfirmation, setNeedsConfirmation] = useState(false);

  const formRef = useRef<HTMLDivElement>(null);
  const fNameRef = useRef<HTMLInputElement>(null);
  const lNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const serviceRef = useRef<HTMLSelectElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    (async () => {
      const items = await fetchServices();
      setServices(items);
    })();
  }, []);

  useLayoutEffect(() => {
    if (!formRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(formRef.current, {
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 80,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(
        // @ts-ignore
        formRef.current.querySelectorAll("input, select, textarea, button"),
        {
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 90%",
          },
          opacity: 0,
          y: 40,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
        },
      );
    }, formRef);

    return () => ctx.revert();
  }, []);

  const validate = () => {
    const fName = fNameRef.current?.value.trim();
    const lName = lNameRef.current?.value.trim();
    const email = emailRef.current?.value.trim();
    const phone = phoneRef.current?.value.trim();
    const service = serviceRef.current?.value;
    const desc = descRef.current?.value.trim();

    if (!fName || !lName) {
      toast.error("Please enter your full name");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return false;
    }

    if (!phone || phone.length < 10) {
      toast.error("Please enter a valid phone number (at least 10 digits)");
      return false;
    }

    if (service === "Select a Service" || !service) {
      toast.error("Please select a service you're interested in");
      return false;
    }

    if (!desc || desc.length < 10) {
      toast.error("Please provide a brief description of your project (min 10 characters)");
      return false;
    }

    return true;
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!validate()) return;

    if (!needsConfirmation) {
      setNeedsConfirmation(true);
      toast.info("Click 'Confirm' to send your message", {
        description: "Please double-check your details before confirming.",
      });
      return;
    }

    setIsSending(true);
    setNeedsConfirmation(false);

    const fName = fNameRef.current?.value;
    const lName = lNameRef.current?.value;
    const email = emailRef.current?.value;
    const phone = phoneRef.current?.value;
    const service = serviceRef.current?.value;
    const desc = descRef.current?.value;

    const loadingToast = toast.loading("Sending your message...");

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fName, lName, email, phone, service, desc }),
      });

      const result = await response.json();

      toast.dismiss(loadingToast);

      if (result.success) {
        toast.success("Message sent! I'll get back to you soon.");
        e.currentTarget.reset();
      } else {
        toast.error(result.message || "Failed to send email");
      }
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("Connectivity issue. Please check network and try again.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <div
      ref={formRef}
      className="w-full xl:w-2/3 p-5 lg:p-10 bg-secondary rounded-lg shadow-xl"
    >
      <h2 className="text-2xl md:text-3xl text-accent py-4 md:py-8">
        Let&apos;s work together
      </h2>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col gap-5 md:gap-10"
      >
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-5">
          <input
            className="w-full bg-background rounded-md p-2 outline-accent"
            ref={fNameRef}
            name="fName"
            type="text"
            placeholder="First Name"
            required
          />
          <input
            className="w-full bg-background rounded-md p-2 outline-accent"
            ref={lNameRef}
            name="lName"
            type="text"
            placeholder="Last Name"
            required
          />
        </div>
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-5">
          <input
            className="w-full bg-background rounded-md p-2 outline-accent"
            ref={emailRef}
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
          <input
            className="w-full bg-background rounded-md p-2 outline-accent"
            ref={phoneRef}
            name="phoneNumber"
            type="number"
            placeholder="Phone Number (with country code)"
            required
          />
        </div>
        <select
          className="w-full bg-background rounded-md p-2 outline-accent text-[#aaa]"
          ref={serviceRef}
          name="service"
          defaultValue="Select a Service"
        >
          <option disabled>Select a Service</option>
          {services &&
            services
              .sort((a, b) => a.rank - b.rank)
              .map((service, index) => (
                <option key={index} value={service.title}>
                  {service.title}
                </option>
              ))}
        </select>
        <textarea
          className="w-full bg-background rounded-md p-2 outline-accent"
          ref={descRef}
          name="description"
          placeholder="Enter your message here"
          rows={7}
        />
        <button
          disabled={isSending}
          className={cn(
            "py-3 px-8 rounded-full font-bold transition-all duration-300 self-start",
            needsConfirmation
              ? "bg-yellow-500 text-black hover:bg-yellow-400 scale-105"
              : "bg-accent text-black hover:opacity-90",
            isSending && "opacity-50 cursor-not-allowed"
          )}
        >
          {isSending ? "Sending..." : needsConfirmation ? "Confirm Submission?" : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
