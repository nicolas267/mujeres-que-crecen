"use client";

import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const blobs = document.querySelectorAll<HTMLElement>(".organic-blob");

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      blobs.forEach((blob, i) => {
        const speed = (i + 1) * 20;
        blob.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md">
        <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
          <div className="font-headline-md text-headline-md font-bold text-tertiary">
            Mujeres que Crecen
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a
              className="text-on-surface-variant hover:text-tertiary transition-colors font-label-md text-label-md"
              href="#"
            >
              ¿Quiénes somos?
            </a>
            <a
              className="text-on-surface-variant hover:text-tertiary transition-colors font-label-md text-label-md"
              href="#"
            >
              Emprendimientos
            </a>
            <a
              className="text-on-surface-variant hover:text-tertiary transition-colors font-label-md text-label-md"
              href="#"
            >
              Market Place
            </a>
            <a
              className="text-on-surface-variant hover:text-tertiary transition-colors font-label-md text-label-md"
              href="#"
            >
              Ángeles Inversores
            </a>
            <a
              className="text-on-surface-variant hover:text-tertiary transition-colors font-label-md text-label-md"
              href="#"
            >
              IA Mentora
            </a>
            <a
              href="#inscripcion"
              className="bg-secondary text-on-primary px-6 py-2 rounded-full font-button-text text-button-text scale-95 active:scale-90 transition-transform inline-flex items-center justify-center text-center"
            >
              Inscríbete
            </a>
          </div>
          <button type="button" className="md:hidden text-primary" aria-label="Abrir menú">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
        <div className="h-[1px] bg-surface-container-low w-full" />
      </nav>

      <main className="relative pt-24">
        <div className="organic-blob bg-primary w-[500px] h-[500px] -top-20 -left-20" />
        <div className="organic-blob bg-secondary w-[400px] h-[400px] top-1/2 -right-20" />

        <section className="px-margin-mobile md:px-margin-desktop py-16 md:py-32 max-w-container-max mx-auto">
          <div className="grid md:grid-cols-2 items-center gap-16">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-1 bg-primary-fixed text-on-primary-fixed rounded-full font-label-md text-label-md">
                <span className="material-symbols-outlined text-[18px]">eco</span>
                Comunidad Empoderada
              </div>
              <h1 className="font-headline-xl text-headline-xl md:text-headline-xl text-primary leading-none">
                Construyamos el <br />
                <span className="text-secondary">cambio juntos:</span> <br />
                Mujeres que Crecen
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                Somos una plataforma diseñada para impulsar el crecimiento
                económico, financiero y tecnológico de mujeres emprendedoras en
                toda la región.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#inscripcion"
                  className="bg-secondary text-on-primary px-10 py-4 rounded-full font-button-text text-button-text hover:bg-secondary-container transition-all shadow-lg shadow-secondary/20 inline-flex items-center justify-center text-center"
                >
                  Inscríbete
                </a>
                <button
                  type="button"
                  className="border-2 border-primary text-primary px-10 py-4 rounded-full font-button-text text-button-text hover:bg-primary/5 transition-all"
                >
                  Conocer más
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="image-reveal aspect-[4/5] relative z-10">
                <img
                  alt="Mujer emprendedora liderando"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7BqeO9yq08HF2sqo32ZRo5-yqXidv4N10tAhuOBvRwxnEQzfRVbaOLKATrU5lrrD_E7cI7tY11ST9a0k23iPOo8oIxOFIIzwTSzZ1NDG9Sx3DQGBCxGAfUIah4nd8FGSMwyuZ1nSYZlLbbWi-upU9WRdZHl_i2dv8t53PNTSGpXZ-rwYiw-VoiZ7BEYAav_L8ao5-8cGvnS-NP1YA9s2Jci8V7oIwx9VKr6KUe1HfCZz1N33isJ7w3H7UM0VD0gWDsta_LmaQuwa1"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-tertiary-fixed rounded-full -z-0" />
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-primary-fixed-dim rounded-full -z-0 opacity-50" />
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-24">
          <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center space-y-12">
            <div className="max-w-3xl mx-auto space-y-4">
              <h2 className="font-headline-lg text-headline-lg text-primary">
                Nuestra Misión
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Impulsamos el ecosistema emprendedor femenino integrando
                tecnología de vanguardia con una red de apoyo institucional
                sólida, transformando ideas en realidades sostenibles.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-gutter">
              <div className="bg-white p-10 rounded-lg shadow-sm border-t-4 border-secondary space-y-4 transition-transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-secondary-fixed rounded-full flex items-center justify-center text-secondary mx-auto">
                  <span className="material-symbols-outlined text-4xl">
                    diversity_1
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-tertiary">
                  Comunidad
                </h3>
                <p className="text-on-surface-variant">
                  Conectamos a miles de mujeres con el mismo propósito de
                  crecimiento y colaboración estratégica.
                </p>
              </div>
              <div className="bg-white p-10 rounded-lg shadow-sm border-t-4 border-primary space-y-4 transition-transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-primary-fixed rounded-full flex items-center justify-center text-primary mx-auto">
                  <span className="material-symbols-outlined text-4xl">
                    auto_awesome
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-tertiary">
                  Tecnología
                </h3>
                <p className="text-on-surface-variant">
                  Implementamos IA y herramientas digitales para optimizar
                  procesos y escalar negocios regionales.
                </p>
              </div>
              <div className="bg-white p-10 rounded-lg shadow-sm border-t-4 border-tertiary space-y-4 transition-transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-tertiary-fixed rounded-full flex items-center justify-center text-tertiary mx-auto">
                  <span className="material-symbols-outlined text-4xl">
                    account_balance
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-tertiary">
                  Institucionalidad
                </h3>
                <p className="text-on-surface-variant">
                  Brindamos el respaldo financiero y legal necesario para que tu
                  emprendimiento sea robusto y confiable.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-margin-mobile md:px-margin-desktop py-24 max-w-container-max mx-auto space-y-16">
          <h2 className="font-headline-lg text-headline-lg text-primary text-center">
            Nuestro Impacto
          </h2>
          <div className="grid md:grid-cols-12 md:grid-rows-2 gap-gutter h-auto md:h-[600px]">
            <div className="md:col-span-8 bg-primary text-on-primary p-12 rounded-lg flex flex-col justify-end relative overflow-hidden">
              <div className="relative z-10">
                <span className="font-label-md text-label-md bg-white/20 px-4 py-1 rounded-full mb-4 inline-block">
                  Impacto Social
                </span>
                <h3 className="font-headline-lg text-headline-lg mb-4">
                  Reducir brechas de género
                </h3>
                <p className="text-body-lg max-w-md">
                  Creamos espacios seguros donde el liderazgo femenino es la
                  norma, no la excepción, fomentando la equidad real.
                </p>
              </div>
            </div>
            <div className="md:col-span-4 bg-tertiary-container text-on-tertiary-container p-12 rounded-lg flex flex-col justify-center">
              <span className="material-symbols-outlined text-6xl mb-6">
                trending_up
              </span>
              <h3 className="font-headline-md text-headline-md mb-2">
                Impacto Económico
              </h3>
              <p>
                Crecimiento exponencial de negocios liderados por mujeres a
                través de inversión y marketplace.
              </p>
            </div>
            <div className="md:col-span-4 bg-secondary text-on-primary p-12 rounded-lg flex flex-col justify-center">
              <span className="material-symbols-outlined text-6xl mb-6">
                psychology
              </span>
              <h3 className="font-headline-md text-headline-md mb-2">
                Impacto Tecnológico
              </h3>
              <p>
                Acceso democrático a herramientas innovadoras y oportunidades de
                digitalización avanzada.
              </p>
            </div>
            <div className="md:col-span-8 bg-surface-container-highest p-12 rounded-lg border border-outline-variant flex items-center gap-12 overflow-hidden">
              <div className="flex-1">
                <h3 className="font-headline-md text-headline-md text-tertiary mb-4">
                  Resultados Tangibles
                </h3>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="font-headline-lg text-headline-lg text-primary">
                      45%
                    </p>
                    <p className="text-label-md">Aumento en ingresos promedio</p>
                  </div>
                  <div>
                    <p className="font-headline-lg text-headline-lg text-primary">
                      +2k
                    </p>
                    <p className="text-label-md">Mujeres capacitadas en IA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-surface-bright">
          <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto space-y-24">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="md:w-1/2 space-y-6">
                <span className="bg-tertiary-fixed text-on-tertiary-fixed px-4 py-1 rounded-full font-label-md text-label-md">
                  Novedad
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary">
                  Market Place
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  Un espacio comercial exclusivo para que las emprendedoras de
                  nuestra red ofrezcan sus productos y servicios a una comunidad
                  global que valora el impacto social.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary">
                      check_circle
                    </span>
                    Visibilidad internacional
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary">
                      check_circle
                    </span>
                    Transacciones seguras
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary">
                      check_circle
                    </span>
                    Logística integrada
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <div className="bg-surface-container-high rounded-xl p-8 aspect-video flex items-center justify-center overflow-hidden">
                  <img
                    alt="Marketplace showcase"
                    className="w-full h-full object-cover rounded-lg shadow-xl"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKfPlIDdxlislqvAKWDeYMmI2B66Ik2V5MM5dmM5MfPkFtYSaYqmX7RbUXPe-TNWUR4bxE32qcIf8DSrZqQwwBNqlO2bwaaT5I8ddGsuI2q6GoRJJwacPp_323KzqK8bcaC7MGlHHCfAeZmaGWTMPKokRtcqEVpr3wxQo6inEqWF8tEAPjGC-83fQkfXyo-lAX1zZrIcws1K6E3xAucrTMOjpFP-3XLRZwTt4495bE9NHriPw-1mYkT3lLLo3mDA4sYAOUZYnhGHNV"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center gap-16">
              <div className="md:w-1/2 space-y-6">
                <span className="bg-primary-fixed text-on-primary-fixed px-4 py-1 rounded-full font-label-md text-label-md">
                  Capital Semilla
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary">
                  Ángeles Inversores
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  Conectamos proyectos de alto potencial con una red de
                  inversionistas ángeles comprometidos con el éxito de los
                  negocios liderados por mujeres.
                </p>
                <button
                  type="button"
                  className="text-secondary font-button-text text-button-text flex items-center gap-2 group"
                >
                  Ver oportunidades de inversión
                  <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
                    arrow_forward
                  </span>
                </button>
              </div>
              <div className="md:w-1/2">
                <div className="bg-tertiary rounded-xl p-12 aspect-[4/3] flex flex-col justify-between text-on-tertiary">
                  <div className="space-y-4">
                    <h4 className="font-headline-md text-headline-md">
                      Inversión Consciente
                    </h4>
                    <p className="opacity-80">
                      Nuestro modelo garantiza que el capital no solo genere
                      retornos, sino que transforme comunidades enteras.
                    </p>
                  </div>
                  <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/20">
                    <div className="flex justify-between items-center">
                      <span>Proyectos Financiados</span>
                      <span className="font-bold">120+</span>
                    </div>
                    <div className="w-full bg-white/20 h-2 rounded-full mt-2">
                      <div className="bg-white h-full w-[75%] rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary text-on-primary rounded-lg overflow-hidden flex flex-col md:flex-row items-stretch">
              <div className="md:w-1/3 p-12 space-y-6 bg-primary-container">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-4xl">
                    neurology
                  </span>
                </div>
                <h2 className="font-headline-md text-headline-md">IA Mentora</h2>
                <p className="opacity-80">
                  Nuestra inteligencia artificial especializada brinda mentoría
                  24/7 en finanzas, marketing y estrategia de negocios.
                </p>
                <button
                  id="inscripcion"
                  type="button"
                  className="bg-white text-primary px-8 py-3 rounded-full font-button-text text-button-text"
                >
                  Probar Demo
                </button>
              </div>
              <div className="md:w-2/3 p-12 relative flex items-center">
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="bg-white/10 p-6 rounded-lg border border-white/10">
                    <p className="font-label-md text-label-md mb-2">Marketing</p>
                    <p className="text-sm opacity-70 italic">
                      "¿Cómo puedo optimizar mi campaña en Instagram?"
                    </p>
                  </div>
                  <div className="bg-white/10 p-6 rounded-lg border border-white/10">
                    <p className="font-label-md text-label-md mb-2">Finanzas</p>
                    <p className="text-sm opacity-70 italic">
                      "¿Cuál es mi punto de equilibrio mensual?"
                    </p>
                  </div>
                  <div className="bg-white/10 p-6 rounded-lg border border-white/10">
                    <p className="font-label-md text-label-md mb-2">Ventas</p>
                    <p className="text-sm opacity-70 italic">
                      "Guion para cierre de ventas B2B."
                    </p>
                  </div>
                  <div className="bg-white/10 p-6 rounded-lg border border-white/10">
                    <p className="font-label-md text-label-md mb-2">Estrategia</p>
                    <p className="text-sm opacity-70 italic">
                      "Oportunidades de escalabilidad."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-margin-mobile md:px-margin-desktop py-32 max-w-container-max mx-auto text-center relative overflow-hidden">
          <div className="organic-blob bg-secondary-fixed w-[600px] h-[600px] -bottom-40 -left-40 opacity-20" />
          <div className="relative z-10 space-y-8">
            <h2 className="font-headline-xl text-headline-xl text-primary max-w-4xl mx-auto leading-tight">
              ¿Lista para llevar tu <span className="text-secondary">emprendimiento</span>{" "}
              al siguiente nivel?
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Únete hoy a la comunidad de Mujeres que Crecen y accede a todas
              las herramientas digitales, financieras y humanas que necesitas
              para triunfar.
            </p>
            <div className="flex justify-center pt-8">
              <a
                href="#inscripcion"
                className="bg-secondary text-on-primary px-12 py-5 rounded-full font-headline-md text-headline-md shadow-2xl shadow-secondary/30 hover:scale-105 active:scale-95 transition-all inline-flex items-center justify-center text-center"
              >
                Inscríbete Ahora
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-surface-container-highest rounded-t-lg mt-20">
        <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop py-12 max-w-container-max mx-auto gap-gutter">
          <div className="space-y-4 text-center md:text-left">
            <div className="font-headline-md text-headline-md text-tertiary">
              Mujeres que Crecen
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xs">
              Empoderando el futuro femenino a través de la tecnología y la
              comunidad.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <a
              className="text-on-surface-variant hover:text-secondary-container transition-colors font-label-md text-label-md"
              href="#"
            >
              Privacidad
            </a>
            <a
              className="text-on-surface-variant hover:text-secondary-container transition-colors font-label-md text-label-md"
              href="#"
            >
              Términos
            </a>
            <a
              className="text-on-surface-variant hover:text-secondary-container transition-colors font-label-md text-label-md"
              href="#"
            >
              Contacto
            </a>
            <a
              className="text-on-surface-variant hover:text-secondary-container transition-colors font-label-md text-label-md"
              href="#"
            >
              Comunidad
            </a>
          </div>
          <div className="font-label-md text-label-md text-on-surface-variant opacity-80">
            © 2024 Mujeres que Crecen.
          </div>
        </div>
      </footer>
    </>
  );
}