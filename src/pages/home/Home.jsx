import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchInitialData } from "../../features/taskSlice/taskSlice";
import WithoutTask from "./WithoutTask";
import Cards from "../../components/cards/Cards";
import Title from "./Title";

const Home = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.task);

  useEffect(() => {
    dispatch(fetchInitialData());
  }, []);

  return (
    <div className="w-full h-[70vh]  p-4 flex flex-col items-center">
      <Title />
      {data && data.length > 0 ? (
        <div className="w-[80%] h-[60vh] overflow-y-scroll p-4 max-[800px]:w-full">
          <ul className=" w-full min-h-[100vh] grid grid-cols-3 grid-rows-3 max-[1431px]:grid-cols-2 max-[950px]:grid-cols-1  ">
            {data.map((el, i) => {
              return (
                <Cards
                  key={i}
                  title={el.title}
                  task={el.task}
                  _id={el._id}
                  category={el.category}
                  state={el.state}
                />
              );
            })}
          </ul>
        </div>
      ) : (
        <WithoutTask />
      )}
    </div>
  );
};

export default Home;
