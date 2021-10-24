const projects = [
  {
    id: 1,
    image: {
      src: '/projects/logo_biodynamics.svg',
      alt: 'BioDynamics Tech',
    },
    description: [
      'Dashboard para monitoreo y gestión de piscinas camaroneras.',
      'Aplicación web con Angular, REST API con Express de NodeJS y aplicación móvil con Ionic.',
    ],
    link: {
      href: 'https://biodynamics.tech',
      isDisabled: false,
      textLink: 'biodynamics.tech',
    },
  },
  {
    id: 2,
    image: {
      src: '/projects/Logo-BPP.png',
      alt: 'Bosque Protector La Prosperina (BPP)',
    },
    description: [
      'Plataforma de datos para videojuego e investigación.',
      'Aplicación web desarrollada en ASP.NET y MongoDB para gestionar datos producidos por el BPP.',
    ],
    link: {
      href: 'http://www.bosqueprotector.espol.edu.ec/',
      isDisabled: false,
      textLink: 'www.bosqueprotector.espol.edu.ec',
    },
  },
  {
    id: 3,
    image: {
      src: '/projects/Logo_MiBosque.png',
      alt: 'Videojuego Mi Bosque Virtual',
    },
    description: [
      'Videojuego educativo para niños, con datos en tiempo real del BPP.',
      'Consiste en un recorrido virtual en la reserva de Cerro Blanco, este videojuego fue desarrollado en Unity.',
    ],
    link: {
      href: 'http://www.bosqueprotector.espol.edu.ec/videojuego-mi-bosque/',
      isDisabled: false,
      textLink: 'www.bosqueprotector.espol.edu.ec',
    },
  },
  {
    id: 4,
    image: {
      src: '/projects/logo_family.png',
      alt: 'Mi Familia Ecuador',
    },
    description: [
      'Aplicación web y móvil de ayuda social, donde se brinda contenido de apoyo.',
      'Desarrollado en Angular, Ionic, Django (Como backend y administrador), MySQL, Paymentez, entre otros.',
    ],
    link: {
      href: 'http://mifamilia.ec/',
      isDisabled: false,
      textLink: 'mifamilia.ec',
    },
  },
  {
    id: 5,
    image: {
      src: '/projects/logo-espol.png',
      alt: 'Sistema de Alerta Temprana (SAT) de Salima',
    },
    description: [
      'Automatización del flujo de datos del SAT de Salima y aplicación móvil.',
      'Desarrollado en Angular, Ionic, CKAN, PostgreSQL, C, Arduino.',
    ],
    link: {
      href: 'http://ckan.espol.edu.ec/',
      isDisabled: true,
      textLink: 'ckan.espol.edu.ec',
    },
  },
];

export default projects;
