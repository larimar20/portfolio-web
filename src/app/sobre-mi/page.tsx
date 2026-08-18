import Image from "next/image";

export const metadata = {
  title: "Sobre Mí — Larimar Muñoz",
  description: "Diseñadora digital especializada en UX/UI y branding en Barcelona.",
};

const servicios = [
  "Diseño de Producto Digital (UX/UI)",
  "Diseño Web y Aplicaciones",
  "Branding e Identidad Visual",
  "Diseño Gráfico",
];

const experiencia = [
  { titulo: "Freelance UX/UI y Visual Designer – Isla Nord", periodo: "Actualmente" },
  { titulo: "Diseñadora gráfica – Slalom Agency", periodo: "Actualmente" },
  { titulo: "UX/UI Designer y Visual Designer – Apolo Cybersecurity", periodo: "2025 - 2026" },
  { titulo: "Diseñadora Gráfica – Real Stories", periodo: "2024" },
  { titulo: "Diseñadora Gráfica – Grauanna", periodo: "2023" },
];

const formacion = [
  { titulo: "Máster en UX/UI y Diseño Gráfico Avanzado", centro: "Idep Barcelona", periodo: "2024-2025" },
  { titulo: "Postgrado en Diseño Gráfico", centro: "Idep Barcelona", periodo: "2023 – 2024" },
  { titulo: "Grado en Criminología y Seguridad Privada", centro: "Abat Oliba CEU", periodo: "2015 – 2019" },
];

