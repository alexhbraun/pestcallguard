import React from 'react';

export const PlumberFooter = () => {
  return (
    <footer className="bg-plumber-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4 text-plumber-accent">PlumbGuard</h3>
              <p className="text-gray-400 text-sm">
                24/7 call protection for plumbing contractors.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#/plumber" className="text-gray-400 hover:text-plumber-accent transition-colors">Home</a></li>
                <li><a href="#features" className="text-gray-400 hover:text-plumber-accent transition-colors">How It Works</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-plumber-accent transition-colors">Pricing</a></li>
                <li><a href="#/contact" className="text-gray-400 hover:text-plumber-accent transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#/privacy" className="text-gray-400 hover:text-plumber-accent transition-colors">Privacy Policy</a></li>
                <li><a href="#/terms" className="text-gray-400 hover:text-plumber-accent transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2026 PlumbGuard. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
