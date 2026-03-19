export const profile = {
  name: 'Vladimir De La Guardia Sosa',
  title: 'Ingeniero de Software',
  subtitle: 'Consultor de Integraciones',
  tagline: 'Full Stack & Middleware Engineer',

  contact: {
    phone: '+34 614 012705',
    whatsapp: 'https://wa.me/34614012705',
    email: 'pachuco5077@gmail.com',
    location: 'Pedrola, Zaragoza, España',
    locationDetail: 'CP 50690',
  },

  social: {
    github: 'https://github.com/Pachuco5077',
    linkedin: 'https://linkedin.com/in/vladimir-de-la-guardia-sosa-8250a91a2',
  },

  website: {
    author: 'https://mastaxserv.com',
  },

  summary: {
    short:
      'Ingeniero de Software con más de 4 años de experiencia en desarrollo backend, integración de sistemas y arquitectura basada en microservicios.',
    full: 'Especializado en IBM API Connect, IBM App Connect Enterprise (ACE) y DataPower, con amplia experiencia en diseño, desarrollo y aseguramiento de APIs, integración con sistemas legacy, mensajería con IBM MQ, y configuraciones avanzadas de TLS/mTLS.',
  },

  skills: {
    integration: [
      { name: 'IBM API Connect', level: 'Expert', years: 2 },
      { name: 'IBM App Connect Enterprise', level: 'Expert', years: 2 },
      { name: 'IBM DataPower', level: 'Advanced', years: 2 },
      { name: 'IBM MQ', level: 'Advanced', years: 3 },
      { name: 'WireMock', level: 'Advanced', years: 2 },
    ],
    backend: [
      { name: 'Java 11/17+', level: 'Advanced', years: 4 },
      { name: 'Spring Boot', level: 'Advanced', years: 3 },
      { name: 'Spring Cloud', level: 'Advanced', years: 2 },
      { name: 'REST APIs', level: 'Expert', years: 4 },
      { name: 'Microservicios', level: 'Advanced', years: 3 },
    ],
    frontend: [
      { name: 'React.js', level: 'Intermediate', years: 2 },
      { name: 'Bootstrap', level: 'Intermediate', years: 2 },
      { name: 'Axios', level: 'Intermediate', years: 2 },
    ],
    devops: [
      { name: 'Git/GitHub', level: 'Advanced', years: 4 },
      { name: 'Keycloak', level: 'Intermediate', years: 2 },
      { name: 'PostgreSQL', level: 'Advanced', years: 3 },
      { name: 'TLS/mTLS', level: 'Advanced', years: 3 },
    ],
  },

  experience: [
    {
      id: 1,
      company: 'SOAINT (IBM Partner)',
      role: 'Consultor de Integraciones',
      period: '2024 - Presente',
      location: 'España',
      highlights: [
        'Implementación y soporte de IBM API Connect, IBM App Connect Enterprise (ACE) y DataPower para clientes corporativos',
        'Configuración de TLS/mTLS entre APIC, ACE, MQ y servicios externos (validación de certificados, perfiles TLS, keystores/truststores)',
        'Diseño y mantenimiento de APIs con OpenAPI/Swagger, incluyendo herencias, oneOf/allOf, polimorfismo y ejemplos complejos',
        'Integración de flujos ACE con MQ, REST y SOAP; análisis de errores en producción y optimización de rendimiento',
        'Resolución de problemas en pases a QA/Producción en APIC, DataPower, ACE y MQ',
        'Creación de entornos de pruebas con WireMock con mTLS en AWS/Windows Server',
        'Desarrollo de microservicios Java y validaciones complejas generadas dinámicamente desde Excel/JSON',
      ],
      technologies: [
        'IBM API Connect',
        'IBM ACE',
        'IBM DataPower',
        'IBM MQ',
        'WireMock',
        'Java',
        'Spring Boot',
        'OpenAPI',
      ],
    },
    {
      id: 2,
      company: 'UEB Desoft',
      role: 'Desarrollador Full Stack',
      project: 'Proyecto EnTuMovil',
      period: 'Diciembre 2022 - 2025',
      location: 'Cuba',
      highlights: [
        'Desarrollo y mantenimiento de plataformas digitales utilizando microservicios en Spring Boot, servicios RESTful y PostgreSQL',
        'Implementación del sistema de pagos integrado (Transfermóvil, Enzona, Tropipay)',
        'Diseño de componentes frontend en React y Bootstrap',
        'Mejora continua del sistema de cuentas de Entumovil y refactorización del ecosistema de microservicios',
      ],
      technologies: ['Spring Boot', 'React', 'PostgreSQL', 'Stripe', 'Tropipay', 'REST'],
    },
    {
      id: 3,
      company: 'Freelance',
      role: 'Desarrollador Web',
      period: '2021 - Presente',
      location: 'Remoto',
      highlights: [
        'Desarrollo de sitios web personalizados',
        'Despliegue de dominios, hosting y optimización básica de SEO',
        'Consultoría de APIs y microservicios para pequeños negocios',
      ],
      technologies: ['React', 'JavaScript', 'HTML/CSS', 'Node.js'],
    },
  ],

  education: {
    degree: 'Ingeniería de Software',
    institution: 'Universidad Tecnológica de La Habana (CUJAE)',
    year: '2018 - 2022',
  },

  projects: [
    {
      id: 1,
      title: 'Arquitectura de Pagos Multi-Pasarela',
      description:
        'Sistema de pagos integrado con múltiples pasarelas (Stripe, Tropipay, Enzona, Transfermóvil)',
      technologies: ['Spring Boot', 'React', 'Stripe API', 'REST'],
      category: 'E-commerce',
    },
    {
      id: 2,
      title: 'Middleware de Integración IBM',
      description:
        'Implementación de patrones de integración empresarial con APIC, ACE y DataPower',
      technologies: ['IBM API Connect', 'IBM ACE', 'IBM MQ', 'TLS/mTLS'],
      category: 'Enterprise Integration',
    },
    {
      id: 3,
      title: 'Plataforma de Microservicios',
      description: 'Ecosistema de microservicios escalable con Spring Cloud',
      technologies: ['Spring Cloud', 'Eureka', 'Gateway', 'PostgreSQL'],
      category: 'Backend',
    },
  ],
}
