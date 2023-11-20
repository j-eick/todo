"use client";
import ButtonAddTask from "@/components/button/button_addTask";
import NewTaskButton from "../button/Button";
import React, { useState } from "react";
import useTodoStore from "@/lib/useTodoStore";

console.clear();

export default function NewTaskInput() {
  const [inputValue, setInputValue] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);
  const allTodos = useTodoStore((state) => state.allTodos);

  console.log(allTodos);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") {
      if (inputValue.length !== 0) {
        const task = {
          id: "",
          task: inputValue,
          tag: [""],
          isComplete: false,
          editing: false,
        };
        addTodo(task);
        setInputValue("");
      } else {
        alert("no input, no task");
      }
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
      className="fixed flex justify-center w-[80%] max-w-sm bottom-[6rem]
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
        className="w-[60%] max-w-[300px] px-3 py-5 border-none rounded-l-md focus:outline-none
        xs:py-1 xs:text-xs
        "
      />
      {inputValue ? (
        <NewTaskButton
          variant="addTaskEnabled"
          onClick={handleAddTaskButton}
          disabled={!inputValue}
        >
          add
        </NewTaskButton>
      ) : (
        <NewTaskButton
          variant="addTaskDisabled"
          onClick={handleAddTaskButton}
          disabled={!inputValue}
        >
          add
        </NewTaskButton>
      )}
    </div>
  );
}
