import { Routes, Route, useLocation } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import "../src/App.css"
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation()
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<About />} />

        <Route path="/projects" element={<Projects />} />
      </Routes>
    </AnimatePresence>
    
  );
}

export default App;
