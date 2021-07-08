import styled from "styled-components";
import "../../assets/fonts/font.css"

export const HeaderComponent = styled.header `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: white;
  height: 80vh;
  width: 100%;
  background-color: #F2071B;
  border-radius: 18px;
  margin-bottom: 50px;
  font-family: 'Roboto Mono', monospace;

  .counter-area {
    width: 800px;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #F2CB05;
    border-radius: 20px;

    .contador {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .text-card {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

    .button-count {
      color: white;
      background-color: #6034BF;
      width: 100px;
      height: 80px;
      margin: 50px;
      border: none;
      border-radius: 20px;
    
  }

`