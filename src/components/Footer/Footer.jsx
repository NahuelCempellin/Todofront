import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black w-full h-[15vh] flex items-center justify-center">
      <p className="text-white font-light">
        Developed with ❤️ by{" "}
        <Link target="_blank" to="https://nahuel-cempellin.vercel.app">
          Nahuel Cempellin
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
