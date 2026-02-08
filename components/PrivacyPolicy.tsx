import React from 'react';

export const PrivacyPolicy: React.FC = () => {
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold font-heading text-primary">Privacy Policy</h1>
            <p className="text-neutral-medium">Last updated: {lastUpdated}</p>
            
            <p>Welcome to GrowSmarter ("us", "we", or "our"). We operate the GrowSmarter website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>
            
            <h2>Information Collection and Use</h2>
            <p>We collect several different types of information for various purposes to provide and improve our Service to you. This may include, but is not limited to, your name, email address, phone number, and usage data.</p>
            
            <h2>Use of Data</h2>
            <p>GrowSmarter uses the collected data for various purposes:</p>
            <ul>
                <li>To provide and maintain our Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information so that we can improve our Service</li>
                <li>To monitor the usage of our Service</li>
                <li>To detect, prevent and address technical issues</li>
            </ul>

            <h2>Sharing of Data and SMS/MMS Consent</h2>
            <p>We do not sell or rent your personal information to third parties. We may share data only with trusted service providers who help us operate our website, process payments, or deliver services to you, and who are bound by confidentiality obligations.</p>
            <div className="p-4 border-l-4 border-accent bg-neutral-light my-6">
                <p className="font-semibold !my-0">
                    No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
                </p>
            </div>

            <h2>Security of Data</h2>
            <p>The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>

            <h2>Changes to This Privacy Policy</h2>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>
            
            <h2>Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us.</p>
        </div>
      </div>
    </div>
  );
};