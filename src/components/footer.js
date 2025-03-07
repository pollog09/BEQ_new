import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-scroll';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const socialLinksRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top bottom',
          end: 'bottom bottom',
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo(
      socialLinksRef.current.children,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: socialLinksRef.current,
          start: 'top bottom',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  const socialLinks = [
    {
      icon: faInstagram,
      url: 'https://www.instagram.com/qualitybuildengineering/',
      label: 'Instagram'
    },
    {
      icon: faLinkedin,
      url: 'https://www.linkedin.com/in/quality-build-engineering-59028b31b/',
      label: 'LinkedIn'
    },
    {
      icon: faFacebook,
      url: 'https://www.facebook.com/profile.php?id=615618735365',
      label: 'Facebook'
    },
    {
      icon: faGlobe,
      url: 'https://qbelatam.com/',
      label: 'Website'
    }
  ];

  const contactInfo = [
    {
      icon: faPhone,
      text: '+506 8888-8888',
      url: 'tel:+50688888888'
    },
    {
      icon: faEnvelope,
      text: 'proyectos@qbelatam.com',
      url: 'mailto:proyectos@qbelatam.com'
    },
    {
      icon: faMapMarkerAlt,
      text: 'San José, Costa Rica',
      url: 'https://maps.google.com/?q=San+José,+Costa+Rica'
    }
  ];

  const quickLinks = [
    { to: 'services', label: 'Servicios' },
    { to: 'areas-operacion', label: 'Áreas de Operación' },
    { to: 'contact', label: 'Contacto' }
  ];

  return (
    <footer ref={footerRef} className="bg-gradient-to-b from-gray-900 to-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">QBE Engineering</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Comprometidos con la excelencia en ingeniería y construcción, ofreciendo soluciones innovadoras y sostenibles para nuestros clientes.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Información de contacto */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <li key={index}>
                  <a
                    href={info.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center md:justify-start text-gray-300 hover:text-white transition-colors"
                  >
                    <FontAwesomeIcon icon={info.icon} className="w-5 h-5 mr-2" />
                    <span>{info.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Redes sociales */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold mb-4">Síguenos</h4>
            <div ref={socialLinksRef} className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <FontAwesomeIcon icon={social.icon} className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Quality Build Engineering. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;