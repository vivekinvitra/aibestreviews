
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Discover from './pages/Discover';
import ToolDetail from './pages/ToolDetail';
import CategoryDetail from './pages/CategoryDetail';
import Compare from './pages/Compare';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SubmitTool from './pages/SubmitTool';
import LegalPage from './pages/LegalPage';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col selection:bg-indigo-600 selection:text-white bg-white dark:bg-[#0b0c10] transition-colors duration-300">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tools" element={<Discover />} />
            <Route path="/tool/:id" element={<ToolDetail />} />
            <Route path="/category/:id" element={<CategoryDetail />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:category/:id" element={<NewsDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/submit-tool" element={<SubmitTool />} />
            <Route path="/contact" element={<Contact />} />
            {/* Dynamic Legal & Policy Pages */}
            <Route path="/p/:pageId" element={<LegalPage />} />
            {/* Catch-all for legacy paths if needed, or simply update footer */}
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
