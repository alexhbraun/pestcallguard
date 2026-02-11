
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border border-gray-200 rounded-lg bg-white overflow-hidden transition-all duration-300 hover:shadow-md">
      <button
        className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
        onClick={onClick}
      >
        <span className="font-bold text-[#0F2E1E] text-lg pr-4">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-accent flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
        )}
      </button>
      <div
        className={`px-6 text-gray-600 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-40 py-4 border-t border-gray-100' : 'max-h-0 py-0'
        }`}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Will it sound robotic?",
      answer: "No. We use the latest conversational AI that pauses, understands interruptions, and sounds 100% human. Most callers have no idea they are speaking with an AI."
    },
    {
      question: "What about emergencies?",
      answer: "You can set custom escalation rules. If a caller mentions keywords like 'emergency' or 'urgent', the call can be forwarded directly to your cell phone immediately."
    },
    {
      question: "Will it mess up my bookings?",
      answer: "It integrates directly with your calendar (Google, Outlook, etc.), so it only books available slots that you define. It never double-books."
    },
    {
      question: "What if I want to answer myself?",
      answer: "We only pick up if you don't answer after 3-4 rings (configurable). You are always the primary answerer; we are your backup."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-[#0F2E1E]/5 rounded-full mb-4">
            <HelpCircle className="w-8 h-8 text-[#0F2E1E]" />
          </div>
          <h2 className="text-3xl font-bold font-heading text-[#0F2E1E] uppercase">
            Common Questions from Pest Pros
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
