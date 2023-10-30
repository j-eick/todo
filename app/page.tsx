import Input_AddTask from "@/components/input/input_addTask";
import TaskList from "@/components/list/taskList";

export default function Home() {
  return (
    <main className="items-center h-[100dvh] pb-[12rem]">
      <TaskList />
      <Input_AddTask />
    </main>
  );
}
