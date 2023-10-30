import useTodoStore from "@/lib/useTodoStore";

export default function Tasks() {
  const allTodos = useTodoStore((state) => state.allTodos);

  return (
    <>
      <ul
        className="sticky overflow-y-auto overflow-scroll max-h-[57dvh] mt-10 py-5 rounded-xl
        flex items-center flex-col gap-3 
        bg-teal-50 bg-opacity-50
        sm:max-h-[70dvh] sm:mt-20
    "
      >
        {allTodos.map((todo, index) => (
          <li
            key={index}
            className="w-[80%] p-3 px-5 rounded-xl bg-slate-50 
            bg-opacity-100 backdrop-blur-[2rem] task-shadow
            "
          >
            <div>{todo.todo}</div>
          </li>
        ))}
      </ul>
    </>
  );
}
