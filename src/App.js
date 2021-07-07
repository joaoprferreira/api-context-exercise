import Counter from "./Components/Main";

import { CounterProvider } from "../src/providers/Context"

export default function App() {

  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
}


