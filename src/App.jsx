import { Link, useNavigate } from "react-router-dom";
import "./App.css";
import background from "./assets/background.png";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    const usuario = JSON.parse(user);
    if (usuario) {
      navigate("/home/dashboard");
    } else {
      navigate("/");
    }
  }, []);

  return (
    <div className="layout bg  relative h-screen flex items-center justify-center">
      <div className="absolute mt-[-35vh] blur-sm">
        <img src={background} alt="logo" />
      </div>
      <section className="p-2 w-full z-20 min-h-[50%] flex items-center justify-around flex-col mt-24">
        <h1 className=" font-bold text-3xl p-2">Welcome to my todo App!</h1>

        <Link
          to={"/accounts/signin"}
          className="  bg-[#5062DD] rounded-xl py-2 px-20 font-bold text-white"
        >
          Sign in
        </Link>

        <div>
          <p>
            You dont have an account yet?{" "}
            <Link to="/accounts/signout" className="font-bold">
              Register
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
