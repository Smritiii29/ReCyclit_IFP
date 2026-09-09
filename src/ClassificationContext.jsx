import { createContext, useContext, useState } from "react";

const ClassificationContext = createContext(null);

export function ClassificationProvider({ children }) {
  const [classification, setClassification] = useState({
    category: "Recyclable Plastic",
    type: "recyclable",
    confidence: 94,
  });

  return (
    <ClassificationContext.Provider
      value={{ classification, setClassification }}
    >
      {children}
    </ClassificationContext.Provider>
  );
}

export function useClassification() {
  return useContext(ClassificationContext);
}