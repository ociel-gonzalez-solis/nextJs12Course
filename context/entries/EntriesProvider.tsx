import { FC, PropsWithChildren, useReducer } from "react";
import { EntriesContext, entriesReducer } from "./";
import { Entry } from "../../interfaces/Entry";
import { v4 as uuidv4 } from "uuid";

export interface entriesState {
  entries: Entry[];
}

const UI_INITIAL_STATE: entriesState = {
  entries: [
    {
      _id: uuidv4(),
      description:
        "Pendiente: Et commodo fugiat aliqua labore adipisicing consequat voluptate fugiat.",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description: "En Progreso: Irure irure ea aute ex amet.",
      status: "in-progress",
      createdAt: Date.now() - 1000000,
    },
    {
      _id: uuidv4(),
      description:
        "Terminado: Enim exercitation culpa laborum reprehenderit labore id labore ipsum tempor consectetur labore Lorem dolore.",
      status: "finished",
      createdAt: Date.now() - 100000,
    },
  ],
};

export const EntriesProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, UI_INITIAL_STATE);

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description:
        "Pendiente: Et commodo fugiat aliqua labore adipisicing consequat voluptate fugiat.",
      createdAt: Date.now(),
      status: "pending",
    };
    dispatch({ type: "[Entry] Add-Entry", payload: newEntry });
  };

  const updateEntry = (entry: Entry) => {
    dispatch({ type: "[Entry] Entry-Updated", payload: entry });
  };

  return (
    <EntriesContext.Provider value={{ ...state, addNewEntry, updateEntry }}>
      {children}
    </EntriesContext.Provider>
  );
};
