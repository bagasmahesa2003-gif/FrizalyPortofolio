import { useEffect, ReactNode, useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Instagram, Youtube, Linkedin, Twitter } from 'lucide-react';
import Home from './Home';
import Projects from './Projects';
import ProjectDetails from './ProjectDetails';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav className="fixed w-full z-50 glass py-4 px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold tracking-tighter" onClick={closeMobileMenu}>BA<span className="text-blue-500">.</span></Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-widest">
            {isHome ? (
              <>
                <a href="#about" className="hover:text-red-500 transition">About</a>
                <a href="#skills" className="hover:text-blue-500 transition">Skills</a>
                <a href="#projects-section" className="hover:text-red-500 transition">Projects</a>
                <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
              </>
            ) : (
              <>
                <Link to="/#about" className="hover:text-red-500 transition">About</Link>
                <Link to="/#skills" className="hover:text-blue-500 transition">Skills</Link>
                <Link to="/#projects-section" className="hover:text-red-500 transition">Projects</Link>
                <Link to="/#contact" className="hover:text-blue-500 transition">Contact</Link>
              </>
            )}
        </div>

        {/* Animated Hamburger Icon */}
        <button 
          className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center group z-[60]" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <div className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out absolute ${isMobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`} />
          <div className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out absolute ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
          <div className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out absolute ${isMobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[40] transition-opacity duration-500 md:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} 
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      {/* Mobile Menu Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-[#0d0d0d] border-l border-white/5 shadow-2xl z-[50] transform transition-transform duration-500 ease-in-out md:hidden flex flex-col px-10 py-24 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col space-y-8 text-xl font-bold uppercase tracking-widest mt-8">
            {[
              { label: 'About', path: isHome ? '#about' : '/#about', color: 'hover:text-red-500' },
              { label: 'Skills', path: isHome ? '#skills' : '/#skills', color: 'hover:text-blue-500' },
              { label: 'Projects', path: isHome ? '#projects-section' : '/#projects-section', color: 'hover:text-red-500' },
              { label: 'Contact', path: isHome ? '#contact' : '/#contact', color: 'hover:text-blue-500' },
            ].map((item, index) => {
              const linkClasses = `transition-all duration-500 ease-out transform ${item.color} ${
                isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`;
              const linkStyle = { transitionDelay: `${isMobileMenuOpen ? 150 + index * 100 : 0}ms` };

              return isHome ? (
                <a key={item.label} href={item.path} onClick={closeMobileMenu} className={linkClasses} style={linkStyle}>{item.label}</a>
              ) : (
                <Link key={item.label} to={item.path} onClick={closeMobileMenu} className={linkClasses} style={linkStyle}>{item.label}</Link>
              );
            })}
        </div>
      </div>

      {children}

      <footer className="py-12 text-center border-t border-white/5">
          <p className="text-gray-500 text-sm">© {(new Date()).getFullYear()} Muhammad Bagus Afriza Aly. All rights reserved.</p>
      </footer>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

