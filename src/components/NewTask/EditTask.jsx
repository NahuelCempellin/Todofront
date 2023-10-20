import { IconEdit } from "@tabler/icons-react";
import axios from "axios";
import { useState } from "react";
import { EDIT_TASK } from "../../constants/Constants";
import { useDispatch } from "react-redux";
import { fetchInitialData } from "../../features/taskSlice/taskSlice";
import { useNavigate } from "react-router-dom";

const EditTask = ({ _id, title, task, category }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [taskData, setTask] = useState({
    title: title,
    task: task,
    category: category,
  });

  const handlerTask = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const sendTask = async () => {
    const response = await axios.put(EDIT_TASK + _id, taskData);
    dispatch(fetchInitialData());
    navigate("/");
    setShowModal(false);
    return response;
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="w-[35px] h-[35px] rounded-full bg-[#5062DD] flex items-center justify-center"
      >
        <IconEdit color="white" />
      </button>

      {showModal ? (
        <>
          <div className="flex  justify-center backdrop-blur-sm mt-[-20vh] items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-[50%] h-[50%] my-6 mx-auto max-w-3xl max-[1080px]:w-full ">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5  rounded-t bg-[#fcfcfc] ">
                  <h3 className="text-2xl font-bold flex items-center justify-center">
                    New task
                  </h3>
                  <button
                    className="w-10 h-10   text-white bg-[#2D92FA] font-bold rounded-full "
                    onClick={() => setShowModal(false)}
                  >
                    <span className="">x</span>
                  </button>
                </div>
                {/* Body */}
                <div className="relative p-6 flex-auto w-full    flex items-start justify-around flex-col max-[1080px]:p-2 ">
                  <section className="flex flex-col w-full ">
                    <input
                      onChange={(e) => handlerTask(e)}
                      name="title"
                      type="text"
                      className="w-full border p-2 mb-5 rounded"
                      placeholder="Title..."
                    />
                    <input
                      onChange={(e) => handlerTask(e)}
                      name="Category"
                      type="text"
                      className="w-full border p-2 mb-5 rounded"
                      placeholder="category..."
                    />
                    <textarea
                      onChange={(e) => handlerTask(e)}
                      name="task"
                      type="text"
                      className="w-full border p-2 mb-5 rounded"
                      placeholder="Task..."
                    />
                  </section>

                  <section className="w-full flex items-center justify-around">
                    <button
                      onClick={() => sendTask()}
                      className="py-2 px-12 border rounded font-bold text-white bg-[#2D92FA]"
                    >
                      Edit
                    </button>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default EditTask;
