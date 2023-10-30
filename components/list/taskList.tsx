"use client";

import { useState } from "react";
import useTodoStore from "@/lib/useTodoStore";

export default function TaskList() {
  const allTodos = useTodoStore((state) => state.allTodos);
  const [tasks, setTasks] = useState([
    { id: 1, task: "go home" },
    { id: 2, task: "coke pls" },
  ]);

  return (
    <ul>
      {allTodos.map((todo, index) => (
        <li key={index}>{todo.todo}</li>
      ))}
    </ul>
  );
}
