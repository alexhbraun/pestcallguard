import React from 'react';

const steps = [
    { 
        step: 1,
        title: "Capture", 
        description: "Turn website visitors and inquiries into qualified leads instantly.",
        image: "https://ik.imagekit.io/rgqefde41/get%20free%20estimate.png"
    },
    { 
        step: 2,
        title: "Automate", 
        description: "AI follows up, engages, books appointments, and requests reviews.",
        image: "https://ik.imagekit.io/rgqefde41/Step%202%20Automate.png?updatedAt=1763055397012"
    },
    {
        step: 3,
        title: "Grow",
        description: "Get more jobs, more reviews, and more revenue consistently.",
        image: "https://ik.imagekit.io/rgqefde41/step%203%20growth.png"
    }
];

export const HowItWorks: React.FC = () => {
    return (
        <section id="how-it-works" className="bg-neutral-light py-20 sm:py-24">
            <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold font-heading sm:text-4xl text-primary">How GrowSmarter Works</h2>
                    <p className="mt-4 text-lg text-neutral-medium">In three simple steps, transform your business operations.</p>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {steps.map((step, index) => (
                        <div key={step.step} className="p-6">
                            <div className="flex items-center justify-center">
                                <img src={step.image} alt={step.title} className="rounded-lg shadow-md mb-6" />
                            </div>
                            <h3 className="text-2xl font-bold font-heading text-primary">
                                <span className="text-accent">Step {step.step}:</span> {step.title}
                            </h3>
                            <p className="mt-2 text-neutral-medium">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};