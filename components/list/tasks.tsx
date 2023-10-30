import useTodoStore from "@/lib/useTodoStore";

export default function Tasks() {
  const allTodos = useTodoStore((state) => state.allTodos);

  return (
    <ul>
      {allTodos.map((todo, index) => (
        <li key={index}>{todo.todo}</li>
      ))}
    </ul>
  );
}
