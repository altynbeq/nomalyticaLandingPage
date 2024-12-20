import React, { useRef } from 'react';
import { NavBar } from './componentsMain/Navbar';
import { About } from './componentsMain/About';
import { Problems } from './componentsMain/SecondBlock';
import FamiliarSection from './componentsMain/ThirdBlock';
import ComparisonSection from './componentsMain/ComparisonSection';
import DemoRegistration from './componentsMain/DemoRegistration';
import FeatureSection from './componentsMain/FeatureSection/FeatureSection';
import SecondSection from './componentsMain/FeatureTwoSection/SecondSection';

import Plan2 from './Plan2';
import Optimization from './Optimization';
import Footer from './Footer';

function App() {
  const aboutRef = useRef(null);
  const problemsRef = useRef(null);
  const familiarRef = useRef(null);
  const comparisonRef = useRef(null);
  const demoRef = useRef(null);
  const featureRef = useRef(null);
  const planRef = useRef(null);
  const optimizationRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-screen overflow-x-hidden bg-white">
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
