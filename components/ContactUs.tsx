
import React from 'react';
import { Mail, Phone } from 'lucide-react';

export const ContactUs: React.FC = () => {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('Thank you for your message. We will get back to you shortly!');
    (event.target as HTMLFormElement).reset();
  };

  const handlePhoneClick = (e: React.MouseEvent) => {
    e.preventDefault();
    alert("DEMO MODE:\n\nIn a real environment, this would open your phone dialer to call: (920) 777-7683");
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold font-heading text-primary">Get in Touch</h1>
          <p className="mt-4 text-lg text-neutral-medium max-w-2xl mx-auto">
            Have a question or want to learn more about how GrowSmarter can help your business? Fill out the form below or email us directly.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-8">
            <div className="inline-flex items-center justify-center">
              <Mail className="h-5 w-5 text-accent" />
              <a href="mailto:alexander@contact.getgrowsmarter.com" className="ml-2 text-lg text-accent hover:underline font-semibold">
                alexander@contact.getgrowsmarter.com
              </a>
            </div>
            <div className="inline-flex items-center justify-center">
              <Phone className="h-5 w-5 text-accent" />
              <button 
                onClick={handlePhoneClick} 
                className="ml-2 text-lg text-accent hover:underline font-semibold bg-transparent border-none cursor-pointer"
              >
                (920) 777-7683
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-dark">
                Full Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  required
                  className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
                  placeholder="John Doe"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-dark">
                Email Address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-dark">
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-accent hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-colors duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
