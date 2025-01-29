import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export function LinkButton({
  href,
  label,
  icon,
  customClasses,
  download = false,
}) {
  return (
    <a
      href={href}
      download={download}
      target={download ? "_self" : "_blank"}
      rel='noopener noreferrer'
      className={`border p-2 rounded-lg font-bold cursor-pointer transition duration-200 hover:scale-105 ${customClasses}`}
      aria-label={label}
    >
      {icon && <FontAwesomeIcon icon={icon} className='mr-2' />}
      {label}
    </a>
  );
}
