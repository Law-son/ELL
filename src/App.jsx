import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './Homepage';
import About from './About';
import Services from './Services';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App