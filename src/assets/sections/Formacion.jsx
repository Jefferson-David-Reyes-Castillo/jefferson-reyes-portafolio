export function Formacion() {
  const formacionData = [
    {
      titulo: "Ingeniería de sistemas - UNIVERSIDAD CÉSAR VALLEJO",
      lugar: "Piura, Perú",
      fechas: "abril 2022 – Actualmente",
      logros: [
        "Ingreso directo a la universidad al haber obtenido uno de los tres primeros puestos académicos en mi institución educativa.",
      ],
      clases: " hover:text-red-600 duration-300",
    },
    {
      titulo: "Inicial, primaria y secundaria - I.E.P MAHANAIM",
      lugar: "Piura, Perú",
      fechas: "marzo 2009 – diciembre 2021",
      logros: [],
      clases: " hover:text-green-800 duration-300",
    },
  ];

  return (
    <section
      id='education'
      className='border border-gray-800 dark:text-white py-8 lg:mt-14 mb-6 md:mb-10 mx-8 md:mx-20 lg:mx-16 2xl:mx-24 px-8 2xl:px-20 rounded-lg shadow-lg dark:shadow-md hover:border-gray-800 duration-300 hover:shadow-gray-400 dark:hover:shadow-gray-800'
    >
      <h3 className='sm:text-2xl text-xl font-bold border-b-2 border-orange-500 pb-2 mb-4'>
        Educación
      </h3>
      {formacionData.map((item, index) => (
        <div className='mb-6' key={index}>
          <h4 className='text-sm font-semibold'>
            {item.titulo.split(" - ")[0]} -{" "}
            <span className={`${item.clases}`}>{item.titulo.split(" - ")[1]}</span>
          </h4>
          <span className='block text-xs dark:text-gray-300 mt-2 mb-2'>
            {item.lugar} | <span>{item.fechas}</span>
          </span>
          {item.logros.length > 0 && (
            <ul className='italic list-disc list-inside space-y-2 mx-2 mt-4 text-xs'>
              {item.logros.map((logro, i) => (
                <li key={i}>{logro}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  );
}
