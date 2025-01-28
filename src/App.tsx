import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact';
import BuildingTechnique from './pages/BuildingTechnique/BuildingTechnique';
import Location from './pages/Location/Location';
import Facilities from './pages/Facilities/Facilities';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/location" element={<Location />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/buildingtechnique" element={<BuildingTechnique />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
