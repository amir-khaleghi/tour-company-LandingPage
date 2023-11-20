import { navItems, icons } from './Data';
import NavItem from './NavList';
import Icons from './Icons';
import HamburgerMenu from './HamburgerMenu';
import NavList from './NavList';
const Navbar = () => {
  return (
    <>
      <nav className="sticky top-0 z-10 bg-white shadow-lg font-primary">
        <div className="flex items-center justify-between h-16 px-4 md:justify-evenly">
          {/* logo */}
          <div>
            <img
              className="w-40 h-40"
              src="./assets/logo.svg"
              alt="logo"
            />
          </div>
          {/* Navigations */}

          <div className="hidden md:flex">
            <NavList />
          </div>

          <HamburgerMenu />

          {/* icons */}
          {/* // ──────────────────────────────────────────────────── 🟩 ─ */}
          <ul className="hidden gap-5 text-2xl md:flex">
            {icons.map((icon) => {
              return <Icons {...icon} />;
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
