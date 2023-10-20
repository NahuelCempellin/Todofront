import { Link } from "react-router-dom";
import IconSuccess from "./Icon/IconSuccess";

const SignoutSuccess = () => {
  return (
    <div className="p-2 w-1/2 mt-[-20vh]  min-h-[50%] flex items-center justify-start flex-col max-[800px]:w-[80%]">
      <div className=" flex items-center justify-around flex-col">
        <IconSuccess />
        <h2 className="font-bold text-3xl mt-[-100px] mb-10">
          User created successfully!!
        </h2>

        <Link
          to="/accounts/signin"
          className=" mb-10  bg-[#5062DD] rounded-xl py-2 px-20 font-bold text-white
        max-[800px]:w-[92%]  max-[800px]:flex items-center justify-center
        "
        >
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default SignoutSuccess;
