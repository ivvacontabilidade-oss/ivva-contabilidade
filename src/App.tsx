import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import IvvaCred from './pages/IvvaCred';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import Obrigado from "./pages/Obrigado";
import WhatsappFloatingButton from './components/WhatsappFloatingButton';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-900">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/ivva-cred" element={<IvvaCred />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/obrigado" element={<Obrigado />} />
          </Routes>
        </main>
        <Footer />
<WhatsappFloatingButton />
      </div>
    </Router>
  );
}

export default App;
