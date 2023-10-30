import { create } from "zustand";

type todoProp = {
  allTodos: { todo: string }[];
  addTodo: (params: { todo: string; date: Date }) => void;
  // addTodo: (task: string, date: Date) => void;
};

const useTodoStore = create<todoProp>()((set) => ({
  allTodos: [
    { todo: "Walk the dog" },
    { todo: "Buy groceries" },
    { todo: "Finish work project" },
    { todo: "Read a book" },
    { todo: "Exercise" },
    { todo: "Cook dinner" },
    { todo: "Call a friend" },
    { todo: "Watch a movie" },
    { todo: "Learn a new language" },
    { todo: "Write in a journal" },
    { todo: "Go for a run" },
    { todo: "Clean the house" },
    { todo: "Work on a personal project" },
    { todo: "Practice a musical instrument" },
    { todo: "Visit a museum" },
    { todo: "Try a new recipe" },
    { todo: "Gardening" },
    { todo: "Attend a yoga class" },
    { todo: "Plan a weekend getaway" },
    { todo: "Read a technology blog" },
  ],

  addTodo: (params) =>
    set((state) => ({
      allTodos: [...state.allTodos, params],
    })),

  clearTodos: () => ({
    allTodos: [],
  }),
}));

export default useTodoStore;
