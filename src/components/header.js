import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef(null);

  const menuItems = [
    { to: 'home', label: 'Inicio' },
    { to: 'about', label: 'Quiénes Somos' },
    { to: 'services', label: 'Servicios' },
    { to: 'mission', label: 'Misión' },
    { to: 'vision', label: 'Visión' },
    { to: 'contact', label: 'Contacto' }
  ];

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { y: -100 },
      { y: 0, duration: 1, ease: "power3.out" }
    );

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClasses = `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-black/90 backdrop-blur-lg py-4' : 'bg-transparent py-6'
  }`;

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: { duration: 0.3 }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <header ref={headerRef} className={headerClasses}>
      <div className="container mx-auto px-4 md:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="flex items-center cursor-pointer"
          >
            <img 
              src="/whitelogo.png" 
              alt="QBE Logo" 
              className="h-10 md:h-12"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="text-white hover:text-blue-400 transition-colors cursor-pointer text-sm uppercase tracking-wider font-medium"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="mailto:proyectos@qbelatam.com"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm uppercase tracking-wider transition-colors"
            >
              Contáctanos
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FontAwesomeIcon
              icon={isMenuOpen ? faTimes : faBars}
              className="text-2xl"
            />
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed top-0 right-0 h-screen w-4/5 bg-black/95 backdrop-blur-lg md:hidden"
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-end p-6">
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white focus:outline-none"
                  >
                    <FontAwesomeIcon icon={faTimes} className="text-2xl" />
                  </button>
                </div>
                <div className="flex-1 flex flex-col justify-center px-8">
                  {menuItems.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      className="text-white hover:text-blue-400 py-4 text-lg uppercase tracking-wider transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <a
                    href="mailto:proyectos@qbelatam.com"
                    className="bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-full mt-6 uppercase tracking-wider transition-colors"
                  >
                    Contáctanos
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;