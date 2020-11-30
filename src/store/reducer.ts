import React from "react";

import { TAction } from "./actions";
import { TState } from "./initialState";

const mainReducer: React.Reducer<TState, TAction> = (state, action) => {
  const { payload, type } = action;

  const actions = {
    SET_LINKS: () => ({
      ...state,
      smartLinks: payload,
    }),

    ARCHIVE_LINK: () => ({
      ...state,
      archivedLinks: [...state.archivedLinks, payload],
    }),

    SWITCH_TAB: () => ({
      ...state,
      activeTab: payload,
    }),

    DEFAULT: () => {
      throw new Error("Action is not among actions");
    },
  };

  return (actions[type] || actions["DEFAULT"])();
};

export { mainReducer };
