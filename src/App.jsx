import { useRef } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import GalleryPage from "./pages/GalleryPage";
import LoveLetter from "./pages/LoveLetter";

function AnimatedRoutes({ audioRef }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home audioRef={audioRef} />} />
        <Route path="/love" element={<LoveLetter audioRef={audioRef} />} />
        <Route path="/gallery" element={<GalleryPage audioRef={audioRef} />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const audioRef = useRef(null);

  return (
    <>
      <audio ref={audioRef} loop preload="auto">
        <source src="/music/sempurna.mp3" type="audio/mp3" />
      </audio>

      <BrowserRouter>
        <AnimatedRoutes audioRef={audioRef} />
      </BrowserRouter>
    </>
  );
}

export default App;