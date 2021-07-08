import Counter from "./Components/Main/Main";

import { CounterProvider } from "../src/providers/Context";
import Header from "./Components/Header/Header";

import { body } from "./StyleGlobal";
import { ThemeProvider } from "./providers/Theme";

export default function App() {
  return (
    <ThemeProvider>
      <CounterProvider>
        <body>
          <Header />
          <Counter />
        </body>
      </CounterProvider>
    </ThemeProvider>
  );
}
