"use client";

import React from "react";
import TestimonialCard from "@/components/TestimonialCard";
import { TestimonialItem } from "@/types/firebaseTypes";

interface TestimonialBentoProps {
    data: TestimonialItem[];
}

const TestimonialBento = ({ data }: TestimonialBentoProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl auto-rows-fr">
            {data.map((testimonial, index) => {
                let gridClasses = "testimonial-item h-full ";

                if (testimonial.featured) {
                    // Featured item: 2 cols wide, 2 rows tall
                    gridClasses += "md:col-span-2 md:row-span-2";
                } else if (index === data.length - 1 && data.length % 3 !== 0) {
                    // Last item: Full width if it doesn't fit the row perfectly
                    gridClasses += "md:col-span-3";
                } else {
                    // Standard small block
                    gridClasses += "md:col-span-1";
                }

                return (
                    <div key={testimonial.id} className={gridClasses}>
                        <TestimonialCard testimonial={testimonial} />
                    </div>
                );
            })}
        </div>
    );
};

export default TestimonialBento;
