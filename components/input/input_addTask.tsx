"use client";
import Button_AddTask from "@/components/button/button_addTask";
import { useState } from "react";

export default function Input_AddTask() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div
      className="fixed flex flex-col items-center gap-y-5 w-full
    bottom-[6rem]
    xs:bottom-[5rem]"
    >
      <input
        type="text"
        id="task"
        name="task"
        placeholder="add task"
        onChange={(e) => setInputValue(e.target.value)}
        className="w-[70%] px-3 py-5 border-none rounded-md 
        xs:py-1 xs:text-xs
        "
      />
      <Button_AddTask>add task</Button_AddTask>
    </div>
  );
}
