import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset};
  
  body {
    @import url("https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap");

    // margin: 0;
    /* font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif; */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  
    font-family: "Do Hyeon", sans-serif;
    font-weight: 400;
    font-style: normal;
  
    background-color: #efefeb;
    max-width: 768px;
    max-height: 1080px;
    }
  }
  `;
