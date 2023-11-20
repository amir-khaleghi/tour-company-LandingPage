import { navItems } from './Data';
import classNames from 'classnames';
const NavList = ({ customclass }) => {
  return (
    <ul className={classNames('flex gap-5 ', customclass)}>
      {navItems.map((item) => {
        const { id, href, name } = item;
        return (
          <li
            key={id}
            className="transition duration-500 transform hover:scale-125 hover:text-primary-6 "
          >
            <a
              className="block text-base tracking-widest capitalize transition duration-300 cursor-pointer hover:text-primary-6"
              href={href}
            >
              {name}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export default NavList;
