"use client";

import React from "react";
import TestimonialCard from "@/components/TestimonialCard";
import { TestimonialItem } from "@/types/firebaseTypes";

interface TestimonialSliderProps {
  data: TestimonialItem[];
}

const TestimonialSlider = ({ data }: TestimonialSliderProps) => {
  // Multiply data to ensure a seamless loop
  const loopData = [...data, ...data, ...data];

  return (
    <div className="relative w-full overflow-hidden pt-10 pb-8">
      {/* Infinite Marquee Container */}
      <div className="flex w-max animate-marquee pause-on-hover gap-6">
        {loopData.map((testimonial, index) => (
          <div
            key={`${testimonial.id}-${index}`}
            className="testimonial-item w-[350px] md:w-[450px] shrink-0"
          >
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
