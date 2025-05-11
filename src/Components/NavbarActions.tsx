import { Link } from "react-router-dom";

const NavbarActions = () => (
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
    <Link
      to="/login"
      className="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center text-white! dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Login
    </Link>
  </div>
);

export default NavbarActions;
