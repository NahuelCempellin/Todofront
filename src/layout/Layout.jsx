import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    <div className="layout bg  flex flex-col items-center justify-between">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
