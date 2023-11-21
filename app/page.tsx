"use client";

import NewTaskInput from "@/components/input/NewTaskInput";
import TaskList from "@/components/list/TaskList";
import DeleteButton from "@/components/button/Button";
import useTodoStore from "@/lib/useTodoStore";
import Warning from "@/components/modal/Warning";

export default function Home() {
  const clearTodos = useTodoStore((state) => state.clearTodos);

  return (
    <main className="relative flex justify-center ">
      {/* <Warning variant="primary">Input missing</Warning> */}
      <DeleteButton variant="primary" onClick={clearTodos}>
        Clear <br /> List
      </DeleteButton>
      <TaskList />
      <NewTaskInput />
    </main>
  );
}
