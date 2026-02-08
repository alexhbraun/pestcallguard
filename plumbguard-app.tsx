
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { RealitySection } from './components/RealitySection';
import { CostSection } from './components/CostSection';
import { HowItWorks } from './components/HowItWorks';
import { TargetAudience } from './components/TargetAudience';
import { BusySeason } from './components/BusySeason';
import { WhoThisIsFor } from './components/WhoThisIsFor';
import { Pricing } from './components/Pricing';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

// Lazy load secondary pages
const PrivacyPolicy = React.lazy(() => import('./components/PrivacyPolicy').then(module => ({ default: module.PrivacyPolicy })));
const TermsAndConditions = React.lazy(() => import('./components/TermsAndConditions').then(module => ({ default: module.TermsAndConditions })));
const ContactUs = React.lazy(() => import('./components/ContactUs').then(module => ({ default: module.ContactUs })));


function App() {
  const [route, setRoute] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || '#/');
    };

    window.addEventListener('hashchange', handleHashChange);

    // Normalize path for scroll check logic
    let basePath = (window.location.hash || '#/').split('?')[0].toLowerCase();
    // Remove trailing slash if present
    if (basePath.length > 2 && basePath.endsWith('/')) {
      basePath = basePath.slice(0, -1);
    }

    // Force instant scroll to top when visiting pages
    const pagesRequiringScrollToTop = ['#/privacy', '#/terms', '#/contact'];
    if (pagesRequiringScrollToTop.includes(basePath)) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderHomePage = () => {
    return (
      <>
        <Hero />
        <RealitySection />
        <CostSection />
        <HowItWorks />
        <TargetAudience />
        <BusySeason />
        <WhoThisIsFor />
        <Pricing />
        <FinalCTA />
      </>
    );
  };

  const renderPage = () => {
    // Normalize route
    let normalizedRoute = route.split('?')[0].toLowerCase();
    if (normalizedRoute.length > 2 && normalizedRoute.endsWith('/')) {
      normalizedRoute = normalizedRoute.slice(0, -1);
    }

    switch (normalizedRoute) {
      case '#/privacy':
        return (
          <React.Suspense fallback={<div className="min-h-screen grid place-items-center">Loading...</div>}>
            <PrivacyPolicy />
          </React.Suspense>
        );
      case '#/terms':
        return (
          <React.Suspense fallback={<div className="min-h-screen grid place-items-center">Loading...</div>}>
            <TermsAndConditions />
          </React.Suspense>
        );
      case '#/contact':
        return (
          <React.Suspense fallback={<div className="min-h-screen grid place-items-center">Loading...</div>}>
            <ContactUs />
          </React.Suspense>
        );
      // Handle explicit root, empty, or just hash
      case '#/':
      case '#':
      case '':
        return renderHomePage();
      default:
        // Default fallback to home if route not found
        return renderHomePage();
    }
  };

  return (
    <>
      <Header />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </>
  );
}

export default App;
