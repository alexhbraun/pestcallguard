import React from 'react';
import { PlayCircle, Image as ImageIcon } from 'lucide-react';

const examples = [
    { type: 'video', industry: 'Plumbing', thumbnail: 'https://ik.imagekit.io/rgqefde41/placeholders/plumbing_video.png' },
    { type: 'image', industry: 'HVAC', thumbnail: 'https://ik.imagekit.io/rgqefde41/placeholders/hvac_graphic.png' },
    { type: 'video', industry: 'Med Spa', thumbnail: 'https://ik.imagekit.io/rgqefde41/placeholders/medspa_ad.png' },
    { type: 'image', industry: 'Roofing', thumbnail: 'https://ik.imagekit.io/rgqefde41/placeholders/roofing_photo.png' },
    { type: 'video', industry: 'Dental', thumbnail: 'https://ik.imagekit.io/rgqefde41/placeholders/dental_promo.png' },
    { type: 'image', industry: 'Landscaping', thumbnail: 'https://ik.imagekit.io/rgqefde41/placeholders/landscaping_post.png' },
];

export const ContentExamples: React.FC = () => {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                <div className="text-center">
                    <h1 className="text-4xl font-bold font-heading text-primary">See Real Content We Create For Local Businesses</h1>
                    <p className="mt-4 text-lg text-neutral-medium max-w-3xl mx-auto">
                        From engaging, high-impact videos to stunning branded graphics, here's a sample of what we can create for you.
                    </p>
                </div>
                
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {examples.map((example, index) => (
                        <div key={index} className="group rounded-lg overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-300 transform hover:-translate-y-1">
                            <div className="relative">
                                <img src={example.thumbnail} alt={`${example.industry} ${example.type}`} className="w-full h-56 object-cover" />
                                <div className="absolute inset-0 bg-primary/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                                    {example.type === 'video' ? 
                                        <PlayCircle className="h-16 w-16 text-white" /> :
                                        <ImageIcon className="h-16 w-16 text-white" />
                                    }
                                </div>
                            </div>
                            <div className="p-4 bg-neutral-light border-t border-gray-200/80">
                                <p className="font-semibold text-primary">{example.industry}</p>
                                <p className="text-sm text-neutral-medium capitalize">{example.type} Example</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};