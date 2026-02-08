import React, { useEffect } from 'react';

export const FinalCTA: React.FC = () => {

    useEffect(() => {
        const scriptId = 'ghl-booking-script';
        // Avoid adding the script multiple times if the component re-renders
        if (document.getElementById(scriptId)) return;

        const script = document.createElement('script');
        script.id = scriptId;
        script.src = "https://link.msgsndr.com/js/form_embed.js";
        script.type = "text/javascript";
        script.async = true;
        
        document.body.appendChild(script);

        // Cleanup script on component unmount
        return () => {
            const existingScript = document.getElementById(scriptId);
            if (existingScript) {
                document.body.removeChild(existingScript);
            }
        };
    }, []);

    return (
        <section 
            id="booking-section" 
            className="bg-neutral-light py-20 sm:py-24 relative overflow-hidden"
            style={{
                backgroundImage: 'radial-gradient(circle at top left, rgba(0, 43, 92, 0.03), transparent 20%), radial-gradient(circle at bottom right, rgba(0, 194, 178, 0.03), transparent 20%)'
            }}
        >
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="bg-white p-8 sm:p-12 rounded-xl shadow-premium-lg border border-gray-200/80 text-center">
                    <h2 className="text-3xl font-bold font-heading sm:text-4xl text-primary">Ready to Grow Smarter?</h2>
                    <p className="mt-4 text-lg text-neutral-medium max-w-3xl mx-auto">
                        Book your free growth session below and see how easily you can scale your local business with AI-powered systems.
                    </p>
                    <div className="mt-8">
                        <iframe 
                            src="https://api.leadconnectorhq.com/widget/booking/LaSQ8GSkaQP0OHLZ31VC" 
                            style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '650px', borderRadius: '0.5rem' }} 
                            scrolling="no" 
                            id="LaSQ8GSkaQP0OHLZ31VC_1763058134547"
                            title="Booking Widget"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};