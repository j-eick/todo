import { useState } from "react";

type initialState = {
  key: string;
  value: string;
};

export default function useLocalStorage() {
  const [store, setStore] = useState();

  // store is used for the first time
  // store is returned, whenever

  // component calls useLocalStorage
  const addItem = (key: string, value: string) =>
    localStorage.setItem(key, JSON.stringify(value));

  return [
    store,
    setStore,
    {
      addItem: () => addItem,
    },
  ];

  // export default function useLocalStorage({ key, value }: initialState) {
  //   const [store, setStore] = useState({ key, value });

  //   return [
  //     store,
  //     {
  //       addItem: () => localStorage.setItem("key"),
  //     },
  //   ];
}
