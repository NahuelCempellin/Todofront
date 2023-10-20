import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TASK_DETAIL } from "../../constants/Constants";
import Cards from "../../components/cards/Cards";

const CardDetail = () => {
  const { id } = useParams();

  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(TASK_DETAIL + id);
      setData(response.data);
    };
    getData();
  }, []);

  return (
    <div>
      {data !== null && (
        <Cards
          task={data.task}
          title={data.title}
          _id={data._id}
          state={data.state}
          category={data.category}
          detail={true}
        />
      )}
    </div>
  );
};

export default CardDetail;
