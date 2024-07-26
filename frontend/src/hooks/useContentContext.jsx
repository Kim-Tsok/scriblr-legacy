import { ContentsContext } from "../context/ContentContext";
import { useContext } from "react";

export const useContentsContext = () => {
  const context = useContext(ContentsContext);

  if (!context) {
    throw Error(
      "useContentsContext must be used inside an ContentsCOntextProvider"
    );
  }

  return context;
};
