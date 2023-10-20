import { IconCheck, IconEdit, IconTrash } from "@tabler/icons-react";
import BannerCards from "./banner/BannerCards";
import { DELETE_TASK, EDIT_TASK } from "../../constants/Constants";
import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchInitialData } from "../../features/taskSlice/taskSlice";
import { Link } from "react-router-dom";
import EditTask from "../NewTask/EditTask";

const Cards = ({ title, task, _id, state, detail, category }) => {
  const dispatch = useDispatch();

  const deleteTask = async () => {
    try {
      const del = await axios.delete(DELETE_TASK + _id);
      dispatch(fetchInitialData());
      return del;
    } catch (error) {
      console.log(error);
    }
  };

  const completeTask = async () => {
    const state = "completed";
    try {
      const response = await axios.put(EDIT_TASK + _id, { state: state });
      dispatch(fetchInitialData());
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <li className=" w-[350px] h-[200px]  rounded flex flex-col items-start p-4 bg-white shadow justify-center overflow-hidden relative max-[800px]:w-[300px]">
      <div className="w-full flex items-center justify-between">
        <div className="z-10">
          <Link
            to={`/home/detail/${_id}`}
            className={`font-bold text-xl ${
              state === "completed" && "line-through"
            }`}
          >
            {title}
          </Link>
          <div className="flex">
            <p
              className={` w-fit font-light mr-2 text-white flex items-center px-2 justify-center rounded-xl ${
                state === "pending" ? "bg-red-600" : "bg-green-500"
              } `}
            >
              {state}
            </p>
            <p className="w-fit font-light text-white flex items-center px-2 justify-center rounded-xl bg-[#5062DD]">
              {category}
            </p>
          </div>
        </div>
        <div className="w-[50%] flex items-center justify-end z-20">
          <button
            onClick={() => deleteTask()}
            className="w-[35px] h-[35px] rounded-full bg-red-500 mr-2 flex items-center justify-center"
          >
            <IconTrash color="white" />
          </button>
          <button
            onClick={() => completeTask()}
            className="w-[35px] h-[35px] rounded-full bg-green-500 mr-2 flex items-center justify-center"
          >
            <IconCheck color="white" />
          </button>
          {detail === true && <EditTask _id={_id} title={title} task={task} />}
        </div>
      </div>
      <BannerCards />
      <div className=" w-full  h-auto mt-10 p-1">
        <p>{task}</p>
      </div>
    </li>
  );
};

export default Cards;
