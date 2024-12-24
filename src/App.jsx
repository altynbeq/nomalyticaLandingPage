import React, { useState, useRef, useEffect, lazy, Suspense } from "react";
import { NavBar } from "./componentsMain/Navbar";
import { About } from "./componentsMain/About";
import Problems from "./componentsMain/SecondBlock";
import FamiliarSection from "./componentsMain/ThirdBlock";
import ComparisonSection from "./componentsMain/ComparisonSection";
import DemoRegistration from "./componentsMain/DemoRegistration";
import FeatureSection from "./componentsMain/FeatureSection/FeatureSection";
import SecondSection from "./componentsMain/FeatureTwoSection/SecondSection";
import Plan2 from "./Plan2";
import Optimization from "./Optimization";
import Footer from "./Footer";
import ForFunText from './componentsMain/PrivacyPolicy';
// Renamed file to avoid ad blocker issues

function App() {
  const aboutRef = useRef(null);
  const problemsRef = useRef(null);
  const familiarRef = useRef(null);
  const comparisonRef = useRef(null);
  const demoRef = useRef(null);
  const featureRef = useRef(null);
  const planRef = useRef(null);
  const optimizationRef = useRef(null);

  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  useEffect(() => {
    const hasAcceptedPrivacy = localStorage.getItem("privacyAccepted");
    if (!hasAcceptedPrivacy) {
      setShowPrivacyModal(true);
    }
  }, []);

  const handleAcceptPrivacy = () => {
    localStorage.setItem("privacyAccepted", "true");
    setShowPrivacyModal(false);
  };

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-screen overflow-x-clip overflow-y-hidden bg-white">
      {/* Privacy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl w-full">
            <Suspense fallback={<div>Loading...</div>}>
              <ForFunText onAccept={handleAcceptPrivacy} onClose={setShowPrivacyModal} />
            </Suspense>
            <div className="text-center mt-6">
              <button
                onClick={handleAcceptPrivacy}
                className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Принять
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <NavBar
        onNavigate={scrollToSection}
        refs={{
          aboutRef,
          problemsRef,
          familiarRef,
          comparisonRef,
          demoRef,
          featureRef,
          planRef,
          optimizationRef,
        }}
      />
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={problemsRef}>
        <Problems />
      </div>
      <div ref={comparisonRef}>
        <ComparisonSection />
      </div>
      <div ref={featureRef}>
        <FeatureSection />
      </div>
      <div ref={planRef}>
        <Plan2 />
      </div>
      <div ref={optimizationRef}>
        <Optimization />
      </div>
      <Footer />
    </div>
  );
}

export default App;
