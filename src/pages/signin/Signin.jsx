import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SIGNIN } from "../../constants/Constants";
import { useDispatch } from "react-redux";
import { getUser } from "../../features/loginSlice/loginSlice";

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    user_name: "",
    password: "",
  });

  const handleUser = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const sendData = async () => {
    try {
      const response = await axios.post(SIGNIN, user);

      const usuario = JSON.stringify(response.data);
      localStorage.setItem("user", usuario);
      dispatch(getUser(response.data.getUser));
      if (response) {
        navigate("/home/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-2 w-1/2  min-h-[50%] flex items-center justify-around flex-col max-[800px]:w-[80%]">
      <div className="w-full  flex flex-col  p-4">
        <h2 className="font-bold mb-2 text-xl self-center">
          Hi! welcome back...
        </h2>
        <input
          className="p-2 mb-2 rounded"
          placeholder="Username..."
          onChange={(e) => handleUser(e)}
          name="user_name"
        />
        <input
          className="p-2 mb-2 rounded"
          placeholder="Password..."
          onChange={(e) => handleUser(e)}
          type="password"
          name="password"
        />
      </div>

      <button
        onClick={() => sendData()}
        className=" mb-10  bg-[#5062DD] rounded-xl py-2 px-20 font-bold text-white
        max-[800px]:w-[92%]  max-[800px]:flex items-center justify-center
        "
      >
        Signin
      </button>

      <div>
        <p>
          You dont have an account yet?{" "}
          <Link to="/accounts/signout" className="font-bold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
