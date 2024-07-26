import { createContext, useReducer } from "react";

export const ContentsContext = createContext();
export const contentsReducer = (state, action) => {
  switch (action.type) {
    case "SET_CONTENTS":
      return {
        contents: action.payload,
      };
    case "CREATE_CONTENTS":
      return {
        contents: [action.payload, ...state.contents],
      };
    default:
      return state;
  }
};

// dispatch({ type: "SET_CONTENTS", payload: [{}, {}] });

export const ContentContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(contentsReducer, {
    contents: null,
  });
  return (
    <ContentsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ContentsContext.Provider>
  );
};
