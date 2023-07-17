import { entriesState } from ".";
import { Entry } from "../../interfaces";

type EntriesType = { type: "[Entry] Add-Entry"; payload: Entry };

export const entriesReducer = (
  state: entriesState,
  action: EntriesType
): entriesState => {
  switch (action.type) {
    case "[Entry] Add-Entry":
      return {
        ...state,
        entries: [...state.entries, action.payload],
      };

    //     case "UI - Close Sidebar":
    //       return {
    //         ...state,
    //         sidemenuOpen: false,
    //       };

    default:
      return state;
  }
};
