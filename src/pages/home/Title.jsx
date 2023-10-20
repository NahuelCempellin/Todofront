import { useDispatch, useSelector } from "react-redux";
import TaskModal from "../../components/NewTask/TaskModal";
import { categoryCards, stateCards } from "../../features/taskSlice/taskSlice";

const Title = () => {
  const userData = localStorage.getItem("user");
  const user = JSON.parse(userData);
  const name = user.getUser.nombre;
  const dispatch = useDispatch();
  const { selectData } = useSelector((state) => state.task);

  const handleCategory = (e) => {
    dispatch(categoryCards(e.target.value));
  };

  const handleState = (e) => {
    dispatch(stateCards(e.target.value));
  };

  return (
    <div className="w-[80%]  flex items-center justify-between p-4">
      <div className="flex items-center justify-center">
        <h2 className="font-bold text-3xl mr-5">{`Hi ${name}! `}</h2>
        <TaskModal />
      </div>

      <div className="flex items-center justify-center">
        <select
          onChange={(e) => handleCategory(e)}
          className="py-1 px-4 rounded mr-2"
        >
          <option value={"todo"}>Category</option>
          {selectData !== null &&
            selectData.map((el, i) => {
              return (
                <option key={i} value={el.category}>
                  {el.category}
                </option>
              );
            })}
        </select>

        <select onChange={(e) => handleState(e)} className="py-1 px-4 rounded">
          <option value={"todo"}>State</option>
          <option value={"completed"}>Completed</option>
          <option value={"pending"}>Pending</option>
        </select>
      </div>
    </div>
  );
};

export default Title;
