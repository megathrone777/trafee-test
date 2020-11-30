import { link } from "fs";
import React, { createContext, useReducer, useEffect } from "react";

import { TAction, setLinks } from "./actions";
import { TState, initialState } from "./initialState";
import { mainReducer } from "./reducer";

const MainContext = createContext<{
  state: TState;
  dispatch: React.Dispatch<TAction>;
}>({
  state: initialState,
  dispatch: () => {},
});

const MainProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer<React.Reducer<TState, TAction>>(
    mainReducer,
    initialState
  );

  const fetchLinksData = async () => {
    try {
      // ===============================
      // Dispatch initial data
      // ===============================
      const response = await fetch(`./data/data.json`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const links = await response.json();

      dispatch(setLinks(links));
    } catch (error) {
      dispatch(setLinks([]));

      console.error("Cannot fetch links from server");
    }
  };

  useEffect((): void => {
    fetchLinksData();
  }, []);

  return (
    <MainContext.Provider value={{ state, dispatch }}>
      {children}
    </MainContext.Provider>
  );
};

export { MainContext, MainProvider };
