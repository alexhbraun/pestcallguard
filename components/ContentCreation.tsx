import React from 'react';
import { Video, Camera, CalendarDays, Repeat } from 'lucide-react';

const contentFeatures = [
    {
        icon: <Video className="h-7 w-7 text-secondary" />,
        title: '🎥 Professional AI-Powered Promo Videos',
        description: 'Engaging, high-quality videos to showcase your services and attract new customers.'
    },
    {
        icon: <Camera className="h-7 w-7 text-accent" />,
        title: '📸 Branded photos and graphics',
        description: 'Custom-designed visuals that reinforce your brand identity across all platforms.'
    },
    {
        icon: <CalendarDays className="h-7 w-7 text-primary" />,
        title: '📅 Weekly content calendar',
        description: 'A pre-planned schedule of posts so you always know what’s coming up.'
    },
    {
        icon: <Repeat className="h-7 w-7 text-secondary" />,
        title: '🔁 Automated Social Posting',
        description: 'We post to your Facebook, Instagram, and Google Business Profile automatically.'
    }
];

export const ContentCreation: React.FC = () => {
    return (
        <section id="content-creation" className="bg-white py-20 sm:py-24">
            <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold font-heading sm:text-4xl text-primary">GrowSmarter Creates Stunning Video & Photo Content For You</h2>
                    <p className="mt-4 text-lg text-neutral-medium">
                        Your business gets premium content every week — without hiring a videographer.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="flex items-center justify-center">
                        <img src="https://ik.imagekit.io/rgqefde41/social_media_posts_showcase.png?updatedAt=1763158017001" alt="Social Media Content Examples" className="rounded-lg shadow-premium-lg" />
                    </div>
                    <div className="flex flex-col justify-center space-y-8">
                        {contentFeatures.map((feature, index) => (
                            <div key={index} className="flex items-start">
                                <div className="flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-full bg-soft-light-navy">
                                    {feature.icon}
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold font-heading text-primary">{feature.title}</h3>
                                    <p className="mt-1 text-neutral-medium">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="mt-16 text-center">
                    <a
                        href="#/content-examples"
                        className="inline-block px-8 py-3.5 text-base font-semibold text-white bg-accent rounded-xl shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-all duration-300 ease-in-out transform hover:scale-105"
                    >
                        See Content Examples
                    </a>
                </div>
            </div>
        </section>
    );
};