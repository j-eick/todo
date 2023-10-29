"use client";

import useLocalStorage from "@/hooks/useLocalStorage";
import { useState } from "react";

export default function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, task: "go home" },
    { id: 2, task: "coke pls" },
  ]);

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>{task.task}</li>
      ))}
    </ul>
  );
}
