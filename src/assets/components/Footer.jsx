import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faWhatsapp} from "@fortawesome/free-brands-svg-icons";

export function Footer() {
  return (
    <>

      <footer className='my-2 mt-7 mx-6 md:mx-20 lg:mx-14 xl:mx-16 2xl:mx-20'>
        <div className='w-full max-w-screen-xl p-4 md:py-8 dark:text-gray-400'>
          <div className='flex items-center justify-between'>
            <a
              title="Número de celular"
              href='https://wa.link/qdxixj'
              target='_blank'
              className='[text-shadow:_0_2px_1px_rgb(0_0_0_/_25%)] text-[0.6rem] sm:text-sm hover:text-slate-800 dark:hover:text-slate-200 duration-300'
            >
              <FontAwesomeIcon icon={faWhatsapp} /> {" "}
              934344137
            </a>

            <span className='text-[0.6rem] text-center'>
              <a
                href='#Presentation'
                className='[text-shadow:_0_2px_1px_rgb(0_0_0_/_25%)] sm:text-sm hover:text-slate-800 dark:hover:text-slate-200 duration-300'
              >
                © 2025 Reyes Castillo Jefferson David
              </a>
            </span>

            <div className='flex gap-4 content-center text-[0.9rem] sm:text-base'>
              <a
                title="GitHub"
                target='_blank'
                href='https://github.com/Jefferson-David-Reyes-Castillo'
                className='hover:text-slate-800 dark:hover:text-slate-200 duration-300'
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                title="Linkedin"
                target='_blank'
                href='https://www.linkedin.com/in/jeffersonreyes05/'
                className='hover:text-slate-800 dark:hover:text-slate-200 duration-300'
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
