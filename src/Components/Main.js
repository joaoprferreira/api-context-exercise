import React, {useContext} from "react"
import { CounterContext } from "../providers/Context"


export default function Main() {
  
  const {counter, setCounter} = useContext(CounterContext)

  return (
    <>
      <header>
        <span>Counter: {counter}</span>
        <button onClick={() => {setCounter(counter + 1)}}>Aumentar valor</button>
      </header>
    </>
  )
}
