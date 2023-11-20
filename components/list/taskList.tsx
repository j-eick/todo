"use client";

import useTodoStore from "@/lib/useTodoStore";
import NoTasks from "./NoTask";
import Tasks from "./Tasks";

export default function TaskList() {
  const allTodos = useTodoStore((state) => state.allTodos);

  console.log(allTodos);

  return (
    <>
      {allTodos.length !== 0 ? (
        <Tasks />
      ) : (
        <div
          className="sticky w-[80%] max-w-sm max-h-[70dvh] mt-20 py-5 rounded-xl
        bg-teal-50 bg-opacity-50"
        >
          <NoTasks />
        </div>
      )}
    </>
  );
}
