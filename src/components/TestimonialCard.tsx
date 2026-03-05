import React from 'react'
import { v4 as uuidv4 } from 'uuid';

import { TestimonialItem } from '@/types/firebaseTypes';

interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  const isFeatured = testimonial.featured || false;
  return (
    <div
      className={`relative p-6 md:p-8 rounded-3xl flex flex-col gap-4 border border-transparent 
      transition-all duration-300 ${isFeatured
          ? "bg-secondary shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1 lg:-mx-4 lg:p-10 z-10"
          : "bg-transparent hover:bg-white/5"
        }`}
    >
      {/* Featured Badge */}
      {isFeatured && (
        <span className="absolute -top-3 left-8 bg-[#ffeada] text-[#d47b3b] text-xs font-bold px-3 py-1 rounded-md">
          {testimonial.badge || "Customer-Driven Strategy"}
        </span>
      )}

      {/* Avatar */}
      {/* Header */}
      <div className="flex gap-4 relative">
        <div className="flex-shrink-0 w-12 h-12 bg-[#2a2a35] rounded-full flex items-center justify-center overflow-hidden border border-white/5">
          <span className="text-accent font-medium text-lg">
            {testimonial.avatarText || testimonial.name.charAt(0)}
          </span>
        </div>

        <div className="flex flex-col justify-center w-full relative pb-4">
          <h4 className="text-[17px] font-bold text-white leading-tight">{testimonial.name}</h4>
          <p className="text-white/60 text-sm mt-0.5">{testimonial.position}</p>

          <div className="absolute bottom-0 left-0 w-full border-t border-dashed border-white/20" />
        </div>
      </div>

      {/* Content */}
      <p className="text-white/80 text-[15px] leading-relaxed pt-1">
        {testimonial.content}
      </p>
    </div>
  )
}

export default TestimonialCard
