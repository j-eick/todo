import fadeIn from "./fadeIn.module.css";
import classNames from "classnames";

export default function NoTasks() {
  return (
    <div className="animate-fadeIn relative h-[100dvh]">
      <div
        className="absolute left-1/2 -translate-x-1/2 top-[20%] min-w-[13rem] p-5 rounded-lg shadow-md bg-white
    xs:max-w-[80%] xs:h-[20%]
    "
      >
        <p>Nothing to see here...</p>
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 text-lg">
          ...yet!
        </span>
      </div>
    </div>
  );
}
