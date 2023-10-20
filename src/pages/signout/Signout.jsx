import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SIGNOUT } from "../../constants/Constants";

const Signout = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    nombre: "",
    user_name: "",
    password: "",
  });

  const handleSignout = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const sendData = async () => {
    const response = await axios.post(SIGNOUT, user);
    console.log(response);

    navigate("/accounts/success");
  };

  return (
    <div className="p-2 w-1/2  min-h-[50%] flex items-center justify-around flex-col max-[800px]:w-[80%]">
      <div className="w-full  flex flex-col  p-4">
        <h2 className="font-bold mb-2 text-xl self-center">
          Welcome to our family!
        </h2>
        <input
          className="p-2 mb-2 rounded"
          placeholder="Full name..."
          onChange={(e) => handleSignout(e)}
          name="nombre"
        />
        <input
          className="p-2 mb-2 rounded"
          placeholder="Username..."
          onChange={(e) => handleSignout(e)}
          name="user_name"
        />
        <input
          className="p-2 mb-2 rounded"
          placeholder="Password..."
          type="password"
          onChange={(e) => handleSignout(e)}
          name="password"
        />
      </div>

      <button
        onClick={() => sendData()}
        className=" mb-10  bg-[#5062DD] rounded-xl py-2 px-20 font-bold text-white
        max-[800px]:w-[92%]  max-[800px]:flex items-center justify-center
        "
      >
        Register
      </button>

      <div>
        <p>
          Do you already have an account?{" "}
          <Link to="/accounts/signin" className="font-bold">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signout;
