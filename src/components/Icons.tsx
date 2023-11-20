const Icons = ({ id, href, icon }) => {
  return (
    <li
      key={id}
      className="transition duration-500 transform hover:scale-125"
    >
      <a
        target="_blank"
        rel="noreferrer"
        href={href}
        className="text-primary-6"
      >
        {icon}
      </a>
    </li>
  );
};
export default Icons;
