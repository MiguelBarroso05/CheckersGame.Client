import { Link } from "react-router-dom";
import { useAuth } from "../Helpers/useAuth";

const NavbarActions = () => {
  const {isLoggedIn, logout} = useAuth();
  return(
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
    {!isLoggedIn ? (
      <Link
      to="/login"
      className="bg-blue-701 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center text-white! dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Login
    </Link>) : (<button
      onClick={logout}
      className="bg-blue-701 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center text-white! dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Logout
    </button>
    )}
  </div>
)};

export default NavbarActions;
