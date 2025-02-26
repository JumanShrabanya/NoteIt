import { createContext, useContext, useState } from "react";

const ShowLoginCardContext = createContext();

export const ShowLoginCardProvider = ({ children }) => {
  const [showCard, setShowLoginCard] = useState(false);
  const toggleShow = () => {
    setShowLoginCard((prev) => !prev);
  };
  return (
    <ShowLoginCardContext.Provider value={{ showCard, toggleShow }}>
      {children}
    </ShowLoginCardContext.Provider>
  );
};

export const useLoginCard = () => useContext(ShowLoginCardContext);
