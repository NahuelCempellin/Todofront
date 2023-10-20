import TaskModal from "../../components/NewTask/TaskModal";

const WithoutTask = () => {
  return (
    <section className="w-full h-[60vh]  flex items-center justify-center ">
      <article className="flex items-center justify-center flex-col">
        <p className="">
          You dont have any task alredy, <strong>create one!</strong>
        </p>
        <TaskModal />
      </article>
    </section>
  );
};

export default WithoutTask;
