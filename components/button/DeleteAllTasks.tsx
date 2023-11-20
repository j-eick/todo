import useTodoStore from "@/lib/useTodoStore";

export default function DeleteAllTasks() {
  const clearTodos = useTodoStore((state) => state.clearTodos);

  return <button type="button">Button_deleteAll</button>;
}
