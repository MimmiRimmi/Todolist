export const TodoItem = (props) => {
  return (
    <div
      className="flex flex-row items-center mt-6 ml-24 "
      style={{ color: props.completed ? "green" : "black" }}
    >
      <h1 className="font-bold ml-4  text-xl">{props.taskName}</h1>
      <button
        className="ml-4 border-4 border-green-900 p-2 rounded-xl hover:bg-green-400"
        onClick={() => props.completeTask(props.id)}
      >
        {props.completed ? "Undo" : "Done"}
      </button>
      <button
        className="ml-4 border-4 border-green-900 p-2 rounded-xl hover:bg-red-400"
        onClick={() => props.deleteTask(props.id)}
      >
        {" "}
        Delete{" "}
      </button>
    </div>
  );
};
