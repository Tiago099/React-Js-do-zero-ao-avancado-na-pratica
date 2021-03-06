import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

html. body, #root{
    min-height: 100%;
}

body{
    background: #0D2636;
    fontisize: 14px
    -webkit-font-smoothing: antialiased !import;
}

body, input, button{
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;

}

button{
    curso: pointer;
}
`
