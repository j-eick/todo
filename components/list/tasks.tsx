import useTodoStore from "@/lib/useTodoStore";

export default function Tasks() {
  const allTodos = useTodoStore((state) => state.allTodos);

  return (
    <>
      <ul
        className="sticky overflow-y-auto max-h-[57dvh] mt-10 py-10
    flex items-center flex-col gap-3 
    sm:max-h-[70dvh] sm:mt-20
    "
      >
        {allTodos.map((todo, index) => (
          <li
            key={index}
            className="w-[70%] p-3 px-5 rounded-xl bg-white 
            bg-opacity-100 backdrop-blur-[2rem]"
          >
            <div>{todo.todo}</div>
          </li>
        ))}
      </ul>
    </>
  );
}