export default function SobreMi() {
  return (
    <div>
      {/* Hero */}
      <section className="relative w-full aspect-[393/768] md:aspect-[1440/982] overflow-hidden">
        {/* Desktop hero image */}
        <div className="hidden md:block absolute inset-0 overflow-hidden">
          <Image
            src="/images/gallery11.3.png"
            alt="Larimar Muñoz"
            width={1880}
            height={1410}
            className="absolute w-[130%] h-[143%] -left-[24%] -top-[32%] max-w-none"
            priority
            sizes="100vw"
          />
        </div>

        {/* Mobile hero image */}
        <div className="md:hidden absolute inset-0 overflow-hidden">
          <Image
            src="/images/sobremi-mobile.png"
            alt="Larimar Muñoz"
            fill
            className="object-cover object-top"
            priority
            sizes="100vw"
          />
          {/* Gradient fade to background */}
          <div className="absolute bottom-0 left-0 right-0 h-[15%] bg-gradient-to-b from-transparent to-[#f3f5f4]" />
        </div>

        {/* Desktop text overlay */}
        <div className="hidden md:block absolute left-[50.9%] top-[31.9%] right-[64px] text-primary">
          <h1 className="font-neue font-extrabold text-[50px] capitalize leading-[1]">
            Sobre Mí
          </h1>
          <div className="font-neue text-[17px] leading-normal flex flex-col gap-4 mt-[16px]">
            <p>
              Soy Larimar Muñoz, diseñadora digital afincada en Barcelona. Me
              especializo en diseño web y UX/UI, aunque también disfruto trabajando
              en proyectos de identidad visual y diseño gráfico.
            </p>
            <p>
              Me gusta crear experiencias digitales que sean funcionales, intuitivas y
              visualmente atractivas. Para mí, un buen diseño no solo tiene que verse
              bien, sino también resolver problemas y facilitar la vida de quienes lo
              utilizan. Por eso, la usabilidad, la accesibilidad y una base estratégica
              forman parte de todo mi proceso.
            </p>
            <p>
              Trabajo con un enfoque estratégico y resolutivo, cuidando cada detalle
              para crear soluciones digitales funcionales y alineadas con los objetivos
              de cada proyecto. Me interesa colaborar con equipos y marcas que valoren
              el diseño como una herramienta para generar impacto y mejorar la
              experiencia de sus usuarios.
            </p>
          </div>
        </div>
      </section>

      {/* Mobile: Sobre Mí text below hero */}
      <div className="md:hidden px-[20px] mt-[-60px] relative z-10">
        <div className="flex flex-col gap-[8px]">
          <h1 className="text-primary font-neue font-extrabold text-[35px] capitalize leading-[1]">
            Sobre Mí
          </h1>
          <div className="font-neue text-[17px] text-primary leading-normal flex flex-col gap-4 p-[10px]">
            <p>
              Soy Larimar Muñoz, diseñadora digital afincada en Barcelona. Me
              especializo en diseño web y UX/UI, aunque también disfruto trabajando
              en proyectos de identidad visual y diseño gráfico.
            </p>
            <p>
              Me gusta crear experiencias digitales que sean funcionales, intuitivas y
              visualmente atractivas. Para mí, un buen diseño no solo tiene que verse
              bien, sino también resolver problemas y facilitar la vida de quienes lo
              utilizan. Por eso, la usabilidad, la accesibilidad y una base estratégica
              forman parte de todo mi proceso.
            </p>
            <p>
              Trabajo con un enfoque estratégico y resolutivo, cuidando cada detalle
              para crear soluciones digitales funcionales y alineadas con los objetivos
              de cada proyecto. Me interesa colaborar con equipos y marcas que valoren
              el diseño como una herramienta para generar impacto y mejorar la
              experiencia de sus usuarios.
            </p>
          </div>
        </div>
      </div>

      <div className="px-[20px] md:px-16">
        <div className="max-w-[1312px] mx-auto">
          {/* Divider */}
          <div className="w-full h-px bg-primary mt-[16px] md:mt-0" />

          {/* Servicios + Contacto */}
          <section className="flex flex-col md:flex-row md:gap-[364px] mt-[24px] md:mt-[72px]">
            {/* Servicios */}
            <div className="flex flex-col gap-[8px] md:gap-[24px] md:w-[525px]">
              <h2 className="text-primary font-neue font-extrabold text-[35px] md:text-[40px] capitalize">
                Servicios
              </h2>
              <div className="flex flex-col gap-[4px] md:gap-[8px] p-[10px]">
                {servicios.map((s, i) => (
                  <p key={i} className="text-primary font-neue text-[17px] md:text-[30px] uppercase leading-[1.5]">{s}</p>
                ))}
              </div>
            </div>

            {/* Divider mobile between servicios and contacto */}
            <div className="w-full h-px bg-primary my-[16px] md:hidden" />

            {/* Contacto */}
            <div className="flex flex-col gap-[8px] md:gap-[24px] md:w-[315px]">
              <h2 className="text-primary font-neue font-extrabold text-[35px] md:text-[40px] capitalize">
                Contacto
              </h2>
              <div className="flex flex-col gap-[24px]">
                <div className="flex flex-col">
                  <p className="text-primary font-neue text-[17px] md:text-[25px] uppercase leading-[1.3]">Correo electrónico</p>
                  <a href="mailto:larimarm20@gmail.com" className="text-[#FF9D9D] font-neue text-[17px] md:text-[25px] leading-[1.3] hover:opacity-70 transition-opacity">
                    larimarm20@gmail.com
                  </a>
                </div>
                <div className="flex flex-col">
                  <p className="text-primary font-neue text-[17px] md:text-[25px] uppercase leading-[1.3]">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/larimar-munoz/" target="_blank" rel="noopener noreferrer" className="text-[#FF9D9D] font-neue text-[17px] md:text-[25px] leading-[1.3] hover:opacity-70 transition-opacity">
                    Larimar Muñoz
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="w-full h-px bg-primary mt-[16px] md:mt-[72px]" />

          {/* Experiencia */}
          <section className="flex flex-col gap-[16px] md:gap-[24px] mt-[16px] md:mt-[72px]">
            <h2 className="text-primary font-neue font-extrabold text-[35px] md:text-[40px] capitalize">
              Experiencia
            </h2>
            <div className="flex flex-col gap-[24px] md:p-[10px]">
              {experiencia.map((e, i) => (
                <div key={i} className="flex flex-col">
                  <p className="text-primary font-neue text-[17px] md:text-[25px] leading-[1.3]">{e.titulo}</p>
                  <p className="text-[#FF9D9D] font-neue text-[17px] md:text-[20px] uppercase leading-[1.3]">{e.periodo}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Divider */}
          <div className="w-full h-px bg-primary mt-[16px] md:mt-[72px]" />

          {/* Formación */}
          <section className="flex flex-col gap-[16px] md:gap-[24px] mt-[16px] md:mt-[72px] pb-[40px] md:pb-[80px]">
            <h2 className="text-primary font-neue font-extrabold text-[35px] md:text-[40px] capitalize">
              Formación
            </h2>
            <div className="flex flex-col gap-[24px] md:p-[10px]">
              {formacion.map((f, i) => (
                <div key={i} className="flex flex-col">
                  <p className="text-primary font-neue text-[17px] md:text-[25px] leading-[1.3]">{f.titulo}</p>
                  <p className="text-[#FF9D9D] font-neue text-[17px] md:text-[20px] leading-[1.3]">{f.centro}</p>
                  <p className="text-primary font-neue text-[17px] md:text-[20px] leading-[1.3] font-extrabold">{f.periodo}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
