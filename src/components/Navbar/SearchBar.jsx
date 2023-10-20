import axios from "axios";
import { SEARCH_TASK } from "../../constants/Constants";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    text: "",
    data: null,
  });

  const handleTitle = async (e) => {
    try {
      const response = await axios.get(SEARCH_TASK + e.target.value);
      setData({ ...data, data: [response.data], text: e.target.value });
    } catch (error) {
      console.log(error);
    }
  };

  const handlerNavigate = () => {
    navigate();
    setData({ data: null });
  };

  return (
    <div className="border w-[50%] relative">
      <input
        onChange={(e) => handleTitle(e)}
        className="w-full p-2 rounded"
        placeholder="Search..."
      />
      {data.data !== null && (
        <div className="bg-white w-full p-2 border absolute">
          {data.data.map((el, i) => {
            return (
              <button
                onClick={() => handlerNavigate()}
                key={i}
                className="w-full flex items-center justify-between p-2"
              >
                <p>{el.title}</p>
                <p className="font-light text-[#b9b9b9]">
                  {el.task.slice(0, 7) + "..."}
                </p>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default SearchBar;
