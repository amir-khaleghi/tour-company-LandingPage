import Icons from './Icons';
import NavList from './NavList';
const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 py-4 bg-black  h-[300px] text-white text-center">
      <NavList />
      <Icons customClass="flex" />
      <p>Copyright © Backroads Travel Tours Company2023. All Rights Reserved</p>
    </div>
  );
};
export default Footer;
