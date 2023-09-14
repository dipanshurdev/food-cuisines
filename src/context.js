import { useState, useEffect, createContext } from "react";

const CuisineContext = createContext();

const ContextProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth);

  const checkSize = () => {
    setIsMobile(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  //   console.log(isMobile);
  return (
    <CuisineContext.Provider value={{ isMobile }}>
      {children}
    </CuisineContext.Provider>
  );
};

export { ContextProvider, CuisineContext };
