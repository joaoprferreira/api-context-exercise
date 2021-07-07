import React, { createContext, useState }  from "react";

export const CounterContext = createContext()

export function CounterProvider({children}) {
  const [ counter, setCounter ] = useState(0)

  return (
    <CounterContext.Provider value={{
      counter,
      setCounter
    }}>
      {children}
    </CounterContext.Provider>
  )
}
/* 
export function useCount() {
  const context = useContext(CounterContext)
  const [ conuter, setCounter ] = context;
  return context;
} */