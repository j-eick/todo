import { create } from "zustand";

type todoProp = {
  allTodos: { id: string; task: string; isComplete: boolean; tag: string[] }[];
  addTodo: (params: {
    id: string;
    task: string;
    isComplete: boolean;
    tag: string[];
    editing: boolean;
  }) => void;
  clearTodos: () => void;
};

const useTodoStore = create<todoProp>()((set) => ({
  allTodos: [
    {
      id: "1",
      task: "Walk the dog",
      isComplete: true,
      tag: ["outdoor", "pet"],
      editing: false,
    },
    {
      id: "2",
      task: "Feed the cat",
      isComplete: false,
      tag: ["pet"],
      editing: false,
    },
    {
      id: "3",
      task: "Go grocery shopping",
      isComplete: false,
      tag: ["errands"],
      editing: false,
    },
    {
      id: "4",
      task: "Read a book",
      isComplete: true,
      tag: ["leisure", "reading"],
      editing: false,
    },
    {
      id: "5",
      task: "Write a report",
      isComplete: false,
      tag: ["work"],
      editing: false,
    },
    {
      id: "6",
      task: "Exercise",
      isComplete: false,
      tag: ["health", "fitness"],
      editing: false,
    },
    {
      id: "7",
      task: "Call a friend",
      isComplete: false,
      tag: ["social"],
      editing: false,
    },
    {
      id: "8",
      task: "Clean the house",
      isComplete: false,
      tag: ["home"],
      editing: false,
    },
    {
      id: "9",
      task: "Plan a vacation",
      isComplete: true,
      tag: ["travel"],
      editing: false,
    },
    {
      id: "10",
      task: "Learn a new language",
      isComplete: true,
      tag: ["self-improvement"],
      editing: false,
    },
    {
      id: "11",
      task: "Cook dinner",
      isComplete: false,
      tag: ["cooking"],
      editing: false,
    },
    {
      id: "12",
      task: "Take a nap",
      isComplete: true,
      tag: ["health", "rest"],
      editing: false,
    },
    {
      id: "13",
      task: "Do the laundry",
      isComplete: false,
      tag: ["chores"],
      editing: false,
    },
    {
      id: "14",
      task: "Watch a movie",
      isComplete: false,
      tag: ["entertainment"],
      editing: false,
    },
    {
      id: "15",
      task: "Pay bills",
      isComplete: false,
      tag: ["finances"],
      editing: false,
    },
    {
      id: "16",
      task: "Attend a meeting",
      isComplete: true,
      tag: ["work", "business"],
      editing: false,
    },
    {
      id: "17",
      task: "Plant flowers",
      isComplete: false,
      tag: ["gardening"],
      editing: false,
    },
    {
      id: "18",
      task: "Study for an exam",
      isComplete: false,
      tag: ["education"],
      editing: false,
    },
    {
      id: "19",
      task: "Meditate",
      isComplete: true,
      tag: ["mental-health"],
      editing: false,
    },
    {
      id: "20",
      task: "Fix a leaky faucet",
      isComplete: false,
      tag: ["home", "maintenance"],
      editing: false,
    },
  ],

  addTodo: (params) =>
    set((state) => ({
      allTodos: [params, ...state.allTodos],
    })),

  /**
   * - click on edit
   * - input appears with current value
   * - onChange handles new input
   * - save new value by clicking ok button (for example)
   */
  // editTodo: () => set(state => ({
  //   id,
  //   task: ,
  //   isComplete,
  //   tag,
  // }))

  clearTodos: () => set({ allTodos: [] }),
}));

export default useTodoStore;
