import React, { FC, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface LoaderProps {
    onComplete?: () => void;
}

const Loader: FC<LoaderProps> = ({ onComplete }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const text = 'SPARSH';

    useLayoutEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                defaults: { duration: 0.6, ease: 'power2.inOut' },
                onComplete: () => onComplete?.(),
            });

            tl.set(containerRef.current,    { opacity: 1 });
            tl.set('.loader-dot',           { opacity: 0, scale: 0 });
            tl.set('.loader-bar',           { x: '-100%', opacity: 0 });
            tl.set('.loader-letter',        { opacity: 0, y: 50, skewY: 10 });
            tl.set('.blind',                { scaleY: 0, transformOrigin: 'top center' });

            tl.to('.loader-dot', {
                scale: 1,
                rotation: 0,
                opacity: 1,
                stagger: 0.08,
            }, 0)
                .to('.loader-bar', {
                    x: 0,
                    opacity: 1,
                    ease: 'back.out(1.7)',
                    stagger: 0.08,
                }, 0)

                .to('.loader-letter', {
                    y: 0,
                    opacity: 1,
                    skewY: 0,
                    stagger: 0.03,
                }, 0.1)

                .to('.blind', {
                    scaleY: 1,
                    stagger: 0.08,
                    duration: 0.4,
                }, 1);

        }, containerRef);

        return () => ctx.revert();
    }, [onComplete]);

    return (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
            <div
                ref={containerRef}
                className="relative w-full h-full flex flex-col items-center justify-center opacity-0"
            >
                <div className="flex space-x-3 mb-6">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <div
                            key={i}
                            className="loader-dot w-4 h-4 bg-green-500 rounded-full"
                        />
                    ))}
                </div>

                <div className="flex space-x-1 mb-4">
                    {text.split('').map((char, i) => (
                        <span
                            key={i}
                            className="loader-letter text-4xl tracking-widest font-bold text-green-500 inline-block"
                        >
              {char}
            </span>
                    ))}
                </div>

                <div className="flex space-x-2 mb-6">
                    {Array.from({ length: 3 }).map((_, i) => (
                        <div
                            key={i}
                            className="loader-bar w-8 h-1 bg-green-500"
                        />
                    ))}
                </div>

                <div className="blinds absolute inset-0 flex pointer-events-none">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <div
                            key={i}
                            className="blind flex-1 bg-background"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Loader;
