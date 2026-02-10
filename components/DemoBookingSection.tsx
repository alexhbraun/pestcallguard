import React from 'react';

export const DemoBookingSection = () => {
    return (
        <section id="book-walkthrough" className="py-24 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-secondary mb-6 tracking-tight uppercase">
                        See How PestAnswer Would Work For You
                    </h2>
                    <p className="text-xl text-neutral-medium font-medium max-w-2xl mx-auto leading-relaxed mb-4">
                        15-minute walkthrough to review how your inbound calls would be handled, qualified, and booked automatically.
                    </p>
                    <p className="text-lg text-primary font-bold">
                        No pressure. Just clarity.
                    </p>
                </div>

                <div className="max-w-[1000px] mx-auto bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden relative min-h-[700px]">
                    <iframe
                        src="https://api.leadconnectorhq.com/widget/booking/z5g4L4fHg3HhHT1SyAPa"
                        style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '700px' }}
                        scrolling="no"
                        id="ghl-calendar"
                        title="Schedule Walkthrough"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};
