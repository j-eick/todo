"use client";

import Input_AddTask from "@/components/input/input_addTask";
import TaskList from "@/components/list/taskList";
import DeleteButton from "@/components/button/Button";
import useTodoStore from "@/lib/useTodoStore";

export default function Home() {
  const clearTodos = useTodoStore((state) => state.clearTodos);

  return (
    <main className="relative flex justify-center">
      <DeleteButton variant="primary" onClick={clearTodos}>
        Clear List
      </DeleteButton>
      <TaskList />
      <Input_AddTask />
    </main>
  );
}
