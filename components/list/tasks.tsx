import useTodoStore from "@/lib/useTodoStore";
import { useState } from "react";
import EditTaskButton from "@/components/button/Button";
import DeleteTastIcon from "@/components/button/Button";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaCheck } from "react-icons/fa6";

console.clear();

export default function Tasks() {
  const allTodos = useTodoStore((state) => state.allTodos);
  const [editing, setEditing] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState("");
  const [correctingTask, setCorrectingTask] = useState(taskToEdit);
  const [clickedTaskID, setClickedTaskID] = useState("");
  const [mouseDownStart, setMouseDownStart] = useState(Number);
  const [isInputChanged, setIsInputChanged] = useState(false);

  /**
   * MOUSEDOWN
   * @param e
   * @param clickedID
   */
  const handleMouseDown = (
    e: React.MouseEvent<HTMLLIElement>,
    clickedID: string,
    clickedTask: string
  ) => {
    setMouseDownStart(performance.now());

    const [targetTask] = allTodos.filter((todo) => todo.id === clickedID);
    setTaskToEdit(targetTask.task);
    setClickedTaskID(clickedID);
  };

  /**
   * MOUSEUP
   * @param e
   * @param clickedID
   */
  const handleMouseUp = (
    e: React.MouseEvent<HTMLLIElement>,
    clickedID: string,
    clickedTask: string
  ) => {
    const endTime = performance.now();
    const duration = endTime - mouseDownStart;
    console.log(
      "mouseUp: " +
        "\n" +
        "ID: " +
        clickedID +
        "\n" +
        clickedTask +
        "\n" +
        duration
    );
    if (duration >= 750) {
      setEditing(true);
      console.log("editMode: on");
    }
  };

  /**
   * @param e
   * @param clickedTask
   */
  const handleEditButton = (
    e: React.MouseEvent<HTMLButtonElement>,
    clickedID: string,
    clickedTask: string
  ) => {
    // setClickedTaskID(clickedTask);
    // const [todo] = allTodos.filter((todo) => todo.id === clickedID);
    // setTaskToEdit(todo.task);
  };

  /**
   * Changes that made in editing-mode.
   * @param e
   */
  const handleOnChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskToEdit(e.target.value);

    const newState = e.target.value;
    if (taskToEdit !== newState) {
      setIsInputChanged(true);
    }
    console.log(isInputChanged);
  };

  return (
    <>
      <ul
        className="sticky w-[80%] max-w-sm max-h-[60dvh] mt-20 py-5 rounded-xl overflow-y-scroll
        flex items-center flex-col gap-3 
        bg-teal-50 bg-opacity-50
    "
      >
        {allTodos.map((todo) => (
          // ALL TASKS
          <li
            key={todo.id}
            onMouseDown={(e) => handleMouseDown(e, todo.id, todo.task)}
            onMouseUp={(e) => handleMouseUp(e, todo.id, todo.task)}
            className={`w-[90%] py-3 pl-3 pr-2 rounded-xl
          bg-opacity-100 backdrop-blur-[2rem] task-shadow bg-slate-100`}
          >
            <div className="relative grid grid-cols-10 w-[100%] ">
              {clickedTaskID === todo.id ? (
                editing ? (
                  <>
                    <input
                      type="text"
                      value={taskToEdit}
                      onChange={handleOnChangeInput}
                      className={`col-span-7 h-[100%] py-[0.2rem] focus:outline-0 
                  border-b-slate-800 bg-slate-100 border-b-[0.1rem] `}
                    />
                    <EditTaskButton
                      variant="editTask"
                      onClick={(e) => handleEditButton(e, todo.id, todo.task)}
                    >
                      {isInputChanged ? <FaCheck /> : "Edit"}
                    </EditTaskButton>
                    <DeleteTastIcon variant="deleteTaskIcon" onClick={() => {}}>
                      <RiDeleteBin6Line />
                    </DeleteTastIcon>
                  </>
                ) : (
                  <>
                    <p className=" col-span-5 w-[100%] ">{todo.task}</p>
                  </>
                )
              ) : (
                <>
                  <p className=" col-span-5 w-[100%]">{todo.task}</p>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
