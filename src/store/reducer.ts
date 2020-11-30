import React from "react";

import { TAction } from "./actions";
import { TState, TSmartLink } from "./initialState";

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

    REMOVE_LINK: () => ({
      ...state,
      smartLinks: state.smartLinks.filter(
        (smartLink: TSmartLink) => smartLink.name !== payload
      ),
    }),

    DEFAULT: () => {
      throw new Error("Action is not among actions");
    },
  };

  return (actions[type] || actions["DEFAULT"])();
};

export { mainReducer };
