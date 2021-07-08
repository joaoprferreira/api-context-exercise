import React from "react";
import { useCount } from "../../providers/Context";
import { useTheme } from "../../providers/Theme";
import { MainComponent } from "./MainStyled";

export default function Main() {
  const { counter } = useCount();

  const { theme, handleSetTheme } = useTheme();

  return (
    <>
      <MainComponent
        style={{
          backgroundColor: theme.color.background,
          color: theme.color.colors,
        }}
      >
        <button
          className="button-main"
          onClick={() => {(theme.name === "dark") ? handleSetTheme("roxo") : handleSetTheme("dark")}}>
          Mudar a cor
        </button>        
      </MainComponent>
    </>
  );
}
