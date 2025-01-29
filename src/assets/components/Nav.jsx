import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useMemo, useState } from "react";

const datos = [
  {
    href: "#Presentation",
    titulo: "Sobre mi",
  },
  {
    href: "#projects",
    titulo: "Mis proyectos",
  },
  {
    href: "#education",
    titulo: "Educación",
  },
];

export function Nav() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return (
      savedTheme ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
    );
  });

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  function handleChangeTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  return (
    <header className='flex justify-center items-center p-3 my-10'>
      <div className='bg-slate-400 text-white dark:bg-gray-800 dark:text-gray-300 rounded-full px-6 py-3 shadow-xl'>
        <nav className='flex justify-center items-center'>
          {/* Menú de navegación */}
          <ul className='flex gap-5 text-xs'>
            {datos.map((item, index) => (
              <li key={index} className=''>
                <a
                  title={item.title}
                  href={item.href}
                  className='[text-shadow:_0_2px_1px_rgb(0_0_0_/_25%)] font-bold hover:text-amber-300 dark:hover:text-amber-400 transition-transform dark:active:text-amber-400 active:underline'
                >
                  {item.titulo}
                </a>
              </li>
            ))}
            <li>
              <button
                title='Modo oscuro'
                onClick={handleChangeTheme}
                className='hover:text-orange-300 dark:hover:text-orange-600'
              >
                <FontAwesomeIcon icon={faMoon} />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
