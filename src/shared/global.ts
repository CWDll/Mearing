import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset};
  max-width: 768px;
  max-height: 1080px;
  max-width: 100%;
  background-color: blue;
`;
