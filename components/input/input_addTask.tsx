"use client";
import ButtonAddTask from "@/components/button/button_addTask";
import React, { useState } from "react";

console.clear();

export default function Input_AddTask() {
  const [store, setStore] = useState([]);
  const [inputValue, setInputValue] = useState("");

  console.log(inputValue);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const keyDownHandler = () => {
    localStorage.setItem("to-do", JSON.stringify([...store, inputValue]));
  };

  /**
   * Add Task on ButtonPress
   * @param e
   */
  const handleAddTaskButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e);
    localStorage.setItem("to-do", JSON.stringify([...store, inputValue]));
  };

  return (
    <div
      className="fixed flex flex-col items-center gap-y-5 w-full bottom-[6rem]
    xs:bottom-[4rem]"
    >
      <input
        type="text"
        id="task"
        name="task"
        placeholder="add task"
        value={inputValue}
        onChange={handleOnChange}
        onKeyDown={keyDownHandler}
        className="w-[70%] px-3 py-5 border-none rounded-md 
        xs:py-1 xs:text-xs
        "
      />
      <ButtonAddTask onClick={handleAddTaskButton} disabled={!inputValue}>
        add task
      </ButtonAddTask>
    </div>
  );
}
