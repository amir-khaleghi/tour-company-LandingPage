import Icons from './Icons';
import HamburgerMenu from './HamburgerMenu';
import NavList from './NavList';
const Navbar = () => {
  return (
    <>
      <nav className="sticky top-0 z-10 shadow-lg bg-cyan-50 font-primary">
        <div className="flex items-center justify-between h-16 px-4 md:justify-evenly">
          {/* logo */}
          <div>
            <img
              className="w-full h-10"
              src="./assets/logo.png"
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
          <Icons customClass="hidden" />
        </div>
      </nav>
    </>
  );
};
export default Navbar;
