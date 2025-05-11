import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const NavbarLogo = () => (
  <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
    <img src={logo} className="h-10" alt="Company Logo" />
    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Checkers</span>
  </Link>
);

export default NavbarLogo;
