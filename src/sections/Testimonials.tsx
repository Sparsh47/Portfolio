"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { testimonials as fallbackTestimonials } from "@/constants/constants";
import TestimonialCard from "@/components/TestimonialCard";
import { fetchTestimonials } from "@/lib/utils";
import { TestimonialItem } from "@/types/firebaseTypes";

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<TestimonialItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const testimonialsData = await fetchTestimonials();

        if (testimonialsData.length > 0) {
          setData(testimonialsData);
        } else {
          setData(fallbackTestimonials as TestimonialItem[]);
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        setData(fallbackTestimonials as TestimonialItem[]);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  useLayoutEffect(() => {
    if (loading) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true,
        },
      });

      tl.from(".testimonials-title", {
        y: 40,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      }).from(
        ".testimonial-item",
        {
          y: 40,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.2,
        },
        "-=0.4"
      );
    }, containerRef);

    return () => ctx.revert();
  }, [loading]);

  return (
    <div
      ref={containerRef}
      className="w-full min-h-screen bg-background flex flex-col items-center justify-center py-20 px-5 md:px-10 lg:px-20"
    >
      <div className="w-full flex-col justify-center items-center text-center pb-16">
        <h2 className="testimonials-title text-4xl md:text-5xl font-bold text-white mb-6">
          What They <span className="text-accent">Say</span>
        </h2>
        <p className="testimonials-title text-white/70 max-w-2xl mx-auto">
          A few words from professionals I&apos;ve worked with.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {data.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-item h-full">
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
