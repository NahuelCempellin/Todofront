import { IconPlus } from "@tabler/icons-react";
import axios from "axios";
import { useState } from "react";
import { CREATE_TASK } from "../../constants/Constants";
import { useDispatch } from "react-redux";
import { fetchInitialData } from "../../features/taskSlice/taskSlice";

const TaskModal = () => {
  const dispatch = useDispatch();
  const data = localStorage.getItem("user");
  const user = JSON.parse(data);
  const _id = user.getUser._id;

  const [showModal, setShowModal] = useState(false);
  const [task, setTask] = useState({
    title: "",
    task: "",
    category: "",
    owner: _id,
  });

  const handlerTask = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const sendTask = async () => {
    const response = await axios.post(CREATE_TASK, task);
    dispatch(fetchInitialData());
    setShowModal(false);
    return response;
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="border w-[50px] mt-2 shadow h-[50px] rounded-full bg-[#2D92FA] flex items-center justify-center "
      >
        <IconPlus color="white" />
      </button>

      {showModal ? (
        <>
          <div className="flex justify-center backdrop-blur-sm mt-[-20vh] items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
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
                      name="category"
                      type="text"
                      className="w-full border p-2 mb-5 rounded"
                      placeholder="Category..."
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
                    <button className="py-2 px-12 border bg-black  font-bold text-white rounded">
                      Cancel
                    </button>
                    <button
                      onClick={() => sendTask()}
                      className="py-2 px-12 border rounded font-bold text-white bg-[#2D92FA]"
                    >
                      Create
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

export default TaskModal;
