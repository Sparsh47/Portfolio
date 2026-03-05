"use client";

import React from "react";
import TestimonialCard from "@/components/TestimonialCard";
import { TestimonialItem } from "@/types/firebaseTypes";

interface TestimonialFlexProps {
    data: TestimonialItem[];
}

const TestimonialFlex = ({ data }: TestimonialFlexProps) => {
    return (
        <div className="flex flex-wrap justify-center gap-8 w-full max-w-6xl">
            {data.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-item w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)] max-w-md">
                    <TestimonialCard testimonial={testimonial} />
                </div>
            ))}
        </div>
    );
};

export default TestimonialFlex;
