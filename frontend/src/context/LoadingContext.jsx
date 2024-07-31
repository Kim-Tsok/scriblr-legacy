import React, { createContext, useState } from "react";

const LoadingContext = createContext({
  isLoading: false,
  setIsLoading: () => {},
});

const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export { LoadingContext, LoadingProvider };
