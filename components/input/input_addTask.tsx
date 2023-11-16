"use client";
import ButtonAddTask from "@/components/button/button_addTask";
import React, { useState } from "react";
import useTodoStore from "@/lib/useTodoStore";

console.clear();

export default function Input_AddTask() {
  const [store, setStore] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);
  const allTodos = useTodoStore((state) => state.allTodos);

  console.log(allTodos);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    console.log(e);

    if (e.key === "Enter") {
      const task = {
        id: "",
        task: inputValue,
        tag: [""],
        isComplete: false,
        editing: false,
      };
      addTodo(task);
      setInputValue("");
    }
  };

  /**
   * Add Task on ButtonPress
   * @param e
   */
  const handleAddTaskButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const task = {
      id: "",
      task: inputValue,
      tag: [""],
      isComplete: false,
      editing: false,
    };
    addTodo(task);
    setInputValue("");
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
        onKeyDown={handleKeyDown}
        className="w-[70%] px-3 py-5 border-none rounded-md focus:outline-none
        xs:py-1 xs:text-xs
        "
      />
      {inputValue.length !== 0 ? (
        <ButtonAddTask onClick={handleAddTaskButton} disabled={!inputValue}>
          add task
        </ButtonAddTask>
      ) : null}
    </div>
  );
}
