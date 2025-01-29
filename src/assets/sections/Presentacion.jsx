import YO from "/images/YO.webp";

import CV from "/storage/files/Reyes Castillo, Jefferson David CV.pdf";

import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { LinkButton } from "../components/LinkButton";

const personalInfo = {
  name: "Jefferson David",
  lastName: "Reyes Castillo",
  profession: "Ingeniería de Sistemas",
  description1:
    "Actualmente soy un estudiante del séptimo ciclo de la carrera profesional de ",
  descriptionRed: "Ingeniería de Sistemas",
  description2:
    ", lo que busco son oportunidades para poder aplicar y expandir mis habilidades en proyectos que contribuyan al desarrollo tecnológico, todo esto con una actitud proactiva para aprender y colaborar en equipo.",
  links: {
    email: "mailto:jeffersondavidreyes@gmail.com",
    cv: CV,
    linkedin: "https://www.linkedin.com/in/jeffersonreyes05/",
    github: "https://github.com/Jefferson-David-Reyes-Castillo",
  },
};

export function Presentacion() {
  return (
    <section
      id='Presentation'
      className='lg:flex lg:items-center lg:justify-center lg:gap-7 lg:mt-8 lg:px-16 md:px-12'
    >
      {/* Imagen */}
      <img
        src={YO}
        alt='Foto de Jefferson Reyes'
        className='mx-auto m-7 lg:h-auto lg:w-64 md:h-48 md:w-48 md:mb-6 rounded-full h-40 w-40 hover:scale-105 duration-500 cursor-pointer shadow-slate-400 dark:shadow-orange-400 shadow-[0_0_25px_1px_rgba(0,0,0,0.4)]'
      />

      {/* Contenedor de texto */}
      <div>
        <h2 className='text-3xl lg:text-6xl mx-8 dark:text-slate-50 font-bold mb-4 dark:hover:text-cyan-50 duration-150'>
          {personalInfo.name}{" "}
          <span className='text-orange-400 hover:text-orange-500 duration-150 pr-16 [text-shadow:_0_2px_1px_rgb(0_0_0_/_25%)]'>
            {personalInfo.lastName}
          </span>
        </h2>
        <p className='dark:text-slate-300 mx-8 mb-5 text-sm lg:text-lg md:text-base md:mr-1 leading-6'>
          {personalInfo.description1}
          <span className='text-red-500 hover:text-red-700 dark:text-red-400 font-semibold dark:hover:text-red-500'>
            {personalInfo.descriptionRed}
          </span>
          {personalInfo.description2}
        </p>
        <div className='flex text-nowrap text-xs lg:text-base mx-8 gap-2 sm:gap-3 lg:gap-4'>
          <LinkButton
            href={personalInfo.links.email}
            label='Contáctame'
            customClasses='border-black bg-black text-white hover:bg-white hover:text-black dark:hover:border-white dark:bg-white dark:text-black dark:hover:bg-transparent dark:hover:text-white'
          />

          <LinkButton
            href={personalInfo.links.cv}
            label='CV'
            icon={faDownload}
            download
            customClasses='border-blue-600 hover:border-blue-400 hover:bg-blue-400 dark:text-white dark:border-blue-400 dark:hover:bg-blue-400 dark:hover:text-black'
          />

          <LinkButton
            href={personalInfo.links.linkedin}
            label='Linkedin'
            icon={faLinkedin}
            customClasses='border-sky-400 hover:border-sky-300 hover:bg-sky-300  dark:text-white dark:border-sky-800 dark:hover:bg-sky-800 dark:hover:text-white'
          />

          <LinkButton
            href={personalInfo.links.github}
            label='GitHub'
            icon={faGithub}
            customClasses=' dark:text-white border-slate-300 hover:bg-slate-300 dark:border-gray-900 dark:hover:bg-gray-900 dark:hover:text-white'
          />
        </div>
      </div>
    </section>
  );
}
