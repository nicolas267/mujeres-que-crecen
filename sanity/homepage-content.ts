export const homepageContent = {
  seo: {
    title: "Mujeres que Crecen",
    description:
      "Plataforma para impulsar el crecimiento económico, financiero y tecnológico de mujeres emprendedoras en toda la región.",
  },
  navigation: [
    { label: "¿Quiénes somos?", href: "#quienes-somos", variant: "ghost" },
    { label: "Emprendimientos", href: "#emprendimientos", variant: "ghost" },
    { label: "Market Place", href: "#marketplace", variant: "ghost" },
    {
      label: "Ángeles Inversores",
      href: "#angeles-inversores",
      variant: "ghost",
    },
    { label: "IA Mentora", href: "#ia-mentora", variant: "ghost" },
    { label: "Inscríbete", href: "#inscripcion", variant: "primary" },
  ],
  hero: {
    eyebrow: "Comunidad Empoderada",
    titlePrefix: "Construyamos el",
    titleHighlight: "cambio juntos:",
    titleSuffix: "Mujeres que Crecen",
    description:
      "Somos una plataforma diseñada para impulsar el crecimiento económico, financiero y tecnológico de mujeres emprendedoras en toda la región.",
    primaryCta: {
      label: "Inscríbete",
      href: "#inscripcion",
      variant: "secondary",
    },
    secondaryCta: {
      label: "Conocer más",
      href: "#quienes-somos",
      variant: "ghost",
    },
  },
  mission: {
    title: "Nuestra Misión",
    description:
      "Impulsamos el ecosistema emprendedor femenino integrando tecnología de vanguardia con una red de apoyo institucional sólida, transformando ideas en realidades sostenibles.",
    cards: [
      {
        title: "Comunidad",
        description:
          "Conectamos a miles de mujeres con el mismo propósito de crecimiento y colaboración estratégica.",
        iconName: "diversity_1",
        tone: "secondary",
      },
      {
        title: "Tecnología",
        description:
          "Implementamos IA y herramientas digitales para optimizar procesos y escalar negocios regionales.",
        iconName: "auto_awesome",
        tone: "primary",
      },
      {
        title: "Institucionalidad",
        description:
          "Brindamos el respaldo financiero y legal necesario para que tu emprendimiento sea robusto y confiable.",
        iconName: "account_balance",
        tone: "tertiary",
      },
    ],
  },
  impact: {
    title: "Nuestro Impacto",
    featuredStory: {
      title: "Reducir brechas de género",
      description:
        "Creamos espacios seguros donde el liderazgo femenino es la norma, no la excepción, fomentando la equidad real.",
      tone: "primary",
      featured: true,
    },
    cards: [
      {
        title: "Impacto Económico",
        description:
          "Crecimiento exponencial de negocios liderados por mujeres a través de inversión y marketplace.",
        tone: "tertiary",
        featured: false,
      },
      {
        title: "Impacto Tecnológico",
        description:
          "Acceso democrático a herramientas innovadoras y oportunidades de digitalización avanzada.",
        tone: "secondary",
        featured: false,
      },
    ],
    metricsTitle: "Resultados Tangibles",
    metrics: [
      { value: "45%", label: "Aumento en ingresos promedio" },
      { value: "+2k", label: "Mujeres capacitadas en IA" },
    ],
  },
  marketplace: {
    badge: "Novedad",
    title: "Market Place",
    description:
      "Un espacio comercial exclusivo para que las emprendedoras de nuestra red ofrezcan sus productos y servicios a una comunidad global que valora el impacto social.",
    benefits: [
      "Visibilidad internacional",
      "Transacciones seguras",
      "Logística integrada",
    ],
  },
  investors: {
    badge: "Capital Semilla",
    title: "Ángeles Inversores",
    description:
      "Conectamos proyectos de alto potencial con una red de inversionistas ángeles comprometidos con el éxito de los negocios liderados por mujeres.",
    cta: {
      label: "Ver oportunidades de inversión",
      href: "#angeles-inversores",
      variant: "ghost",
    },
    pitchTitle: "Inversión Consciente",
    pitchDescription:
      "Nuestro modelo garantiza que el capital no solo genere retornos, sino que transforme comunidades enteras.",
    projectsFundedLabel: "Proyectos Financiados",
    projectsFundedValue: "120+",
    progressPercentage: 75,
  },
  aiMentora: {
    title: "IA Mentora",
    description:
      "Nuestra inteligencia artificial especializada brinda mentoría 24/7 en finanzas, marketing y estrategia de negocios.",
    ctaLabel: "Probar Demo",
    prompts: [
      {
        category: "Marketing",
        prompt: "¿Cómo puedo optimizar mi campaña en Instagram?",
      },
      {
        category: "Finanzas",
        prompt: "¿Cuál es mi punto de equilibrio mensual?",
      },
      {
        category: "Ventas",
        prompt: "Guion para cierre de ventas B2B.",
      },
      {
        category: "Estrategia",
        prompt: "Oportunidades de escalabilidad.",
      },
    ],
  },
  finalCta: {
    title: "¿Lista para llevar tu emprendimiento al siguiente nivel?",
    description:
      "Únete hoy a la comunidad de Mujeres que Crecen y accede a todas las herramientas digitales, financieras y humanas que necesitas para triunfar.",
    button: {
      label: "Inscríbete Ahora",
      href: "#inscripcion",
      variant: "secondary",
    },
  },
  footer: {
    brandName: "Mujeres que Crecen",
    description:
      "Empoderando el futuro femenino a través de la tecnología y la comunidad.",
    links: [
      { label: "Privacidad", href: "#", variant: "ghost" },
      { label: "Términos", href: "#", variant: "ghost" },
      { label: "Contacto", href: "#", variant: "ghost" },
      { label: "Comunidad", href: "#", variant: "ghost" },
    ],
    copyright: "© 2024 Mujeres que Crecen.",
  },
} as const;
