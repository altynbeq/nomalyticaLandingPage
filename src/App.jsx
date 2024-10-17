import React from 'react';
import { NavBar } from './componentsMain/Navbar';
import { About } from './componentsMain/About';
import { Problems } from './componentsMain/SecondBlock';
import FamiliarSection from './componentsMain/ThirdBlock'
import ComparisonSection from './componentsMain/ComparisonSection'
import DemoRegistration from './componentsMain/DemoRegistration';
import FeatureSection from './componentsMain/FeatureSection/FeatureSection';
import SecondSection from './componentsMain/FeatureTwoSection/SecondSection'

import Plan2 from './Plan2';
import Optimization from './Optimization'
import Footer from './Footer';

function App() {
  return (
    <div className="w-screen bg-white"> {/* Added w-full and h-screen for full width and height */}
      <NavBar />
      <About />
      <Problems />
      <FamiliarSection />
      <ComparisonSection />
      {/* <DemoRegistration /> */}
      <Optimization />
      <FeatureSection />
      <Plan2 />
      <Footer />
    </div>
  );
}

export default App;
