import { useDispatch } from "react-redux";
import icon from "../../assets/Icon.png";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../../features/loginSlice/loginSlice";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlerLogout = () => {
    dispatch(logoutUser("logout"));
    navigate("/");
  };

  return (
    <nav className="p-4 w-full  shadow flex items-center justify-between">
      <Link to={"/home/dashboard"} className="w-[100px]  overflow-hidden">
        <img src={icon} alt="icon" />
      </Link>

      <SearchBar />

      <button onClick={() => handlerLogout()} className="p-1">
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
