"use client";

import useTodoStore from "@/lib/useTodoStore";
import NoTasks from "./noTask";
import Tasks from "./tasks";

export default function TaskList() {
  const allTodos = useTodoStore((state) => state.allTodos);

  console.log(allTodos);

  return <>{allTodos.length !== 0 ? <Tasks /> : <NoTasks />}</>;
}
