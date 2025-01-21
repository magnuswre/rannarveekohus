import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact';
import BuildingTechnique from './pages/BuildingTechnique/BuildingTechnique';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/buildingtechnique" element={<BuildingTechnique />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
