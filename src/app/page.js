"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from '../components/header.js';
import Footer from '../components/footer.js';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: "power3.out" }
    );

    gsap.utils.toArray('.fade-in').forEach(section => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
          }
        }
      );
    });
  }, []);

  const services = [
    {
      title: "Ingeniería Mecánica",
      description: "Diseñamos y desarrollamos soluciones innovadoras que optimizan la eficiencia y el rendimiento de los sistemas mecánicos.",
      image: "/air.jpg"
    },
    {
      title: "Ingeniería Eléctrica",
      description: "Ofrecemos servicios desde el diseño de sistemas eléctricos hasta la implementación de soluciones de energía sostenible.",
      image: "/electric.jpg"
    },
    {
      title: "Ingeniería Civil",
      description: "Proveemos soluciones integrales en infraestructura, desde la planificación hasta la ejecución de proyectos.",
      image: "/hidraulic.jpg"
    }
  ];

  const solutions = [
    {
      title: "Soluciones Integrales de Proyectos",
      description: "Nos especializamos en ofrecer soluciones completas para proyectos relacionados con instalaciones eléctricas, civiles y mecánicas. Nuestro enfoque abarca desde el diseño hasta la implementación, asegurando que cada etapa del proyecto se ejecute con precisión y eficiencia.",
      image: "/metal.jpg"
    },
    {
      title: "Apoyo en Permisos",
      description: "Brindamos apoyo integral en la gestión de los permisos necesarios para la construcción, remodelación o expansión de infraestructuras. Nuestro equipo se encarga de todos los aspectos burocráticos, facilitando el proceso para que nuestros clientes se enfoquen en sus objetivos principales.",
      image: "/tubes.jpg"
    },
    {
      title: "Calidad Energética",
      description: "Estamos comprometidos a proporcionar un apoyo excepcional en términos de calidad energética. Evaluamos y optimizamos el uso de energía en cada proyecto, asegurando eficiencia y sostenibilidad en entornos residenciales, comerciales e industriales.",
      image: "/heater.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section ref={heroRef} id="home" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img src="/plant.jpg" alt="Hero" className="w-full h-full object-cover opacity-50" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <img src="/whitelogo.png" alt="QBE Logo" className="w-64 md:w-96 mx-auto mb-8" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Quality Build Engineering</h1>
          <p className="text-xl md:text-2xl text-gray-300">Innovación y Excelencia en Ingeniería</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="fade-in py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Quiénes Somos</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                En Quality Build Engineering (QBE), nos dedicamos a ofrecer servicios de construcción excepcionales,
                guiados por nuestra misión de excelencia y compromiso con la calidad. Nuestra experiencia y
                conocimiento técnico nos permite ofrecer soluciones innovadoras que superan las expectativas.
              </p>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <img src="/metro.jpg" alt="About Us" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Company Presentation */}
      <section className="fade-in py-20 px-4 md:px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <img src="/tubes.jpg" alt="Presentación" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Presentación de la Empresa</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                En el competitivo mundo de la ingeniería, destacarse requiere no solo experiencia y conocimiento,
                sino también un compromiso inquebrantable con la calidad. En Quality Build Engineering (QBE),
                nos enorgullecemos de ofrecer soluciones de ingeniería de alta calidad que superan las
                expectativas de nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" ref={servicesRef} className="fade-in py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Nuestros Servicios</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-900 rounded-xl overflow-hidden transition-transform hover:scale-105">
                <div className="h-48 relative">
                  <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-choose-us" className="fade-in relative py-20">
        <div className="absolute inset-0">
          <img src="/hose.jpg" alt="Background" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">¿Por Qué Elegirnos?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-black/80 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Compromiso con la Calidad</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                En Quality Build Engineering, nos esforzamos por establecer relaciones sólidas y duraderas
                con nuestros clientes. Nuestro enfoque centrado en el cliente, combinado con nuestra experiencia
                y conocimiento técnico, nos permite ofrecer soluciones de ingeniería personalizadas que se
                adaptan a las necesidades específicas de cada cliente.
              </p>
            </div>
            <div className="bg-black/80 p-8 rounded-xl">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Innovación Constante</h3>
                  <p className="text-gray-300">
                    Nuestro equipo de ingenieros altamente capacitados está constantemente buscando formas
                    innovadoras de abordar los desafíos técnicos más complejos. Nos enorgullece ofrecer
                    soluciones creativas y eficaces que superan las expectativas de nuestros clientes.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Atención Personalizada</h3>
                  <p className="text-gray-300">
                    Cada proyecto es único y merece una atención especial. Nos dedicamos a entender las
                    necesidades específicas de cada cliente para ofrecer soluciones personalizadas y efectivas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section id="objectives" className="fade-in py-20 px-4 md:px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Objetivos</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">General</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Ofrecer soluciones innovadoras y eficientes en los sectores residencial, industrial y comercial
                en los campos de la ingeniería eléctrica, mecánica y civil.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Específicos</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Residencial: Proporcionar servicios personalizados que garanticen la seguridad y la eficiencia energética en los hogares.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Comercial: Desarrollar proyectos que optimicen el uso de recursos y mejoren la funcionalidad de los espacios comerciales.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Industrial: Implementar soluciones robustas y sostenibles que impulsen la productividad y el crecimiento en las industrias.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="fade-in py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Nuestras Soluciones</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-gray-900 rounded-xl overflow-hidden transition-transform hover:scale-105">
                <div className="h-48 relative">
                  <img src={solution.image} alt={solution.title} className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{solution.title}</h3>
                  <p className="text-gray-400">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Excellence Commitment */}
      <section className="fade-in relative py-20">
        <div className="absolute inset-0">
          <img src="/tubes.jpg" alt="Excellence" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Compromiso con la Excelencia</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black/80 p-8 rounded-xl">
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Cumplimiento de Normas: Nos aseguramos de que todos nuestros proyectos cumplan con los más altos estándares de calidad.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Adherencia a los Plazos: Respetamos los plazos establecidos, entregando resultados a tiempo.</span>
                </li>
              </ul>
            </div>
            <div className="bg-black/80 p-8 rounded-xl">
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Gestión de Costos: Mantenemos un control estricto sobre los costos, asegurando que se mantengan dentro del presupuesto acordado.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Alcance Definido: Trabajamos dentro de límites y objetivos definidos, garantizando la satisfacción del cliente.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission-vision" className="fade-in py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div id="mission" className="bg-gray-900 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6">Misión</h3>
            <p className="text-gray-300">
              Ofrecer un servicio de calidad excepcional, caracterizado por la innovación y la confianza,
              especializándonos en proyectos de ingeniería eléctrica, civil y mecánica para los sectores
              residencial, comercial e industrial.
            </p>
          </div>
          <div id="vision" className="bg-gray-900 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6">Visión</h3>
            <p className="text-gray-300">
              Convertirnos en un referente en el sector de la ingeniería, reconocidos por nuestra
              excelencia en el diseño y ejecución de proyectos innovadores y sostenibles, estableciendo
              relaciones sólidas y duraderas con nuestros clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Areas de Operacion */}
      <section id="areas-operacion" className="fade-in py-20 px-4 md:px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Áreas de Operación</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <img src="/plant.jpg" alt="Áreas de Operación" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="space-y-6">
              <p className="text-xl text-gray-300 mb-8">
                Estamos comprometidos a ofrecer soluciones innovadoras y eficientes en los siguientes sectores:
              </p>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Residencial: Proporcionamos servicios personalizados que garantizan la seguridad y el confort en el hogar.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Comercial: Desarrollamos proyectos que optimizan la funcionalidad y eficiencia de los espacios comerciales.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Industrial: Implementamos soluciones robustas y sostenibles que impulsan la productividad y el crecimiento industrial.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Instalaciones Eléctricas Industriales: Diseño e instalación de sistemas eléctricos en plantas industriales, incluyendo cableado, paneles de control y distribución de energía.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Remodelación Eléctrica Industrial: Actualización y optimización de sistemas eléctricos existentes en instalaciones industriales para mejorar la eficiencia y la seguridad.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Calidad y Eficiencia Energética: Implementación de tecnologías y prácticas para reducir el consumo de energía y mejorar la eficiencia de los sistemas eléctricos, incluyendo el uso de fuentes de energía renovable.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Auditorías Eléctricas: Evaluación y análisis de sistemas eléctricos para identificar áreas de mejora, reducir el desperdicio de energía y asegurar el cumplimiento de regulaciones y estándares.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Mantenimiento de Transformadores y Subestaciones: Inspección, reparación y mantenimiento preventivo de transformadores y subestaciones para asegurar su operación óptima y prolongar su vida útil.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Optimización Energética: Desarrollo e implementación de soluciones para maximizar el uso eficiente de la energía, incluyendo la instalación de equipos de monitoreo y control de energía.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Servicios de Calidad: Enfoque constante en la calidad de los servicios prestados, asegurando que se cumplan los más altos estándares y satisfaciendo las necesidades y expectativas de los clientes.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Casos de Estudio */}
      <section className="fade-in relative py-20">
        <div className="absolute inset-0">
          <img src="/electric.jpg" alt="Casos de Estudio" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Casos de Estudio</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black/80 p-6 rounded-xl hover:bg-black/90 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Remodelación Eléctrica</h3>
              <p className="text-gray-300">Planta industrial de Cadence, Coyol, Alajuela. Septiembre 2024</p>
            </div>
            <div className="bg-black/80 p-6 rounded-xl hover:bg-black/90 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Mantenimiento de Transformador</h3>
              <p className="text-gray-300">Transformador pedestal principal en Teradyne 2025</p>
            </div>
            <div className="bg-black/80 p-6 rounded-xl hover:bg-black/90 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Auditoría Energética</h3>
              <p className="text-gray-300">Calidad energética en DICOMA 2024</p>
            </div>
            <div className="bg-black/80 p-6 rounded-xl hover:bg-black/90 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Auditoría Eléctrica</h3>
              <p className="text-gray-300">Sistema eléctrico en CADENCE 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="fade-in py-20 px-4 md:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para comenzar tu proyecto?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contáctanos hoy mismo para discutir cómo podemos ayudarte a alcanzar tus objetivos.
          </p>
          <a href="mailto:proyectos@qbelatam.com" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
            Contáctanos
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}