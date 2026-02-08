import React from 'react';

export const TermsAndConditions: React.FC = () => {
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
    
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold font-heading text-primary">Terms & Conditions</h1>
            <p className="text-neutral-medium">Last updated: {lastUpdated}</p>

            <h2>1. Agreement to Terms</h2>
            <p>By using our Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service. Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms.</p>
            
            <h2>2. Communications</h2>
            <p>By creating an Account on our service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. You also consent to receive communications from us electronically, including SMS messages.</p>
            
            <h2>3. SMS/Text Messaging Program Terms</h2>
            <p>When you opt-in to our service, you understand and agree that we will send you text messages to the mobile phone number you provide. These messages may include informational and service-related content related to our services, such as appointment updates, reminders, and follow-up messages.</p>
            <ul>
                <li>You understand that consent is not a condition of purchase.</li>
                <li>Message and data rates may apply. Message frequency varies.</li>
                <li>You can cancel the SMS service at any time by texting "STOP" to the number from which you received the message. Upon sending "STOP," we will send you a final SMS message to confirm your unsubscription. After this confirmation, you will no longer receive SMS messages from us. To re-subscribe, you can sign up again as you did initially.</li>
                <li>For assistance or more information, text "HELP" to the number from which you received the message. We will respond with instructions on how to use our service and how to unsubscribe.</li>
                <li>Carriers are not liable for delayed or undelivered messages.</li>
            </ul>

            <h2>4. Intellectual Property</h2>
            <p>The Service and its original content, features, and functionality are and will remain the exclusive property of GrowSmarter and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.</p>
            
            <h2>5. Limitation Of Liability</h2>
            <p>In no event shall GrowSmarter, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>

            <h2>6. Governing Law</h2>
            <p>These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.</p>
            
            <h2>Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us.</p>
        </div>
      </div>
    </div>
  );
};