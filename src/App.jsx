import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './Homepage';
import About from './About';
import Services from './Services';
import PrivacyPolicy from './PrivacyPolicy';
import Terms from './Terms';
import Disclaimer from './Disclaimer';
import Support from './Support';
import Platform from './Platform';
import FAQ from './FAQ';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/support" element={<Support />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Router>
  );
}

export default App