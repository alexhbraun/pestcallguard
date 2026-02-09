import React from 'react';
import { Shield, Phone } from 'lucide-react';

export const PestAnswerLogo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img 
        src="https://ik.imagekit.io/rgqefde41/Design%20sem%20nome%20(12).png" 
        alt="PestAnswer Logo" 
        className="h-20 w-auto object-contain rounded-lg shadow-sm"
      />
    </div>
  );
};
