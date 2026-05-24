"use client";

import { getHomepageData } from "@/sanity/client";
import { SanityDocument } from "next-sanity";
import { useEffect, useState } from "react";

const materialToFaIcon: Record<string, string> = {
  menu: "fa-bars",
  eco: "fa-leaf",
  diversity_1: "fa-users",
  auto_awesome: "fa-wand-magic-sparkles",
  account_balance: "fa-landmark",
  trending_up: "fa-chart-line",
  psychology: "fa-brain",
  check_circle: "fa-circle-check",
  arrow_forward: "fa-arrow-right",
  neurology: "fa-microchip",
};

const getFaIcon = (iconName?: string) => materialToFaIcon[iconName ?? ""] ?? "fa-circle";

export default function App() {
  const [homepageData, setHomepageData] = useState<SanityDocument | null>(null);

  useEffect(() => {
    getHomepageData().then((data) => setHomepageData(data));
  }, []);

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

  const navigation = homepageData?.navigation ?? [];
  const navLinks = navigation.filter((item: { variant?: string }) => item?.variant !== "primary");
  const navPrimary = navigation.find((item: { variant?: string }) => item?.variant === "primary");
  const hero = homepageData?.hero;
  const mission = homepageData?.mission;
  const impact = homepageData?.impact;
  const marketplace = homepageData?.marketplace;
  const investors = homepageData?.investors;
  const aiMentora = homepageData?.aiMentora;
  const finalCta = homepageData?.finalCta;
  const footer = homepageData?.footer;
  const impactToneLabel =
    impact?.featuredStory?.tone === "primary"
      ? "Impacto Primario"
      : impact?.featuredStory?.tone === "secondary"
        ? "Impacto Secundario"
        : impact?.featuredStory?.tone === "tertiary"
          ? "Impacto Terciario"
          : "Impacto Social";

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md">
        <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
          <div className="font-headline-md text-headline-md font-bold text-tertiary">
            {homepageData?.seo?.title ?? "Mujeres que Crecen"}
          </div>
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link: { _key?: string; label: string; href?: string }) => (
              <a
                key={link._key ?? `${link.label}-${link.href}`}
                className="text-on-surface-variant hover:text-tertiary transition-colors font-label-md text-label-md"
                href={link.href ?? "#"}
              >
                {link.label}
              </a>
            ))}
            {navPrimary ? (
              <a
                href={navPrimary.href ?? "#inscripcion"}
                className="bg-secondary text-on-primary px-6 py-2 rounded-full font-button-text text-button-text scale-95 active:scale-90 transition-transform inline-flex items-center justify-center text-center"
              >
                {navPrimary.label}
              </a>
            ) : null}
          </div>
          <button type="button" className="md:hidden text-primary" aria-label="Abrir menú">
            <i className={`fa ${getFaIcon("menu")}`} aria-hidden="true" />
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
                <i className={`fa ${getFaIcon("eco")} text-[18px]`} aria-hidden="true" />
                {hero?.eyebrow ?? ""}
              </div>
              <h1 className="font-headline-xl text-headline-xl md:text-headline-xl text-primary leading-none">
                {hero?.titlePrefix ?? "Construyamos el"} <br />
                <span className="text-secondary">{hero?.titleHighlight ?? "cambio juntos:"}</span> <br />
                {hero?.titleSuffix ?? "Mujeres que Crecen"}
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                {hero?.description ??
                  "Somos una plataforma diseñada para impulsar el crecimiento económico, financiero y tecnológico de mujeres emprendedoras en toda la región."}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={hero?.primaryCta?.href ?? "#inscripcion"}
                  className="bg-secondary text-on-primary px-10 py-4 rounded-full font-button-text text-button-text hover:bg-secondary-container transition-all shadow-lg shadow-secondary/20 inline-flex items-center justify-center text-center"
                >
                  {hero?.primaryCta?.label ?? "Inscríbete"}
                </a>
                <a
                  href={hero?.secondaryCta?.href ?? "#quienes-somos"}
                  className="border-2 border-primary text-primary px-10 py-4 rounded-full font-button-text text-button-text hover:bg-primary/5 transition-all"
                >
                  {hero?.secondaryCta?.label ?? "Conocer más"}
                </a>
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
                {mission?.title ?? "Nuestra Misión"}
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                {mission?.description ??
                  "Impulsamos el ecosistema emprendedor femenino integrando tecnología de vanguardia con una red de apoyo institucional sólida, transformando ideas en realidades sostenibles."}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-gutter">
              {(mission?.cards ?? []).map((card: { _key?: string; tone?: string; iconName: string; title: string; description: string }) => {
                const tone = card?.tone ?? "secondary";
                const borderClass =
                  tone === "primary"
                    ? "border-primary"
                    : tone === "tertiary"
                      ? "border-tertiary"
                      : "border-secondary";
                const badgeBgClass =
                  tone === "primary"
                    ? "bg-primary-fixed"
                    : tone === "tertiary"
                      ? "bg-tertiary-fixed"
                      : "bg-secondary-fixed";
                const badgeTextClass =
                  tone === "primary"
                    ? "text-primary"
                    : tone === "tertiary"
                      ? "text-tertiary"
                      : "text-secondary";

                return (
                  <div
                    key={card._key ?? `${card.title}-${card.iconName}`}
                    className={`bg-white p-10 rounded-lg shadow-sm border-t-4 ${borderClass} space-y-4 transition-transform hover:-translate-y-2`}
                  >
                    <div
                      className={`w-16 h-16 ${badgeBgClass} rounded-full flex items-center justify-center ${badgeTextClass} mx-auto`}
                    >
                      <i className={`fa ${getFaIcon(card.iconName)} text-4xl`} aria-hidden="true" />
                    </div>
                    <h3 className="font-headline-md text-headline-md text-tertiary">
                      {card.title}
                    </h3>
                    <p className="text-on-surface-variant">{card.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-margin-mobile md:px-margin-desktop py-24 max-w-container-max mx-auto space-y-16">
          <h2 className="font-headline-lg text-headline-lg text-primary text-center">
            {impact?.title ?? "Nuestro Impacto"}
          </h2>
          <div className="grid md:grid-cols-12 md:grid-rows-2 gap-gutter h-auto md:h-[600px]">
            <div className="md:col-span-8 bg-primary text-on-primary p-12 rounded-lg flex flex-col justify-end relative overflow-hidden">
              <div className="relative z-10">
                <span className="font-label-md text-label-md bg-white/20 px-4 py-1 rounded-full mb-4 inline-block">
                  {impactToneLabel}
                </span>
                <h3 className="font-headline-lg text-headline-lg mb-4">
                  {impact?.featuredStory?.title ?? "Reducir brechas de género"}
                </h3>
                <p className="text-body-lg max-w-md">
                  {impact?.featuredStory?.description ??
                    "Creamos espacios seguros donde el liderazgo femenino es la norma, no la excepción, fomentando la equidad real."}
                </p>
              </div>
            </div>
            <div className="md:col-span-4 bg-tertiary-container text-on-tertiary-container p-12 rounded-lg flex flex-col justify-center">
              <i className={`fa ${getFaIcon("trending_up")} text-6xl mb-6`} aria-hidden="true" />
              <h3 className="font-headline-md text-headline-md mb-2">
                {impact?.cards?.[0]?.title ?? "Impacto Económico"}
              </h3>
              <p>
                {impact?.cards?.[0]?.description ??
                  "Crecimiento exponencial de negocios liderados por mujeres a través de inversión y marketplace."}
              </p>
            </div>
            <div className="md:col-span-4 bg-secondary text-on-primary p-12 rounded-lg flex flex-col justify-center">
              <i className={`fa ${getFaIcon("psychology")} text-6xl mb-6`} aria-hidden="true" />
              <h3 className="font-headline-md text-headline-md mb-2">
                {impact?.cards?.[1]?.title ?? "Impacto Tecnológico"}
              </h3>
              <p>
                {impact?.cards?.[1]?.description ??
                  "Acceso democrático a herramientas innovadoras y oportunidades de digitalización avanzada."}
              </p>
            </div>
            <div className="md:col-span-8 bg-surface-container-highest p-12 rounded-lg border border-outline-variant flex items-center gap-12 overflow-hidden">
              <div className="flex-1">
                <h3 className="font-headline-md text-headline-md text-tertiary mb-4">
                  {impact?.metricsTitle ?? "Resultados Tangibles"}
                </h3>
                <div className="grid grid-cols-2 gap-8">
                  {(impact?.metrics ?? []).map((metric: { _key?: string; value: string; label: string }) => (
                    <div key={metric._key ?? `${metric.value}-${metric.label}`}>
                      <p className="font-headline-lg text-headline-lg text-primary">
                        {metric.value}
                      </p>
                      <p className="text-label-md">{metric.label}</p>
                    </div>
                  ))}
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
                  {marketplace?.badge ?? "Novedad"}
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary">
                  {marketplace?.title ?? "Market Place"}
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  {marketplace?.description ??
                    "Un espacio comercial exclusivo para que las emprendedoras de nuestra red ofrezcan sus productos y servicios a una comunidad global que valora el impacto social."}
                </p>
                <ul className="space-y-4">
                  {(marketplace?.benefits ?? []).map((benefit: string) => (
                    <li key={benefit} className="flex items-center gap-3">
                      <i className={`fa ${getFaIcon("check_circle")} text-secondary`} aria-hidden="true" />
                      {benefit}
                    </li>
                  ))}
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
                  {investors?.badge ?? "Capital Semilla"}
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary">
                  {investors?.title ?? "Ángeles Inversores"}
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  {investors?.description ??
                    "Conectamos proyectos de alto potencial con una red de inversionistas ángeles comprometidos con el éxito de los negocios liderados por mujeres."}
                </p>
                <a
                  href={investors?.cta?.href ?? "#angeles-inversores"}
                  className="text-secondary font-button-text text-button-text flex items-center gap-2 group"
                >
                  {investors?.cta?.label ?? "Ver oportunidades de inversión"}
                  <i
                    className={`fa ${getFaIcon("arrow_forward")} group-hover:translate-x-2 transition-transform`}
                    aria-hidden="true"
                  />
                </a>
              </div>
              <div className="md:w-1/2">
                <div className="bg-tertiary rounded-xl p-12 aspect-[4/3] flex flex-col justify-between text-on-tertiary">
                  <div className="space-y-4">
                    <h4 className="font-headline-md text-headline-md">
                      {investors?.pitchTitle ?? "Inversión Consciente"}
                    </h4>
                    <p className="opacity-80">
                      {investors?.pitchDescription ??
                        "Nuestro modelo garantiza que el capital no solo genere retornos, sino que transforme comunidades enteras."}
                    </p>
                  </div>
                  <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/20">
                    <div className="flex justify-between items-center">
                      <span>{investors?.projectsFundedLabel ?? "Proyectos Financiados"}</span>
                      <span className="font-bold">{investors?.projectsFundedValue ?? "120+"}</span>
                    </div>
                    <div className="w-full bg-white/20 h-2 rounded-full mt-2">
                      <div
                        className="bg-white h-full rounded-full"
                        style={{
                          width: `${Math.max(0, Math.min(100, investors?.progressPercentage ?? 75))}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary text-on-primary rounded-lg overflow-hidden flex flex-col md:flex-row items-stretch">
              <div className="md:w-1/3 p-12 space-y-6 bg-primary-container">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <i className={`fa ${getFaIcon("neurology")} text-4xl`} aria-hidden="true" />
                </div>
                <h2 className="font-headline-md text-headline-md">{aiMentora?.title ?? "IA Mentora"}</h2>
                <p className="opacity-80">
                  {aiMentora?.description ??
                    "Nuestra inteligencia artificial especializada brinda mentoría 24/7 en finanzas, marketing y estrategia de negocios."}
                </p>
                <button
                  id="inscripcion"
                  type="button"
                  className="bg-white text-primary px-8 py-3 rounded-full font-button-text text-button-text"
                >
                  {aiMentora?.ctaLabel ?? "Probar Demo"}
                </button>
              </div>
              <div className="md:w-2/3 p-12 relative flex items-center">
                <div className="grid grid-cols-2 gap-4 w-full">
                  {(aiMentora?.prompts ?? []).map((prompt: { _key?: string; category: string; prompt: string }) => (
                    <div
                      key={prompt._key ?? `${prompt.category}-${prompt.prompt}`}
                      className="bg-white/10 p-6 rounded-lg border border-white/10"
                    >
                      <p className="font-label-md text-label-md mb-2">{prompt.category}</p>
                      <p className="text-sm opacity-70 italic">&quot;{prompt.prompt}&quot;</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-margin-mobile md:px-margin-desktop py-32 max-w-container-max mx-auto text-center relative overflow-hidden">
          <div className="organic-blob bg-secondary-fixed w-[600px] h-[600px] -bottom-40 -left-40 opacity-20" />
          <div className="relative z-10 space-y-8">
            <h2 className="font-headline-xl text-headline-xl text-primary max-w-4xl mx-auto leading-tight">
              {finalCta?.title ?? "¿Lista para llevar tu emprendimiento al siguiente nivel?"}
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              {finalCta?.description ??
                "Únete hoy a la comunidad de Mujeres que Crecen y accede a todas las herramientas digitales, financieras y humanas que necesitas para triunfar."}
            </p>
            <div className="flex justify-center pt-8">
              <a
                href={finalCta?.button?.href ?? "#inscripcion"}
                className="bg-secondary text-on-primary px-12 py-5 rounded-full font-headline-md text-headline-md shadow-2xl shadow-secondary/30 hover:scale-105 active:scale-95 transition-all inline-flex items-center justify-center text-center"
              >
                {finalCta?.button?.label ?? "Inscríbete Ahora"}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-surface-container-highest rounded-t-lg mt-20">
        <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop py-12 max-w-container-max mx-auto gap-gutter">
          <div className="space-y-4 text-center md:text-left">
            <div className="font-headline-md text-headline-md text-tertiary">
              {footer?.brandName ?? "Mujeres que Crecen"}
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xs">
              {footer?.description ??
                "Empoderando el futuro femenino a través de la tecnología y la comunidad."}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {(footer?.links ?? []).map((link: { _key?: string; label: string; href?: string }) => (
              <a
                key={link._key ?? `${link.label}-${link.href}`}
                className="text-on-surface-variant hover:text-secondary-container transition-colors font-label-md text-label-md"
                href={link.href ?? "#"}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="font-label-md text-label-md text-on-surface-variant opacity-80">
            {footer?.copyright ?? "© 2024 Mujeres que Crecen."}
          </div>
        </div>
      </footer>
    </>
  );
}