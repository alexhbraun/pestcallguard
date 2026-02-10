import React from 'react';

export const Waveform = () => {
    // Generate 20 bars with random initial heights and staggered animation delays
    const bars = Array.from({ length: 25 }, (_, i) => ({
        id: i,
        // Stagger delays for a natural wave effect
        delay: `${(i * 0.1) % 1.2}s`,
        // Vary initial heights slightly
        height: `${20 + Math.random() * 30}%`,
    }));

    return (
        <div className="flex items-center justify-center gap-1.5 h-16 mb-10">
            {bars.map((bar) => (
                <div
                    key={bar.id}
                    className="w-1.5 bg-accent rounded-full animate-wave shadow-[0_0_15px_rgba(253,207,82,0.5)]"
                    style={{
                        animationDelay: bar.delay,
                        height: bar.height,
                    }}
                />
            ))}
        </div>
    );
};
