import React, { createContext, useContext, ReactNode, Dispatch, SetStateAction } from 'react';

type AreaContextType = {
  selectedArea: 'A' | 'B' | 'C' | null;
  setSelectedArea: Dispatch<SetStateAction<'A' | 'B' | 'C' | null>>;
};

const AreaContext = createContext<AreaContextType | undefined>(undefined);

type AreaProviderProps = {
  children: ReactNode;
};

export const AreaProvider: React.FC<AreaProviderProps> = ({ children }) => {
  const [selectedArea, setSelectedArea] = React.useState<'A' | 'B' | 'C' | null>(null);

  return (
    <AreaContext.Provider value={{ selectedArea, setSelectedArea }}>
      {children}
    </AreaContext.Provider>
  );
};

export const useArea = () => {
  const context = useContext(AreaContext);
  if (!context) {
    throw new Error('useArea must be used within an AreaProvider');
  }
  return context;
};
