import Input_AddTask from "@/components/input/input_addTask";
import TaskList from "@/components/list/taskList";

export default function Home() {
  return (
    <main className="relative flex justify-center">
      <TaskList />
      <Input_AddTask />
    </main>
  );
}
