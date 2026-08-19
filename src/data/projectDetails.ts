export type ProjectDetail = {
  slug: string;
  year: string;
  title: string;
  subtitle: string;
  description: string[];
  heroImage: string;
  heroImageMobile?: string;
  videoThumbnailMobile?: string;
  gallery: GalleryRow[];
  mobileGallery?: GalleryRow[];
};

export type GalleryRow = {
  type: "full" | "split" | "video" | "image-video" | "triple" | "stack";
  height?: number;
  mobileAspectRatio?: string;
  title?: string;
  images?: GalleryImage[];
  video?: { src: string; alt: string; theme?: "light" | "dark" };
  /** CSS position of the video overlay within the image (percentages) */
  videoPosition?: { top: string; left: string; width: string; height: string };
  mobileVideoPosition?: { top: string; left: string; width: string; height: string };
};

export type GalleryImage = {
  src: string;
  alt: string;
  mobileSrc?: string;
  label?: string;
  link?: string;
};

export const projectDetails: Record<string, ProjectDetail> = {
  wava: {
    slug: "wava",
    year: "2024",
    title: "Wava App",
    subtitle:
      "Una app que te ayuda a llegar a casa segura. Rutas inteligentes, pensadas para las noches en que vas sola.",
    description: [
      "Wava es una app enfocada en mejorar la seguridad de las mujeres durante sus desplazamientos nocturnos. Más allá de diseñar una aplicación, el objetivo fue crear una experiencia centrada en las necesidades reales de las usuarias a través de un proceso de diseño completo.",
      "El proyecto comenzó con una fase de investigación para comprender el problema y definir un User Persona, que guió todas las decisiones de diseño. A partir de ahí, se desarrollaron la arquitectura de la información, los user flows y los primeros wireframes, priorizando una navegación sencilla e intuitiva.",
      "Posteriormente, se creó un Design System para garantizar la coherencia visual y la escalabilidad del producto. El resultado es una propuesta que combina un sistema de rutas inteligentes, una función de emergencia y un asistente basado en IA, integrando investigación, estrategia, UX y UI en un único producto digital.",
    ],
    heroImage: "/images/projects/wava/hero.png",
    heroImageMobile: "/images/gallerymobile1.png",
    videoThumbnailMobile: "/images/galleryobile2.1.png",
    gallery: [
      {
        type: "full",
        images: [{ src: "/images/projects/wava/gallery-1.png", alt: "Pantallas de Wava App" }],
      },
      {
        type: "split",
        images: [
          { src: "/images/projects/wava/gallery-2.png", alt: "Wava App en mano" },
          { src: "/images/projects/wava/gallery-3.png", alt: "Wava App detalle" },
        ],
      },
      {
        type: "full",
        images: [{ src: "/images/projects/wava/gallery-4.png", alt: "Pantallas de Wava App" }],
      },
      {
        type: "video",
        video: { src: "/images/projects/wava/video-1.mp4", alt: "Demo de Wava App" },
      },
    ],
  },
  "nite-up": {
    slug: "nite-up",
    year: "2024",
    title: "Nite App",
    subtitle:
      "Una app para descubrir las mejores discotecas de la ciudad. Explora el mapa, compra entradas, apúntate a listas y reserva mesas VIP desde un solo lugar.",
    description: [
      "Nite Up es una app diseñada para facilitar la búsqueda y planificación de una noche de fiesta. El objetivo del proyecto fue crear una experiencia intuitiva que permitiera descubrir las discotecas más populares desde un mapa interactivo y gestionar toda la experiencia desde una única plataforma.",
      "El proyecto comenzó con una fase de investigación para comprender los hábitos y necesidades de los usuarios, definiendo un User Persona que guio las decisiones de diseño. A partir de ahí, se desarrollaron la arquitectura de la información, los user flows y los primeros wireframes, priorizando una navegación clara, rápida e intuitiva.",
      "Posteriormente, se diseñó un Design System para garantizar la coherencia visual y la escalabilidad del producto. El resultado es una aplicación que permite explorar los mejores clubes, consultar información, comprar entradas, apuntarse a listas o reservar mesas VIP, integrando investigación, estrategia, UX y UI en una experiencia digital completa.",
    ],
    heroImage: "/images/projects/nite-up/hero.png",
    heroImageMobile: "/images/gallerymobile1.2.png",
    gallery: [
      {
        type: "full",
        height: 605,
        images: [{ src: "/images/projects/nite-up/gallery-1.png", alt: "Pantallas de Nite Up" }],
      },
      {
        type: "split",
        images: [
          { src: "/images/projects/nite-up/gallery-2.png", alt: "Nite Up detalle", mobileSrc: "/images/gallerymobile1.3.png" },
          { src: "/images/projects/nite-up/gallery-3.png", alt: "Nite Up detalle", mobileSrc: "/images/gallerymobile1.4.png" },
        ],
      },
      {
        type: "full",
        height: 672,
        images: [{ src: "/images/projects/nite-up/gallery-4.png", alt: "Pantallas de Nite Up" }],
      },
    ],
  },
  "art-promocions": {
    slug: "art-promocions",
    year: "2026",
    title: "Art Promocions",
    subtitle:
      "Web para una inmobiliaria del Maresme con más de 20 años de experiencia, diseñada para dar visibilidad a sus propiedades y establecer su presencia digital.",
    description: [
      "Art Promoción es un proyecto de diseño UX/UI consistente en la creación de una web para una inmobiliaria con más de 20 años de experiencia en el Maresme, que hasta el momento no contaba con presencia digital. El objetivo principal fue trasladar su trayectoria y profesionalidad al entorno online, mejorando su visibilidad y facilitando la presentación de sus propiedades.",
      "El proyecto comenzó con una fase de análisis para comprender el negocio, el tipo de cliente y las necesidades del sector inmobiliario local. A partir de esta información se definió la estructura de la web y se desarrolló un User Persona que representara al usuario objetivo, permitiendo orientar las decisiones de diseño hacia la búsqueda y gestión de propiedades.",
      "Se diseñaron los user flows y la arquitectura de la información con el objetivo de facilitar la navegación entre inmuebles, filtros de búsqueda y contacto con la agencia. Posteriormente, se trabajó en los wireframes, priorizando una experiencia clara, directa y enfocada en la conversión.",
      "Finalmente, se desarrolló un Design System que asegura la coherencia visual de toda la web, definiendo estilos, componentes y jerarquías tipográficas. El resultado es una plataforma digital que refleja la experiencia de la inmobiliaria y mejora la accesibilidad a su catálogo de propiedades, integrando estrategia, UX y UI en una solución funcional y escalable.",
    ],
    heroImage: "/images/projects/art-promocions/hero.png",
    heroImageMobile: "/images/gallerymobile3.1.png",
    gallery: [
      {
        type: "full",
        height: 605,
        images: [{ src: "/images/projects/art-promocions/gallery-1.png", alt: "Pantallas de Art Promocions" }],
      },
      {
        type: "split",
        images: [
          { src: "/images/projects/art-promocions/gallery-2.png", alt: "Art Promocions desktop", mobileSrc: "/images/gallerymobile3.3.png" },
          { src: "/images/projects/art-promocions/gallery-3.png", alt: "Art Promocions mobile" },
        ],
      },
      {
        type: "full",
        height: 658,
        images: [{ src: "/images/projects/art-promocions/gallery-4.png", alt: "Pantallas de Art Promocions" }],
      },
    ],
  },
  alquilarg: {
    slug: "alquilarg",
    year: "2025",
    title: "Alquilarg",
    subtitle:
      "Rebranding y rediseño web para Alquilarg, inmobiliaria argentina. El proyecto mejora la identidad de marca y resuelve una experiencia de usuario poco optimizada en su antigua web.",
    description: [
      "Alquilarg es un proyecto de rebranding y rediseño de web para una inmobiliaria argentina. La marca contaba con una presencia digital desactualizada y una experiencia de usuario poco eficiente, lo que dificultaba la navegación y la búsqueda de propiedades.",
      "El proyecto comenzó con un análisis de la web existente para detectar problemas de usabilidad, estructura y comunicación visual. A partir de este diagnóstico, se definieron nuevas bases estratégicas para la identidad de marca con un enfoque más claro, moderno y funcional.",
      "Se desarrollaron la arquitectura de la información, los user flows y los primeros wireframes, con el objetivo de simplificar la navegación y mejorar la experiencia de búsqueda de inmuebles. Posteriormente, se creó un Design System que unifica la nueva identidad visual y garantiza coherencia en todos los puntos de contacto digitales.",
      "El resultado es una plataforma renovada que mejora la experiencia del usuario, optimiza la navegación y refuerza el posicionamiento de la inmobiliaria, integrando rebranding, UX y UI en una solución más clara y eficiente.",
    ],
    heroImage: "/images/projects/alquilarg/hero.png",
    heroImageMobile: "/images/gallerymobile4.png",
    gallery: [
      {
        type: "full",
        height: 1006,
        images: [{ src: "/images/projects/alquilarg/gallery-1.png", alt: "Pantallas de Alquilarg" }],
      },
      {
        type: "split",
        images: [
          { src: "/images/projects/alquilarg/gallery-2.png", alt: "Alquilarg detalle" },
          { src: "/images/projects/alquilarg/gallery-3.png", alt: "Alquilarg detalle", mobileSrc: "/images/gallerymobile4.4.png" },
        ],
      },
      {
        type: "video",
        video: { src: "/images/projects/alquilarg/video-1.mp4", alt: "Demo de Alquilarg" },
      },
    ],
  },
  "glaze-magazine": {
    slug: "glaze-magazine",
    year: "2025",
    title: "Glaze Magazine",
    subtitle:
      "Una plataforma web responsive diseñada para inspirar y dar visibilidad a la comunidad ceramista.",
    description: [
      "Glaze Magazine es un proyecto de UX/UI e identidad visual para una plataforma web responsive dirigida a ceramistas y amantes de la cerámica. El objetivo fue crear un espacio digital donde la comunidad pudiera descubrir contenido de inspiración, acceder a recursos gratuitos y dar visibilidad al trabajo de artistas ceramistas.",
      "El proyecto comenzó con una fase de investigación para comprender las necesidades de los usuarios y definir un User Persona que guiara las decisiones de diseño. A partir de este análisis, se desarrollaron la arquitectura de la información, los user flows y los primeros wireframes, priorizando una navegación intuitiva y una experiencia de lectura clara y accesible.",
      "Posteriormente, se diseñó un Design System y una identidad visual que reflejan los valores de la cerámica contemporánea, garantizando una experiencia coherente y escalable en toda la plataforma. El resultado es una web responsive que integra investigación, estrategia, branding, UX y UI para ofrecer una experiencia inspiradora y centrada en las necesidades de la comunidad ceramista.",
    ],
    heroImage: "/images/projects/glaze-magazine/hero.png",
    heroImageMobile: "/images/gallerymobile5.0.png",
    videoThumbnailMobile: "/images/gallerymobile5.png",
    gallery: [
      {
        type: "full",
        height: 605,
        images: [{ src: "/images/projects/glaze-magazine/gallery-1.png", alt: "Pantallas de Glaze Magazine" }],
      },
      {
        type: "split",
        images: [
          { src: "/images/projects/glaze-magazine/gallery-2.png", alt: "Glaze Magazine mobile", mobileSrc: "/images/gallerymobile5.3.png" },
          { src: "/images/projects/glaze-magazine/gallery-3.png", alt: "Glaze Magazine desktop", mobileSrc: "/images/gallerymobile5.4.png" },
        ],
      },
      {
        type: "full",
        images: [{ src: "/images/projects/glaze-magazine/gallery-4.png", alt: "Pantallas de Glaze Magazine" }],
      },
      {
        type: "video",
        video: { src: "/images/projects/glaze-magazine/video-1.mp4", alt: "Demo Glaze Magazine" },
      },
    ],
  },
  kankyo: {
    slug: "kankyo",
    year: "2024",
    title: "Kankyo",
    subtitle:
      "Un juego interactivo de karaoke para Smart TV que transforma cualquier momento en una experiencia social, divertida y fácil de disfrutar.",
    description: [
      "Kankyo es un proyecto de UX/UI para una experiencia de karaoke en Smart TV, donde el dispositivo móvil actúa como complemento para interactuar con el juego. El objetivo fue diseñar una experiencia fluida entre ambas plataformas, permitiendo a los usuarios participar de forma sencilla mientras disfrutan del contenido en la televisión.",
      "El proyecto comenzó con una fase de investigación para comprender los hábitos de uso en experiencias de entretenimiento compartidas y definir un User Persona que guiara las decisiones de diseño. A partir de ahí, se desarrollaron la arquitectura de la información, los user flows y los primeros wireframes, teniendo en cuenta la relación entre la interfaz de la Smart TV y la aplicación móvil.",
      "Posteriormente, se creó un Design System para garantizar la coherencia visual y funcional en ambos dispositivos. El resultado es una experiencia conectada que permite explorar canciones, unirse a partidas, gestionar la participación desde el móvil y disfrutar del karaoke en la pantalla principal, integrando investigación, estrategia, UX y UI en un producto de entretenimiento multidispositivo.",
    ],
    heroImage: "/images/projects/kankyo/hero.png",
    heroImageMobile: "/images/gallerymobile6.png",
    videoThumbnailMobile: "/images/gallerymobile6.6.png",
    gallery: [
      {
        type: "full",
        height: 605,
        images: [{ src: "/images/projects/kankyo/gallery-1.png", alt: "Pantallas de Kankyo" }],
      },
      {
        type: "split",
        images: [
          { src: "/images/projects/kankyo/gallery-2.png", alt: "Kankyo mobile" },
          { src: "/images/projects/kankyo/gallery-3.png", alt: "Kankyo Smart TV", mobileSrc: "/images/gallerymobile6.4.jpg" },
        ],
        video: { src: "/images/video-kankyo.mov", alt: "Demo Kankyo karaoke" },
        videoPosition: { top: "14%", left: "14%", width: "72%", height: "53%" },
        mobileVideoPosition: { top: "17%", left: "9%", width: "82%", height: "27%" },
      },
      {
        type: "full",
        images: [{ src: "/images/projects/kankyo/gallery-4.png", alt: "Pantallas de Kankyo" }],
      },
      {
        type: "video",
        video: { src: "/images/projects/kankyo/video-2.mp4", alt: "Demo Kankyo gameplay", theme: "dark" },
      },
    ],
    mobileGallery: [
      {
        type: "full",
        images: [{ src: "/images/projects/kankyo/gallery-1.png", alt: "Pantallas de Kankyo" }],
      },
      {
        type: "full",
        images: [{ src: "/images/projects/kankyo/gallery-2.png", alt: "Kankyo mobile" }],
      },
      {
        type: "video",
        video: { src: "/images/video-kankyo.mov", alt: "Demo Kankyo karaoke", theme: "dark" },
      },
      {
        type: "full",
        images: [{ src: "/images/projects/kankyo/gallery-4.png", alt: "Pantallas de Kankyo" }],
      },
      {
        type: "video",
        video: { src: "/images/projects/kankyo/video-2.mp4", alt: "Demo Kankyo gameplay", theme: "dark" },
      },
    ],
  },
  "isla-nord": {
    slug: "isla-nord",
    year: "2026",
    title: "Isla Nord",
    subtitle:
      "Creación de la identidad visual de Isla Nord, un estudio de diseño digital donde estrategia, funcionalidad y estética convergen para dar vida a experiencias digitales.",
    description: [
      "Isla Nord es un estudio de diseño digital especializado en UX/UI, diseño web, desarrollo e identidad visual. Nace con el propósito de crear experiencias digitales funcionales y atractivas, donde la estrategia, la usabilidad y la estética trabajan en conjunto para dar vida a productos con impacto.",
      "El estudio surge de la colaboración entre sus dos fundadoras, Isis y Larimar, cuyos nombres dan origen a Isla, mientras que Nord representa la idea de orientación y dirección. Esta filosofía guía cada proyecto, entendiendo el diseño como una herramienta capaz de aportar claridad, coherencia y valor a las marcas.",
      "Inspirado en la simplicidad del diseño nórdico, Isla Nord apuesta por un lenguaje visual limpio, atemporal y funcional. Cada proyecto se desarrolla desde una visión estratégica, buscando crear experiencias digitales intuitivas que conecten con las personas y ayuden a las marcas a crecer de forma consistente.",
    ],
    heroImage: "/images/projects/isla-nord/hero.png",
    heroImageMobile: "/images/gallerymobile7.png",
    gallery: [
      {
        type: "split",
        images: [
          { src: "/images/projects/isla-nord/gallery-1.png", alt: "Isla Nord mobile" },
          { src: "/images/projects/isla-nord/gallery-2.png", alt: "Isla Nord branding" },
        ],
      },
      {
        type: "full",
        height: 184,
        images: [{ src: "/images/projects/isla-nord/gallery-3.png", alt: "Isla Nord logo" }],
      },
      {
        type: "split",
        images: [
          { src: "/images/projects/isla-nord/gallery-4.png", alt: "Isla Nord fotografía" },
          { src: "/images/projects/isla-nord/gallery-5.png", alt: "Isla Nord fotografía" },
        ],
      },
      {
        type: "full",
        height: 184,
        images: [{ src: "/images/projects/isla-nord/gallery-6.png", alt: "Isla Nord marca" }],
      },
      {
        type: "triple",
        title: "Proyectos desarrollados en Isla Nord",
        images: [
          { src: "/images/projects/isla-nord/gallery-7.png", alt: "Web Isla Nord", label: "Web — Isla Nord", link: "/proyectos/isla-nord" },
          { src: "/images/projects/isla-nord/gallery-8.png", alt: "Web Alquilarg", label: "Web — Alquilarg", link: "/proyectos/alquilarg" },
          { src: "/images/projects/isla-nord/gallery-9.png", alt: "Web Art Promocions", label: "Web — Art Promocions", link: "/proyectos/art-promocions" },
          { src: "/images/projects/isla-nord/gallery-10.png", alt: "App Wava", label: "App — Wava", link: "/proyectos/wava" },
        ],
      },
    ],
    mobileGallery: [
      {
        type: "full",
        mobileAspectRatio: "353/77",
        images: [{ src: "/images/gallerymobile7.1.png", alt: "Isla Nord" }],
      },
      {
        type: "split",
        images: [
          { src: "/images/gallerymobile7.2.png", alt: "Isla Nord" },
          { src: "/images/gallerymobile7.3.png", alt: "Isla Nord branding" },
        ],
      },
      {
        type: "full",
        mobileAspectRatio: "353/77",
        images: [{ src: "/images/gallerymobile7.4.png", alt: "Isla Nord" }],
      },
      {
        type: "stack",
        images: [
          { src: "/images/gallery8.4.png", alt: "Isla Nord fotografía" },
          { src: "/images/gallery8.5.png", alt: "Isla Nord marca" },
        ],
      },
      {
        type: "triple",
        title: "Proyectos desarrollados en Isla Nord",
        images: [
          { src: "/images/projects/isla-nord/gallery-7.png", alt: "Web Isla Nord", label: "Web — Isla Nord", link: "/proyectos/isla-nord" },
          { src: "/images/projects/isla-nord/gallery-8.png", alt: "Web Alquilarg", label: "Web — Alquilarg", link: "/proyectos/alquilarg" },
          { src: "/images/gallerymobileart.png", alt: "Web Art Promocions", label: "Web — Art Promocions", link: "/proyectos/art-promocions" },
          { src: "/images/projects/isla-nord/gallery-10.png", alt: "App Wava", label: "App — Wava", link: "/proyectos/wava" },
        ],
      },
    ],
  },
  "no-raw": {
    slug: "no-raw",
    year: "2025",
    title: "No Raw",
    subtitle:
      "No Raw es un proyecto de branding desarrollado para una marca de cerámica contemporánea. El objetivo fue crear una identidad visual que reflejara la esencia artesanal de la marca, combinando sensibilidad, simplicidad y una estética atemporal.",
    description: [
      "El proyecto comenzó con una fase de investigación y conceptualización para definir la personalidad, los valores y la dirección creativa de la marca. A partir de este proceso, se desarrolló un sistema visual coherente capaz de transmitir la conexión entre el trabajo manual y una visión más contemporánea de la cerámica.",
      "Se diseñaron los elementos principales de la identidad, incluyendo logotipo, paleta cromática, tipografía, recursos gráficos e ilustraciones propias que aportan personalidad y diferenciación a la marca.",
      "El resultado es una identidad visual versátil y reconocible que construye un universo de marca sólido y coherente en sus diferentes aplicaciones.",
    ],
    heroImage: "/images/gallery9.png",
    heroImageMobile: "/images/gallerymobilehero10.png",
    gallery: [
      {
        type: "full",
        height: 184,
        images: [{ src: "/images/gallery9.1.png", alt: "No Raw Ceramics logo" }],
      },
      {
        type: "split",
        images: [
          { src: "/images/gallery9.2.png", alt: "No Raw caballete" },
          { src: "/images/gallery9.3.png", alt: "No Raw tarjetas" },
        ],
      },
      {
        type: "split",
        images: [
          { src: "/images/gallery9.4.png", alt: "No Raw logo" },
          { src: "/images/gallery9.5.png", alt: "No Raw logo detalle" },
        ],
      },
      {
        type: "full",
        height: 490,
        images: [{ src: "/images/gallery9.7.png", alt: "No Raw tipografía y paleta" }],
      },
      {
        type: "split",
        images: [
          { src: "/images/gallery9.8.png", alt: "No Raw tote bag" },
          { src: "/images/gallery9.9.png", alt: "No Raw camisetas" },
        ],
      },
      {
        type: "full",
        height: 184,
        images: [{ src: "/images/gallery9.10.png", alt: "No Raw logo oscuro" }],
      },
    ],
    mobileGallery: [
      {
        type: "full",
        mobileAspectRatio: "353/77",
        images: [{ src: "/images/gallerymobile9.02.png", alt: "No Raw Ceramics" }],
      },
      {
        type: "split",
        images: [
          { src: "/images/gallerymobile9.03.png", alt: "No Raw caballete" },
          { src: "/images/gallerymobile9.04.png", alt: "No Raw tarjetas" },
        ],
      },
      {
        type: "split",
        images: [
          { src: "/images/gallerymobile9.05.png", alt: "No Raw logo" },
          { src: "/images/gallerymobile066.png", alt: "No Raw logo detalle" },
        ],
      },
      {
        type: "full",
        mobileAspectRatio: "706/997",
        images: [{ src: "/images/gallerymobile9.06.png", alt: "No Raw tipografía Times" }],
      },
      {
        type: "full",
        mobileAspectRatio: "707/906",
        images: [{ src: "/images/herolineimage.png", alt: "No Raw tipografía Heroline" }],
      },
      {
        type: "full",
        mobileAspectRatio: "353/260",
        images: [{ src: "/images/gallerymobile9.08.png", alt: "No Raw paleta de colores" }],
      },
      {
        type: "full",
        mobileAspectRatio: "353/189",
        images: [{ src: "/images/gallerymobile9.09.png", alt: "No Raw ilustraciones" }],
      },
      {
        type: "stack",
        mobileAspectRatio: "353/267",
        images: [
          { src: "/images/gallerymobile9.10.png", alt: "No Raw tote bag" },
          { src: "/images/gallerymobile9.11.png", alt: "No Raw camisetas" },
        ],
      },
      {
        type: "full",
        mobileAspectRatio: "353/77",
        images: [{ src: "/images/gallerymobile9.12.png", alt: "No Raw Ceramics" }],
      },
    ],
  },
  beyond: {
    slug: "beyond",
    year: "2026",
    title: "Beyond",
    subtitle:
      "Identidad visual creada desde cero para Beyond Cybersecurity, un evento que reúne a referentes del sector de la ciberseguridad.",
    description: [
      "Beyond Cybersecurity es un proyecto de branding desarrollado para un evento de ciberseguridad que reúne a líderes empresariales, representantes institucionales, profesionales técnicos y talento emergente para debatir sobre los principales retos y oportunidades del sector.",
      "El proyecto consistió en la creación de la identidad visual desde cero, definiendo un lenguaje gráfico capaz de transmitir innovación, confianza y tecnología. A partir de una fase de investigación y conceptualización, se desarrolló un sistema visual coherente que refleja el carácter del evento y garantiza su aplicación en distintos soportes físicos y digitales.",
      "Se diseñaron los elementos clave de la identidad, incluyendo logotipo, paleta cromática, tipografía, recursos gráficos y normas de aplicación, asegurando una comunicación consistente y reconocible en todos los puntos de contacto. El resultado es una marca contemporánea, versátil y escalable que dota al evento de una personalidad sólida y diferencial.",
    ],
    heroImage: "/images/Beyond.png",
    videoThumbnailMobile: "/images/gallerymobile10.6.png",
    gallery: [
      {
        type: "full",
        images: [{ src: "/images/gallery10.1.png", alt: "Beyond Cybersecurity escenario" }],
      },
      {
        type: "split",
        images: [
          { src: "/images/gallery10.2.png", alt: "Beyond trípticos" },
          { src: "/images/gallery10.3.png", alt: "Beyond banner welcome" },
        ],
      },
      {
        type: "full",
        images: [{ src: "/images/gallery10.4.png", alt: "Beyond carteles y branding" }],
      },
      {
        type: "split",
        images: [
          { src: "/images/gallery10.5.png", alt: "Beyond carteles calle" },
        ],
        video: { src: "/images/video Beyond.mov", alt: "Demo Beyond web" },
      },
    ],
    mobileGallery: [
      {
        type: "full",
        images: [{ src: "/images/gallery10.1.png", alt: "Beyond Cybersecurity escenario" }],
      },
      {
        type: "split",
        images: [
          { src: "/images/gallerymobile10.3.png", alt: "Beyond trípticos" },
          { src: "/images/gallerymobile10.4.png", alt: "Beyond banner welcome" },
        ],
      },
      {
        type: "full",
        images: [{ src: "/images/gallerymobile10.5.png", alt: "Beyond carteles y branding" }],
      },
      {
        type: "split",
        images: [
          { src: "/images/gallerymobile10.6.png", alt: "Beyond carteles calle" },
        ],
        video: { src: "/images/video Beyond.mov", alt: "Demo Beyond web", theme: "dark" },
      },
    ],
  },
};
