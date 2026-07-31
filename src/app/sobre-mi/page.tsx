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
      <section className="relative w-full aspect-[1440/982] overflow-hidden">
        {/* Photo — exact same treatment as home */}
        <div className="absolute inset-0 overflow-hidden">
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

        {/* Text — proportional: X=733/1440=50.9%, Y=313/982=31.9% */}
        <div className="absolute left-[50.9%] top-[31.9%] right-[64px] text-primary">
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

      <div className="px-16">
        <div className="max-w-[1312px] mx-auto">
          {/* Divider */}
          <div className="w-full h-px bg-primary" />

          {/* Servicios + Contacto */}
          <section className="flex gap-[364px] mt-[72px]">
            {/* Servicios */}
            <div className="flex flex-col gap-[24px] w-[525px]">
              <h2 className="text-primary font-neue font-extrabold text-[40px] capitalize">
                Servicios
              </h2>
              <div className="flex flex-col gap-[8px] p-[10px]">
                {servicios.map((s, i) => (
                  <p key={i} className="text-primary font-neue text-[30px] uppercase">{s}</p>
                ))}
              </div>
            </div>

            {/* Contacto */}
            <div className="flex flex-col gap-[24px] w-[315px]">
              <h2 className="text-primary font-neue font-extrabold text-[40px] capitalize">
                Contacto
              </h2>
              <div className="flex flex-col gap-[24px]">
                <div className="flex flex-col">
                  <p className="text-primary font-neue text-[25px] uppercase leading-[1.3]">Correo electrónico</p>
                  <a href="mailto:larimarm20@gmail.com" className="text-[#FF9D9D] font-neue text-[25px] leading-[1.3] hover:opacity-70 transition-opacity">
                    larimarm20@gmail.com
                  </a>
                </div>
                <div className="flex flex-col">
                  <p className="text-primary font-neue text-[25px] uppercase leading-[1.3]">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/larimar-munoz/" target="_blank" rel="noopener noreferrer" className="text-[#FF9D9D] font-neue text-[25px] leading-[1.3] hover:opacity-70 transition-opacity">
                    Larimar Muñoz
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="w-full h-px bg-primary mt-[72px]" />

          {/* Experiencia */}
          <section className="flex flex-col gap-[24px] mt-[72px]">
            <h2 className="text-primary font-neue font-extrabold text-[40px] capitalize">
              Experiencia
            </h2>
            <div className="flex flex-col gap-[24px] p-[10px]">
              {experiencia.map((e, i) => (
                <div key={i} className="flex flex-col">
                  <p className="text-primary font-neue text-[25px]">{e.titulo}</p>
                  <p className="text-[#FF9D9D] font-neue text-[20px] uppercase">{e.periodo}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Divider */}
          <div className="w-full h-px bg-primary mt-[72px]" />

          {/* Formación */}
          <section className="flex flex-col gap-[24px] mt-[72px] pb-[80px]">
            <h2 className="text-primary font-neue font-extrabold text-[40px] capitalize">
              Formación
            </h2>
            <div className="flex flex-col gap-[24px] p-[10px]">
              {formacion.map((f, i) => (
                <div key={i} className="flex flex-col">
                  <p className="text-primary font-neue text-[25px]">{f.titulo}</p>
                  <p className="text-[#FF9D9D] font-neue text-[20px] uppercase">{f.centro}</p>
                  <p className="text-[#FF9D9D] font-neue text-[20px] uppercase font-extrabold">{f.periodo}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
