import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';

// Page and Component Imports
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Partners from './pages/Partners';
import GlobalPresence from './pages/GlobalPresence';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Placeholder for assets to prevent build errors
const catalogPdf = '#';

// --- SCROLL TO TOP ON ROUTE CHANGE ---
// This component will automatically scroll the window to the top
// whenever the user navigates to a new page.
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // This effect runs every time the pathname changes

  return null; // This component does not render anything
};


// --- MAIN LAYOUT COMPONENT ---
// This layout includes the Navbar and Footer for consistent pages.
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet /> {/* Page content will be rendered here */}
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Added the auto-scroll component here */}
      <div>
        <main className="relative isolate min-h-screen">
          <Routes>
            {/* Route for the Homepage (no navbar or footer) */}
            <Route path="/" element={<Home />} />
            
            {/* Routes that use the MainLayout (with navbar and footer) */}
            <Route element={<MainLayout />}>
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/globalpresence" element={<GlobalPresence />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
          </Routes>
        </main>

        {/* --- FLOATING ACTION BUTTONS --- */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center space-y-4">
          
          <motion.a
            href="mailto:contact@ferrarifoods.com"
            className="group relative"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 1.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute right-full mr-4 px-3 py-1.5 text-sm font-semibold text-white bg-black/80 rounded-lg shadow-lg opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 origin-right">
              Contact Us
            </span>
            <div className="absolute -inset-1 rounded-full ring-4 ring-[#C6A664]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative w-14 h-14 flex items-center justify-center rounded-full shadow-lg bg-gradient-to-br from-[#C6A664] to-[#bfa356] cursor-pointer">
              <Mail className="w-6 h-6 text-black" />
            </div>
          </motion.a>

          <motion.a
            href={catalogPdf}
            download="Ferrari-Foods-Profile.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 1.6 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute right-full mr-4 px-3 py-1.5 text-sm font-semibold text-white bg-black/80 rounded-lg shadow-lg opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 origin-right">
              Download Catalog
            </span>
            <div className="absolute -inset-1 rounded-full ring-4 ring-[#C6A664]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative w-14 h-14 flex items-center justify-center rounded-full shadow-lg bg-gradient-to-br from-[#C6A664] to-[#bfa356] cursor-pointer">
              <Download className="w-6 h-6 text-black" />
            </div>
          </motion.a>
        </div>
      </div>
    </Router>
  );
}

export default App;