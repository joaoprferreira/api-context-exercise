import React from "react";
import { HeaderComponent } from "./HeaderStyled";

import { useCount } from "../../providers/Context";

function Header() {
  const { counter, setCounter } = useCount();

  return (
    <HeaderComponent>
      <div href="top" className="counter-area">
        <h1 className="contador">{counter}</h1>
        <h3 className="text-card">Contador com Estado do context</h3>
      </div>

      <button className="button-count" onClick={() => setCounter(counter + 1)}>
        +1
      </button>
    </HeaderComponent>
  );
}

export default Header;
