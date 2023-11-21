import classNames from 'classnames';
import { icons } from './Data';

const Icons = ({ customClass }) => {
  return (
    <ul className={classNames(customClass, ' gap-5 text-2xl md:flex')}>
      {icons.map((icon) => {
        const { id, href, reactIcon } = icon;
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
              {reactIcon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export default Icons;
