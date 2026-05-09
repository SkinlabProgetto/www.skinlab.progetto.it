import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AuthProvider } from './context/AuthContext';
import { Navbar, Footer, StickyCTA } from './components/Layout';
import Home from './pages/Home';
import Treatments from './pages/Treatments';
import BookNow from './pages/BookNow';
import Journal from './pages/Journal';
import About from './pages/About';
import Membership from './pages/Membership';
import Contacts from './pages/Contacts';
import GiftCards from './pages/GiftCards';
import CategoryTreatments from './pages/CategoryTreatments';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col relative overflow-hidden">
          {/* Artistic Flair: Chrome Accent Element */}
          <div className="absolute -top-20 -right-20 w-96 h-96 opacity-10 rounded-full border-[40px] border-gray-400 z-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, #e5e7eb 0%, #9ca3af 50%, #f3f4f6 100%)' }}></div>
          
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/treatments" element={<Treatments />} />
              <Route path="/book" element={<BookNow />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="/about" element={<About />} />
              <Route path="/membership" element={<Membership />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/gift-cards" element={<GiftCards />} />
              <Route path="/treatments/:type" element={<CategoryTreatments />} />
              {/* Fallback routes could go here */}
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
          <StickyCTA />
        </div>
      </Router>
    </AuthProvider>
  );
}
