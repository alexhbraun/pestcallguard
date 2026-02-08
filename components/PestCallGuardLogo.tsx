import React from 'react';
import { Shield, Phone } from 'lucide-react';

export const PestCallGuardLogo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img 
        src="https://ik.imagekit.io/rgqefde41/ChatGPT%20Image%206%20de%20fev.%20de%202026,%2016_50_21.png" 
        alt="PestCall Guard Logo" 
        className="h-20 w-auto object-contain rounded-lg shadow-sm"
      />
    </div>
  );
};
