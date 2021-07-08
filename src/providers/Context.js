import React, { createContext, useState, useContext  }  from "react";

const CounterContext = createContext()

export function CounterProvider({children}) {
  const [ counter, setCounter ] = useState(0)

  return (
    <CounterContext.Provider 
      value={{
        counter,
        setCounter
      }}
    >
      {children}
    </CounterContext.Provider>
  )
}

export function useCount() {
  const context = useContext(CounterContext)
  if ( !context ) throw new Error(" useCount must be used within a counterProvider  ")
  const { counter, setCounter } = context;
  return { counter, setCounter };
}