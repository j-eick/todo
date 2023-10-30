import { create } from "zustand";

type todoProp = {
  allTodos: { todo: string; date: Date }[];
  addTodo: (params: { todo: string; date: Date }) => void;
  // addTodo: (task: string, date: Date) => void;
};

const useTodoStore = create<todoProp>()((set) => ({
  allTodos: [],

  addTodo: (params) =>
    set((state) => ({
      allTodos: [...state.allTodos, params],
    })),

  clearTodos: () => ({
    allTodos: [],
  }),
}));

export default useTodoStore;
