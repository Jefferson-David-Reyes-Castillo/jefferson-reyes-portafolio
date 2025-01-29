import html from "/images/Iconos/html-5.png";
import css from "/images/Iconos/css-3.png";
import js from "/images/Iconos/js.png";
import php from "/images/Iconos/php.png";
import laravel from "/images/Iconos/logomark.min.svg";
import mysql from "/images/Iconos/mysql.png";
import Java from "/images/Iconos/java.png";
import SQL from "/images/Iconos/sql-server.png";
import RestauranteProyecto from "/images/Proyecto del Restaurante.webp";
import ProyectoJava from "/images/Proyecto Java.webp";


const ProyectosInfo = [
  {
    tituloProyecto: 'Desarrollador Web – Restaurant "Estrellita del mar"',
    duracionProyecto: "Piura | septiembre 2024 – diciembre 2024",
    img: RestauranteProyecto,
    tecnologias: [
      { src: html, alt: "HTML", color: "rgb(255,0,0)" },
      { src: css, alt: "CSS", color: "rgb(0,128,255)" },
      { src: js, alt: "JavaScript", color: "rgb(255,223,0)" },
      { src: php, alt: "PHP", color: "rgb(128,0,128)" },
      { src: laravel, alt: "Laravel", color: "rgb(255,0,0)" },
      { src: mysql, alt: "MySQL", color: "rgb(0,128,255)" },
    ],
    descripcion:
      "Desarrollé un sitio web para el restaurante, ofreciendo a los usuarios una experiencia intuitiva para explorar información destacada sobre los productos, acceder a promociones exclusivas, realizar reservas en línea y contactar directamente a los administradores. Asimismo, elaboré un sistema que permite la administración del contenido del sitio web.",
  },
  {
    tituloProyecto: 'Programador Java – Chifa "Kam Lu"',
    duracionProyecto: "Piura | abril 2024 – julio 204",
    img: ProyectoJava,
    tecnologias: [
      { src: Java, alt: "Java", color: "rgb(84, 178, 201)" },
      { src: SQL, alt: "SQL Server", color: "rgb(220, 242, 248)" },
    ],
    descripcion:
      "Desarrollé un software de control de insumos con el objetivo de facilitar al chifa la gestión eficiente del registro de proveedores y pedidos realizados, así como mantener un inventario actualizado de los insumos ingresados al local. Además, se agregó la funcionalidad de generación de reportes exportables a Excel para poder realizar el análisi de los datos.",
  },
];

export function Proyectos() {
  return (
    <>
      <section id='projects'>
        <div className='pt-14 sm:py-10 lg:mt-10 2xl:mt-0 mb-10 md:mb-0'>
          <div className='mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-14'>
            <p className='animate-bounce mx-auto sm:mt-6 sm:mb-14 lg:mt-0 lg:mb-20 max-w-lg text-balance text-center text-lg font-semibold  dark:text-white sm:text-2xl'>
              <a href='#projects'>
                <span className='hover:underline [text-shadow:_0_2px_1px_rgb(0_0_0_/_25%)]'>
                  Proyectos destacados
                </span>
                👇
              </a>
            </p>
            <div className='mt-8 grid gap-6 sm:mt-16 lg:grid-cols-2 lg:grid-rows-2 p-2 2xl:-mx-24 '>
              {/* Inicio del contenedor */}
              {ProyectosInfo.map((item, index) => (
                <div
                  className='relative rounded-2xl lg:row-span-2 shadow-lg dark:shadow-md border hover:shadow-gray-400 border-gray-800 dark:hover:border-gray-700 duration-300 dark:hover:shadow-gray-700'
                  key={index}
                >
                  <div className='absolute inset-px rounded-2xl dark:bg-gray-900'></div>
                  <div className='relative flex h-full w-full flex-col overflow-hidden '>
                    <div className='lg:mx-14 mx-7 sm:mx-10 mb-4 sm:-mb-1 pt-8 sm:pb-0 sm:pt-10'>
                      <p className='mt-2 lg:text-xl sm:text-xl text-base font-bold dark:text-white text-left'>
                        {item.tituloProyecto}
                      </p>
                      <p className='mt-1 sm:mb-6 sm:text-sm max-w-lg text-xs dark:text-gray-400 '>
                        {item.duracionProyecto}
                      </p>
                    </div>

                    <div className='lg:-mx-10 sm:-mx-14 mx-7 sm:px-24 mb-4 sm:mb-5 '>
                      <p className='lg:text-sm sm:text-sm text-[11px] dark:text-white text-justify leading-5 sm:leading-7 lg:leading-8  '>
                        {item.descripcion}
                      </p>
                    </div>

                    <div className='min-h-32 w-full grow max-lg:mx-auto flex items-center justify-center'>
                      <div className='relative overflow-hidden '>
                        <img
                          loading='eager'
                          decoding='sync'
                          className='h-40 w-72 sm:h-72 sm:w-[31rem] md:w-[33rem] lg:h-48 lg:w-80 xl:h-64 xl:w-[28rem]  2xl:h-80 2xl:w-[34rem] max-h-full max-w-full rounded-2xl'
                          src={item.img}
                          alt={item.tituloProyecto}
                        />
                      </div>
                    </div>

                    {item.tecnologias?.length > 0 && (
                      <div className='flex gap-2 items-center justify-center px-8 pb-1 pt-5 mb-10 sm:px-10 sm:pb-0 sm:pt-10'>
                        <p className='text-orange-500 sm:font-extrabold text-xs leading-6 max-lg:text-center sm:text-base'>
                          Tecnologías:
                        </p>
                        <div className='flex items-center gap-2 sm:gap-3 flex-wrap justify-center lg:justify-start'>
                          {item.tecnologias.map((item, index) => (
                            <img
                              key={index}
                              src={item.src}
                              loading='lazy'
                              alt={item.alt}
                              title={item.alt}
                              className='h-4 w-4 sm:h-5 sm:w-5 cursor-pointer hover:scale-110 transition duration-150'
                              style={{
                                filter: `drop-shadow(0 0 5px ${item.color})`,
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className='pointer-events-none inset-px '></div>
                </div>
              ))}
              {/* Fin del contenedor */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
