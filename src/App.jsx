import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import TopNavBar from './components/TopNavBar/TopNavBar';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import AdminDashboard from './pages/AdminDashboard';

function AppContent() {
  const location = useLocation();
  const isAdmin = location.pathname === '/admin';

  return (
    <div className="d-flex flex-column min-vh-100 bg-surface text-on-surface">
      {!isAdmin && <TopNavBar />}
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </main>
      {!isAdmin && <ContactSection />}
      {!isAdmin && <Footer />}

      {/* Floating WhatsApp Button */}
      {!isAdmin && (
        <a
          href="https://api.whatsapp.com/send?phone=966500850270&text=Hello!%20I'm%20interested%20in%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="position-fixed bottom-0 end-0 m-4 btn btn-success rounded-circle d-flex align-items-center justify-content-center shadow-lg"
          style={{ width: '60px', height: '60px', zIndex: 1050 }}
          aria-label="Chat on WhatsApp"
        >
          <i className="bi bi-whatsapp fs-2 text-white"></i>
        </a>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

